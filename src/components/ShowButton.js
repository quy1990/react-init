import React, {Component} from "react";

class ShowButton extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        this.props.onClickAdd();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAdd} className="btn btn-outline-secondary float-right" type="button">Show
                    button
                </button>
            </div>
        );
    }
}

export default ShowButton;