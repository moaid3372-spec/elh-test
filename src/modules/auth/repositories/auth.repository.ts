import {
  AuthUser,
  LoginPayload,
  RegisterPayload,
} from "../types/auth.types";

import { IAuthRepository } from "../interfaces/auth.interface";

export class AuthRepository implements IAuthRepository {

  async register(data: RegisterPayload): Promise<AuthUser> {
    throw new Error("Not implemented.");
  }

  async login(data: LoginPayload): Promise<AuthUser> {
    throw new Error("Not implemented.");
  }

}