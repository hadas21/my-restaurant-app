import  ActiveIngredients  from './ActiveIngredients'
import { DiscardedIngredients } from './DiscardedIngredients'

const AllIngredientList = (props) => {
	return (
		<>
		

			<ActiveIngredients 
				activeIngredients={props.activeIngredients}
				removeIngredient={props.removeIngredient}
			/>
			<DiscardedIngredients 

				discardedIngredients={props.discardedIngredients}
				restoreIngredient={props.restoreIngredient}
			/>
		</>
	)
}

export default AllIngredientList;