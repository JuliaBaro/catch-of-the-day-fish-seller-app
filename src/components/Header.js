import React from 'react';

//this is the same code as the code commented out below
const Header = props => ( //implicite return 
    <header className="top">
        <h1>Catch 
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
        Day
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);


/*const Header = ({ tagline, age }) => ( //implicite return 
    <header className="top">
        <h1>Catch 
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
        Day
        </h1>
        <h3 className="tagline">
            <span>
                {tagline}
                {age}
            </span>
        </h3>
    </header>
);*/

/*class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>Catch 
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        );
    }
}*/

export default Header;
