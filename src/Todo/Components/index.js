import { connect } from 'react-redux'
import { getFormValues } from "redux-form"
import get from "lodash/get"

import * as actions from "./action"

const mapStateToProps = (state) => {
  const { todoData } = state
  const dataList = get(todoData, "dashboardData.data", []) || []
  const dashboardFetching = get(todoData, "dashboardData.isFetching", false)
  const saveSuccess = get(todoData, "saveData.data", "")
  const updateSuccess = get(todoData, "updatedData.data.status", "")
  const deleteSuccess = get(todoData, "deletedData.data.status", "") 
  const formData = getFormValues("todoForm")(state)


  return {
    dataList,
    dashboardFetching,
    saveSuccess,
    updateSuccess,
    deleteSuccess,
    formData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDataReq: () => dispatch(actions.getDashboardData.request()),
    saveDataRequest: () => dispatch(actions.saveData.request()),
    saveDataClear: () => dispatch(actions.saveData.clear()),
    updateDataRequest: () => dispatch(actions.updateData.request()),
    updateDataClear: () => dispatch(actions.updateData.clear()),
    deleteDataReq: (id) => dispatch(actions.deleteData.request(id)),
    deleteDataClear: () => dispatch(actions.deleteData.clear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)