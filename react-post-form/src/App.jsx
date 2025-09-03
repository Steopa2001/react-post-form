//importo useState
import { useState } from "react";
//importo axios
import axios from "axios";

function App() {
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
  console.log(apiUrl);

  // stato unico che contiene tutti i campi del form
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  // Stato di caricamento (true mentre la chiamata è in corso)
  const [loading, setLoading] = useState(false);

  // Stato per i messaggi di feedback (success / error)
  const [alert, setAlert] = useState(null);

  // funzione generica per aggiornare i campi del form (gestisce anche checkbox)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    // blocca il comportamento standard del form
    e.preventDefault();
    // attiva il loader
    setLoading(true);
    // reset alert prima dell'invio
    setAlert(null);

    //Effettuo chiamata POST con axios
    axios
      .post(apiUrl, formData)
      .then((resp) => {
        console.log("Risposta dal server:", resp.data);
        setAlert({ type: "success", message: "Post inviato con successo!!" });
        setFormData({ author: "", title: "", body: "", public: false });
      })
      .catch((error) => {
        console.error("Errore durante POST:", error);
        setAlert({
          type: "error",
          message: "Errore durante l'invio. Controlla la console.",
        });
      })
      .finally(() => {
        setLoading(false); // disattiva il loader sempre
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* ALERT: viene mostrato solo se alert non è null */}
          {alert && <div role="alert">{alert.message}</div>}

          <form onSubmit={handleSubmit}>
            <label>
              Autore
              <input
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Nome autore"
                required
              />
            </label>
            <label>
              Titolo
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="titolo del post"
                required
              />
            </label>
            <label>
              Testo del post
              <textarea
                name="body"
                value={formData.body}
                onChange={handleChange}
                placeholder="Scrivi qui il conteuto del post.."
                required
              />
            </label>
            <label>
              <input
                type="checkbox"
                name="public"
                checked={formData.public}
                onChange={handleChange}
              />
              Rendi il post pubblico
            </label>
            {/* bottone di invio disabilitato durante il caricamento */}
            <button type="submit" disabled={loading}>
              {loading ? "Invio..." : "Invia post"}{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
