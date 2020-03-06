import React, { useState } from "react";
// import "../../../styles/"
import Constructor from "./Constructor";

function Landing() {
    const [land, setLand] = useState({ checked: false, landed: false })

    const handleFormRender = (e, user) => {
        e.preventDefault()
        let temp = false;
        if (user) {
            temp = user;
        }
        setLand({
            checked: true,
            landed: temp
        });
    }
    return (
        <>
        {/* <h1>You've landed</h1> */}
        <Constructor />
            {/* {land.checked ? <></> : <div handleFormRender={handleFormRender} />}
            {land.checked && !land.landed ?  <SignUpForm />: land.checked && land.landed ? <SignInForm/>: <></> } */}

        </>
    )
}

export default Landing;