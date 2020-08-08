import React, {Component} from "react";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handlerDelete = this.handlerDelete.bind(this);
    }

    handlerDelete(id) {
        this.props.onClickDelete(id);
    }

    render() {
        const row = this.props.item;
        return (
            <tr>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>
                    <button>edit</button>
                    <button onClick={() => this.handlerDelete(row.id)}>delete</button>
                </td>
            </tr>
        )
    }
}

export default Item;