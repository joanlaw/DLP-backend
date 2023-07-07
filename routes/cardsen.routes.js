import { Router } from 'express'
import {
  getCardsen,
  createCardsen,
  updateCardsen,
  deleteCardsen,
  getCarden
} from '../controllers/cardsen.controllers.js'


const cardsrouter = Router()

import fileUpload from 'express-fileupload'

cardsrouter.get('/cards', getCardsen)
routerdecks.post('/cards', createCardsen)
cardsrouter.put('/cards/:id', updateCardsen)
cardsrouter.delete('/cards/:id', deleteCardsen)
cardsrouter.get('/cards/:id', getCarden)


export default cardsrouter