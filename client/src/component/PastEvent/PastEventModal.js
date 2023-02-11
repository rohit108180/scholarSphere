import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PastEventCard } from './PastEventCard';


export const PastEventModal = (props) => {


    
  return (
    <Modal
        size="lg"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="pastEventModel" style={{ fontSize : "2rem", fontWeight : "700", textAlign :"center"}}>
            Past Events
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{display : "flex", justifyContent : "space-around", flexWrap: "wrap",overflowY : "scroll", height : "75vh"}}
        >
           <PastEventCard/>
           <PastEventCard/>
           <PastEventCard/>
           <PastEventCard/>
        </Modal.Body>

      </Modal>
  )
}



