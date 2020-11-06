import { parseISO } from 'date-fns'
import { getCustomRepository } from 'typeorm'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'
import { Router} from 'express'

const appointmentsRoute = Router()

appointmentsRoute.get('/',async (request,response) => {
  const ClassAppointmentsRepository = getCustomRepository(AppointmentsRepository)
  const appointments = await ClassAppointmentsRepository.find()
  return response.json(appointments)
})



appointmentsRoute.post('/',async (request,response) => {
  try{
    const { provider, date } = request.body
    const createAppointmentService = new CreateAppointmentService

    const parseDate = parseISO(date)

    const appointment = await createAppointmentService.excute({
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
