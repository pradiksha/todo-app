import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from "react-redux"
import RenderInputField from "Todo/Common/RenderComponent/RenderInputField"
import RenderSelectField from "Todo/Common/RenderComponent/RenderSelectField"

const validateTaskName = (value) => value ? "" : "Enter valid task name"

const validateCategory = (value) => value ? "" : "Enter valid details"



class TodoForm extends Component {

  componentDidMount() {
    const { selectedData, initialize, isEdit } = this.props
    if (isEdit) {
      const editOption = {
        ...selectedData,
      }
      initialize(editOption)
    } 
    else {
      const addOption = {
        status: "Todo",
      }
      initialize(addOption)
    }
  }


  render() {
    const { isEdit, formData, } = this.props
    const { status } = formData || {}
  
    const statusList = [
      {name: "Todo"},
      {name: "In Progress"},
      {name: "Done"},
    ]
    return (
      <div>
        <Field
          component={RenderInputField}
          type="text"
          placeholder="Enter Task Name"
          name="name"
          label="Name"
          validate={validateTaskName}
          required
        />
        <Field
          component={RenderInputField}
          type="text"
          placeholder="Enter task details"
          name="details"
          label="Details"
          validate={validateCategory}
          required
        />
        <Field
          component={RenderSelectField}
          label="Status"
          placeholder="select Status"
          name="status"
          type="text"
          list={statusList}
          defaultValue={status}
        />
      </div>
    )
  }
}



export default (reduxForm({
  form: "todoForm",
})(TodoForm))
