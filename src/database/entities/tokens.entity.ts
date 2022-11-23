import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/helpers/baseEntity';
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

  @Generated('uuid')
  token: string;
}
