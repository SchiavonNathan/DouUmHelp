import { Injectable } from '@nestjs/common';
import { RegisterAuthPFDto  } from './dto/register-authPF.dto';
import { RegisterAuthPJDto} from './dto/register-authPJ.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: RegisterAuthPFDto ) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: RegisterAuthPJDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
