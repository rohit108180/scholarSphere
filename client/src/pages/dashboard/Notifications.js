import React, { useEffect, useState } from "react";
import Wrapper from "../../css/wrapper/Notifications";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import { useAppcontext } from "../../context/appContext";
import { formateDate } from "../../utils/stringUtils";
import { ProfileIcon } from "../../component";

export const Notifications = () => {
  const {user,getNotifications, notifications} = useAppcontext();

  const [dense, setDense] = React.useState(false);

  useEffect(() => {
     getNotifications();
  }, []);


  const formatNotification = (notificationType, notificationMetadata) => {
    const {displayFormatString} = notificationType;
    let formattedString = displayFormatString;

      // replace variable form the string to the metadata

    notificationMetadata.map((metadata) => {
      formattedString = formattedString.replace(`{{${metadata.varName}}}`, metadata.displayStr);
    })

    console.log(formattedString)
    return formattedString;
  }

  
  return (
    <Wrapper>
      <div>

        <h2 className="header">
        Hello, {user.name}! You have {notifications.length} notifications
        </h2>
      

        <div>
               <List >
        {notifications.map((notification) => {
          console.log(notification);
          return (
            
              
                <ListItem key={notification._id} >
                  <ListItemAvatar>
                    <ProfileIcon avatar={notification?.notifiedFromUser?.profilePicture?.url} />
                  </ListItemAvatar>
                  <ListItemText

                    primary = {formateDate(notification?.createdAt)}
                    secondary={formatNotification(notification.notificationType, notification.notificationMetadata)}
                    // secondary={ 'Secondary text'}
                  />
                </ListItem>
              
            
          );
        })}

        </List>
            
            </div>

        
       
      </div>
    </Wrapper>
  );
};
