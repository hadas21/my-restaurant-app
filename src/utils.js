export function getAllIngredients(data) {

	return data.reduce((prev, curr) => {
		const c = curr.meals[0]

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`
			const value = c[keyName]
			if (value !== null && value !== '' && prev.indexOf(value) === -1) {
				prev.push(value)
			}
		}

		return prev
	}, [])
}

export function getAllMeals(data){
	return data.reduce((prev, curr) => {
		const c = curr.meals[0]
		const ingArr = []

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`
			const value = c[keyName]
			if (value !== null && value !== '') {
				ingArr.push(value)
			}
		}

		prev[c.strMeal] = ingArr
		return prev
	}, {})

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

export function checkForActiveMeals(activeIngredients, meals) {
	const activeMealArr = []
	Object.keys(meals).forEach((meal) => {
		let shouldAddMeal = true

		meals[meal].forEach((ingredient) => {
			if (!activeIngredients.includes(ingredient)) {
				shouldAddMeal = false
			}
		})

		if (shouldAddMeal) {
			activeMealArr.push(meal)
		}
	})
	console.log(activeMealArr)
	return activeMealArr
	
}
