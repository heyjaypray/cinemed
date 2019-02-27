import React from 'react';
import {
    Collapse,
    Col,
    Row,
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

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar >
                    <DropdownToggle nav caret style={{ color: 'black' }}>
                        Products
                    </DropdownToggle>
                    <DropdownMenu right style={{ width: '1000px' }}>
                        <Row>
                            <Col>
                        <DropdownItem>
                                    Fuck
                        </DropdownItem>
                            </Col>
                            <Col>
                                <DropdownItem>
                                    Option 2
                        </DropdownItem>
                            </Col>
                            <Col>
                                <DropdownItem>
                                    Reset
                        </DropdownItem>
                            </Col>
                        </Row>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div >
        );
    }
}