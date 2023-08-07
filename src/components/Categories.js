import Button from 'react-bootstrap/Button'

export default function Categories({
	activeCategory,
	categories,
	handleCategorySelect,
}) {
	return (
		<>
			<h3>Select a category</h3>
			<div>Active Category: {activeCategory}</div>
			{categories.map((category) => {
				return (
					<Button
						key={category}
						onClick={(e) => handleCategorySelect(e)}
						value={category}>
						{category}
					</Button>
				)
			})}
		</>
	)
}
