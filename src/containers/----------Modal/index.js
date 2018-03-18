// import React, { Component } from 'react';

// import ModalRoute from 'react-router-modal';
// import 'react-router-modal/css/react-router-modal.css';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchBeers } from '../../actions/'; /// ???????????????????????

// class ModalContainer extends Component {
//   render() {
//     return (
//       <ModalRoute path="/modal-test" parentPath="/">
//         Hello
//       </ModalRoute>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     beers: state.beers,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchBeers }, dispatch); /// ???????????????????????
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

import React, { Component } from 'react';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { BrowserRouter, Link } from 'react-router-dom';

// assumes webpack loader for css
// ... or include this css however you do that in your project ...
import 'react-router-modal/css/react-router-modal.css';

function FooModal() {
  return <div>FOO</div>;
}


class Modal extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/foo">show foo</Link>

          <ModalRoute
            component={FooModal}
            path="/foo"
            className="test-modal test-modal-foo"
          />

          <ModalContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Modal;
