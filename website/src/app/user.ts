export interface User {
  _id?: string;  // Opcional porque MongoDB lo asigna automáticamente
  user: string;
  password: string;
  role: string;
}
