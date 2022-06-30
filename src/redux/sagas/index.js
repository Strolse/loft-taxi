import { all, fork } from 'redux-saga/effects';
import { authWatcher } from './authWatcher';
import { paymentWatcher } from './paymentWatcher';
import { addressListWatcher } from './addressListWatcher';
import { routeWatcher } from './routeWatcher';
import { regWatcher } from './regWatcher';


export function* rootWatcher() {
  yield all([
    fork(authWatcher),
    fork(paymentWatcher),
    fork(addressListWatcher),
    fork(routeWatcher),
    fork(regWatcher)
  ])

}
