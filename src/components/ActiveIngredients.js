import React from 'react'

export function ActiveIngredients(props) {

	return (
		<div>
			<h2>Active Ingredients</h2>
			{props.activeIngredients.map((item) => {
				return (
					<div key={item}>
						{item}
						<button value={item} onClick={props.removeIngredient}>
							-
						</button>
					</div>
				)
			})}
		</div>
	)
}
