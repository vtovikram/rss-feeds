
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment } from '../../modules/actions';
import landingPage from './landingPage';

const mapStateToProps = state => ({
  isIncrementing: state.actions.isIncrementing,
  backchannel: state.actions.backchannel
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(landingPage);
