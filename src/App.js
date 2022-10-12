import './App.css';
import { store, persistor } from './redux/store'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import Main from "./containers/Main"

function App() {
  return (
    <>
    <h1 className='heading'>Daily Diary</h1>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;