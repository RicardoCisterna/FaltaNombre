import React from "react";

const style = {
  padding: "10px 15px",
  border: "black",
  marginColor: "black",
  color: "white",
  borderRadius: "100%",
  margin: "10px"
};

interface IUserImageProps {
  UserImage?: string;
}

export default class UserImage extends React.Component<IUserImageProps> {
  public render() {
    const { UserImage } = this.props;
    return (
        <div >
        <img style={style} src={UserImage} alt="" width="100" height="100" />
        </div>
    
    );
  }
}
