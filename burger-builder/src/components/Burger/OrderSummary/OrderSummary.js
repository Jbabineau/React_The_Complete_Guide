import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>);
        });

    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>continue to checkout?</p>
            <Button
                buttonType='Danger'
                clicked={props.purchaseCancelled}
            >
                CANCEL
            </Button>
            <Button
                buttonType='Success'
                clicked={props.ourchaseContinued}
            >
                CONTINUE
            </Button>
        </Aux>
    );
};

export default OrderSummary;