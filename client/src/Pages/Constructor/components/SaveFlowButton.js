// import React, { useState } from "react";

// import { Alert, Button } from 'reactstrap';
// import API from "../../../utils/API";

// const SaveFlowButton = props => {
// const [clicked, setClicked] = useState(false)


// const handleClick = () => {
//     console.log(clicked);
//     setClicked(!clicked);
//     console.log(clicked);
//     console.log(props);
//     API.createNewFlow(props)
//     .then(res => {
//         console.log(res)
//         setClicked(true)            
//     })
//     .catch(err=>console.log(err));

// }
//       return (
//             <>
//                 <Button onClick={handleClick}>Save This Flow</Button>
//                 <Alert color="success" style={{ opacity: clicked ? 1 : 0 }}>
//                 Your flow was saved - thank you!
//                 </Alert>
//             </>

//      );
//   }


// export default SaveFlowButton;