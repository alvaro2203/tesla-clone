import { Provider } from 'react-redux';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { store } from "./app/store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
      </Provider>

      <Home />
    </div>
  );
}

export default App;
