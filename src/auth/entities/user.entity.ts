import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  email: String;

  password: String;

  fullName: String;

  isActive: Boolean;

  roles: string[];

}
