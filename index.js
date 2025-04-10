import express from 'express'
import { router } from './routes/persone.js'
const app = express()
const personeRouter = router

app.use(express.json())
app.use('/api/persone', personeRouter)
app.listen(3000)
