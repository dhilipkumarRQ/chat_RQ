import express ,{Express, RequestHandler} from 'express'
import { PORT } from './config'



const app:Express = express()

app.listen(PORT , () => {
   console.log( `server started on port ${PORT}....`)
})