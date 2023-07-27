

export default function ActiveIngredients({ activeIngredients }) {
	return (
		<>
			<h5>Active Ingredients</h5>
			{activeIngredients.map((activeIng, i) => {
				return <div key={`${activeIng}-${i}`}>{activeIng}</div>
			})}
		</>
	)
}
