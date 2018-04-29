import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';


import FeedHeadings from '../feedHeading';

class landingPage extends Component  {

  render() {

    let feedHeading = '';

    if((this.props.backchannel)&& (this.props.backchannel !== '')){
      feedHeading = Object.keys(this.props.backchannel).map((t, i) => {
        return (<FeedHeadings searchData={this.props.backchannel[t]} key={i} />);
      });
    }

    return (<div className="viewAlldetails">
      <Tabs >
        <Tab label="Things i want to read" >
          <div>
            <p>
              BOOKMARKS tab.
            </p>
          </div>
        </Tab>
        <Tab
          label="Backchannel Feeds"
          data-route="/home"
          onActive={this.props.increment}>
          <div>
            <p>
              {feedHeading}
            </p>
          </div>
        </Tab>
        <Tab label="Feeds-2" >
          <div>
            <p>
              Feeds2 tab.
            </p>
          </div>
        </Tab>
        <Tab label="Feeds-3" >
          <div>
            <p>
              Feeds3 tab.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>);
    }
  }

export default landingPage;
