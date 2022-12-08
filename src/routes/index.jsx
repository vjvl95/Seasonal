import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import WithoutTopBottom from 'layouts/WithoutTopBottom';
import { Home, Name, Category, SlotMachine, Result } from '../pages';
export default function index() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/name' element={<Name />} />
        <Route path='/selectCategory' element={<Category />} />
        <Route path='/slotMachine' element={<SlotMachine />} />
      </Route>

      <Route path='/' element={<WithoutTopBottom />}>
        <Route path='/result/:id' element={<Result />} />
      </Route>
    </Routes>
  );
}
