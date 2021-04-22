import React from "react";
import { useParams, Redirect } from "react-router-dom";

function DogDetail (props) {
    const { name } = useParams();
    let dogIdx;
    let inDogs = false;
    for (let i = 0; i < props.dogs.length; i++) {
        if (props.dogs[i].name === name) {
            dogIdx = i;
            inDogs = true;
        };
    };
    if (!inDogs) {
        return <Redirect to='/dogs'/>
    };
    return (
        <div>
            <h1>{props.dogs[dogIdx].name}</h1>
            <img src={props.dogs[dogIdx].src} alt={props.dogs[dogIdx].name}/>
            <h3>Age: {props.dogs[dogIdx].age}</h3>
            {props.dogs[dogIdx].facts.map(fact => <p>{fact}</p>)}
        </div>
    );
}

export default DogDetail;