import { parseISO } from 'date-fns'
import { getCustomRepository } from 'typeorm'
import AppointmentsRepository from '../modules/appointments/repositories/AppointmentsRepository'
import CreateAppointmentService from '../modules/appointments/services/CreateAppointmentService'
import ensureAuthticated from '../shared/middlewares/ensureAtuheticated'
import { Router} from 'express'

const appointmentsRoute = Router()

appointmentsRoute.use(ensureAuthticated)

appointmentsRoute.get('/',async (request,response) => {
  console.log(request.user)
  const ClassAppointmentsRepository = getCustomRepository(AppointmentsRepository)
  const appointments = await ClassAppointmentsRepository.find()
  return response.json(appointments)
})



appointmentsRoute.post('/',async (request,response) => {

  const { provider_id, date } = request.body
  const createAppointmentService = new CreateAppointmentService

  const parseDate = parseISO(date)

  const appointment = await createAppointmentService.excute({
    provider_id,
    date: parseDate
  })

  return response.json(appointment)
})


export default appointmentsRoute
