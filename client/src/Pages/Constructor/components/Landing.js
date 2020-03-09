import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Button, FormGroup, Label, Input, FormText, CardImg, ListGroupItem, Row } from 'reactstrap';
// import "../../../styles/"
import Constructor from "./Constructor";
import API from "../../../utils/API"

function Landing() {
    const [clicked, setClicked] = useState(false)
    const [showTeacher, setShowTeacher] = useState(false)
    const [flowName, setFlowName] = useState("");
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
        setFlowName( e.target.value )
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

    const handleRender = (e) => {

        setClicked(!clicked)

    }
    const handleClick = () => {

        setShowTeacher(!showTeacher)

    }
    return (
        <>
        {clicked ? ( <Constructor teacher_id={selectedTeacher} flow_name={flowName} youTube={youTube} onClick={handleRender} />) : (
        <>
        <FormGroup>
                <Label for="nameFlow">Name your flow:</Label>
                <Input type="text" id="nameFlow" placeholder="flow name" onChange={handleFlowNameChange} value={flowName} />
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
        <h1>Ready to do it? Let's </h1> <Button onClick={handleRender}>create the flow</Button>
        <h1>or upload your own:  </h1>
        <Input type="text" id="youTubeFlow" placeholder="YouTube link" onChange={handleYouTubeLink} value={youTube} />
        <Button onClick={handleRender}>I am going with YouTube!</Button>
        
        </>
        )}
        
        </>
    )
    }


export default Landing;