import React from "react";

const CardListGenerator = ({ingredientArr, index}) => {
    return (
        <ul
            
            key={`include${index}`}>
            {ingredientArr.map((ingredient, index) => {
                return (
                    <li  key={`ing${index}`}>
                        {ingredient}
                    </li>
                )
            })}
        </ul>
    )
}

export default CardListGenerator;