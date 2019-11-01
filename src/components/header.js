import React from 'react'
import PropTypes from 'prop-types' //se usa proptypes para documentar la app, tipando cada parte del componente 

const Header = ({titulo}) =>(
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);

//se usa proptypes para documentar la app, tipando cada parte del componente 
Header.propTypes = {
    titulo : PropTypes.string.isRequired
}

export default Header;


