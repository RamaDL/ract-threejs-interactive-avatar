// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./home'));

export const Routing = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      {/* Redirect to / if user enters invalid route */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};
