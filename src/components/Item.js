import React, {Component} from "react";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete(id) {
        this.props.onClickDelete(id);
    }

    handleEdit(item) {
        this.props.onClickEdit(item);
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
                    <button onClick={() => this.handleEdit(row)}>edit</button>
                    <button onClick={() => this.handleDelete(row.id)}>delete</button>
                </td>
            </tr>
        )
    }
}

export default Item;