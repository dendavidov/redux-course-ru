import React, { PropTypes, Component } from 'react';

export default class Page extends Component {

    onYearBtnClick(e) {
        let year = +e.target.textContent;
        this.props.fetchPhotos(year);
    }

    render() {
        const { year, photos, errorText, downloading } = this.props;
        return <div className='ib page'>

            <p>
                <button className='btn' onClick={::this.onYearBtnClick}>2016</button>
                <button className='btn' onClick={::this.onYearBtnClick}>2015</button>
                <button className='btn' onClick={::this.onYearBtnClick}>2014</button>
            </p>
            <h3>{ year} year</h3>
            { (errorText) ? <p>{ errorText }</p> : null }
            <p>{ (downloading) ? 'Loading...' : `You have ${photos.length} photos for ${year} year!` }</p>
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
};