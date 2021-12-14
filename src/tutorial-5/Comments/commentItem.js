import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";


function CommentItem({comment, index, deleteItem}){
  
  const onDelete = (index) => {
    deleteItem(index)
  }


    return(
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={comment.fullName}
              secondary={
                <React.Fragment>
                  {comment.text}
                </React.Fragment>
              }
            />
            <p>{comment.createdAt}</p>
            <button style={{marginTop : "14px"}} onClick={() => onDelete(index)}>удалить</button>
          </ListItem>
    )
}

export default CommentItem;