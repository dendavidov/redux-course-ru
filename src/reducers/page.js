import { SET_YEAR, DOWNLOAD_PHOTOS_START, DOWNLOAD_PHOTOS_SUCCESS, DOWNLOAD_PHOTOS_ERROR } from '../constants/Page';

const initialState = {
    year: 2016,
    photos: [],
    downloading: false,
    errorText: null
};

export default function page(state = initialState, action) {

    switch (action.type) {
        case SET_YEAR:
            return {...state, year: action.payload};
        case DOWNLOAD_PHOTOS_START:
            return {
              ...state,
              downloading: true
            };
        case DOWNLOAD_PHOTOS_SUCCESS:
            return {
              ...state,
              downloading: false,
              errorText: null,
              photos: action.payload
            };
        case DOWNLOAD_PHOTOS_ERROR:
            return {
              ...state,
              downloading: false,
              errorText: action.payload
            };
        default:
            return state;
    }

}