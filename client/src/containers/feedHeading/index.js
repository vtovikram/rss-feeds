import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setViewFeed } from '../../modules/counter';

class FeedHeadings extends Component  {

   createMarkup(title) {
    return {__html: title};
  }
setRelatedFeed() {
  var test = this.props.searchData;
  this.props.setViewFeed(test);
}

  render() {
    const searchData = this.props.searchData;
    const title = searchData.getElementsByTagName('title')[0].textContent;

    return (<div>
      <Link to="/detailFeed" onClick={this.setRelatedFeed.bind(this)}>
    {title}
    </Link>
    </div>);
  }

}


const mapStateToProps = state => ({
  viewingFeedDetails: state.counter.viewingFeedDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setViewFeed
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FeedHeadings);
