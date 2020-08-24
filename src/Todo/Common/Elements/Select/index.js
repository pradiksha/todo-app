import React from "react"

const Select = (props) => {
  const { list, placeholder, defaultValue, label, name, isInvalid, error, code } = props
  const selectProps = {
    ...props,
    className: "custom-select",
  }
  return (
    <div className="mb-3">
      {label && <label htmlFor={name}>{label}</label>}
      <select {...selectProps}>
        <option value="" disabled selected>{placeholder}</option>
        {code && list.map(data => (
          data.isoCode2 === defaultValue
          ? <option selected value={data.isoCode2} key={data.id}>{data.isoCode2}</option>
          : <option value={data.isoCode2} key={data.id}>{data.isoCode2}</option>
        ))}
        {!code && list.map(data => (
          data.id === defaultValue
          ? <option selected value={data.id} key={data.id}>{data.name}</option>
          : <option value={data.id} key={data.id}>{data.name}</option>
        ))}
      </select>
      {isInvalid && <small className="text-danger">{error}</small>}
    </div>
  )
}

export default Select
