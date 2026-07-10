import { IAuthService } from "../interfaces/auth.interface";
import {
  AuthUser,
  LoginPayload,
  RegisterPayload,
} from "../types/auth.types";
import { AuthRepository } from "../repositories/auth.repository";

export class AuthService implements IAuthService {
  private repository = new AuthRepository();

  async register(data: RegisterPayload): Promise<AuthUser> {
    return this.repository.register(data);
  }

  async login(data: LoginPayload): Promise<AuthUser> {
    return this.repository.login(data);
  }
}