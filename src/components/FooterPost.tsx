import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faThumbsUp,
  faThumbsDown,
  faComment,
} from "@fortawesome/free-solid-svg-icons";


const style = {
    footer:{
        display: "flex",
        backgroundColor: "black",
        marginLeft: "-15px",
        width: "calc(100% + 30px)",
        borderRadius: "7px",
        color: "#2f2f2f",
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        textAlign: "center",
        cursor: "pointer",
        padding: "10px"
    }
} 


export default class FooterPost extends React.Component {
  public render() {
    return (
        <div
        style={style.footer as React.CSSProperties}
      >
        <div
          style={style.button as React.CSSProperties}
        >
          <FontAwesomeIcon icon={faRetweet} color={"#2f2f2f"} />
        </div>
        <div
         style={style.button as React.CSSProperties}
        >
          <FontAwesomeIcon icon={faThumbsUp} color={"#2f2f2f"} />
        </div>
        <div
        style={style.button as React.CSSProperties}
        >
          <FontAwesomeIcon icon={faThumbsDown} color={"blue"} />
        </div>
        <div
       style={style.button as React.CSSProperties}
        >
          <FontAwesomeIcon icon={faComment} color={"#2f2f2f"} />
        </div>
      </div>
    );
  }
}
