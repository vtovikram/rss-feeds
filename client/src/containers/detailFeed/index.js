import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setViewFeed } from '../../modules/counter';

class detailFeed extends Component  {

  createMarkup(title) {
   return {__html: title};
 }
  render() {

    // this.context.router.replace(this.context.router.createPath({
    //       name: 'editApplication',
    //       params: { ...this.context.router.params }
    //     }));
    let title = '';
    if(this.props.viewingFeedDetails) {
      const searchData = this.props.viewingFeedDetails;
      title = searchData.getElementsByTagName('content:encoded')[0].outerHTML;
    }

     return (<div className="feedDetails">
       <div dangerouslySetInnerHTML={this.createMarkup(title)} />
       {!this.props.viewingFeedDetails && <div>Go Home</div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(detailFeed);
