import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// components
import DeleteButton from "./components/DeleteButton";
import Search from "./components/Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemToDelete: "😅I bet you can't delete me!",
      search: "",
    };
  }

  handleDelete() {
    this.setState({
      itemToDelete: "😵I've been deleted",
    });
    setTimeout(() => {
      this.setState({
        itemToDelete: "😅I bet you can't delete me!",
      });
    }, 3000);
  }

  handleSearch(searchString) {
    this.setState({
      search: searchString,
    });
  }

  render() {
    return (
      <div>
        <center>
          <h1 className="p-5">@stevenriggs/react-library</h1>
          <table border="1" cellpadding="50">
            <tbody>
              <tr>
                <td>
                  <h2>DeleteButton</h2>
                  <h6 className="py-2">{this.state.itemToDelete}</h6>
                  {this.state.itemToDelete !== "😵I've been deleted" && (
                    <DeleteButton onDelete={this.handleDelete.bind(this)} />
                  )}
                </td>
                <td>Instructions</td>
              </tr>
              <tr>
                <td>
                  <h2>Search</h2>
                  <Search onChange={this.handleSearch.bind(this)} />
                  <h6 className="pt-3">The search is: {this.state.search}</h6>
                </td>
                <td>Instructions</td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
