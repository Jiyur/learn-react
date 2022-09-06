import { Link, Route, Routes } from 'react-router-dom';
import AlbumFeater from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      Home page
      <Routes>
      <Route path="/todos" element={<TodoFeature/>}/>
      <Route path="/albums" element={<AlbumFeater/>}/>
      </Routes>
    </div>
  );
}

export default App;
