import {startOfHour} from 'date-fns'
import { getCustomRepository } from 'typeorm'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import AppError from '@shared/errors/AppError'


interface RequestDTO{
  provider_id:string;
  date:Date;
}
/**]
 * Dependecy inversion
 */

class CreateAppointmentService{
  public async excute({provider_id,date}:RequestDTO){

    const appointmentsRepository = getCustomRepository(AppointmentsRepository)

    const appointmentStart = startOfHour(date)

    const findAppointmentSamedate = await appointmentsRepository.findByDate(appointmentStart)

    if(findAppointmentSamedate){
      throw new AppError('existing date',400)
    }

    const appointment =  appointmentsRepository.create({
      provider_id,
      date: appointmentStart
    })

    await appointmentsRepository.save(appointment)

    return appointment
  }
}

export default CreateAppointmentService
