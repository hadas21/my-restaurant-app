export default function AllIngredients({ ingredients, handleAddIngredient }) {
	return (
		<>
			<h5>All Ingredients</h5>
			{ingredients.map((ing, i) => {
				return (
					<div key={`${ing}-${i}`}>
						<button value={ing} onClick={handleAddIngredient}>
							+
						</button>
						{'  '}
						{ing}
					</div>
				)
			})}
		</>
	)
}