export default function AllIngredients({ ingredients, handleAddIngredient, ingredientCount }) {

	function getStyle(ing) {
		const maxCount = Math.max(...Object.values(ingredientCount));
		const count =  ingredientCount[ing];
		const ratio = count / maxCount;
		return {
			color: 'green',
			filter: `brightness(${1 + ratio})`
		}
	}

	return (
		<>
			<h5>All Ingredients</h5>
			{ingredients.map((ing, i) => {
				return (
					<div key={`${ing}-${i}`} style={getStyle(ing)}>
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