import express from 'express'
import dotenv from 'dotenv'
import missionRoutes from './routes/missions.routes'

dotenv.config()

const app = express()
const port = process.env.PORT || 4004

app.use(express.json())
app.use('/missions', missionRoutes)

app.listen(port, () => {
  console.log(`🚀 Mission service running at http://localhost:${port}`)
})
