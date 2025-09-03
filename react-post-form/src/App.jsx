//importo useState
import { useState } from "react";
//importo axios
import axios from "axios";

function App() {
  // stato unico che contiene tutti i campi del form
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });
}

export default App;
