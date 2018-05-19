import { takeLatest, put, select } from 'redux-saga/effects'
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions'
import { getUsers } from '../api'

function* fetchData() {
  try {
    const { data } = yield getUsers()

    yield put({
      type: FETCH_DATA_SUCCESS,
      users: data.data
    })
  } catch(e) {

    yield put({
      type: FETCH_DATA_FAILURE,
      error: e
    })

  }

  // const state = yield select();
  // console.log(state);
}

function* rootSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData)
}

export default rootSaga;