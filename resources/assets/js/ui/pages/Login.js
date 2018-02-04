import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const mapStateToProps = (state) => {    
    return {
        loggedIn: state.user.loggedIn
    };
};

class Login extends Component {
    render() {
        if (this.props.loggedIn) {
            return <Redirect to='/'/>;
        }

        return <div className="fill-parent d-flex justify-content-center align-items-stretch login-container">
            <div className="align-self-center">
                <Card className="login-card">
                    <CardBody>
                        <CardTitle>Selecciona una forma de entrar</CardTitle>
                        <CardText>Se te redirigirá a Facebook o Google, según el botón que pulses y se pedirá que nos des permisos para acceder a tus datos básicos. Si nunca has entrado, se te creará una cuenta automáticamente. ¡No tendrás que recordar ninguna contraseña para entrar! </CardText>
                        <a className="btn btn-dark btn-facebook btn-lg btn-block" href="/facebook/redirect">Facebook</a>
                        <a className="btn btn-dark btn-google btn-lg btn-block" href="/google/redirect">Google</a>
                    </CardBody>
                </Card>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Login);