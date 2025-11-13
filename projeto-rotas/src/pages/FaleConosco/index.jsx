import "./style.css";

export default function FaleConosco() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso.");
  }

  return (
    <section className="contato">
      <h1>Fale Conosco</h1>
      <p>Tire dúvidas e peça um orçamento sem compromisso</p>

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="campo">
            <span>Nome</span>
            <input type="text" required placeholder="Seu nome" />
          </label>
          <label className="campo">
            <span>E-mail</span>
            <input type="text" required placeholder="Seu e-mail" />
          </label>
          <label className="campo">
            <span>Telefone</span>
            <input type="text" required placeholder="(00) 99999-99999" />
          </label>
        </div>
        <label className="campo">
          <span>Assunto</span>
          <input type="text" required placeholder="Ex.: Abertura de empresa" />
        </label>
        <label className="campo">
          <span>Mensagem</span>
          <textarea
            rows="6"
            required
            placeholder="Conte-nos um pouco do seu caso..."
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
