import React, {Fragment, Component} from 'react';


import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //This could be functional component cus it doesn't access state
    componentDidUpdate(){
        console.log('[orderSummary will update]')
    }

    render() {
        const ingredientSummary = Object.keys( this.props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li> );
        } );

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A burger</p>
                <ul>
                    {ingredientSummary}
                </ul>
                 <p><strong>Total Price:  {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
            </Fragment>
        )
        


    }

} 
    
    

    



export default OrderSummary;