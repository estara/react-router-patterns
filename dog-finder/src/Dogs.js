import React from 'react';
import { Link } from 'react-router-dom';

function Dogs (props) {
    return (
        <div>
            <h1>Dog Finder</h1>
            <h3>Meet the dogs!</h3>
            {props.dogs.map(dog => <Link exact to={`/dogs/${dog.name}`}><img src={dog.src} alt={dog.name}/><br/><p>{dog.name}</p></Link>)}
        </div>
    );
}

export default Dogs;