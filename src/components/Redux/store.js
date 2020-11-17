import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducers";
import createSagaMiddleware from "redux-saga";
import { watchGetDataSaga } from "./ReduxSaga/ticketSaga";
import rootSaga from "./ReduxSaga/ticketSaga";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
