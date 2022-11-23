import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/helpers/baseEntity';

import { TokensEntity } from './tokens.entity';
import RoleTypes from '../../common/types/role.types';
import { ResultsEntity } from './results.entity';

@Entity({
  name: 'users',
})
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => TokensEntity, (token) => token.user)
  tokens: TokensEntity;

  @OneToMany(() => ResultsEntity, (result) => result.user)
  results: ResultsEntity;

  @Column({
    nullable: true,
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

  @Column({
    nullable: false,
    default: false,
  })
  with_token: boolean;
}
