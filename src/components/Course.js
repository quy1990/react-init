import React, {Component} from 'react';
import './../App.css';
import Lesson from './Lesson';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDescription: false,
            totalStudent: 45
        };

        this.handleClick3 = this.handleClick3.bind(this);
        this.register = this.register.bind(this);
        this.showDescription = this.showDescription.bind(this);
    }

    handleClick1() {
        alert("btn 1");
    }

    handleClick2(str) {
        alert(str);
    }

    handleClick3() {
        alert(this.props.name);
    }

    register() {
        alert(this.refs.username.value);
    }

    getFullName(user) {
        return user.firstName + " " + user.lastName;
    }

    showDescription() {
        this.setState({
            isShowDescription: !this.state.isShowDescription,
        });
    }

    isShowButton() {
        const isShow = this.props.free;
        if (isShow) {
            return (
                <div>
                    <a href="#" onClick={() => this.handleClick1()} className="btn btn-primary">Go somewhere</a>
                    <a href="#" onClick={() => this.handleClick2("View 2")} className="btn btn-danger">Go somewhere</a>
                    <a href="#" onClick={() => this.handleClick3()} className="btn btn-success">Go somewhere</a>
                </div>
            );
        } else {
            return (
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username"
                           aria-label="Recipient's username" aria-describedby="basic-addon2" ref="username"></input>
                    <div className="input-group-append">
                        <button onClick={this.register} className="btn btn-outline-secondary" type="button">Button
                        </button>
                    </div>
                </div>
            );
        }
    }

    render() {
        const user = {
            firstName: "Tu Quy",
            lastName: "Nguyen"
        }
        console.log(this.state);

        let description = null;
        if (this.state.isShowDescription) {
            description = "some thing is happening here!!";
        }


        return (
            <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="card" style={{width: '18rem'}}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img className="card-img-top"
                         src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_173c83b04b4%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_173c83b04b4%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                         alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name} {this.props.time}</h5>
                        <button onClick={this.showDescription} className="btn btn-outline-secondary"
                                type="button">Show Description
                        </button>
                        <br/>
                        {description}
                        <Lesson/>
                        {this.isShowButton()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Course;
