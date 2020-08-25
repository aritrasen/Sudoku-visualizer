import {createStore,applyMiddleware} from 'redux'
import { devToolsEnhancer  } from 'redux-devtools-extension'
import reducer from './reducer'


function configureStore(intialState={})
{
    const store = createStore(reducer, intialState,devToolsEnhancer())
    return store
}

export default configureStore;