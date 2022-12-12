import './App.css';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1 style={{ textAlign: 'center' }}>Welcome to Redux</h1>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
