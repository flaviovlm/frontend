import { useState } from "react";
import "./style.css";
import { useEffect } from "react";
import { toast } from "react-toastify/unstyled";
import api from "../../service/api";

export default function ListaFuncionarioPage() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarFuncionarios() {
      try {
        const resposta = await api.get("users");
        setFuncionarios(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar funcionários: ", error);
        const mensagemDoServidor =
          error.response?.data?.mensagem ||
          "Erro ao carregar a lista de funcionários.";
        toast.error(mensagemDoServidor);
      } finally {
        setCarregando(false);
      }
    }
    buscarFuncionarios();
  }, []);
  
  if (carregando) {
    return <div>Carregando funcionários...</div>;
  }

  return <>
  
  
  
  
  </>;
}
