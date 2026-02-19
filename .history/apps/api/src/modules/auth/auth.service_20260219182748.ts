import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(email: string, password: string): Promise<{ token: string } | null> {
    return { token: 'mock-jwt-token' };
  }
}
