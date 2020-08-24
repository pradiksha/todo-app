import { put, call, takeEvery, select } from 'redux-saga/effects'
import { getFormValues } from "redux-form"
import * as actions from "./action"
import { getSaveApi, getAllApi, updateApi, deleteApi } from "./api"

function* saveDataFun() {
  const stateData = yield select(state => state)
  const formData = getFormValues("todoForm")(stateData)
  const createJson = {
    name: formData.name,
    details: formData.details,
    status: formData.status,
  }
  const response = yield call(getSaveApi, createJson)
  yield put(actions.saveData.success(response))
}


function* updateData() {
  const stateData = yield select(state => state)
  const formData = getFormValues("todoForm")(stateData)
  const createJson = {
    id: formData.id,
    name: formData.name,
    details: formData.details,
    status: formData.status,
  }
  const response = yield call(updateApi, createJson)
  yield put(actions.updateData.success(response))
}


function* getData() {
  const response = yield call(getAllApi)
  yield put(actions.getDashboardData.success(response))
}

function* deleteSeletedData({ data }) {
  const { id } = data
  const response = yield call(deleteApi, id)
  yield put(actions.deleteData.success(response))
  
}

export default function* watchSaga() {
  yield takeEvery(actions.saveData.REQUEST, saveDataFun)
  yield takeEvery(actions.getDashboardData.REQUEST, getData)
  yield takeEvery(actions.updateData.REQUEST, updateData)
  yield takeEvery(actions.deleteData.REQUEST, deleteSeletedData)
}