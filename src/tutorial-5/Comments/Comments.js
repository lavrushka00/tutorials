import List from "@mui/material/List";
import * as React from "react";

import CommentItem from "./commentItem";



function Comments({comments, deleteItem}) {
 
  return(<>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
        
        {comments.length == 0 ? <span style={{marginLeft : "90px"}}>Отправьте отзыва первым!</span> : comments.map((item, index) => 
            <CommentItem comment = {item} index = {index} deleteItem ={deleteItem}/>
          )}


        </List>
        </>
    )
}

export default Comments;