import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import FeedHeadings from '../feedHeading';

class landingPage extends Component  {

  render() {

    let feedHeading = '';
    const style = {
      margin: 25
    };


    if((this.props.backchannel)&& (this.props.backchannel !== '')){
      feedHeading = Object.keys(this.props.backchannel).map((t, i) => {
        return (<FeedHeadings searchData={this.props.backchannel[t]} key={i} />);
      });
    }

    return (
      <div>
      <RaisedButton label="Backchannel news feed" primary={true} style={style} onClick={this.props.increment}/>


        {feedHeading}
      </div>);
    }
  }

export default landingPage;
