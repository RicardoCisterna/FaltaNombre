import React from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title";
import {Link} from "react-router-dom";
import Center from "../../components/Center";

export default class Register extends React.Component {
  public render() {
    return (
      <Container center = {true}>
        <Card>
          <Center>
            <Title>Registrar</Title>
          </Center>

          <Input placeholder="nombre" label="apellido" />
          <Input placeholder="inputman" />
          <Input placeholder="inputman" label="otro label" />

          <Button block={true}>texto</Button>
          <Button>texto2</Button>
          <Link to='/'>Iniciar sesión</Link>
        </Card>
      </Container>
    );
  }
}
