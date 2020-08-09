import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            firstName: "",
            lastName: "",
            email: ""
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    componentWillMount() {
        this.updateItem(this.props.itemSelected);
    }

    componentWillReceiveProps(nextProps) {
        this.updateItem(nextProps.itemSelected);
    }

    updateItem(item) {
        if (item !== null) {
            this.setState({
                id: item.id,
                firstName: item.firstName,
                lastName: item.lastName,
                email: item.email,
            });
        }
    }

    handleCancel = () => {
        this.props.onClickCancel();
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        let item = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }
        this.props.onClickSubmit(item);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <h2>Firstname :</h2>
                            <input
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Recipient's Firstname"
                                aria-label="Recipient's Firstname"
                                aria-describedby="basic-addon2"/>
                        </div>
                        <div className="col-6">
                            <h2>Lastname :</h2>
                            <input
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Recipient's Lastname"
                                aria-label="Recipient's Lastname"
                                aria-describedby="basic-addon2"/>

                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <h2>Email :</h2>
                            <input
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                type="text" className="form-control" placeholder="Email ..."
                                aria-label="Recipient's Email"
                                aria-describedby="basic-addon2"/>
                        </div>
                    </div>
                    <br/>
                    <button onClick={this.handleCancel} type="button" className="btn btn-primary float-right">Cancel
                    </button>
                    <button type="submit" className="btn btn-success float-right">Success</button>
                    <br/>
                    <br/>
                </form>
            </div>
        )
    }
}

export default Form;