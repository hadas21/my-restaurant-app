export function getAllIngredients(recipeArr) {
	return recipeArr.reduce((prev, curr) => {
		curr.ingredientArr.forEach((item) => {
			if (!prev.includes(item)) {
				prev.push(item)
			}
		})
		return prev
	}, [])
}
