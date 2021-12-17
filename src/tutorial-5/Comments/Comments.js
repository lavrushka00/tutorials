import List from "@mui/material/List";
import * as React from "react";

import CommentItem from "./commentItem";

function Comments({ comments, deleteItem }) {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {!comments.length ? (
          <span style={{ marginLeft: "90px" }}>Отправьте отзыва первым!</span>
        ) : (
          comments.map((item, index) => (
            <CommentItem
              key={comments.email + ":" + comments.text}
              comment={item}
              index={index}
              deleteItem={deleteItem}
            />
          ))
        )}
      </List>
    </>
  );
}

export default Comments;
