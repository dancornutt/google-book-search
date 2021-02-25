import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <Button className="save-btn" {...props} role="button" tabIndex="0">
      save!
    </Button>
  );
}

export default SaveBtn;
