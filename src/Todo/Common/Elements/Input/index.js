import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.name,
        }
    }
    render() {

        const {
            input,
            label,
            value,
            type,
            isInvalid,
            error
        } = this.props

        const inputPorps = {
            ...this.props,
            value,
            type: type || 'text',
            className: "form-control",
        }

        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...inputPorps} />
                    {isInvalid && <div className="text-danger">{error}</div>}
                </div>
            </div>
        )
    }
}
