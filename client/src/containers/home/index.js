
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, addToBookmarks, mediumMatter, fetchEconomist } from '../../modules/actions';
import landingPage from './landingPage';

const mapStateToProps = state => ({
  isIncrementing: state.actions.isIncrementing,
  backchannel: state.actions.backchannel,
  bookmarks: state.actions.bookmarks,
  medidumMatter: state.actions.medidumMatter,
  economist:state.actions.economist
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      addToBookmarks,
      mediumMatter,
      fetchEconomist,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(landingPage);
