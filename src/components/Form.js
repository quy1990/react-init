import React, {Component} from "react";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel() {
        this.props.onClickCancel();
    }

    render() {
        return (
            <div>
                <h2>Firstname</h2>
                <input type="text" className="form-control" placeholder="Recipient's Firstname"
                       aria-label="Recipient's Firstname"
                       aria-describedby="basic-addon2"/>
                <h2>Lastname :</h2>
                <input type="text" className="form-control" placeholder="Recipient's Lastname"
                       aria-label="Recipient's Lastname"
                       aria-describedby="basic-addon2"/>
                <h2>Email :</h2>
                <input type="text" className="form-control" placeholder="Recipient's Email"
                       aria-label="Recipient's Email"
                       aria-describedby="basic-addon2"/>
                <br/>
                <button type="button" className="btn btn-success float-right">Success</button>
                <button onClick={this.handleCancel} type="button" className="btn btn-primary">Cancel</button>

                <br/>
                <br/>
            </div>
        )
    }
}

export default Form;