import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function IngredientScale({ingredientCount}) {
 
    //remove duplicates (reduce)
    const frequencyArr = Object.values(ingredientCount)
    const reducedFrequencyArr = frequencyArr.reduce((prev, curr) => {
        if(!prev.includes(curr)){
            prev.push(curr)
        }
        return prev
    }   
    , [])
   
    //sort (low to high)
    const sortedArr = reducedFrequencyArr.sort((a, b) => a - b)
  
    //style each element (map)
    const maxCount = Math.max(...sortedArr)
    const styleArr = sortedArr.map(item => {
        const ratio = maxCount / item
        return {
            'filter': `brightness(${ratio + 1})`,
            'backgroundColor': 'green'
        }
    })

    return (
			<>
				<h4>Ingredient Scale</h4>
				<Row>
					<Col>Less Frequent</Col>

                   { styleArr.map((style, i) => {
                        return <Col key={i} style={style}></Col>
                    })}
					
					<Col>More Frequent</Col>
				</Row>
			</>
		)
}