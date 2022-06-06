import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_ADDRESSES, addressListAction } from '../actions';
import { serverAddressList } from '../../asyncActions/api';


export function* addressListWorker(){
  const addresses = yield call(serverAddressList);

  yield put(addressListAction(addresses));
}

export function* addressListWatcher(){

  yield takeEvery(LOAD_ADDRESSES, addressListWorker)

}