import { ICategoria } from "../interfaces/categoria.interface";

export class CategoriaModel {
  static async findAll(): Promise<ICategoria[]> {
    // Aquí iría la lógica para obtener todas las categorías de la base de datos
    return [];
  }
}
