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

export function getActiveRecipes(activeIngredients, recipeArr){
     return recipeArr.filter((recipe) => {
				let keepRecipe = true

				recipe.ingredientArr.forEach((item) => {
					if (!activeIngredients.includes(item)) {
						keepRecipe = false
					}
				})

				return keepRecipe
			})

   

}

export const removeIngredient = (arr, ingredient) => {
	return arr.filter((el) => {
		if (el === ingredient) {
			return false
		} else {
			return true
		}
	})
}

export const addIngredient = (arr, ingredient) => {
	return [...arr, ingredient]
}