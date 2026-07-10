import { AuthService } from "../services/auth.service";
import {
  LoginPayload,
  RegisterPayload,
} from "../types/auth.types";

export class AuthController {
  private service = new AuthService();

  async register(data: RegisterPayload) {
    return this.service.register(data);
  }

  async login(data: LoginPayload) {
    return this.service.login(data);
  }
}