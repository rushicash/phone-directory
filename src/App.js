import Header from "./Header";
import './App.css';
import { Component } from "react";
import { render } from "@testing-library/react";

function clickHandler() {
  alert("Delete Clicked");
}


class App extends Component {

  constructor() 
  {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }
  
  

  // let subscribers = [
  //   {
  //     id: 1,
  //     name: "Shilpa Bhat",
  //     phone: "9999999999"
  //   },
  //   {
  //     id: 2,
  //     name: "Shristi",
  //     phone: "8888888888"
  //   },
  //   { 
  //     id: 3,
  //     name:"Rushi",
  //     phone: "8055438390"
  //   }
  // ]
  render(){
    return (
      <div>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container header-container">
              <span className="grid-item name-heading">Name</span>
              <span className="grid-item phone-heading">Phone</span>
          </div>
          
          {
            this.state.subscribersListToShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container"> 
                  <button className="custom-btn delete-btn" onClick={clickHandler.bind(this, "Delete this message")}>Delete</button> 
                </span>
              </div>
            })
          }

        </div>
      </div>  
    );
  }
}

export default App;
