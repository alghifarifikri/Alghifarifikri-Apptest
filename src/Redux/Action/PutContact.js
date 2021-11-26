import axios from 'axios';
import {ToastAndroid} from 'react-native';

export default function PutContact(body, id) {
  return async dispatch => {
    delete body.id;
    dispatch(SetPutLoading(true));
    try {
      const response = await axios.put(
        `https://simple-contact-crud.herokuapp.com/contact/${id}`,
        body,
      );
      if (response.status === 200 || response.status === 201) {
        const dataServer = response.data.message;
        dispatch(SetPutContact(dataServer));
        dispatch(SetPutLoading(false));
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
      dispatch(SetPutLoading(false));
      dispatch(SetPutContact([]));
    }
  };
}

export function SetPutContact(data) {
  return {
    type: 'SET_PUT_CONTACT',
    payload: data,
  };
}

export function SetPutLoading(data) {
  return {
    type: 'SET_LOADING_PUT_CONTACT',
    payload: data,
  };
}
