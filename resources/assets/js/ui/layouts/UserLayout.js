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

const UserLayout = ({ user, children, logout }) => {
    return (
        <div className="fill-parent app-layout-root">
            <Navbar dark color='primary' >
                <NavbarBrand href="#" >MSS</NavbarBrand>
                <Nav navbar>
                    <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                            <img src={user.avatar} className="rounded-circle navbar-avatar" />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>
                                {user.name}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => {
                                logout();
                                logoutUser();
                            }}>
                                Salir
                                </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
            <div className="app-body">
                {children}
            </div>
            <div className="app-footer">footer</div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);