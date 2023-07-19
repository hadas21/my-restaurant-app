import React, {useState} from 'react';
import { recipeArr } from '../assets/recipesData';
import RecipeContainer from './RecipeContainer';
import AllIngredientList from './AllIngredient';
import { getAllIngredients } from '../utils';

const StaticMeal = () => {

    const [activeIngredients, setActiveIngredients] = useState(getAllIngredients(recipeArr))
    const [discardedIngredients, setDiscardedIngredients] = useState([])
    const [activeMeals, setMealsIngredients] = useState()

    return (
			<>
				<AllIngredientList activeIngredients={activeIngredients} />
				<RecipeContainer recipeArr={recipeArr} />
			</>
		)
}

export default StaticMeal;
