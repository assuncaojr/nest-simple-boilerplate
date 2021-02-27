import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserPasswordTransform } from './user.password.transform';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  firstName: string;

  @Column({ type: 'varchar', length: 120 })
  lastName: string;

  @Column({ type: 'varchar', length: 120, unique: true })
  email: string;

  @Column({
    select: false,
    transformer: new UserPasswordTransform(),
  })
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
