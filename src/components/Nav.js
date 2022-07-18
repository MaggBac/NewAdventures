import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from "@fortawesome/free-solid-svg-icons";



export default function Nav(props){
    return(
        <nav className={props.darkMode ? "dark": ""}>
            <a className='logo'> <FontAwesomeIcon icon={faTree} />  NewAdventure </a>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">White</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Beige</p>
            </div>
        </nav>
    );
}