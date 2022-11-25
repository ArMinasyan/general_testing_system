import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/baseEntity';
import { QuestionsEntity } from './questions.entity';

@Entity({
  name: 'answers',
})
export class AnswersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => QuestionsEntity, (question) => question.id)
  @JoinColumn({ name: 'question_id' })
  question: number;

  @Column({
    nullable: false,
  })
  answer: string;

  @Column({
    nullable: false,
  })
  is_correct: boolean;
}
