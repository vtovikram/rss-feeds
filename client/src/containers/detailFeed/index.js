
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setViewFeed } from '../../modules/actions';
import expandedFeed from './expandedFeed';


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

export default connect(mapStateToProps, mapDispatchToProps)(expandedFeed);
