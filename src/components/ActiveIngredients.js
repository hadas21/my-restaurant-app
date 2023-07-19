import React from "react";

export function ActiveIngredients(props) {
    return (
			<div>
				<h2>Active Ingredients</h2>
				<ul>
					{props.activeIngredients.map((item) => {
						return <li key={item}>{item}</li>
					})}
				</ul>
			</div>
		)
}