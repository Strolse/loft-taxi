import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ROUTE, coordsAction } from '../actions';
import { serverRoute } from '../../asyncActions/api';


export function* routeWorker(action) {
    const { from, to } = action.payload;

    const coordinates = yield call(
        serverRoute, 
        from, to);
        console.log(from)
    yield put(coordsAction(coordinates));
    
}

export function* routeWatcher() {
    yield takeEvery(GET_ROUTE, routeWorker)

}
