import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import initializeUser from '../../data/state/actions/user/initialize';
import logoutUser from '../../data/user/logout';

const mapStateToProps = (state) => {
    return {
        user: state.user.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(initializeUser({}))
        }
    };
};

const UserLayout = ({ user, children, logout }) => (
    <div className="fill-parent app-layout-root">
        <Navbar dark fixed='top' color='primary' >
            <NavbarBrand href="#" >MSS</NavbarBrand>
            <Nav navbar>
                <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                        <img src={user.avatar} className="rounded-circle" />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>
                            {user.name}
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <a href="#" onClick={() => {
                                logout();
                                logoutUser();
                            }}>Salir</a>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
        <div className="app-body">
            {children}
        </div>
        <div className="app-footer"></div>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);