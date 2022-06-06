import { takeEvery, call, put } from 'redux-saga/effects';
import { REGISTER, loginAction } from '../actions';
import { serverRegister } from '../../asyncActions/api';


export function* regWorker(action) {
  const { email, password, name, surname } = action.payload;
  const { success, token } = yield call(serverRegister, email, password, name, surname);
  if (success) {
    yield put(loginAction(token));
  }
}
export function* regWatcher() {

  yield takeEvery(REGISTER, regWorker)

}
