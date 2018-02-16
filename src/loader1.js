import React, { Component } from 'react';
import './loader.css';

class loader1 extends Component {


  render() {
    return (
      <div className>
           <div className="overlay"> 
            </div>
           <div className="border">
              <div className="topdiv"> </div>
              <div class="spinner  spinner-Margin"></div>
              <h4> {this.props.data} </h4>
            </div>
      </div>
    );
  }
}

export default loader1;
