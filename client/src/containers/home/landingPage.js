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

    let medidumMatter = '';
    if((this.props.medidumMatter)&& (this.props.medidumMatter !== '')){
      medidumMatter = Object.keys(this.props.medidumMatter).map((key) => {
        return (<FeedHeadings searchData={this.props.medidumMatter[key]} addToBookmarks={this.addToBookmarks.bind(this)}/>);
      });
    }
    let economist = '';
    if((this.props.economist)&& (this.props.economist !== '')){
      economist = Object.keys(this.props.economist).map((key, index) => {
        return (<FeedHeadings searchData={this.props.economist[key]} index={index} addToBookmarks={this.addToBookmarks.bind(this)}/>);
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
          onActive={this.props.fetchBackChannel}>
          <div>
              {feedHeading}
          </div>
        </Tab>
        <Tab label="Medium Matter Feeds"
        onActive={this.props.mediumMatter}>
          <div>
              {medidumMatter}
          </div>
        </Tab>
        <Tab label="The Economist Feeds" onActive={this.props.fetchEconomist}>
          <div>
              {economist}
          </div>
        </Tab>
      </Tabs>
    </div>);
    }
  }

export default landingPage;
