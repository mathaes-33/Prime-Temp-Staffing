
import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon, XIcon } from './icons';
import { NotificationType } from '../../types';

interface NotificationProps {
  notification: NotificationType | null;
  onDismiss: () => void;
}

const icons = {
  success: <CheckCircleIcon className="h-6 w-6 text-green-400" />,
  error: <XCircleIcon className="h-6 w-6 text-red-400" />,
};

const Notification: React.FC<NotificationProps> = ({ notification, onDismiss }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (notification) {
      setShow(true);
      const timer = setTimeout(() => {
        handleDismiss();
      }, 5000); // Auto-dismiss after 5 seconds
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [notification]);
  
  const handleDismiss = () => {
      setShow(false);
      // Allow for fade-out transition before calling parent's dismiss
      setTimeout(() => {
          onDismiss();
      }, 300)
  }

  if (!notification) return null;

  return (
    <div
      aria-live="assertive"
      className={`fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start transition-all duration-300 ${ show ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        <div className={`max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300 ${ show ? 'translate-y-0 sm:translate-x-0' : 'translate-y-2 sm:translate-y-0 sm:translate-x-2' }`}>
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {icons[notification.type]}
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">{notification.type === 'success' ? 'Success' : 'Error'}</p>
                <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={handleDismiss}
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
