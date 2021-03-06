import React from "react";

const BoardCard = ({card}) => {

    
    
    let message
    
    if (card.score ===0 && card.type ==="organ"){
        message = "healthy"
    }
    else if(card.score ===1 && card.type ==="organ"){
        message = "protected"
    }
    else if(card.score >=2 && card.type ==="organ"){
        message = "invulnerable"
    }
    else if(card.score === -1 && card.type ==="organ"){
        message = "infected"
    }
    else if(card.score <= -2 && card.type ==="organ"){
        message ="destroyed"}


    return (
        <>
            <h3 class="organ-details"> {card.color} {card.type}  </h3>
            <img src={card["img_url"]} id="board-card-image" ></img>
            <h3 class="organ-status">{message}</h3>

        </>
    )
}

export default BoardCard