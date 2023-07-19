import React from 'react'

export function DiscardedIngredients(props) {
	return (
		<div>
			<h2>Discarded Ingredients</h2>
			{props.discardedIngredients.map((item) => {
				return (
					<div key={item}>
						{item}
						<button value={item} onClick={props.restoreIngredient}>
							+
						</button>
					</div>
				)
			})}
		</div>
	)
}
