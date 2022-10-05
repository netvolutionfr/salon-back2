import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 25})
  fullName: string;

  @Column('date')
  birthday: Date;

  @Column()
  isActive: boolean;

  @Column({ length: 50, nullable: true })
  email: string;

  @Column({ length: 64, nullable: true })
  password: string;
}
