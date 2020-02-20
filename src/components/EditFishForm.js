import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string, 
            status: PropTypes.string,
            price: PropTypes.number,
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func
    }

    handleChange = event => {
        console.log(event.currentTarget.value); //currentTarget is the thing that the event got fired on - this is the alternative of refs
        // update that fish
        // 1. take a copy of the current fish
        //console.log(event.currentTarget.name);
        const updatedFish = {
            ...this.props.fish,
            //name: event.currentTarget.value //updates fish name
            [event.currentTarget.name]: event.currentTarget.value
            //object keys can be computed [], can be dynamic
        };
        //console.log(updatedFish);
        //we send the update upstream to App component state
        this.props.updateFish(this.props.index, updatedFish);
    };
    render() {
        return (
            <div className="fish-edit">
                {/*We have an input where the value is set to fish name - living in state.*/}
                {/*When something changes on that input we call the onChange method*/}
                <input 
                    type="text" 
                    name="name" //in order to make computable object keys you need a name 
                    onChange={this.handleChange} 
                    value={this.props.fish.name}
                />
                <input 
                    type="text" 
                    name="price" 
                    onChange={this.handleChange} 
                    value={this.props.fish.price} 
                />
                <select 
                    type="text" 
                    name="status" 
                    onChange={this.handleChange} 
                    value={this.props.fish.status}
                > 
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea 
                    name="desc" 
                    onChange={this.handleChange} 
                    value={this.props.fish.desc} 
                />
                <input 
                    type="text" 
                    name="image" 
                    onChange={this.handleChange} 
                    value={this.props.fish.image} 
                />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        );
    }
}

export default EditFishForm; 

