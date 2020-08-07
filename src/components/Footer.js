import React, {Component} from "react";

class Header extends Component {

    render() {
        return (
            <div>
                <p>Note that we start the search in tbody, to prevent filtering the table headers.</p>
            </div>
        )
    }
}

export default Header;