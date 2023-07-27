export function getAllIngredients(data) {

	return data.reduce((prev, curr) => {
		const c = curr.meals[0]

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`
			const value = c[keyName]
			if (value !== null && value !== '' && !prev.includes(value)) {
				prev.push(value);
			}
		}

		return prev;
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
	return activeMealArr
	
}

export function sort(arr) {
	return arr.sort((a, b) => {
		if (a > b) {
			return 1;
		} else if (b > a) {
			return -1;
		} else {
			return 0;
		}
	})
}

export function getIngredientCount(data) {
	return data.reduce((prev, curr) => {
		const c = curr.meals[0]

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`
			const value = c[keyName]
			if (value !== null && value !== '') {
				if (prev.hasOwnProperty(value)) {
					prev[value] += 1;
				} else {
					prev[value] = 1;
				}
			}
		}

		return prev;
	}, {})
}