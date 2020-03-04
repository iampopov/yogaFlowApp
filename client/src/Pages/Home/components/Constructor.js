import React from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Constructor = props => {
      return (

        <Jumbotron>
            <FormGroup>
                <Label for="nameFlow">Name your flow:</Label>
                <Input type="text" id="nameFlow" placeholder="flow name" />
            </FormGroup>
            <FormGroup>
                <Label for="coverImage">Cover</Label>
                <Input type="file" name="file" id="coverImage" />
                <FormText color="muted">
                Please upload some Cover Page (Otherwise we will use the picture of the first pose as a cover)
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label for="audioFile">Audio</Label>
                <Input type="file" name="file" id="audioFile" />
                <FormText color="muted">
                Please upload an audio file for your flow.
                </FormText>
            </FormGroup>
        </Jumbotron>

     );
  }


export default Constructor;