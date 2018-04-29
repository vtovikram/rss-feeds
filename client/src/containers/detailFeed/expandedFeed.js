import React, { Component } from 'react';

class expandedFeed extends Component  {

  createMarkup(title) {
   return {__html: title};
 }
  render() {

  //:TODO redirect back to home page when page refresh with in a expanded feed
    let title = '';
    let content = '';
    if(this.props.viewingFeedDetails) {
      const searchData = this.props.viewingFeedDetails;
      content = searchData.getElementsByTagName('content:encoded')[0].outerHTML;
      title = searchData.getElementsByTagName('title')[0].textContent;
    }

     return (<div className="feedDetails">
     <h1>{title}</h1>
       <div style={{"text-align": "justify"}} dangerouslySetInnerHTML={this.createMarkup(content)} />
       {!this.props.viewingFeedDetails && <div>Go Home</div>}
     </div>);

  }

}

export default expandedFeed;
