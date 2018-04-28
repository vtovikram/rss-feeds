import React, { Component } from 'react';


class FeedDetails extends Component  {
   createMarkup(title) {
    return {__html: title};
  }
  render() {
    const searchData = this.props.searchData;
    const title = searchData.getElementsByTagName('content:encoded')[0].outerHTML;

    return (<div>
      <div dangerouslySetInnerHTML={this.createMarkup(title)} />;
    </div>);
  }

}

export default FeedDetails;
