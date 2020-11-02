import { Router } from 'express'
import appointmentsRoute from './appointments.route'
const routes = Router()

routes.use('/appointments', appointmentsRoute)


export default routes
