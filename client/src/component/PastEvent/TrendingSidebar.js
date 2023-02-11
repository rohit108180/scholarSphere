import React from 'react';
// import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import img from '../../assest/Photos/PastEvents/codingcompetitions.jpg'

function PastEventSidebar() {
    const PastEvents = [
        {
            name : "CodeWars",
            details : "code flakjfa faodd lorem3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, facilis vel dicta, minima ad, maiores laudantium officiis ab aut nulla adipisci quidem. Inventore.",
            image: img,
            date : "23-may-2022"
        },
        {
            name : "CodeWars",
            details : "code flakjfa faodd lorem3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, facilis vel dicta, minima ad, maiores laudantium officiis ab aut nulla adipisci quidem. Inventore.",
            image: img,
            date : "23-may-2022"
        },
        {
            name : "CodeWars",
            details : "code flakjfa faodd lorem3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, facilis vel dicta, minima ad, maiores laudantium officiis ab aut nulla adipisci quidem. Inventore.",
            image: img,
            date : "23-may-2022"
        },
        {
            name : "CodeWars",
            details : "code flakjfa faodd lorem3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, facilis vel dicta, minima ad, maiores laudantium officiis ab aut nulla adipisci quidem. Inventore.",
            image: img,
            date : "23-may-2022"
        },
        {
            name : "CodeWars",
            details : "code flakjfa faodd lorem3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, facilis vel dicta, minima ad, maiores laudantium officiis ab aut nulla adipisci quidem. Inventore.",
            image: img,
            date : "23-may-2022"
        },
        {
            name : "CodeWars",
            details : "code flakjfa faodd lorem3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, facilis vel dicta, minima ad, maiores laudantium officiis ab aut nulla adipisci quidem. Inventore.",
            image: img,
            date : "23-may-2022"
        },
        
     
    ]
  return (
    <div className="past-event p-0 m-0"
    >
    <ListGroup as="ol" 
    style ={{border : "none", width :"100%", overflow:"hidden"}}
    >

       { PastEvents.slice(0, 5).map(event =>{

            return(
                <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start p-3"
                
              >
                <img src={event.image} alt = "icon" style={{width : "40px", borderRadius: "50%" , height : "40px"}} />
                
                <div className="ms-2 me-auto" style={{width : "75%"}}>
                <div style ={{fontWeight :600, fontSize:"0.8rem"}}>{event.date}</div>
                  <div className="fw-bold">{event.name}</div>
                  <div  className = "text-truncate" style = {{width : "100%"}}>
                   
                   {event.details}
                  </div>
                   
                </div>
              
              </ListGroup.Item>
            )

        })}

    </ListGroup>
    </div>
  );
}

export default PastEventSidebar;