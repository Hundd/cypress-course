import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import {
  Example1Page,
  Example2Page,
  Example3Page,
  Example4Page,
  HomePage,
  NotFoundPage,
} from './pages';
import './App.css';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact element={<HomePage />} >
      <Route path="/example-1" element={<Example1Page />} />
      <Route path="/example-2" element={<Example2Page />} />
      <Route path="/example-3" element={<Example3Page />} />
      <Route path="/example-4" element={<Example4Page />} />
      <Route element={<NotFoundPage />} />
    </Route>

  ))

