import React, {Component} from "react";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const row = this.props.item;
        return (
            <tr>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
            </tr>
        )
    }
}

export default Item;