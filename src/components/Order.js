import React from 'react';
import { formatPrice } from "../helpers";

class Order extends React.Component {
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key]; 
        const isAvailable = fish && fish.status === 'available';
        //make sure te fish is loaded before we continue
        if(!fish) return null;//if there is no fish return null  
        if(!isAvailable) {
            return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>
        }
        return (
        <li key={key}>
            {count} lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
        </li>
        );
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key]; //finds item by key
            const count = this.props.order[key]; //counts how many items the costumer wants
            const isAvailable = fish && fish.status === 'available'; //checks if the item is available in stock
            if(isAvailable) {
                return prevTotal + (count * fish.price)
            }
            return prevTotal;
        }, 0); //start from item 0

        return <div className="order-wrap">
            <h2>Order</h2>
            <ul className="order">
                {orderIds.map(this.renderOrder)/*(key => <li>{key}</li>)*/}
            </ul>
            <div className="total">
                Total: 
                <strong>{formatPrice(total)}</strong>
            </div>
        </div>
    }
}

export default Order;
