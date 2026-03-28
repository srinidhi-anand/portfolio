'use client';

import React from 'react';

const ModalComponent = ({ src, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity flex items-center justify-center z-50 p-4 md:p-12"
            onClick={onClose}
        >
            <div

                className="relative w-fit max-w-full max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-0 right-2 rounded-full text-white bg-gray-800 w-6 h-6 flex items-center justify-center z-10  shadow-lg hover:text-gray-300 transition-colors"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <img src={src} alt="Modal content" className="max-w-full rounded-lg object-contain max-h-[85vh] w-auto h-auto" />
            </div>
        </div >
    );
};

export default ModalComponent;
