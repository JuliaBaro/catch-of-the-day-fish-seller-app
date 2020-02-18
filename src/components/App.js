import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from '../base';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    //When the component mounts we are checking localStorage, we are setting that to state and we are setting up our sync state.
    //We are trying to render out the order before the fihes exist - this causes error.
    componentDidMount() {
        //console.log("MOUNTED!");
        const { params } = this.props.match;
        //first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        //console.log(localStorageRef);
        if(localStorageRef) {
            //error debug with console.log - Cannot read property 'status' of undefined
            //console.log('RESTORING IT');
            console.log(JSON.parse(localStorageRef));
            this.setState({ order: JSON.parse(localStorageRef) }); //turn item back from string into object
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        }); //this is not an input ref, it is different - sync with the name of the store
    }

    //it takes no arguments
    componentDidUpdate() {
        //console.log('IT IS UPDATED!');
        console.log(this.state.order);
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order)); //this is how I get the name of the store I am in (key, value)
    }

    componentWillUnmount() {
        //console.log("UNMOUNTING!");
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // 1. take a copy of the existing state - do not mutate state directly
        const fishes = {...this.state.fishes};
        // 2. add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. set the new fishes object to state
        this.setState({ fishes });
    };

    addToOrder = (key) => {
        // 1. make a copy of state
        const order = {...this.state.order};
        // 2. either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. call setState to update our state object
        this.setState({ order });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => 
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}
                            />
                        )}
                    </ul>
                </div>
                <Order {...this.state} /*fishes={this.state.fishes} order={this.state.order}*//>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }

}

export default App;

//We need to mirror our Fish state over to our Firebase. 
//In order to do that we need to wait until the App component is on the page.
//Then we get into lifecycle methods. 

