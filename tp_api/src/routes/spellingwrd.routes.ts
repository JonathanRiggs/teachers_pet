import express from 'express';
import SpellingwrdController from '../controllers/spellingwrd.controller';

const app = express()

const spellingWordRouter = express.Router()

spellingWordRouter.post('/create', SpellingwrdController.createSpellingWord)
spellingWordRouter.put('/update/:id', SpellingwrdController.updateSpellingWord)
spellingWordRouter.get('/get_all', SpellingwrdController.getAllSpellingWord)
spellingWordRouter.get('/get/:id', SpellingwrdController.getSpellingWord)
spellingWordRouter.delete('/delete/:id', SpellingwrdController.deleteSpellingWord)

export default spellingWordRouter