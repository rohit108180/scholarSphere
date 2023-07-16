import React from 'react'
import { useAppcontext } from '../context/appContext'
import { Alert, Snackbar } from '@mui/material';

export const MessageBar = () => {
  const { alertText, alertType, showAlert} = useAppcontext();
  return (
    <Snackbar open={showAlert} close={!showAlert}>
        <Alert  severity={alertType} sx={{ width: '100%',}}>
            {alertText}
        </Alert>
    </Snackbar>
  )
}
