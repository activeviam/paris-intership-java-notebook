import { call, put, takeEvery } from 'redux-saga/effects';

import { ActionTypes, COMMANDS_ACTIONS } from './actions';

import { API } from './api';

export function* processCommandRequest(params: any): Iterator<any> {
    try {
        const rep = yield call(API.sendCommand, params.payload.command);
        const data = rep.data;
        // // add missing value from api
        yield put(COMMANDS_ACTIONS.processingCommandSuccess({codeOutput: data, id: params.payload.id}));
    } catch (error) {
        yield put(COMMANDS_ACTIONS.processingCommandFailure());
    }
}

export function* commandSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.PROCESS_COMMAND_REQUEST, processCommandRequest);
}
