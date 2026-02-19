import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(_email: string, _password: string): Promise<{ token: string } | null> {
    return { token: 'mock-jwt-token' };
  }
}
