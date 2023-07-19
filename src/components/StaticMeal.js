import React, {useState} from 'react';
import { recipeArr } from '../assets/recipesData';
import RecipeContainer from './RecipeContainer';
import AllIngredientList from './AllIngredient';
import { getAllIngredients } from '../utils';

const StaticMeal = () => {

    const [activeIngredients, setActiveIngredients] = useState(getAllIngredients(recipeArr))
    const [discardedIngredients, setDiscardedIngredients] = useState([])
    const [activeMeals, setMealsIngredients] = useState()

	function removeIngredient(event) {
		const item = event.target.value;

		setActiveIngredients(prev => {
			return prev.filter(el => {
				if (el === item) {
					return false;
				} else {
					return true;
				}
			});
		});

		setDiscardedIngredients(prev => {
			return [...prev, item];
		});
	}

	function restoreIngredient(event) {
		const item = event.target.value;

		setActiveIngredients(prev => {
			return [...prev, item];
			return prev.filter(el => {
				if (el === item) {
					return false;
				} else {
					return true;
				}
			});
		});

		setDiscardedIngredients(prev => {
			return prev.filter(el => {
				if (el === item) {
					return false;
				} else {
					return true;
				}
			});
		})
	}


    return (
			<>
				<AllIngredientList 
					activeIngredients={activeIngredients}
					removeIngredient={removeIngredient}
					discardedIngredients={discardedIngredients}
					restoreIngredient={restoreIngredient}
				/>
				<RecipeContainer recipeArr={recipeArr} />
			</>
		)
}

export default StaticMeal;
