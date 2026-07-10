export type UserRole =
  | "STUDENT"
  | "PARENT"
  | "TEACHER"
  | "ADMIN";

export interface User {
  id: string;
  name: string;
  username: string;
  role: UserRole;
  grade?: string;
  phone?: string;
  email?: string;
}