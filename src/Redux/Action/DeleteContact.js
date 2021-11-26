import axios from 'axios';
import {ToastAndroid} from 'react-native';

export default function DeleteContact(id) {
  return async dispatch => {
    const uri = `https://simple-contact-crud.herokuapp.com/contact/${id}`;
    console.log({uri});
    dispatch(SetDeleteLoading(true));
    try {
      const response = await axios.delete(
        `https://simple-contact-crud.herokuapp.com/contact/${id}`,
      );
      console.log({response});
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        const dataServer = response.data.message;
        dispatch(SetDeleteContact(dataServer));
        dispatch(SetDeleteLoading(false));
        ToastAndroid.showWithGravity(
          dataServer,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    } catch (e) {
      console.log('error', {e, respon: e.response});
      ToastAndroid.showWithGravity(
        'Failed, Try Again!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } finally {
      dispatch(SetDeleteLoading(false));
      dispatch(SetDeleteContact([]));
    }
  };
}

export function SetDeleteContact(data) {
  return {
    type: 'SET_DELETE_CONTACT',
    payload: data,
  };
}

export function SetDeleteLoading(data) {
  return {
    type: 'SET_LOADING_DELETE_CONTACT',
    payload: data,
  };
}
