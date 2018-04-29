import React, { Component } from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

import { Link } from 'react-router-dom';

// import {getFirstImageForHeading} from '../../utils/dataParserUtils';


class FeedHeading extends Component  {


  createMarkup(title) {
    return {__html: title};
  }

  setRelatedFeed() {
    this.props.setViewFeed(this.props.searchData);
  }
  addBookMarks(event) {
    this.props.addToBookmarks(this.props.searchData);
    event.stopPropagation();
  }

  render() {
    const searchData = this.props.searchData;
    const title = searchData.getElementsByTagName('title')[0].textContent;

    // const imageSource = getFirstImageForHeading(searchData);

    return (

      <Card className="feeds" onClick={this.setRelatedFeed.bind(this)}>
        <Link to="/detailFeed" >
        <CardHeader
          title={title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        </Link>
        {this.props.addToBookmarks &&
        <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center" onClick={this.addBookMarks.bind(this)}>
          <ActionGrade />
        </IconButton>
      }
      </Card>
    );
  }

}

export default FeedHeading;
