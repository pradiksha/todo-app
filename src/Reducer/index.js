import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import todoReducer from "Todo/Components/reducer"

const rootReducer = combineReducers({
    form: formReducer,
    todoData: todoReducer,
})

export default rootReducer
