import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('text')
  description: string;

  @Column('text', {nullable: true})
  brand: string;

  @Column('int',{default:0})
  stock: number;

  @Column('numeric',{default:0})
  price: number;

}
