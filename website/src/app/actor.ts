export interface Actor {
    _id?: string;  // Opcional porque MongoDB lo asigna automáticamente
    name: string;
    lastname: string;
    birthdate: string; // Se maneja como string para compatibilidad con JSON
    biography: string;
    pictures?: string[]; // Opcional, ya que en el esquema no es obligatorio
}
