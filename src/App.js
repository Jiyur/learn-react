import { Link, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeater from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      Home page
      <Routes>
      <Route path='/' exact/>
      <Route path="/todos" element={<TodoFeature/>} exact/>
      <Route path="/albums" element={<AlbumFeater/>} exact/>
      <Route element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
