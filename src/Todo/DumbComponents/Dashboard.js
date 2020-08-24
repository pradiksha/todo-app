import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import classNames from "classnames"
import "./dashboard.css"


const headerList = ["Name", "Details",  "Status", "Action"]

export default class Dashboard extends Component {
  render() {
    const { list, onEdit, onDelete } = this.props
    return (
      <table className="table mt-5">
        <thead>
          <tr>
            {headerList.map(data => <th>{data}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            list.map(data => (
              <tr className={classNames("color-white", {
                "color-red": data.status === "Todo",
                "color-yellow": data.status === "In Progress",
                "color-green": data.status === "Done",
              })}>
                <td>{data.name}</td>
                <td>{data.details}</td>
                <td>{data.status}</td>
                <td>
                  <Button onClick={() => onEdit(data)} >Edit</Button>
                  <Button className="ml-1" onClick={() => onDelete(data)}>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}
