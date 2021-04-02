import './index.css'
import Page from './pages/Page'
import NotFound from './pages/NotFound'
import darkTheme from './darkTheme'
import AllReducers from './reducers'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import storage from 'redux-persist/lib/storage'
import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const persistConfig = { key: 'root', storage }
let combine = combineReducers({ AllReducers })
let persistedReducer = persistReducer(persistConfig, combine)
let store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
let persistor = persistStore(store)

// Listen for state change => run callback function
// persistor.subscribe(() => console.log(persistor))


ReactDOM.render(
    (
        <MuiThemeProvider theme={darkTheme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Switch>
                            <Route exact path='/scenicSpot' component={Page}></Route>
                            <Route path='/scenicSpot/:route' component={Page}></Route>
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </PersistGate>
            </Provider>
        </MuiThemeProvider>
    ),
    document.getElementById('root')
)