import React from "react";
import { render } from "react-dom";
// components
import { DeleteControl } from "./lib";
import { SearchControl } from "./lib";

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
                  <h2>DeleteControl</h2>
                  <h6 className="py-2">{this.state.itemToDelete}</h6>
                  {this.state.itemToDelete !== "😵I've been deleted" && (
                    <DeleteControl onDelete={this.handleDelete.bind(this)} />
                  )}
                </td>
                <td>Instructions</td>
              </tr>
              <tr>
                <td>
                  <SearchControl
                    disabled={false}
                    onSearch={this.handleSearch.bind(this)}
                    text={this.state.search}
                  />
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
