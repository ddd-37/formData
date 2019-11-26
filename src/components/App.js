import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { log } from "util";

class App extends React.Component {
  async onFormSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID 1f62b339e2d14f114aae723132d06d9a8f08acf9d81c7b46172d5c3ff79d31ef"
      }
    });

    console.log("TCL: App -> response", response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
