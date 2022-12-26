// Write your Character component here
import React from "react"
import theme from "styled-components"
import Card from "./Card"

export default function Character(props) {
    const people = Array.from(props.people)
   return people.map(pr => {
        return (
            <div>
        <Card key={pr.name} person={pr} />

        </div>
        )
    })
    
    /* people.map(person => {
        return (
        <div>

            <Card person={person}/>
        </div>
        
        )
    })  */
    
    //return <div></div>
}