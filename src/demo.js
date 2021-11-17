// import Button from '@restart/ui/esm/Button';
// import React from 'react';
// import { Container, Form, Offcanvas } from 'react-bootstrap';
// import useState from 'react-hook-use-state';

// function MainSlide() {

//     const [fName, setfName] = useState('');
//     const [lName, setlName] = useState('');
//     const [Add, setAdd] = useState('');
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const handleSubmit = () => {
//         localStorage.setItem('First_Name', fName);
//         localStorage.setItem('Last_Name', lName);
//         localStorage.setItem('Address', Add);
//     };

//     function OffCanvasExample({ ...props }) {

        

//         console.log('props', props)
//         return (
//             <>
//                 <Button variant="primary" onClick={handleShow} className="me-2">
//                     SlideBar Menu
//                 </Button>
//                 <Offcanvas show={show} onHide={handleClose} {...props}>
//                     <Offcanvas.Header closeButton>
//                         <Offcanvas.Title>Fill Details</Offcanvas.Title>
//                     </Offcanvas.Header>
//                     <Offcanvas.Body>
//                         <Form>
//                             <Form.Group className="mb-3">
//                                 <input
//                                     placeholder="First Name"
//                                     value={fName}
//                                     onChange={(e) => {
//                                         e.preventDefault()
//                                         props.setfName(e.target.value)
//                                     }}
//                                 />
//                             </Form.Group>
//                             <Form.Group className="mb-3" >
//                                 <input
//                                     placeholder="Last Name"
//                                     value={lName}
//                                     onChange={(e) => setlName(e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Form.Group className="mb-3">
//                                 <input
//                                     placeholder="Address"
//                                     value={Add}
//                                     onChange={(e) => setAdd(e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
//                         </Form>
//                     </Offcanvas.Body>
//                 </Offcanvas>
//             </>
//         );
//     }

//     return (
//         <center>
//             <br/>

import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, Offcanvas } from 'react-bootstrap';
import useState from 'react-hook-use-state';

function MainSlide() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let finalData = {};

    const changeData = (event) => {
        console.log("event", event)
        const { name, value} = event.target
        finalData = {
            ...finalData,
            [name]: value
        }
        console.log("finalData --->", finalData)
    }

    const handleSave = (e) => {
        console.log("saveData", finalData)
        const data = JSON.stringify(finalData)
        localStorage.setItem("formData", data)
        const form = localStorage.getItem("formData")
        console.log("saved data from local storage" , form)
        e.preventDefault()
    }
    //SlideBar Menu
    function OffCanvasExample({ ...props }) {
        return (
            <>
                <Button variant="primary" onClick={handleShow} className="me-2">
                    SlideBar Menu
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Fill Details</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <input
                                    placeholder="First Name"
                                    name="fname"
                                    onChange={changeData}
                                    />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <input
                                    placeholder="Last Name"
                                    name="lName"
                                    onChange={changeData}
                                    />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <input
                                    placeholder="Address"
                                    name="Address"
                                    onChange={changeData}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleSave}>Submit</Button>
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }

    return (
        <center>
            <br/>
            <br/>
            <div className="shoping">
                <Container fluid>
                    <>
                        <OffCanvasExample key={0}
                            placement='end'
                            name='end'
                            handleClose={handleClose}
                            handleShow={handleShow}                            
                        />
                    </>
                </Container>
            </div>
        </center>

    );
}

export default MainSlide;




