import React from "react"
import {Button} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 10px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#3f51b5",
        color: "#fff",
        transform: "none",
        //boxShadow: "4px 4px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#7986cb"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
function CustomBtn(props) {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
        
    )
}

export default CustomBtn
