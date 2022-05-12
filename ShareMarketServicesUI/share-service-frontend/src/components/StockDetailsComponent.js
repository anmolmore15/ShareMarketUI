import React from "react";
import Select from 'react-select';
import StockService from "../services/StockDetailsService";


const optionsExchange = [
    { label: "NSE", value: "NSE" },
    { label: "BSE", value: "BSE" },
  ];

  const optionsCap = [
    { label: "SMALL", value: 1 },
    { label: "MID", value: 2 },
    { label: "LARGE", value: 2 },
  ];

  const optionsCat = [
    { label: "AUTO", value: 1 },
    { label: "FMCG", value: 2 },
    { label: "IT", value: 3 },
    { label: "POWER", value: 4 },
    { label: "REALTY", value: 5 },
    { label: "TELECOM", value: 6 },
    { label: "PHARMA", value: 7 }
  ];

class StockServiceComponent extends React.Component {
 

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      exchange: "NSE",
      cap: "SMALL",
      category: "FMCG",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeExchangeHandler = this.changeExchangeHandler.bind(this);
    this.changeCapHandler = this.changeCapHandler.bind(this);
    this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
  }

  changeNameHandler = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  changeExchangeHandler = (event) => {
 
    // this.setState({ exchange: event.label });

    this.setState({
      exchange: event.label
    })
  };

  changeCapHandler = (event) => {
    this.setState({ cap: event.label });
  };

  changeCategoryHandler = (event) => {
    this.setState({ category: event.label });
  };

  // componentDidMount() {
  //   alert("in stock save component");
  //   console.log("componentDidMount of stock component.");
  // }

  submitHandler = (event) => {
    event.preventDefault();
    let stockDetails = {
      name: this.state.name,
      exchange: this.state.exchange,
      cap: this.state.cap,
      category: this.state.category,
    };
    console.log("in submithandler" + stockDetails);
    StockService.saveStockDetails(stockDetails)
    .then(response => console.log(response))
    .catch(error => {
      console.log(error);
     });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form name="shareForm" id="shareF">
                {<h1>Newly created stock id is</h1>}

                <div className="form-group">
                  <label> Name: </label>
                  <input
                    placeholder="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.changeNameHandler}
                    type="text"
                  ></input>
                </div>

                <div className="form-group">
                <label> Exchange: </label>
                  <Select                    
                    options={optionsExchange}   
                    placeholder="-Select Exchange-"                   
                    onChange={this.changeExchangeHandler}>
                  </Select>
                </div>

                <div className="form-group">
                <label> Cap: </label>
                  <Select
                    name="cap"                 
                    options={optionsCap} 
                    onChange={this.changeCapHandler}>
                                    
                  </Select>
                </div>
                <div className="form-group">
                <label> Category: </label>
                  <Select
                    name="category"            
                    options={optionsCat} 
                    onChange={this.changeCategoryHandler}>
                 
                  </Select>
                </div>

                <button
                  className="btn btn-success"
                  onClick={this.submitHandler}>
                
                  SaveShareDetails
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StockServiceComponent;
