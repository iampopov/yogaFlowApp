import React, { useState, useEffect } from "react";
import { Alert, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Button, FormGroup, Label, Input, FormText, CardImg, ListGroupItem, Row } from 'reactstrap';
// import "../../../styles/"
import SaveFlowButton from "./SaveFlowButton";
import Constructor from "./Constructor";
import API from "../../../utils/API";
const shortid = require('shortid');

function Landing() {
    const [clicked, setClicked] = useState(false)
    const [showTeacher, setShowTeacher] = useState(false)
    const [flowName, setFlowName] = useState({
        name: "",
        uniqueId: ""
    });
    const [youTube, setYouTube] = useState("");
    const [teacher, setTeacher] = useState(
        {"id": "",
        "teacher_name": "",
        "login": "",
        "email": "",
        "favorites": "",
        "password": ""
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState();

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleFlowNameChange = (e) => {
        setFlowName({
            name: e.target.value,
            uniqueId: shortid.generate() 
        })
    };

    const handleYouTubeLink = (e) => {
        setYouTube( e.target.value )
    };
    
    useEffect(() => {
        loadTeachers();
    }, []);

    const loadTeachers = () => {
        API.pullTeachers()
        .then(res => setTeacher(res.data)) //setTeacher(res.data)
        .catch(err => console.log(err))
    };

    const handleTeacherSelection = (e) => {
        // console.log(e.target);
        setSelectedTeacher(e.target.id)
    };

    let flows = {};

    const handleRender = (e) => {
        
        API.createNewFlow({
            teacher_id: selectedTeacher,
            flow_name: flowName.name,
            sound: youTube || "https://yogaflowapp.s3.us-east-2.amazonaws.com/oh-shit_2.mp3",
            flowID: flowName.uniqueId
            
        })
        .then(res => {
        flows = res.data
        //console.log(flows.id)
        setClicked(true)            
        })
        .catch(err=>console.log(err));

        setClicked(!clicked);

    }
    const handleClick = () => {

        setShowTeacher(!showTeacher)

    }
    return (
        <>
        {clicked ? ( <Constructor teacher_id={selectedTeacher} flow_name={flowName} youTube={youTube} flowID={flows.id}  />) : (
        <>
        <FormGroup>
                <Label for="nameFlow">Name your flow:</Label>
                <Input type="text" id="nameFlow" placeholder="flow name" onChange={handleFlowNameChange} value={flowName.name} />
        </FormGroup>
        <h1>Get the credit for this flow: </h1>
        {teacher.length ? (
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret onClick={handleClick}>
            {selectedTeacher ? (teacher[selectedTeacher-1].teacher_name) : ("select yourself!")}
                </DropdownToggle>
            <DropdownMenu onClick={handleTeacherSelection}>
                {teacher.map(teacher => (
                  <DropdownItem id={teacher.id} key={teacher.id}>{teacher.teacher_name}</DropdownItem>  
                ))}
            </DropdownMenu>
            </Dropdown>
        ) : ( 
            <h3>No Results to Display</h3>
        )}
        <Input type="text" id="youTubeFlow" placeholder="YouTube - pose constructor will be disabled" onChange={handleYouTubeLink} value={youTube} />
        <Button onClick={handleRender} flowID={flowName.uniqueId} teacher_id={selectedTeacher} flow_name={flowName.name}  sound={youTube ? (youTube) : ("https://yogaflowapp.s3.us-east-2.amazonaws.com/oh-shit_2.mp3") } >Save</Button>
        
        </>
        )}
        
        </>
    )
    }


export default Landing;