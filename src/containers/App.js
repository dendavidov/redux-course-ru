import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';

export default class App extends Component {
    render() {
        const { user, page } = this.props;
        return <div>
            <User name={user.name}/>
            <Page year={page.year} photos={page.photos}/>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps)(App);

