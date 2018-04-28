import React, { Component } from 'react';


class FeedHeadings extends Component  {
   createMarkup(title) {
    return {__html: title};
  }
  render() {
    const searchData = this.props.searchData;
    const title = searchData.getElementsByTagName('title')[0].textContent;

    return (<div>
    {title}
    </div>);
  }

}

export default FeedHeadings;
