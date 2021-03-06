import React from "react"
import HandCard from "./HandCard"
import styled from 'styled-components'
// import BoardSelect from "./boardSelect"
import HandSelect from "./HandSelect"


const ListStyle = styled.ul `
list-style-type: none;
padding-left: 0;
display: flex;
justify-content: space-between;
`
const ItemStyle = styled.li `
display: inline-block;
`

const PlayerHand = ({playerOneHand, playerTwoHand, currentPlayer, onHandSelectedCard,add_organ, play_virus, play_cure, checkBoard, 
checkHand}) => {
    
    const displayHand = () => {
        if (currentPlayer === 1) {
            const displayArrayOne = playerOneHand.map ((card) => {
            return <ItemStyle> <HandCard key = {card._id} card = {card} /> </ItemStyle>
            })
            return displayArrayOne
        } else {
            const displayArrayTwo = playerTwoHand.map ((card,index) => {
                return <ItemStyle> <HandCard key = {card._id} card = {card} /> </ItemStyle>
                })
                return displayArrayTwo
        }
    }




    return (
        <>
            <ListStyle>
                { displayHand() }
            </ListStyle>

            <HandSelect playerOneHand={playerOneHand} playerTwoHand={playerTwoHand} onHandSelectedCard={onHandSelectedCard} add_organ={add_organ} play_virus={play_virus} play_cure={play_cure} currentPlayer={currentPlayer} checkBoard = {checkBoard}
            checkHand = {checkHand}/>
        </>
    )
    }

export default PlayerHand