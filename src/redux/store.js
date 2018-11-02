/**
 * Created by zdy on 2018/10/30.
 */
import {createStore ,applyMiddleware} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import reducres from './reducres'

 import thunk from 'redux-thunk'

export default createStore(reducres,composeWithDevTools(applyMiddleware(thunk)))