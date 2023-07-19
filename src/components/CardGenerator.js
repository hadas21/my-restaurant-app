import React from "react" 
import CardListGenerator from "./CardListGenerator"

const CardGenerator = ({ recipeArr }) => {
	return (
		<>
			{recipeArr.map((recipeObj, index) => {
				return (
					<div
						key={index}
						>
						<h2  key={`name${index}`}>
							{recipeObj.name}
						</h2>
						<CardListGenerator
							ingredientArr={recipeObj.ingredientArr}
							index={index}
						/>
					</div>
				)
			})}
		</>
	)
}

export default CardGenerator;