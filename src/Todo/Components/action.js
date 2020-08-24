import { createSignalAction } from "shared/util"

export const TASK = "TASK"
export const GET_DASHBOARD_DATA = "GET_DASHBOARD_DATA"

export const SAVE_DATA = "SAVE_DATA"

export const UPDATE_DATA = "UPDATE_DATA"

export const DELETE_DATA = "DELETE_DATA"

export const getDashboardData = createSignalAction(TASK, GET_DASHBOARD_DATA)

export const saveData = createSignalAction(TASK, SAVE_DATA)

export const updateData = createSignalAction(TASK, UPDATE_DATA)

export const deleteData = createSignalAction(TASK, DELETE_DATA)