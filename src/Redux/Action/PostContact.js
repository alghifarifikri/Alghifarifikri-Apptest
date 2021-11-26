import axios from 'axios';
import {ToastAndroid} from 'react-native';

export default function PostContact(body, id) {
  return async dispatch => {
    delete body.id;
    dispatch(SetPostLoading(true));
    try {
      const response = await axios.post(
        'https://simple-contact-crud.herokuapp.com/contact',
        body,
      );
      if (response.status === 200 || response.status === 201) {
        const dataServer = response.data.message;
        dispatch(SetPostContact(dataServer));
        dispatch(SetPostLoading(false));
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
      dispatch(SetPostLoading(false));
      dispatch(SetPostContact([]));
    }
  };
}

export function SetPostContact(data) {
  return {
    type: 'SET_POST_CONTACT',
    payload: data,
  };
}

export function SetPostLoading(data) {
  return {
    type: 'SET_LOADING_POST_CONTACT',
    payload: data,
  };
}
