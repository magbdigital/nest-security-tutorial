import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { LoginUserDto, CreateUserDto } from './dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor(
    private  prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}


  async create( createUserDto: CreateUserDto) {

    try {

      const { password, ...userData } = createUserDto;

      const user = await this.prisma.user.create({data: {...userData,
        password: bcrypt.hashSync( password, 10 )}
      });

      return {
        ...user,
        token: this.getJwtToken({ id: user.id })
      };
      // TODO: Retornar el JWT de acceso

    } catch (error) {
      this.handleDBErrors(error);
    }

  }

  async login( loginUserDto: LoginUserDto ) {

    const { password, email } = loginUserDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { email: true, password: true, id: true } //! OJO!
    });

    if ( !user )
      throw new UnauthorizedException('Credentials are not valid (email)');

    if ( !bcrypt.compareSync( password, user.password ) )
      throw new UnauthorizedException('Credentials are not valid (password)');

    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };
  }
/*
  async checkAuthStatus( user: User ){

    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };

  }

*/

  private getJwtToken( payload: JwtPayload ) {

    const token = this.jwtService.sign( payload );
    return token;

  }

  private handleDBErrors( error: any ): never {


    if ( error.code === '23505' )
      throw new BadRequestException( error.detail );

    console.log(error)

    throw new InternalServerErrorException('Please check server logs');

  }


}