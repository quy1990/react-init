import React, {Component} from "react";

class Header extends Component {

    render() {
        return (
            <div>
                <h2>Filterable Table</h2>
                <p>Type something in the input field to search the table for first names, last names or emails:</p>
            </div>
        )
    }
}

export default Header;