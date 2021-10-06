import express from 'express'
import { HttpStatusCode } from '*/ultilities/constants'
import { boardRoutes } from './board.route'
import { columnRoutes } from './column.route'
import { cardRoutes } from './card.route'

const router = express.Router()

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.status(HttpStatusCode.OK).json({ status: 'OK!' }))

/** Boards API */
router.use('/boards', boardRoutes)

/** Columns API */
router.use('/columns', columnRoutes)

/** Cards API */
router.use('/cards', cardRoutes)
export const apiV1 = router
