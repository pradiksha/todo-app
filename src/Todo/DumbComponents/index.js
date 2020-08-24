import React, { Component } from 'react'
import Container from "Todo/Components"
import Header from "Todo/Common/Header"
import Dashboard from "./Dashboard"
import TodoModal from "./TodoModal"


const Button = ({ onClick, children, className }) => (
  <button type="button" onClick={onClick} className={`btn ${className}`}>{children}</button>
)

class Todo extends Component {

  state = {
    showModal: false,
    selectedData: {},
    isEdit: false,
  }

  componentDidMount() {
    const { getAllDataReq } = this.props
    getAllDataReq()
  }

  componentWillReceiveProps(nextProps) {
    const { saveSuccess, saveDataClear, getAllDataReq, dashboardFetching, updateDataClear, updateSuccess, deleteSuccess, deleteDataClear } = nextProps
    if(deleteSuccess) {
      deleteDataClear()
      getAllDataReq()
    }
    if ((saveSuccess || updateSuccess) && !dashboardFetching) {
      saveDataClear()
      updateDataClear()
      this.setState({ showModal: false, selectedData: {} })
      getAllDataReq()
    }
  }

  handleShowModal = () => this.setState({ showModal: true, isEdit: false })

  handleHideModal = () => this.setState({ showModal: false, isEdit: false, selectedData: {} })

  handleEdit = (value) =>  this.setState({ selectedData: value, isEdit: true, showModal: true })

  render() {
    const { saveDataRequest, dataList, updateDataRequest, dashboardFetching, deleteDataReq, formData } = this.props
    return (
      <div>
        <Header />
        <Button onClick={this.handleShowModal} className="mt-5 ml-3 btn-primary btn-sm">Add Task</Button>
        {!dashboardFetching && <Dashboard list={dataList} onEdit={this.handleEdit} onDelete={deleteDataReq} />}
        <TodoModal
          show={this.state.showModal}
          handleShowModal={this.handleShowModal}
          handleHideModal={this.handleHideModal}
          saveDataRequest={saveDataRequest}
          updateDataRequest={updateDataRequest}
          isEdit={this.state.isEdit}
          selectedData={this.state.selectedData}
          formData={formData}
        />
      </div>
    )
  }
}

export default Container(Todo)
