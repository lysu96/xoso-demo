import React from 'react'; // Cần cho React < 17
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import BlogPage from './pages/BlogPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // JSX cần React trong scope
    children: [
      { index: true, element: <HomePage /> },
      { path: 'ket-qua', element: <ResultPage /> },
      { path: 'blog', element: <BlogPage /> }
    ]
  }
]);

export default router;