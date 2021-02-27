import { ValueTransformer } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class UserPasswordTransform implements ValueTransformer {
  to(value: string): string {
    return bcrypt.hashSync(value, 12)
  }

  from(value: string): string {
    return value;
  }
}