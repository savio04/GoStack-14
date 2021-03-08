/**
 * Nesse arquivo eh onde iremos alterar o valor da variavel que armazena os dados
 */
import Appointment from '../entities/Appointments'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>{

  public async findByDate(date:Date){
    const findAppointment = await this.findOne({
      where: {date}
    })

    return findAppointment || null
  }
}
 export default AppointmentsRepository
