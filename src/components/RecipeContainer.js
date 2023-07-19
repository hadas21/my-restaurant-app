import React from "react";
import CardGenerator from "./CardGenerator";

const RecipeContainer = ({recipeArr}) => {
    return (
        <div >
            <CardGenerator recipeArr={recipeArr} />
        </div>
    )
}

export default RecipeContainer
