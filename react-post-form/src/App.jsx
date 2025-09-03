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

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
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
              <input
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
