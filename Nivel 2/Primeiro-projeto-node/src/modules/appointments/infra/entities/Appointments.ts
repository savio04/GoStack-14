/**
 * Nesse arquivo fica o formato dos dados
 */
import {
  Entity,Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import User from '@modules/users/infra/entities/Users'

@Entity('appointments')
class Appointmant{
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  provider_id:string;

  @Column('time with time zone')
  date:Date;

  @ManyToOne(() => User)
  @JoinColumn({name: 'provider_id'})
  provider:User

  @CreateDateColumn()
  created_at:Date

  @UpdateDateColumn()
  updated_at:Date
}

export default Appointmant
