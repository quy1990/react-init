import React, {Component} from "react";
import Item from "./Item";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const items = this.props.items;
        const row = items.map((item, index) => {
            return <Item onClickDelete={this.props.onClickDelete} key={index} item={item}/>
        })
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody id="myTable">
                {row}
                </tbody>
            </table>
        )
    }
}

export default Content;