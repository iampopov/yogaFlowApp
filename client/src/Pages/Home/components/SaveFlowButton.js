import React from "react";
import { Button } from 'reactstrap';
import API from "../../../utils/API";

const SaveFlowButton = props => {

const handleClick = () => {
    //console.log(props);
    API.createNewFlow(props)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}
      return (

            <>
                <Button onClick={handleClick}>This is Save Flow Button</Button>
            </>

     );
  }


export default SaveFlowButton;