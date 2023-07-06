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

cardsrouterrouter.get('/cards', getCardsen)
cardsrouterrouter.post('/cards', fileUpload({
  useTempFiles: true, tempFileDir: './uploads'
}), createCardsen)
cardsrouterrouter.put('/cards/:id', updateCardsen)
cardsrouterrouter.delete('/cards/:id', deleteCardsen)
cardsrouterrouter.get('/cards/:id', getCarden)


export default cardsrouter