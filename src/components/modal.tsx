import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100 max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-medical-blue to-primary-700 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">📞</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Зв'яжіться з нами</h2>
            <p className="text-blue-100 mt-1 sm:mt-2 text-sm sm:text-base">Оберіть зручний спосіб зв'язку</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-6 space-y-3 sm:space-y-4">
          {/* Телефони */}
          <div className="group">
            <div className="flex items-center p-3 sm:p-4 bg-gray-50 hover:bg-medical-blue rounded-lg sm:rounded-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-white group-hover:text-green-500 transition-all duration-300 flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-sm sm:text-base text-medical-gray group-hover:text-white mb-1">Подзвонити зараз</div>
                <div className="flex flex-col sm:flex-row sm:gap-3 gap-1">
                  <a 
                    href="tel:+380936463938"
                    className="text-xs sm:text-sm text-gray-600 group-hover:text-blue-100 hover:underline transition-colors duration-300"
                  >
                    +38 (093) 646-39-38
                  </a>
                  <a 
                    href="tel:+380681414310"
                    className="text-xs sm:text-sm text-gray-600 group-hover:text-blue-100 hover:underline transition-colors duration-300"
                  >
                    +38 (068) 141-43-10
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="group">
            <a 
              href="mailto:twinmedical.od@gmail.com"
              className="flex items-center p-3 sm:p-4 bg-gray-50 hover:bg-medical-blue hover:text-white rounded-lg sm:rounded-xl transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-white group-hover:text-red-500 transition-all duration-300 flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm sm:text-base">Написати листа</div>
                <div className="text-xs sm:text-sm text-gray-600 group-hover:text-blue-100 truncate">twinmedical.od@gmail.com</div>
              </div>
            </a>
          </div>

          {/* Viber */}
          <div className="group">
            <a 
              href="viber://chat?number=%2B380681414310"
              className="flex items-center p-3 sm:p-4 bg-gray-50 hover:bg-medical-blue hover:text-white rounded-lg sm:rounded-xl transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-white group-hover:text-purple-500 transition-all duration-300 flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.644s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.42 7.15-.532.776-.257 5.162-.835 5.869-6.808.728-6.14-.36-10.024-3.009-11.68C17.87-.992 14.902-.08 11.4 0zm.132 1.588c3.25-.044 5.88.858 7.924 2.517 2.242 1.818 2.844 5.044 2.246 10.078-.6 5.05-4.12 5.54-4.76 5.756-.302.102-2.94.727-6.32.488 0 0-2.5 3.01-3.28 3.79-.122.124-.257.16-.357.144-.138-.022-.176-.152-.174-.34l.01-4.52c-4.86-1.33-4.55-6.11-4.5-8.65.053-2.54.543-4.57 1.936-6.05C6.43 2.372 10.18 1.63 11.53 1.59z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm sm:text-base">Написати в Viber</div>
                <div className="text-xs sm:text-sm text-gray-600 group-hover:text-blue-100">+38 (068) 141-43-10</div>
              </div>
            </a>
          </div>

          {/* Telegram */}
          <div className="group">
            <a 
              href="https://t.me/TwinMedicalOd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 sm:p-4 bg-gray-50 hover:bg-medical-blue hover:text-white rounded-lg sm:rounded-xl transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-white group-hover:text-blue-400 transition-all duration-300 flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm sm:text-base">Написати в Telegram</div>
                <div className="text-xs sm:text-sm text-gray-600 group-hover:text-blue-100">@TwinMedicalOd</div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-3 sm:p-4 rounded-b-xl sm:rounded-b-2xl text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            Робочий час: <span className="font-semibold">Пн-Пт 9:00-18:00</span>
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
            Екстрена підтримка доступна 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
