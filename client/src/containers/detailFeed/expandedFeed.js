import React, { Component } from 'react';

class expandedFeed extends Component  {

  createMarkup(title) {
   return {__html: title};
 }
  render() {

    // this.context.router.replace(this.context.router.createPath({
    //       name: 'editApplication',
    //       params: { ...this.context.router.params }
    //     }));
    let title = '';
    let title2 = '';
    if(this.props.viewingFeedDetails) {
      const searchData = this.props.viewingFeedDetails;
      title = searchData.getElementsByTagName('content:encoded')[0].outerHTML;
      title2 = searchData.getElementsByTagName('title')[0].textContent;
    }

     return (<div className="feedDetails">
     <h1>{title2}</h1>
       <div dangerouslySetInnerHTML={this.createMarkup(title)} />
       {!this.props.viewingFeedDetails && <div>Go Home</div>}
     </div>);

  }

}

export default expandedFeed;
