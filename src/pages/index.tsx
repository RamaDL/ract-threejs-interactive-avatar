// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./home'));
const Test = lazy(() => import('./test'));

export const Routing = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='test' element={<Test />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};
