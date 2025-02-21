import React, { useEffect } from 'react';
import clsx from 'clsx';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // affichage pendant 3 secondes

        return () => clearTimeout(timer);
    }, [onClose]);

    // Choix de la couleur de fond en fonction du type
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div
            className={clsx(
                'fixed top-16 right-4 z-50 text-white px-4 py-2 rounded shadow-lg',
                bgColor
            )}
        >
            {message}
        </div>
    );
};

export default Toast;