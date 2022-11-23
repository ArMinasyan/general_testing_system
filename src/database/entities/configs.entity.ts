import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/helpers/baseEntity';

@Entity({
  name: 'test_configs',
})
export class ConfigsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  question_count: number;

  @Column({
    nullable: false,
  })
  pass_point: number;

  @Column({
    nullable: false,
  })
  time: number;

  @Column({
    nullable: false,
    type: 'jsonb',
  })
  question_types: number[];
}
