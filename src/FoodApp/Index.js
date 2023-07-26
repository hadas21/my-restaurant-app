import { useState, useEffect } from 'react'
import { getMealCatgeries, getMealByCategory, getMealDetails } from './api'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Categories from '../components/Categories'
import ActiveIngredients from '../components/ActiveIngredients'
import AllIngredients from '../components/AllIngredients'
import { removeIngredient, addIngredient, checkForActiveMeals, getAllIngredients, getAllMeals } from '../utils'
import MealOptions from '../components/MealOptions'

function Index() {
	const [categories, setCategories] = useState([])
	const [activeCategory, setActiveCategory] = useState('')
	const [meals, setMeals] = useState({})
	const [ingredients, setIngredients] = useState([])
	const [activeIngredients, setActiveIngredients] = useState([])
	const [activeMeals, setActiveMeals] = useState([])

	useEffect(() => {
		getMealCatgeries().then((data) => {
			const categoryArr = data.categories.map((obj) => {
				return obj.strCategory
			})
			setCategories(categoryArr)
		})
	}, [])

	useEffect(() => {
		if (activeCategory !== '') {
			getMealByCategory(activeCategory).then((data) => {
				const promiseArr = data.meals.map((obj) => {
					return getMealDetails(obj.idMeal)
				})

				Promise.all(promiseArr).then((data) => {
                    
					const ingredientArr = getAllIngredients(data)
					const mealObj = getAllMeals(data)
					setMeals(mealObj)
					setIngredients(ingredientArr)
				})
			})
		}
	}, [activeCategory])

	

	function handleCategorySelect(e) {
		const newActiveCategory = e.target.value
		setActiveCategory(newActiveCategory)
        setActiveIngredients([])
	}

	function handleAddIngredient(e) {
		const newActiveIngredient = e.target.value
		// remove()
		const updatedIngredients = removeIngredient(
			ingredients,
			newActiveIngredient
		)
		setIngredients(updatedIngredients)
		// add()
		const updatedActiveIngredients = addIngredient(
			activeIngredients,
			newActiveIngredient
		)
		// filter()
		const updatedActiveMeals = checkForActiveMeals(updatedActiveIngredients, meals)
        setActiveMeals(updatedActiveMeals)
		setActiveIngredients(updatedActiveIngredients)
	}

	return (
		<>
			<Categories
				activeCategory={activeCategory}
				categories={categories}
				handleCategorySelect={handleCategorySelect}
			/>
			<Row>
				<Col>
					<MealOptions meals={meals} activeMeals={activeMeals} />
				</Col>
				<Col>
					<ActiveIngredients activeIngredients={activeIngredients}/>
				</Col>
				<Col>
					<AllIngredients ingredients={ingredients} handleAddIngredient={handleAddIngredient}  />
				</Col>
			</Row>
		</>
	)
}

export default Index
