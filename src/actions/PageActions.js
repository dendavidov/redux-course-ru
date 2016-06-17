import { SET_YEAR, DOWNLOAD_PHOTOS_START, DOWNLOAD_PHOTOS_SUCCESS, DOWNLOAD_PHOTOS_ERROR } from '../constants/Page'

export function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year
    }
}

export function downloadPhotosStart() {
    return {
        type: DOWNLOAD_PHOTOS_START
    }
}

export function downloadPhotosSuccess(payload) {
    return {
        type: DOWNLOAD_PHOTOS_SUCCESS,
        payload
    }
}

export function downloadPhotosError(error) {
    return {
        type: DOWNLOAD_PHOTOS_ERROR,
        payload: error
    }
}