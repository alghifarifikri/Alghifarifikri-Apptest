import axios from 'axios';

export default function GetContact() {
  return async dispatch => {
    dispatch(SetLoading(true));
    try {
      const response = await axios.get(
        'https://simple-contact-crud.herokuapp.com/contact',
      );
      if (response.status === 200) {
        const dataServer = response.data.data;
        dispatch(SetDataContact(dataServer));
        dispatch(SetLoading(false));
      }
    } catch (e) {
      console.log('error', e);
    } finally {
      dispatch(SetLoading(false));
    }
  };
}

export function SetDataContact(data) {
  return {
    type: 'SET_DATA_CONTACT',
    payload: data,
  };
}

export function SetLoading(data) {
  return {
    type: 'SET_LOADING_DATA_CONTACT',
    payload: data,
  };
}
