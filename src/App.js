import React, { Component } from 'react';
import { EntityView } from './components/EntityView';
import 'react-table/react-table.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

let
  industry = ["Basic Materials", "Consumer Goods", "Financials", "Health Care"],
  data = [
    { "name": "CELSA STEEL", "industry": "Basic Materials" },
    { "name": "ABBOTT LABORATORIES", "industry": "Basic Materials" },
    { "name": "PEPSICO CANADA ULC", "industry": "Consumer Goods" },
    { "name": "GENERAL MOTORS LLC", "industry": "Consumer Goods" },
    { "name": "UBS AMERICAS INC", "industry": "Financials" },
    { "name": "BARCLAYS BANK MAURITIUS LTD", "industry": "Financials" },
    { "name": "EASTRIDGE LP", "industry": "Financials" },
    { "name": "CCP LOAN FUNDING LLC", "industry": "Financials" },
    { "name": "CAPITA HEALTH & WELLBEING LTD", "industry": "Health Care" },
    { "name": "GE HEALTHCARE CLINICAL SYSTEMS UK LTD", "industry": "Health Care" }
  ];

class App extends Component {
  render() {
    return (
      <div className = "App-container">
        <EntityView
          filters={industry}
          data={data}/>
      </div>
    );
  }
}

export default App;
