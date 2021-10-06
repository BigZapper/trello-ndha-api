import { cloneDeep } from 'lodash'
import { BoardModel } from '../models/board.model'

const createNew = async (data) => {
  try {
    const result = await BoardModel.createNew(data)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getFullBoard = async (boardId) => {
  try {
    const board = await BoardModel.getFullBoard(boardId)

    if (!board || !board.columns) {
      throw new Error('Board not found!')
    }

    const transformBoard = cloneDeep(board)
    // Fillter deleted column
    transformBoard.columns = transformBoard.columns.filter(column => !column._destroy)
    // Add card to each column
    transformBoard.columns.forEach(column => {
      column.cards = transformBoard.cards.filter(c => c.columnId.toString() === column._id.toString())
    })

    // Remove card from board
    delete transformBoard.cards


    // Sort column by columnOrder, sort card by cardOrder, this step will pass to frontend
    return transformBoard
  } catch (error) {
    throw new Error(error)
  }
}

export const BoardService = {
  createNew,
  getFullBoard
}
