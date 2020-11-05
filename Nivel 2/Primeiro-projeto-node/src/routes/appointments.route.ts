import { parseISO } from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'
import { Router} from 'express'
const appointmentsRoute = Router()

const ClassAppointmentsRepository = new AppointmentsRepository



appointmentsRoute.get('/',(request,response) => {
  const appointments = ClassAppointmentsRepository.showAppointments()
  return response.json(appointments)
})



appointmentsRoute.post('/',(request,response) => {
  try{
    const { provider, date } = request.body
    const createAppointmentService = new CreateAppointmentService(ClassAppointmentsRepository)

    const parseDate = parseISO(date)

    const appointment = createAppointmentService.excute({
      provider,
      date: parseDate
    })

    return response.json(appointment)
  }catch(erro){
    return response.status(400).json({
      message: `${erro.message}`
    })
  }
})


export default appointmentsRoute
