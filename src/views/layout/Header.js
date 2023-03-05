import * as React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <div className="d-flex justify-content-center">
                <Link to="/" title={`Home`}>
                    <img style={{width: "200px"}}
                         src={require('../../assets/pokeapi.png')} className="me-3"/>
                </Link>
                <Link to="/my-bag" title={`My bag`} className="align-self-center">
                    <img style={{maxWidth: "40px"}}
                         src={require('../../assets/poke_bag.png')} alt={`myBag`}/>
                </Link>
            </div>
        </header>
    );
}
export default Header;