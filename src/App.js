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
            orderBy: 'firstName',
            orderType: "asc"
        }
        this.showAndHideAddForm = this.showAndHideAddForm.bind(this);
        this.closeFrom = this.closeFrom.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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


    handleSort(orderType) {
        //console.log(orderType);
    }

    handleDelete(id) {
        const newlist = [].concat(this.state.items) // Clone array with concat or slice(0)
        newlist.splice(id, 1);
        console.log(this.state.items);
        this.setState({
            items: newlist,
        })
    }

    render() {
        let itemsOrigin = this.state.items;
        let items = [];
        let {isShowFrom, strSearch, orderBy, orderType} = this.state;
        let form = null;

        if (strSearch.length > 0) {
            itemsOrigin.forEach((item) => {
                    if (item.firstName.toLowerCase().indexOf(strSearch) !== -1) {
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
                    <Search onClickSort={this.handleSort} onClickSearchGo={this.handleSearch} orderBy={orderBy}
                            orderType={orderType}/>
                    <ShowButton
                        onClickAdd={this.showAndHideAddForm}
                        isShowForm={isShowFrom}
                    />
                    {form}
                    <Content items={items} onClickDelete={this.handleDelete}/>
                    <Footer/>
                </div>
            </div>
        )
            ;
    }
}

export default App;
