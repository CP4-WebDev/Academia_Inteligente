import { useState } from "react";
<<<<<<< HEAD
import "../css/estilo.css";
=======
>>>>>>> 5f66a5640e781cc920e4f0e640d92ea22c573a48

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
<<<<<<< HEAD
    <div className="contato">

      <h1>Contato</h1>
      <p>Entre em contato conosco!</p>

      <form onSubmit={handleSubmit} className="form-contato">

=======
    <div style={{ padding: "40px" }}>
      <h2>Contato</h2>
      <p>Entre em contato conosco!</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
>>>>>>> 5f66a5640e781cc920e4f0e640d92ea22c573a48
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
<<<<<<< HEAD

=======
>>>>>>> 5f66a5640e781cc920e4f0e640d92ea22c573a48
      </form>
    </div>
  );
};

export default Contato;