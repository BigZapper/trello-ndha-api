import express from 'express'
import { HttpStatusCode } from '../../ultilities/constants'
import { boardRoutes } from './board.route'

const router = express.Router()

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.status(HttpStatusCode.OK).json({ status: 'OK!' }))

/** Boards API */
router.use('/boards', boardRoutes)

export const apiV1 = router