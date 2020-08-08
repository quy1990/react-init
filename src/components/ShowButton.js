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
        let elmButton = <button onClick={this.handleAdd} className="btn btn-primary float-right"
                                type="button">Show</button>;
        if (this.props.isShowForm) {
            elmButton = <button onClick={this.handleAdd} className="btn btn-primary float-right"
                                type="button">Close</button>;
        }
        return (
            <div>
                {elmButton}
                <br/>
                <br/>
            </div>
        );
    }
}

export default ShowButton;