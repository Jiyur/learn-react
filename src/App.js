import { useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import productApi from './api/productAPI';
import NotFound from './components/NotFound';
import AlbumFeater from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo/pages/ListPage';
import Header from './components/Header'

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params={
        _limit:10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList)
    };
    fetchProducts();
  },[]);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<CounterFeature/>} exact/>
        <Route path="/todos" element={<TodoFeature />} exact />
        <Route path="/albums" element={<AlbumFeater />} exact />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
