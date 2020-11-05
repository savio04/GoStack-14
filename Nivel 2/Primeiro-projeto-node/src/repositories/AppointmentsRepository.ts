/**
 * Nesse arquivo eh onde iremos alterar o valor da variavel que armazena os dados
 */
import Appointment from '../models/Appointments'
import { isEqual } from 'date-fns'

interface CretateAppointmentsDTO{
  provider:string;
  date:Date;
}

class AppointmentsRepository{
  private appointments:Array<Appointment>

  constructor(){
    this.appointments = []
  }

  public showAppointments(){
    return this.appointments
  }

  public findByDate(date:Date){
    const findAppointmentsInSameDate = this.appointments.find(appointment =>
      isEqual(date,appointment.date))

      return findAppointmentsInSameDate || null
  }

  public Create({provider,date}:CretateAppointmentsDTO){
    const appointment = new Appointment({
      provider,
      date
    })

    this.appointments.push(appointment)

    return appointment
  }
}
 export default AppointmentsRepository
