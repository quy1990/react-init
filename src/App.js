import React, {Component} from 'react';
import './App.css';
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Form from "./components/Form";
import ShowButton from "./components/ShowButton";
import contacts from "./Data/contacts";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: contacts.items,
            isShowForm: true
        }
        this.showAndHideAddForm = this.showAndHideAddForm.bind(this);
    }

    showAndHideAddForm() {
        this.setState({
            isShowForm: !this.state.isShowForm
        })
    }

    render() {
        let items = this.state.items;
        let isShowFrom = this.state.isShowForm;

        let form = null;

        if (isShowFrom) {
            form = <Form/>
        }
        return (
            <div>
                <div className="container mt-3">
                    <Header/>
                    <Search/>
                    <ShowButton onClickAdd={this.showAndHideAddForm}/>
                    {form}
                    <Content items={items}/>
                    <Footer/>
                </div>
            </div>
        )
            ;
    }
}

export default App;
