import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { Link } from 'react-router-dom';

// import {getFirstImageForHeading} from '../../utils/dataParserUtils';


class FeedHeading extends Component  {


  createMarkup(title) {
    return {__html: title};
  }

  setRelatedFeed() {
    this.props.setViewFeed(this.props.searchData);
  }

  render() {
    const searchData = this.props.searchData;
    const title = searchData.getElementsByTagName('title')[0].textContent;
    // const imageSource = getFirstImageForHeading(searchData);

    return (

      <Card class="feeds" onClick={this.setRelatedFeed.bind(this)}>
        <Link to="/detailFeed" >
        <CardHeader
          title={title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>

        </CardText>
        </Link>
      </Card>
    );
  }

}

export default FeedHeading;
