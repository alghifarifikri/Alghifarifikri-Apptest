import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Contact from './Contact';
import Profile from './Profile';
import {
  GetContact,
  PutContact,
  PostContact,
  DeleteContact,
} from '../Redux/Action/Index';

export default function Main() {
  const dispatch = useDispatch();
  let loadingData = useSelector(state => state.DataContact.loading);
  let loadingResult = useSelector(state => state.PutDataContact.loading);
  let loadingPostResult = useSelector(state => state.PostDataContact.loading);
  let loadingDelete = useSelector(state => state.DeleteDataContact.loading);
  let data = useSelector(state => state.DataContact.data);
  let putResult = useSelector(state => state.PutDataContact.data);
  let postResult = useSelector(state => state.PostDataContact.data);
  let deleteResult = useSelector(state => state.DeleteDataContact.data);
  const [rowData, setRowData] = useState({});
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    dispatch(GetContact());
    setShow(false);
    setAdd(false);
    setEdit(false);
    setRowData({});
  }, [dispatch, postResult, putResult, deleteResult]);

  const changeHandler = e => {
    const temp = {...rowData, ...e, photo: edit ? rowData.photo : 'N/A'};
    console.log({temp, e});
    setRowData(temp);
  };

  const deleteData = () => {
    dispatch(DeleteContact(rowData.id));
  };

  const submitData = () => {
    if (edit) {
      dispatch(PutContact(rowData, rowData.id));
    } else {
      dispatch(PostContact(rowData));
    }
  };
  return (
    <>
      {show === true ? (
        <Profile
          loading={loadingResult}
          loadingPost={loadingPostResult}
          loadingDelete={loadingDelete}
          data={rowData}
          edit={edit}
          add={add}
          show={show}
          onPress={() => {
            submitData();
          }}
          onDelete={() => deleteData()}
          onChange={e => changeHandler(e)}
        />
      ) : (
        <Contact
          data={data}
          loading={loadingData}
          refresh={() => dispatch(GetContact())}
          addBtn={() => {
            setShow(true);
            setAdd(true);
          }}
          onPress={e => {
            setRowData(e);
            setShow(true);
            setEdit(true);
          }}
        />
      )}
    </>
  );
}
