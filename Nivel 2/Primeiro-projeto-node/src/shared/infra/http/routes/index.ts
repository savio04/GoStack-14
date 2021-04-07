import { Router } from 'express'
import appointmentsRoute from './appointments.route'
import users from './Users.route'
import AuthRoute from './auth.route'
const routes = Router()

routes.use('/users', users)
routes.use('/auth', AuthRoute)
routes.use('/appointments', appointmentsRoute)


export default routes
