/**
 * Nesse arquivo fica o formato dos dados
 */
import { Entity,Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('appointments')
class Appointmant{
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  provider:string;

  @Column('time with time zone')
  date:Date;
}

export default Appointmant
