import React from 'react'
import { useAppcontext } from '../context/appContext'
import { Alert, Snackbar } from '@mui/material';

export const MessageBar = () => {
  const { alertText, alertType, showAlert} = useAppcontext();
  return (
    <Snackbar open={showAlert} close={!showAlert} anchorOrigin={{ vertical:"top",horizontal: "right" }} sx={{transform: "scale(1.2)"}}>
        <Alert  severity={alertType} sx={{ width: '100%'}}>
            {alertText}
        </Alert>
    </Snackbar>
  )
}
