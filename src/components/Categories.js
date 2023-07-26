
export default function Categories({ activeCategory, categories, handleCategorySelect }) {
	return (
		<>
			<h3>Select a category</h3>
			<div>Active Category: {activeCategory}</div>
			{categories.map((category) => {
				return (
					<button
						key={category}
						onClick={(e) => handleCategorySelect(e)}
						value={category}>
						{category}
					</button>
				)
			})}
		</>
	)
}