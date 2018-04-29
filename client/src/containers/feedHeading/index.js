import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setViewFeed } from '../../modules/actions';
import FeedHeading from './FeedHeading';


const mapStateToProps = state => ({
  viewingFeedDetails: state.actions.viewingFeedDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setViewFeed
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FeedHeading);
