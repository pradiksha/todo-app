import { initialState, reducer } from "shared/util"
import * as actions from "./action"

const initialObj = {
  savedData: initialState,
  dashboardData: initialState,
  updatedData: initialState,
  deletedData: initialState,
}

const todoReducer = (state = initialObj, action) => {
  switch (action.type) {
    case actions.saveData.REQUEST:
    case actions.saveData.SUCCESS:
    case actions.saveData.FAILURE:
    case actions.saveData.CLEAR:
      return {
        ...state,
        saveData: reducer(state.savedData, action, actions.saveData)
      }
    case actions.updateData.REQUEST:
    case actions.updateData.SUCCESS:
    case actions.updateData.FAILURE:
    case actions.updateData.CLEAR:
      return {
        ...state,
        updatedData: reducer(state.updatedData, action, actions.updateData)
      }
    case actions.getDashboardData.REQUEST:
    case actions.getDashboardData.SUCCESS:
    case actions.getDashboardData.FAILURE:
      return {
        ...state,
        dashboardData: reducer(state.dashboardData, action, actions.getDashboardData)
      }
    case actions.deleteData.REQUEST:
    case actions.deleteData.SUCCESS:
    case actions.deleteData.FAILURE:
    case actions.deleteData.CLEAR:
      return {
        ...state,
        deletedData: reducer(state.updatedData, action, actions.deleteData)
      }
    default:
      return state
  }
}

export default todoReducer
