import React, { Component } from "react";

import { Form, FormControl, Button, InputGroup, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

class Example extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {/* <br />
        <Navbar className="navbar-ct-azure" expand="lg">
          <Container fluid>
            <div className="navbar-header">
              <Navbar.Toggle
                aria-controls="navigation-index"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right"
                data-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
              </Navbar.Toggle>
              <Navbar.Brand href="#pablo" onClick={(e) => e.preventDefault()}>
                Dashboard
              </Navbar.Brand>
            </div>
            <Navbar.Collapse className="collapse">
              <Nav className="nav" navbar></Nav>
              <Form
                className="navbar-form navbar-left navbar-search-form"
                role="search"
              >
                <InputGroup>
                  <i className="nc-icon nc-zoom-split text-white font-weight-bold"></i>
                  <Form.Control
                    defaultValue=""
                    placeholder="Search..."
                    type="text"
                  ></Form.Control>
                </InputGroup>
              </Form>
              <Nav className="nav ml-auto" navbar>
                <Nav.Item>
                  <Nav.Link href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-planet"></i>
                    <span className="stats">Stats</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <Navbar className="navbar-ct-green" expand="lg">
          <Container fluid>
            <div className="navbar-header">
              <Navbar.Toggle
                aria-controls="navigation-index"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right"
                data-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
              </Navbar.Toggle>
              <Navbar.Brand href="#pablo" onClick={(e) => e.preventDefault()}>
                Dashboard
              </Navbar.Brand>
            </div>
            <Navbar.Collapse className="collapse">
              <Nav className="nav" navbar></Nav>
              <Form
                className="navbar-form navbar-left navbar-search-form"
                role="search"
              >
                <InputGroup>
                  <i className="nc-icon nc-zoom-split text-white font-weight-bold"></i>
                  <Form.Control
                    defaultValue=""
                    placeholder="Search..."
                    type="text"
                  ></Form.Control>
                </InputGroup>
              </Form>
              <Nav className="nav ml-auto" navbar>
                <Nav.Item>
                  <Nav.Link href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-planet"></i>
                    <span className="stats">Stats</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <Navbar className="navbar-ct-orange" expand="lg">
          <Container fluid>
            <div className="navbar-header">
              <Navbar.Toggle
                aria-controls="navigation-index"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right"
                data-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
              </Navbar.Toggle>
              <Navbar.Brand href="#pablo" onClick={(e) => e.preventDefault()}>
                Dashboard
              </Navbar.Brand>
            </div>
            <Navbar.Collapse className="collapse">
              <Nav className="nav" navbar></Nav>
              <Form
                className="navbar-form navbar-left navbar-search-form"
                role="search"
              >
                <InputGroup>
                  <i className="nc-icon nc-zoom-split text-white font-weight-bold"></i>
                  <Form.Control
                    defaultValue=""
                    placeholder="Search..."
                    type="text"
                  ></Form.Control>
                </InputGroup>
              </Form>
              <Nav className="nav ml-auto" navbar>
                <Nav.Item>
                  <Nav.Link href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-planet"></i>
                    <span className="stats">Stats</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <Navbar className="navbar-ct-red" expand="lg">
          <Container fluid>
            <div className="navbar-header">
              <Navbar.Toggle
                aria-controls="navigation-index"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right"
                data-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
              </Navbar.Toggle>
              <Navbar.Brand href="#pablo" onClick={(e) => e.preventDefault()}>
                Dashboard
              </Navbar.Brand>
            </div>
            <Navbar.Collapse className="collapse">
              <Nav className="nav" navbar></Nav>
              <Form
                className="navbar-form navbar-left navbar-search-form"
                role="search"
              >
                <InputGroup>
                  <i className="nc-icon nc-zoom-split text-white font-weight-bold"></i>
                  <Form.Control
                    defaultValue=""
                    placeholder="Search..."
                    type="text"
                  ></Form.Control>
                </InputGroup>
              </Form>
              <Nav className="nav ml-auto" navbar>
                <Nav.Item>
                  <Nav.Link href="#pablo" onClick={(e) => e.preventDefault()}>
                    <i className="nc-icon nc-planet"></i>
                    <span className="stats">Stats</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br /> */}
      </>
    );
  }
}

export default Example;