import * as React from 'react';

function Header() {

    return (
        <header className="header">
            <div className="d-flex justify-content-center">
                <a href="/" title={`Home`}>
                    <img style={{width: "200px"}}
                         src={require('../../assets/pokeapi.png')} className="me-3"/>
                </a>
                <a href="/my-bag" title={`My bag`} className="align-self-center">
                    <img style={{maxWidth: "40px"}}
                         src={require('../../assets/poke_bag.png')} alt={`myBag`}/>
                </a>
            </div>
        </header>
    );
}
export default Header;