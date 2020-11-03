import { Router} from 'express'
import { parseISO, startOfHour } from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
const appointmentsRoute = Router()

const ClassAppointmentsRepository = new AppointmentsRepository()

appointmentsRoute.get('/',(request,response) => {
  const appointments = ClassAppointmentsRepository.showAppointments()
  return response.json(appointments)
})



appointmentsRoute.post('/',(request,response) => {
  const { provider, date } = request.body

  const parseDate = startOfHour(parseISO(date))

  const findAppointmentSamedate = ClassAppointmentsRepository.findByDate(parseDate)

  if(findAppointmentSamedate){
    return response.status(400).json({
      messageErro: "existing Date"
    })
  }

  const appointment =  ClassAppointmentsRepository.Create(provider,parseDate)

  return response.json(appointment)
})


export default appointmentsRoute
