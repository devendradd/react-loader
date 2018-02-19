import React, { Component } from 'react';
import './loader2.css';

export default class ReactLoader extends Component {
  constructor(props){
       super(props);
  }

  render() {
    var displayString = '';
    if(this.props.isLoaderActive){
        displayString = (
          <div>
            <div className="loading">
                Loading&#8230;
            </div>
            <div className="innerDiv">
                <h3> {this.props.text}</h3>
            </div>
          </div>
        )
    }
    return(
        <div>
          {displayString}
        </div>
    );
  }
}
