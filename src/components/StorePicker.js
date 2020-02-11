import React, { Fragment } from 'react';

class StorePicker extends React.Component {
    render() {
        return ( //do not forget space and brackets if you return multiple lines
            <form className="store-selector">
                { /* this is how you can comment in jsx */ }
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;




//import React from 'react';

//class StorePicker extends React.Component {
//    render() {
//        return ( //do not forget space and brackets if you return multiple lines
//        <React.Fragment> {/*use React.Fragment or blank tag <> as wrapper*/}
//            <p>Fish!</p> {/*you can not return sibiling elements, wrap it in another tag*/}
//            <form className="store-selector">
//                <h2>Please Enter A Store</h2>
//            </form> {/*in jsx use className intead of class*/}
//        </React.Fragment>
//        )
//    }
//}

//export default StorePicker;
