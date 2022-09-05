//  import React from 'react'
// // import Button from "react-bootstrap/Button";
// // import Form from "react-bootstrap/Form";
// // import Modal from "react-bootstrap/Modal";
// import { useState } from 'react';

// export default function Login() {
//  const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//                     <>
//                     <Button variant="light" onClick={handleShow}> Login

//                     </Button>
              
//                     <Modal show={show} onHide={handleClose}>
//                       <Modal.Header closeButton>
//                         <Modal.Title>El Salón de los Usuarios</Modal.Title>
//                       </Modal.Header>
//                       <Modal.Body>
//                         <Form>
//                           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                             <Form.Label>Nombre Clave</Form.Label>
//                             <Form.Control
//                               type="email"
//                               placeholder="name@example.com"
//                               autoFocus
//                             />
//                           </Form.Group>
//                           <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Código Secreto</Form.Label>
//                             <Form.Control type="password" placeholder="Password" />
//                           </Form.Group>
//                         </Form>
//                       </Modal.Body>
//                       <Modal.Footer>
//                         <Button variant="secondary" onClick={handleClose}>
//                           Cerrar
//                         </Button>
//                         <Button variant="primary" onClick={handleClose}>
//                           Ingresar
//                         </Button>
//                       </Modal.Footer>
//                     </Modal>
//                   </>
//   )
// }
