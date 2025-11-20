import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import api from "../../service/api";
import "./style.css";

const esquemaDeCadastro = yup.object({
  nome: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  senha: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

export default function Cadastro() {
  const {
    register: registrarCampo,
    handleSubmit: lidarComEnvioDoFormulario,
    formState: { errors: errosDoFormulario, isSubmitting: estaEnviando },
    setError: definirErroNoCampo,
    reset: limparCamposDoFormulario,
  } = useForm({
    resolver: esquemaDeCadastro,
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
    },
  });

  async function enviarDados(dadosDoFormulario) {
    const dadosParaEnvio = {
      name: dadosDoFormulario.nome,
      email: dadosDoFormulario.email,
      password: dadosDoFormulario.senha,
    };

    try {
      const resposta = await api.post("/users", dadosParaEnvio);
      toast.success(
        resposta.data.mensagem || "Funcionário cadastrado com sucesso!",
      );
      limparCamposDoFormulario();
    } catch (error) {
      const codigoDeStatus = error.response?.status;
      const mensagemDoServidor =
        error.response?.data?.mensagem ||
        "Erro ao cadastrar funcionário. Tente novamente mais tarde.";

      if (codigoDeStatus === 400) {
        definirErroNoCampo("email", {
          type: "server",
          message: mensagemDoServidor,
        });
      } else {
        toast.error(mensagemDoServidor);
        console.error("Erro ao cadastrar funcionário", error);
      }
    }
  }

  return (
    <>
      <div className="cadastro-container">
        <h1>Cadastro de Funcionário</h1>
        <form noValidate onSubmit={lidarComEnvioDoFormulario(enviarDados)}>
          {/* Nome */}
          <div className="form-group">
            <label htmlFor="campo-nome">Nome:</label>
            <input
              type="text"
              id="nome"
              placeholder="Ex.: Flávio Vieira"
              {...registrarCampo("nome")}
            />
          </div>
          {errosDoFormulario.nome && (
            <span className="error-message">
              {errosDoFormulario.nome.message}
            </span>
          )}
          {/* Email */}
          <div className="form-group">
            <label htmlFor="campo-email"> </label>
            <input 
            type="email"
            id="email"
            placeholder="Digite seu Email"
            {...registrarCampo('email')}
            />
            {errosDoFormulario.email && (
              <span className="error-message">{errosDoFormulario.email.message}</span>
            )}
            {/* Botão do envio*/ }
            <button type="submit" disabled = {estaEnviando}>
              {estaEnviando ? 'Cadastrando...' : 'Cadastrar Funcionário'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
