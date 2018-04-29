import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';


import FeedHeadings from '../feedHeading';

class landingPage extends Component  {
  constructor(props) {
    super(props);
    this.state = {bookmarks: this.props.bookmarks};
  }

  addToBookmarks(bookmarks) {
    this.props.addToBookmarks(bookmarks);
    this.forceUpdate();
  }


  render() {

    let feedHeading = '';
    if((this.props.backchannel)&& (this.props.backchannel !== '')){
      feedHeading = Object.keys(this.props.backchannel).map((key) => {
        return (<FeedHeadings searchData={this.props.backchannel[key]} addToBookmarks={this.addToBookmarks.bind(this)}/>);
      });
    }
    let bookmarks = '';
    if(this.props.bookmarks.length){
      bookmarks =this.props.bookmarks.map((t, i) => {
        return (<FeedHeadings searchData={t} key={i} />);
      });
    }

    return (<div className="viewAlldetails">
      <Tabs >
        <Tab label="Things i want to read">
          <div>
            {bookmarks}
          </div>
        </Tab>
        <Tab
          label="Backchannel Feeds"
          data-route="/home"
          onActive={this.props.increment}>
          <div>
              {feedHeading}
          </div>
        </Tab>
        <Tab label="Feeds-2" >
          <div>
              Feeds2 tab.
          </div>
        </Tab>
        <Tab label="Feeds-3" >
          <div>
              Feeds3 tab.
          </div>
        </Tab>
      </Tabs>
    </div>);
    }
  }

export default landingPage;
