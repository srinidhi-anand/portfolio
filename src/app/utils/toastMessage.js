// app/ToastProvider.tsx (create a new client component file)
'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastProvider({ children }) {
    return (
        <>
            {children}
            <ToastContainer
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                position="top-right"
                autoClose={500000}
            />
        </>
    );
}
