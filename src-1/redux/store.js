/**
 * Created by zdy on 2018/10/30.
 */
import {createStore ,applyMiddleware} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import count from './reducres'

 import thunk from 'redux-thunk'

export default createStore(count,composeWithDevTools(applyMiddleware(thunk)))