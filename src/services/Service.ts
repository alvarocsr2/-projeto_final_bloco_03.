import axios from "axios";

// Instância do Axios com a URL base da sua API
const api = axios.create({
  baseURL: "https://farmacia-nest.onrender.com" 
})

// Método para buscar dados (Listar ou Buscar por ID)
export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url)
  setDados(resposta.data)
}

// Método para cadastrar novos registros
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// Método para atualizar registros existentes
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados)
  setDados(resposta.data)
}

// Método para deletar registros
export const deletar = async (url: string) => {
  await api.delete(url)
}