import React from 'react'
import Input from '../Elements/Input'


const RenderInput = ({
  input,
  meta,
  label,
  value,
  type,
  title,
  placeholder,
  submitOnEnter
}) => (

    <Input
      {...input}
      onChange={
        (event) => {
          input.onChange(event.target.value)
        }
      }

      label={label}
      type={type}
      isInvalid={(meta.touched && (!meta.active || submitOnEnter) && !!meta.error)}
      error={meta.error}
      placeholder={placeholder}
      title={title}
    />

  )


export default RenderInput