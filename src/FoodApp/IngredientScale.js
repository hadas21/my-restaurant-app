import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function IngredientScale({ingredientCount}) {
    return (
        <>
        <h4>Ingredient Scale</h4>
        <Row>
            <Col>Less Frequent</Col>
            <Col>More Frequent</Col>
        </Row>
        </>
    )
}