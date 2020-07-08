import React from "react";

interface IbodyIntro {
  text?: string;
}
interface IbodyIntroStates {
  text: string;
}
interface IOtro {
  text: string;
  data: number;
}

export default class BodyIntro extends React.Component<
  IbodyIntro,
  IOtro,
  IbodyIntroStates
> {
  public state = {
    text: "y yo soy un estado",
    data: 2
  };

  public render() {
    const { text } = this.props;
    const t = text ? text : this.state.text;
    return (
      <div>
        <p onClick={this.handleClick} >{t}</p>
      </div>
    );
  }

  private handleClick = () => {
      this.setState({text:'me acutalice con set state'})
  }
}
