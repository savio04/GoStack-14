import {startOfHour} from 'date-fns'
import { getCustomRepository } from 'typeorm'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface RequestDTO{
  provider:string;
  date:Date;
}
/**]
 * Dependecy inversion
 */

class CreateAppointmentService{
  public async excute({provider,date}:RequestDTO){

    const appointmentsRepository = getCustomRepository(AppointmentsRepository)

    const appointmentStart = startOfHour(date)

    const findAppointmentSamedate = await appointmentsRepository.findByDate(appointmentStart)

    if(findAppointmentSamedate){
      throw Error('existing date')
    }

    const appointment =  appointmentsRepository.create({
      provider,
      date: appointmentStart
    })

    await appointmentsRepository.save(appointment)

    return appointment
  }
}

export default CreateAppointmentService
