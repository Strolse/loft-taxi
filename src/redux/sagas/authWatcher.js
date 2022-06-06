import { takeEvery, call, put } from 'redux-saga/effects';
import { AUTHENTICATE, loginAction } from '../actions';
import { serverLogin } from '../../asyncActions/api';


export function* authWorker(action){
  const { email, password } = action.payload;
  const {success, token} = yield call(serverLogin, email, password);
  if (success) {
    yield put(loginAction(token));
}
}

export function* authWatcher(){

  yield takeEvery(AUTHENTICATE, authWorker)

}

