import { takeEvery, call, put, all } from 'redux-saga/effects';
import { AUTHENTICATE, loginAction } from '../actions';
import { serverLogin } from '../../asyncActions/api';

const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
      const { email, password } = action.payload;
      const {success, token} = await serverLogin(email, password);

      if (success) {
          await store.dispatch(loginAction(token))
      }
  } 
}

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

