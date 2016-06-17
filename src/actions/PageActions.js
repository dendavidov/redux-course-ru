import { DOWNLOAD_PHOTOS_START, DOWNLOAD_PHOTOS_SUCCESS, DOWNLOAD_PHOTOS_ERROR } from '../constants/Page'

export function fetchPhotos(year) {
  return ( dispatch ) => {
      dispatch({
        type: DOWNLOAD_PHOTOS_START,
        year
      });

      const success = Math.ceil(Math.random() * 2) - 1;
      const photos = ['photo1', 'photo2', 'photo3'];
      const errorText = 'Access forbidden';

      if (success) {
          setTimeout(() => {
              dispatch({
                  type: DOWNLOAD_PHOTOS_SUCCESS,
                  payload: photos
              })
          }, 1000)
      } else {
          setTimeout (() => {
              dispatch({
                  type: DOWNLOAD_PHOTOS_ERROR,
                  payload: errorText
              })
          }, 1000)
      }
  }
}
