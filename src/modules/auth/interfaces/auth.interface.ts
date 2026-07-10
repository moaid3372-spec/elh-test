import { AuthUser, LoginPayload, RegisterPayload } from "../types/auth.types";

export interface IAuthRepository {
  register(data: RegisterPayload): Promise<AuthUser>;
  login(data: LoginPayload): Promise<AuthUser>;
}

export interface IAuthService {
  register(data: RegisterPayload): Promise<AuthUser>;
  login(data: LoginPayload): Promise<AuthUser>;
}