import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {

    /*constructor(props) {
        super(props);
        this.state = {...}
    }*/

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState(ingredients) {

        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler = (type) => {
        //console.log('In added: ' + type);
        const oldCount = this.state.ingredients[type];
        //console.log("old count " + oldCount);
        const updatedCount = oldCount + 1;
        //console.log("new count " + updatedCount);
        let updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        //console.log("updated ingredients: " + type + " "  + updatedIngredients[type]);

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        //console.log('In removed: ' + type);
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount > 0 ? oldCount - 1 : 0;
        let updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        const priceRemoval = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceRemoval;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

        this.updatePurchaseState(updatedIngredients);
    } 

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        //console.log(this.state.purchasable);

        return (
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    orderDisabled={this.state.purchasable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;