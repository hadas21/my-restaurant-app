export default function MealOptions ({meals, activeMeals}) {

    function isMealActive(meal){
        return activeMeals.includes(meal)
    }


    return (
			<>

				<h5>Meal Options</h5>
				{Object.keys(meals).map((meal, i) => {
					return (
						<div
							className={isMealActive(meal) ? "active-meal" : "non-active-meal"}
							key={`${meal}-${i}`}>
							{meal}
							
						</div>
					)
				})}
			</>
		)
}
