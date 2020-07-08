import React from "react";
import FooterPost from "./FooterPost";


const style = {
  backgroundColor: "black",
  padding: "10px 15px",
  border: "black",
  marginColor: "black",
  color: "white",
  borderRadius: "7px",
  margin: "10px",
};

interface IPostProps {
  image: string;
}

export default class Post extends React.Component<IPostProps> {
  public render() {
    const { image } = this.props;
    return (
      <div style={style}>
        <img src={image} alt="" width="250" height="300" />
        <FooterPost/>
        
      </div>
    );
  }
}
