import {combineReducers} from 'redux';
import DataContact from './DataContact';
import PutDataContact from './PutDataContact';
import PostDataContact from './PostDataContact';
import DeleteDataContact from './DeleteDataContact';
const reducers = combineReducers({
  DataContact,
  PutDataContact,
  PostDataContact,
  DeleteDataContact,
});

export default reducers;
