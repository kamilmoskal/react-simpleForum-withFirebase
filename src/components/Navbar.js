import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import LogInLinks from './LogInLinks'
import LogOutLinks from './LogOutLinks'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Navbar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render(){
        const { auth, profile } = this.props
        const Links = auth.uid ? <LogInLinks profile={profile}/> : <LogOutLinks /> 
          
        return (
            <nav className="nav-wrapper red darken-4">
                <div className="container">
                    <NavLink to='/' className="brand-logo"><span>Simple Forum</span></NavLink>
                    <a href="/" className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {Links}
                    </ul>
                    <ul className="sidenav" id="mobile-links">
                        {Links}
                    </ul>
                </div>
            </nav>
          )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
