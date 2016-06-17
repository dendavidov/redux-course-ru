import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {

    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, logger)
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer.default)
        })
    }

    return store;
}