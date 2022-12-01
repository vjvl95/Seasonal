import { Navigate, Route, Routes, Outlet } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { Home, Name, Category, SlotMachine, Test } from '../pages';
export default function index() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/name' element={<Name />} />
        <Route path='/selectCategory' element={<Category />} />
        <Route path='/slotMachine' element={<SlotMachine />} />
        <Route path='/test' element={<Test />} />

        {/* <Route path='/test' element={<Test />} />
        <Route path='/test/slice' element={<SliceTest />} />
        <Route path='/write' element={<Editor />} /> */}
      </Route>
    </Routes>
  );
}
