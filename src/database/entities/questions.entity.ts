import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/baseEntity';
import questionTypes from '../../common/types/question.types';
import { AnswersEntity } from './answers.entity';

@Entity({
  name: 'questions',
})
export class QuestionsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => AnswersEntity, (answer) => answer.question)
  answers: AnswersEntity;

  @Column({
    nullable: false,
  })
  question: string;

  @Column({
    nullable: false,
    enum: questionTypes,
    default: questionTypes.SINGLE_CHOICE,
  })
  type: number;
}
