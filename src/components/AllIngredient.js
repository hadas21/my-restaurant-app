import { ActiveIngredients } from './ActiveIngredients'
import { DiscardedIngredients } from './DiscardedIngredients'

const AllIngredientList = (props) => {
	return (
		<>
			<ActiveIngredients activeIngredients={props.activeIngredients} />
			<DiscardedIngredients />
		</>
	)
}

export default AllIngredientList;