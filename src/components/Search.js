import React, {Component} from "react";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            strSearch: "2132343",
            orderBy: "firstName",
            orderType: "asc",
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    handleSearch() {
        this.props.onClickSearchGo(this.state.strSearch);
    }

    handleClear() {
        this.setState({
            strSearch: ""
        })
        this.props.onClickSearchGo("");
    }

    handleChange(event) {
        this.setState({
            strSearch: event.target.value
        })
    }

    handleSort(event) {
        this.props.onClickSort(event.target.value);
    }

    render() {
        let {orderBy, orderType} = this.state;
        console.log(orderBy + "-" + orderType);
        return (
            <div className="row">
                <div className="input-group mb-3 col-6">
                    <input type="text"
                           value={this.state.strSearch}
                           onChange={this.handleChange}
                           className="form-control"
                           placeholder="search firstName"
                           aria-label="Recipient's username"
                           aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button onClick={this.handleSearch} className="btn btn-primary" type="button">Search
                        </button>
                        <button onClick={this.handleClear} className="btn btn-warning" type="button">clear
                        </button>
                    </div>
                </div>
                <div className="input-group mb-3 col-6">
                    <select onClick={this.handleSort}>
                        <option value="ASC">firstName - ASC</option>
                        <option value="DESC">firstName - DESC</option>
                    </select>
                    <button className="btn btn-primary" type="button">Filter
                    </button>
                </div>
            </div>
        )
    }
}

export default Search;