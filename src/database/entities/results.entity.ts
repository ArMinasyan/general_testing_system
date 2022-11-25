import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/baseEntity';
import { UsersEntity } from './user.entity';
import resultTypes from '../../common/types/result.types';

@Entity({
  name: 'results',
})
export class ResultsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: number;

  @Column({
    nullable: true,
    enum: resultTypes,
  })
  status: string;
}
