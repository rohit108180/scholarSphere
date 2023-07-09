import React from 'react'

export const FormRow = ({ type, name , label, value, handleChange, classname}) => {
  return (
    <div className="form-row">
          <label htmlFor= {label} className="form-label">{label}</label>
          <input
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            className= 'form-input'
          />
    </div>
  )
}
