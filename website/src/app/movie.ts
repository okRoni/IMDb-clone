import { Actor } from "./actor";

export interface Movie {
  _id?: string;  // Opcional porque MongoDB lo asigna automáticamente
  title: string;
  description: string;
  genre: string;
  year: number;
  director: string;
  rating: number;
  cast: CastMember[]; // Relación con actores
  images?: string[];  // Opcional, ya que en el esquema no es obligatorio
}

// Interfaz para representar a cada actor en el reparto
export interface CastMember {
  actor: Actor | string;  // Puede ser un objeto `IActor` o solo su `ObjectId`
  role: string;
}
