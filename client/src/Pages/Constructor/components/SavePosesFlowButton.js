import React, { useState } from "react";

import { Alert, Button } from 'reactstrap';
import API from "../../../utils/API";

const SaveFlowButton = props => {
const [clicked, setClicked] = useState(false)


const handleClick = () => {
    //console.log(props.flowPosition);
    const bulkRows = props.flowPosition.map(obj => {
        const { id, poseTime, flowPosition, flowId } = obj;
        return { PoseId: id, poseTime, flowPosition, FlowId: flowId.id }; 
    });
    console.log(bulkRows);
    API.createNewFlowPose(bulkRows)
        .then(res => {
            console.log(res);
            setClicked(true)            
             })
        .catch(err => console.log(err));
    
}
      return (

            <>
                <Button onClick={handleClick}>This is Save Flow Button</Button>
                <Alert color="success" style={{ opacity: clicked ? 1 : 0 }}>
                Your flow was saved - thank you!
                </Alert>
            </>

     );
  }


export default SaveFlowButton;