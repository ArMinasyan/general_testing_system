import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/helpers/baseEntity';
import { UsersEntity } from './user.entity';
import { ConfigsEntity } from './configs.entity';

@Entity({
  name: 'user_test_config_xref',
})
export class UserTestConfigXref extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: number;

  @OneToOne(() => ConfigsEntity, (config) => config.id)
  @JoinColumn({ name: 'config_id' })
  config: ConfigsEntity;
}
