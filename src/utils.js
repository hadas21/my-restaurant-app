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

export function getActiveIngredients (prev, item) {
			return prev.filter((el) => {
				if (el === item) {
					return false
				} else {
					return true
				}
			})
		}
