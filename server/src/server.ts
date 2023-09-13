import { fastify } from 'fastify'


const app = fastify()

app.get('/', (req, res) => {
  return 'sdasd'
})


app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server Running!')
})