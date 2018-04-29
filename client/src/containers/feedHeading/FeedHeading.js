import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';


import { Link } from 'react-router-dom';

import Bookmark from '../../bookmark.svg';

import {getFirstImageForHeading} from '../../utils/dataParserUtils';


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


  createMarkup(images) {
    if(images.length) {
      return {__html: images[0].outerHTML};
    }
  }

  setRelatedFeed() {
    this.props.setViewFeed(this.props.searchData);
  }
  addBookMarks(event) {
    this.handleClick();
    this.props.addToBookmarks(this.props.searchData);
    event.stopPropagation();
    event.preventDefault();
  }

  render() {
    const searchData = this.props.searchData;
    const title = searchData.getElementsByTagName('title')[0].textContent;

    const imageSource = getFirstImageForHeading(searchData);

    return (
      <Card key={this.props.index} className="feeds" onClick={this.setRelatedFeed.bind(this)}>
        <Link to="/detailFeed" >
        <CardHeader
          title={<div className="header__description">
          {title}
          {this.props.addToBookmarks &&
          <IconButton className="bookmarkButton"style={{"float":"right"}}tooltip="Add Bookmark" touch={true} tooltipPosition="top-center" onClick={this.addBookMarks.bind(this)}>
          <img src={Bookmark} alt="Bookmark"></img>
          </IconButton>}
          </div>
        }
          titleStyle={{"fontSize":"20px","display": "flex"}}
          actAsExpander={true}
          showExpandableButton={true}
        />



      <CardText>
      <div style={{"textAlign": "justify", "alignItems":"center"}} dangerouslySetInnerHTML={this.createMarkup(imageSource)} />

      </CardText>
      <Snackbar
          open={this.state.open}
          message="Bookmark Added"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        </Link>
      </Card>
    );
  }

}

export default FeedHeading;
