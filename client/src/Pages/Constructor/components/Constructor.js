import React, { useState, useEffect } from "react";
import { Jumbotron, Button, FormGroup, Label, Input, FormText, CardImg, ListGroupItem, Row } from 'reactstrap';
import { List } from "../../Home/components/List";
import API from "../../../utils/API";
import SavePosesFlowButton from "./SavePosesFlowButton";
const shortid = require('shortid');

const Constructor = props => {
//console.log(props);

    const [poses, setPoses] = useState([]);
    const [dbPoses, setDbPoses] = useState([]);
    const [flows, setFlows] = useState([]);

    const loadPoses = () => {
        
        API.pullPoses()
            .then(res => {

                setDbPoses(res.data);
            }) 
            .catch(err => console.log(err))
    }

    const loadFlows = () => {

        API.pullFlows()
        .then(res => {
            setFlows(res.data)
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        loadFlows();
        loadPoses();
        console.log(flows);
    }, []);

    const handleInputChange = event => {
        // grab id of the time you want to change
        let trgt = poses.findIndex(x => x.uniqueId === event.target.id);
        
        // make a copy of the poses state array
        let newPoses = [...poses]

        // set the seconds on the particular object inside that copied array
        
        newPoses[trgt].poseTime=event.target.value

        // store updated array in state
        setTimeout(() => {
            setPoses(newPoses)
        }, 1000);
        
        //console.log(poses);
        
      };

      const handlePoseDelete = (event) => {
        //grab id of item to delete
        let toDelete = poses.findIndex(x => x.uniqueId === event.target.id);
        //console.log(toDelete);
        
        //make a copy of array to mutate so we don't change original array
        let newPoses = [...poses]
        // splice it out from the array
        newPoses.splice(toDelete, 1)
        //updating state so it re-renders
        setPoses(newPoses);
        
      }


      

      const findId = () => {
        let id;
          for (const flow of flows) {
              if (flow.flowID === props.flow_name.uniqueId) {
                  id = flow.flowID;
                  return;
              } 
          }
      }

    const handleAddPose = (e) => {
    e.preventDefault();
    
    if(e.target.id) {
        let pose = dbPoses[e.target.id-1];
        pose = {...pose}
        pose.flowPosition = (poses.length+1)
        pose.uniqueId = shortid.generate()
        //pose.flowID = findId()
        pose.flowId = flows.find(x => {
            console.log(x.flowID)
            console.log(props.flow_name.uniqueId);
            return x.flowID === props.flow_name.uniqueId
         })
        setPoses([...poses, pose])
    }}

    const ReactUploadFile = (e) =>{
        API.uploadFile(e.target)
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

      return (
<>
        <Jumbotron>

            <List>
            <div className="row">
                {poses.map(pose => (
                    <div className="col-6" key={shortid.generate()} >
                        <ListGroupItem>
                        <Row>
                            <div className="col-6">
                            <CardImg height="42" width="42" src={pose.picture} alt={pose.pose_name} id={shortid.generate()}/>
                            </div>
                            <div className="col-6">
                            <Input type="text" placeholder="seconds" key={pose.sequence} id={pose.uniqueId} onChange={handleInputChange} value={pose.poseTime}/>
                    </div>
                        </Row>
                        <Row>
                        <div className="col-6">
                        <ul>
                            <li>{pose.pose_name}</li>
                        </ul>
                        </div>
                        <div className="col-6">
                        <Button key={pose.sequence} id={pose.uniqueId} onClick={handlePoseDelete}>Delete</Button>
                </div>
                        </Row>
                        </ListGroupItem>
                    </div>
                ))}
            </div>
            </List>
            <List>
            {/* { flows.length && flows[0].sound === "https://yogaflowapp.s3.us-east-2.amazonaws.com/oh-shit_2.mp3" ? ("") : ( */}
            {/* FlowId={props.flow_name.uniqueId} */}
            { props.youTube ? ("") : (
            <>
            <Row>{poses.length ? (<SavePosesFlowButton FlowId={props.flow_name.uniqueId} teacher_id={props.teacher_id} flow_name={props.flow_name.name} flowPosition={poses.map(pose => pose)}></SavePosesFlowButton>) : (<h2>Select from the poses below:</h2>) }</Row>
            <div className="row">
                {dbPoses.map(pose => (
                    <div className="col-6" key={pose.id} onClick={handleAddPose}>
                        <ListGroupItem><CardImg height="42" width="42" src={pose.picture} alt={pose.pose_name} id={pose.id}/><ul><li>{pose.pose_name}</li></ul></ListGroupItem>
                    </div>
                ))}
            </div>
            </>
            )}
            </List>
            <>
            <FormGroup>
                <Label for="coverImage">Cover</Label>
                <Input type="file" name="file" id="coverImage" onChange={ReactUploadFile}/>
                <FormText color="muted">
                Please upload some Cover Page (Otherwise we will use the picture of the first pose as a cover)
                </FormText>
            </FormGroup>
            {props.youTube ? (<SavePosesFlowButton teacher_id={props.teacher_id} flow_name={props.flow_name} sound={props.youTube} ></SavePosesFlowButton>) : ("")}
            </>
            {props.youTube ? ("") : (
            <FormGroup>
                <Label for="audioFile">Audio</Label>
                <Input type="file" name="file" id="audioFile" />
                <FormText color="muted">
                Please upload an audio file for your flow.
                </FormText>
            </FormGroup>
            )}

        </Jumbotron>
</>
     );
  }


export default Constructor;