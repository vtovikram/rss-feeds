import React, { Component } from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';


import { Link } from 'react-router-dom';

import Bookmark from '../../bookmark.svg';

// import {getFirstImageForHeading} from '../../utils/dataParserUtils';


class FeedHeading extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick() {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


  createMarkup(title) {
    return {__html: title};
  }

  setRelatedFeed() {
    this.props.setViewFeed(this.props.searchData);
  }
  addBookMarks(event) {
    this.handleClick();
    this.props.addToBookmarks(this.props.searchData);
    event.stopPropagation();
  }

  render() {
    const searchData = this.props.searchData;
    const title = searchData.getElementsByTagName('title')[0].textContent;

    // const imageSource = getFirstImageForHeading(searchData);

    return (
      <Card key={this.props.index} className="feeds" onClick={this.setRelatedFeed.bind(this)}>
        <Link to="/detailFeed" >
        <CardHeader
          title={title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        </Link>
        {this.props.addToBookmarks &&
        <IconButton tooltip="Add Bookmark" touch={true} tooltipPosition="top-center" onClick={this.addBookMarks.bind(this)}>
        <img src={Bookmark} alt="Bookmark"></img>
        </IconButton>
      }
      <Snackbar
          open={this.state.open}
          message="Bookmark Added"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </Card>
    );
  }

}

export default FeedHeading;
