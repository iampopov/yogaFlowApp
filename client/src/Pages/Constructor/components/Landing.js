import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Button, FormGroup, Label, Input, FormText, CardImg, ListGroupItem, Row } from 'reactstrap';
// import "../../../styles/"
import Constructor from "./Constructor";
import API from "../../../utils/API"

function Landing() {
    const [clicked, setClicked] = useState(false)
    // const [land, setLand] = useState({ checked: false, landed: false })
    const [flowName, setFlowName] = useState("");
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
    
    useEffect(() => {
        loadTeachers();
    });

    const loadTeachers = () => {
        API.pullTeachers()
        .then(res => setTeacher(res.data)) //setTeacher(res.data)
        .catch(err => console.log(err))
    };

    const handleTeacherSelection = (e) => {
        console.log(e.target.id);
        setSelectedTeacher(e.target.id)
    };

    const handleRender = (e) => {
        //console.log(e.target);
        // console.log(clicked);
        
        // clicked = true;
        // console.log(clicked);
        setClicked(!clicked)
        // e.preventDefault()
        // let temp = false;
        // if (clicked) {
        //     temp = clicked;
        // }
        // setLand({
        //     checked: true,
        //     landed: temp
        // });
    }
    return (
        <>
        {clicked ? ( <Constructor />) : (
        <>
        <FormGroup>
                <Label for="nameFlow">Name your flow:</Label>
                <Input type="text" id="nameFlow" placeholder="flow name" onChange={handleFlowNameChange} value={flowName} />
        </FormGroup>
        <h1>Get the credit for this flow: </h1>
        {teacher.length ? (
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Select yourself!
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
        <h1>Ready to do it? Let's </h1> <Button teacher_id={selectedTeacher} flow_name={flowName} onClick={handleRender}>create the flow</Button>
        </>
        )}
        
        </>
    )
    }


export default Landing;