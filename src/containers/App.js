import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';

export default class App extends Component {
    _fetchPhotos() {
        const pageActions = this.props.pageActions;
        const result = ['photo1', 'photo2', 'photo3'];
        const errorMessage = 'Access forbidden';

        pageActions.downloadPhotosStart();

        let success = Math.ceil(Math.random() * 2) - 1;

        if (success) {
            setTimeout(pageActions.downloadPhotosSuccess, 1000, result);
        } else {
            setTimeout(pageActions.downloadPhotosError, 1000, errorMessage);
        }
    }

    render() {
        const { user, page } = this.props;
        const { setYear } = this.props.pageActions;
        return <div>
            <User name={user.name}/>
            <Page
              setYear={setYear}
              downloadPhotos={::this._fetchPhotos}
              {...page}
            />
        </div>
    }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

