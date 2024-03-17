import { createRoot } from 'react-dom/client';
import { router } from './App';
import { RouterProvider } from 'react-router-dom';
import './index.css'

const root = createRoot(document.getElementById('root'));
console.log(root)
root.render(<RouterProvider router={router} />);