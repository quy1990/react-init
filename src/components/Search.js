import React, {Component} from "react";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            strSearch: "2132343",
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text"
                           value={this.state.strSearch}
                           onChange={this.handleChange}
                           className="form-control"
                           placeholder="search firstName"
                           aria-label="Recipient's username"
                           aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button onClick={this.handleSearch} className="btn btn-outline-secondary" type="button">Search
                        </button>
                        <button onClick={this.handleClear} className="btn btn-warning" type="button">clear
                        </button>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default Search;