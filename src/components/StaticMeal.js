import React, { useState } from 'react'
import { recipeArr } from '../assets/recipesData'
import RecipeContainer from './RecipeContainer'
import AllIngredientList from './AllIngredient'
import { getAllIngredients, getActiveRecipes, getActiveIngredients } from '../utils'

const StaticMeal = () => {
	const [activeIngredients, setActiveIngredients] = useState(
		getAllIngredients(recipeArr)
	)
	const [discardedIngredients, setDiscardedIngredients] = useState([])
	const [activeMeals, setActiveMeals] = useState(recipeArr)

	function removeIngredient(event) {
		const item = event.target.value

        const updatedActiveIngredients = getActiveIngredients(
					activeIngredients,
					item
				);
        const updatedActiveMeals = getActiveRecipes(
					updatedActiveIngredients,
					recipeArr
				)
        console.log(updatedActiveMeals)

		setActiveIngredients(updatedActiveIngredients)

		setDiscardedIngredients((prev) => {
			return [...prev, item]
		})

       setActiveMeals(updatedActiveMeals)
	}

	function restoreIngredient(event) {
		const item = event.target.value
             const updatedActiveMeals = getActiveRecipes(activeIngredients, recipeArr)

		setActiveIngredients((prev) => {
			return [...prev, item]
		})

		setDiscardedIngredients((prev) => {
			return prev.filter((el) => {
				if (el === item) {
					return false
				} else {
					return true
				}
			})
		})

        setActiveMeals(updatedActiveMeals)
	}

	return (
		<>
			<AllIngredientList
				activeIngredients={activeIngredients}
				removeIngredient={removeIngredient}
				discardedIngredients={discardedIngredients}
				restoreIngredient={restoreIngredient}
			/>
			<RecipeContainer recipeArr={activeMeals} />
		</>
	)
}

export default StaticMeal
