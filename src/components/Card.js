import React from "react";
import theme from "styled-components"

const styledCard = theme.div`

`

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{props.person.name}</h2>
            </div>
            <div className="card-body">
                <h4>Birth: {props.person.birth_year}</h4>
                <h4>Home: {props.person.homeworld}</h4>
                <h4>Gender: {props.person.gender}</h4>
                <h4>Eyes: {props.person.eye_color}</h4>
                <h4>Hair: {props.person.hair_color}</h4>
                <h4>Skin Color: {props.person.skin_color}</h4>
                <h4>Height: {props.person.height}</h4>
                <h4>Species: {props.person.species}</h4>
                <h4>Mass: {props.person.mass}</h4>
                <h4>Created: {props.person.created}</h4>
            </div>
        </div>
    )
}