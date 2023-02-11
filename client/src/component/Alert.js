import React from 'react'
import { useAppcontext } from '../context/appContext'

export const Alert = () => {
  const { alertText, alertType} = useAppcontext();
  return (
    <div className= {`alert alert-${alertType}`} >{alertText}</div>
  )
}
