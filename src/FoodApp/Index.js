import { useState, useEffect } from "react";
import { getMealCatgeries, getMealByCategory, getMealDetails } from "./api";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ActiveIngredients } from "../components/ActiveIngredients";
import { removeIngredient, addIngredient } from '../utils'

function Index() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [meals, setMeals] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [activeIngredients, setActiveIngredients] = useState([])
    const [activeMeals, setActiveMeals] = useState([]);

    useEffect(() => {
        getMealCatgeries()
            .then(data => {
                const categoryArr = data.categories.map(obj => {
                    return obj.strCategory;
                });
                setCategories(categoryArr);
            });
    }, []);

    useEffect(() => {
        if (activeCategory !== '') {
            getMealByCategory(activeCategory)
                .then(data => {    
                    const promiseArr = data.meals.map(obj => {
                        return getMealDetails(obj.idMeal);
                    });

                    Promise.all(promiseArr).then(data => {
                        const ingredientArr = data.reduce((prev, curr) => {
                            const c = curr.meals[0];

                            for (let i = 1; i <= 20; i++) {
                                const keyName = `strIngredient${i}`;
                                const value = c[keyName];
                                if (value !== null && value !== "" && prev.indexOf(value) === -1) {
                                    prev.push(value);
                                }
                            }                            

                            return prev;
                        }, []);

                        const mealObj = data.reduce((prev, curr) => {
                            const c = curr.meals[0];
                            const ingArr = [];
                            
                            for (let i = 1; i <= 20; i++) {
                                const keyName = `strIngredient${i}`;
                                const value = c[keyName];
                                if (value !== null && value !== "") {
                                    ingArr.push(value);
                                }
                            }
                            
                            prev[c.strMeal] = ingArr;
                            return prev;
                        }, {});

                        setMeals(mealObj);
                        setIngredients(ingredientArr);
                    });
                });
        }
    }, [activeCategory]);

    function checkForActiveMeals(activeIngredients) {
        const activeMealArr = [];
        Object.keys(meals).forEach(meal => {
            let shouldAddMeal = true;

            meals[meal].forEach(ingredient => {
                if (!activeIngredients.includes(ingredient)) {
                    shouldAddMeal = false;
                }
            })
            
            if (shouldAddMeal) {
                activeMealArr.push(meal);
            }
        })
        console.log(activeMealArr);
        setActiveMeals(activeMealArr);
    }

    function handleCategorySelect(e) {
        const newActiveCategory = e.target.value;
        setActiveCategory(newActiveCategory);
    }

    function handleAddIngredient(e) {
        const newActiveIngredient = e.target.value
        // remove()
        const updatedIngredients = removeIngredient(ingredients, newActiveIngredient)
        setIngredients(updatedIngredients)
        // add()
        const updatedActiveIngredients = addIngredient(activeIngredients, newActiveIngredient)
        checkForActiveMeals(updatedActiveIngredients);
        setActiveIngredients(updatedActiveIngredients)
        // filter()
    }

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
				<br />
				<Row>
					<Col>
						<h5>Meal Options</h5>
						{Object.keys(meals).map((meal, i) => {
							return <div key={`${meal}-${i}`}>{meal}</div>
						})}
					</Col>
					<Col>
						<h5>Active Ingredients</h5>
						{activeIngredients.map((activeIng, i) => {
							return <div key={`${activeIng}-${i}`}>{activeIng}</div>
						})}
					</Col>
					<Col>
						<h5>All Ingredients</h5>
						{ingredients.map((ing, i) => {
							return (
								<div key={`${ing}-${i}`}>
									<button value={ing} onClick={handleAddIngredient}>+</button>
                                    {'  '}
									{ ing }
								</div>
							)
						})}
					</Col>
				</Row>
			</>
		)
}

export default Index;
