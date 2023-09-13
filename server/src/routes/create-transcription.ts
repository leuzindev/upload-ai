import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.get('/videos/:videoId/transcription', async (req) => {})
}
