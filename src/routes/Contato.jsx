import { useState } from "react";
import "../css/estilo.css";

const Contato = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    console.log(form);
  };

  return (
    <div className="contato">

      <h1>Contato</h1>
      <p>Entre em contato conosco!</p>

      <form onSubmit={handleSubmit} className="form-contato">

        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          value={form.mensagem}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>

      </form>
    </div>
  );
};

export default Contato;