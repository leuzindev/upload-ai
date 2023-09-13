import { fastify } from 'fastify'
import { getAllPromptsRoutes } from './routes/get-all-prompts'
import { uploadVideoRoutes } from './routes/upload-video'

const app = fastify()

app.register(getAllPromptsRoutes)
app.register(uploadVideoRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server Running!')
  })
