import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/baseEntity';
import { UsersEntity } from './user.entity';

@Entity({
  name: 'tokens',
})
export class TokensEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: number;

  @Column({
    nullable: true,
  })
  last_used: Date;

  @Column({
    type: 'uuid',
    generated: 'uuid',
    unique: true,
  })
  token: string;

  @Column({
    nullable: false,
    default: true,
  })
  is_valid: true;
}
