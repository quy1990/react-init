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
            isShowForm: false,
            strSearch: "",
        }
        this.showAndHideAddForm = this.showAndHideAddForm.bind(this);
        this.closeFrom = this.closeFrom.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    showAndHideAddForm() {
        this.setState({
            isShowForm: !this.state.isShowForm
        })
    }


    handleSearch(value) {
        this.setState({
            strSearch: value
        })
    }

    closeFrom() {
        this.setState({
            isShowForm: false
        })
    }

    render() {
        console.log(this.state.strSearch);
        let itemsOrigin = this.state.items;
        let items = [];
        let isShowFrom = this.state.isShowForm;
        let search = this.state.strSearch;
        let form = null;

        if (search.length > 0) {
            itemsOrigin.forEach((item) => {
                    if (item.firstName.toLowerCase().indexOf(search) !== -1) {
                        items.push(item)
                    }
                }
            );
        } else {
            items = itemsOrigin;
        }

        if (isShowFrom) {
            form = <Form onClickCancel={this.closeFrom}/>
        }
        return (
            <div>
                <div className="container mt-3">
                    <Header/>
                    <Search onClickSearchGo={this.handleSearch}/>
                    <ShowButton
                        onClickAdd={this.showAndHideAddForm}
                        isShowForm={isShowFrom}
                    />
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
