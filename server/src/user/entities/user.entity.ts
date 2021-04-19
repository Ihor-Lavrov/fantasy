import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment", {type: "bigint"})
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;
}
