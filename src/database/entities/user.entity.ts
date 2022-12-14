import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/baseEntity';

import { TokensEntity } from './tokens.entity';
import RoleTypes from '../../common/types/role.types';
import { ResultsEntity } from './results.entity';

@Entity({
  name: 'users',
})
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => TokensEntity, (token) => token.user, {
    cascade: ['soft-remove'],
  })
  tokens: TokensEntity;

  @OneToMany(() => ResultsEntity, (result) => result.user, {
    cascade: ['soft-remove'],
  })
  results: ResultsEntity;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
    enum: RoleTypes,
    default: RoleTypes.USER,
  })
  role: string;

  @Column({
    nullable: true,
  })
  password: string;
}
