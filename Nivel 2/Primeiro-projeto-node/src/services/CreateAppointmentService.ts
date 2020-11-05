import {startOfHour} from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface RequestDTO{
  provider:string;
  date:Date;
}
/**]
 * Dependecy inversion
 */

class CreateAppointmentService{
  private appointmentsRepository:AppointmentsRepository

  constructor(AppoitmentsRepository: AppointmentsRepository){
    this.appointmentsRepository = AppoitmentsRepository
  }

  public excute({provider,date}:RequestDTO){

    const appointmentStart = startOfHour(date)

    const findAppointmentSamedate = this.appointmentsRepository.findByDate(appointmentStart)

    if(findAppointmentSamedate){
      throw Error('existing date')
    }

    const appointment =  this.appointmentsRepository.Create({
      provider,
      date: appointmentStart
    })

    return appointment
  }
}

export default CreateAppointmentService
