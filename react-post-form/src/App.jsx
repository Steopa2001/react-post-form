//importo useState
import { useState } from "react";
//importo axios
import axios from "axios";

function App() {

  const apiUrl = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';
  console.log(apiUrl)

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

}

export default App;
