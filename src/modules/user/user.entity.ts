import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @BeforeInsert()
  public beforInsert = async (): Promise<void> => {
    await this.generatePassword();
  };

  @BeforeUpdate()
  async beforeUpdate(): Promise<void> {
    await this.generatePassword();
  }

  private async generatePassword(): Promise<void> {
    this.password = bcrypt.hashSync(this.password, 12);
  }
}
