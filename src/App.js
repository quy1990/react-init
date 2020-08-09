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
            itemSelected: null,
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
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        let items = JSON.parse(localStorage.getItem("contacts")) ?? [];
        this.setState({
            items: items === null ? contacts.items : items,
        });
    }

    showAndHideAddForm() {
        this.setState({
            isShowForm: !this.state.isShowForm,
            itemSelected: null,
        })
    }

    handleSubmit(item) {
        let items = this.state.items;
        if (item.id !== "") { // edit
            items.forEach((element, key) => {
                if (element.id === item.id) {
                    items[key].firstName = item.firstName;
                    items[key].lastName = item.lastName;
                    items[key].email = item.email;
                }
            });
        } else { //add
            items.push({
                id: items.length + 1,
                firstName: item.firstName,
                lastName: item.lastName,
                email: item.email,
            });
        }
        this.setState({
            items: items,
            isShowForm: false
        });
        localStorage.setItem("contacts", JSON.stringify(items));
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

    handleEdit(item) {
        console.log(item);
        this.setState({
            itemSelected: item,
            isShowForm: true,
        })
    }

    handleDelete(id) {
        console.log("delete =" + id);
        const newlist = [].concat(this.state.items) // Clone array with concat or slice(0)
        newlist.splice(this.state.items.indexOf(id), 1);
        this.setState({
            items: newlist,
        });
        localStorage.setItem("contacts", JSON.stringify(this.state.items));
    }

    render() {
        let itemsOrigin = this.state.items;
        let items = [];
        let {strSearch, orderBy, orderType, itemSelected} = this.state;
        let isShowFrom = this.state.isShowForm;
        let form = null;

        if (isShowFrom) {
            form = <Form
                itemSelected={itemSelected}
                onClickCancel={this.closeFrom}
                onClickSubmit={this.handleSubmit}/>
        }

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
                    <Content
                        items={items}
                        onClickEdit={this.handleEdit}
                        onClickDelete={this.handleDelete}
                    />
                    <Footer/>
                </div>
            </div>
        )
            ;
    }
}

export default App;
