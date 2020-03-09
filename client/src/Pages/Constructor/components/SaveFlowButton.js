import React, { useState } from "react";

import { Alert, Button } from 'reactstrap';
import API from "../../../utils/API";

const SaveFlowButton = props => {
const [clicked, setClicked] = useState(false)


const handleClick = () => {
    console.log(props);
    API.createNewFlow(props)
        .then(res=> {
            console.log(res)
            setClicked(true)            
        })
        .catch(err=>console.log(err))
}
      return (

            <>
                <Button onClick={handleClick}>This is Save Flow Button</Button>
                <Alert color="success" style={{ opacity: clicked ? 1 : 0 }}>
                This is a success alert — check it out!
                </Alert>
            </>

     );
  }


export default SaveFlowButton;