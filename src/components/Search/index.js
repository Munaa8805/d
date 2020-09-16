import React, { Component } from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { IconContext } from "react-icons";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("return", this.state.title);
    const { history } = this.props;
    history.push(`/search/${this.state.title}`);
  };
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div className={classes.searchContainer}>
        <form
          action="yourpage.com/sitepage"
          style={{ border: "1px solid #e6e6e6" }}
          onSubmit={this.handleSubmit}
        >
          <input
            style={{ color: "grey" }}
            type="text"
            placeholder="Xайлт хийх"
            name="search"
            onChange={this.handleTitleChange}
            className={classes.Input}
          />
          <Link to={`/search/${this.state.title}`}>
            <button type="submit">
              <IconContext.Provider
                value={{
                  size: "20px",
                  color: "#9F627D",
                  className: "global-class-name",
                }}
              >
                <IoMdSearch />
              </IconContext.Provider>
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Search;
