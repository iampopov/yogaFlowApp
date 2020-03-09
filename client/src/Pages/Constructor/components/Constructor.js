import React, { useState, useEffect } from "react";
import { Jumbotron, Button, FormGroup, Label, Input, FormText, CardImg, ListGroupItem, Row } from 'reactstrap';
import { List } from "../../Home/components/List";
import API from "../../../utils/API";
import SaveFlowButton from "../../../Pages/Home/components/SaveFlowButton"
const shortid = require('shortid');

const Constructor = props => {

    const [poses, setPoses] = useState([]);
    const [dbPoses, setDbPoses] = useState([]);
    // const [flowName, setFlowName] = useState("");

    useEffect(() => {
        loadPoses();
        //console.log(props);
    }, []);

    const loadPoses = () => {
        API.pullPoses()
            .then(res => {

                setDbPoses(res.data);
            }) 
            .catch(err => console.log(err))
    }

    // const handleFlowNameChange = (e) => {
    //     setFlowName( e.target.value )
    // }

    const handleInputChange = event => {
        // grab id of the time you want to change
        let trgt = poses.findIndex(x => x.uniqueId === event.target.id);
        
        // make a copy of the poses state array
        let newPoses = [...poses]

        // set the seconds on the particular object inside that copied array
        
        newPoses[trgt].duration=event.target.value

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

    const handleAddPose = (e) => {
    e.preventDefault();
    
    if(e.target.id) {
        let pose = dbPoses[e.target.id-1];
        pose = {...pose}
        pose.sequence = (poses.length+1)
        pose.uniqueId = shortid.generate()
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
            {/* <FormGroup>
                <Label for="nameFlow">Name your flow:</Label>
                <Input type="text" id="nameFlow" placeholder="flow name" onChange={handleFlowNameChange} value={flowName} />
            </FormGroup> */}
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
                            <Input type="text" placeholder="seconds" key={pose.sequence} id={pose.uniqueId} onChange={handleInputChange} value={pose.duration}/>
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
            {props.youTube ? ("") : (
            <>
            <Row>{poses.length ? (<SaveFlowButton teacher_id={props.teacher_id} flow_name={props.flow_name} ></SaveFlowButton>) : (<h2>Select from the poses below:</h2>) }</Row>
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
            {props.youTube ? (<SaveFlowButton />) : ("")}
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