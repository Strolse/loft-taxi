import { takeEvery, call, put, all } from 'redux-saga/effects';
import { authWatcher } from './authWatcher';


export function* rootWatcher() {
  yield all([
    authWatcher()

  ])

}
