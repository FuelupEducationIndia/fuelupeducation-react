import React, { Component }  from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ isOpen: !(this.state.isOpen) })
    }

    render() {
        return(
            <div>
                <Navbar expand="md" >
                    <NavbarBrand style={{color: "white"}} href="/">FuelUp Education</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse  isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle style={{color: "white"}} nav caret>
                                Courses
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Course 1
                                </DropdownItem>
                                <DropdownItem>
                                Course 2
                                </DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle style={{color: "white"}} nav caret>
                                Subjects
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Subject 1
                                </DropdownItem>
                                <DropdownItem>
                                Subject 2
                                </DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        
                        <NavItem>
                            <NavLink style={{color: "white"}} href="#">For Kids</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: "white"}} href="#">Team</NavLink>
                        </NavItem>

                    </Nav>
                    
                        <NavLink  style={{color: "white"}} href="#">Team</NavLink>
                        <NavLink style={{color: "white"}} href="#">Start Learning</NavLink>  
                    </Collapse>
                </Navbar>
             </div>
        );
    }
}

export default Header;