import type Categoria from "./Categoria";

export default interface Produtos {
  id: number;
  nome: string;
  preco: number;
  foto: string;
  categoria: Categoria[] | any;
}
