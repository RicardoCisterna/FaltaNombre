import React from "react";
import BodyIntro from "../../components/BodyIntro";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title";
import {Link} from "react-router-dom"

export default class Login extends React.Component {
  public render() {
    return (
      <Container center = {true}>
        <Card>
          <Title>titulo 1</Title>

          <BodyIntro text="soy un prop" />
          <BodyIntro text="y funcionana 2 veces" />
          <BodyIntro text="o mas" />
          <BodyIntro />
        </Card>
        <Card>
          <Title>inicio sesión</Title>
          <Input
            placeholder="inputmannnnnnnnnnnnnnnnnnnnnn"
            label="label y que vola"
          />
          <Input placeholder="inputman" />
          <Input placeholder="inputman" label="otro label" />
      
            <Button block={true}>texto</Button>
            <Button>texto2</Button>
            <Link to='/register'>registrar</Link>
         
        </Card>
      </Container>
    );
  }
}
