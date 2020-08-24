import React from "react"
import Select from "Todo/Common/Elements/Select"

const RenderSelectField = ({
  input,
  label,
  defaultValue,
  list,
  set,
  meta,
  placeholder,
  code,
}) => {
  const onChange = (code) => {
    if (set) set(code)
    input.onChange(code)
  }
  return (
    <Select
      list={list}
      placeholder={placeholder}
      defaultValue={defaultValue}
      label={label}
      code={code}
      onFocus={(event) => {
        if (input.onFocus) input.onFocus(event)
      }}
      onBlur={(event) => {
        if (input.onBlur) input.onBlur(event)
      }}
      isInvalid={meta.touched && !meta.active && !!meta.error}
      error={meta.error}
      onClick={(data) => {
        onChange(data.target.value)
      }}
    />
  )
}

export default RenderSelectField
