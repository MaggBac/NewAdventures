import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from "@fortawesome/free-solid-svg-icons";



export default function Nav(){
    return(
        <nav>
            <a className='logo'> <FontAwesomeIcon icon={faTree} /> NewAdventure </a>
        </nav>
    );
}