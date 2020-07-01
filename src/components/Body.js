import React,{Component} from "react";
import List from "./List";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";

class Portfolio extends Component {
    state = {
      currentPage: "List"
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    renderPage = () => {
      if (this.state.currentPage === "List") {
        return <div><List /></div>
      } else if (this.state.currentPage === "About") {
        return <About />;
      } else if (this.state.currentPage === "Contact") {
        return <Contact />;
      } else {
        return <List />;
      }
    };
  
    render() {
      return (
        <div>
          <NavBar
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>
      );
    }
  }
  
  export default Portfolio;