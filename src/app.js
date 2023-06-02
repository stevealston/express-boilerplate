import { config } from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { NODE_ENV } from './config.js'

config()
const app = express()

const morganOpt = (NODE_ENV === 'production' ? 'tiny' : 'commmon')
app.use(morgan(morganOpt))
app.use(helmet())
app.use(cors())
app.use(errorHandler)

function errorHandler(err, req, res, next) {
  let response;

  if (NODE_ENV === 'production') response = { error: { message: 'Server Error' } }
  else {
    console.error(err)
    response = { message: err.message, err }
  }

  res.status(500).json(response)
}

app.get('/', (req, res) => {
  res.send('Hello, Boilerplate')
})
export default app