export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
}

export type UserWithoutPassword = Omit<User, 'password'>;