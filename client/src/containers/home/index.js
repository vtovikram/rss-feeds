import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment } from '../../modules/counter';
import FeedHeadings from '../feedHeading';

class Home extends Component  {



  render() {

    let feedHeading = '';

    if((this.props.backchannel)&& (this.props.backchannel !== '')){

      feedHeading = Object.keys(this.props.backchannel).map((t, i) => {
          return (<FeedHeadings searchData={this.props.backchannel[t]} key={i} />);
      });

    }

    return (<div>
      <h1>Home</h1>

        <button onClick={this.props.increment} disabled={this.props.isIncrementing}>
          Backchannel news feed
        </button>
        {feedHeading}

    </div>);
  }

}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  backchannel: state.counter.backchannel
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
