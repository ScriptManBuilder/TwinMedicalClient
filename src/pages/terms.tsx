import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-medical-blue to-primary-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Умови використання
            </h1>
            <p className="text-xl text-blue-100">
              Правила та умови використання веб-сайту Twin Medical
            </p>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-medical-gray mb-4">
                  Останнє оновлення: 30 листопада 2025 року
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">1. Загальні положення</h2>
                <p className="text-medical-gray mb-4">
                  Ці Умови використання регулюють ваше використання веб-сайту Twin Medical та послуг, що надаються через нього. 
                  Використовуючи наш веб-сайт, ви погоджуєтесь з цими умовами в повному обсязі.
                </p>
                <p className="text-medical-gray">
                  Якщо ви не згодні з будь-якою частиною цих умов, будь ласка, не використовуйте наш веб-сайт.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">2. Права інтелектуальної власності</h2>
                <p className="text-medical-gray mb-4">
                  Весь контент на цьому веб-сайті, включаючи текст, графіку, логотипи, зображення та програмне забезпечення, 
                  є власністю Twin Medical або наших ліцензіарів і захищений законами про авторське право та інші права 
                  інтелектуальної власності.
                </p>
                <p className="text-medical-gray">
                  Ви не маєте права копіювати, відтворювати, поширювати або використовувати будь-який контент без нашого 
                  попереднього письмового дозволу.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">3. Використання веб-сайту</h2>
                <p className="text-medical-gray mb-4">
                  Ви погоджуєтесь використовувати наш веб-сайт тільки для законних цілей і у спосіб, який не порушує прав 
                  інших або обмежує чи перешкоджає використанню та користуванню веб-сайтом іншими особами.
                </p>
                <p className="text-medical-gray mb-2">Заборонено:</p>
                <ul className="list-disc pl-6 text-medical-gray space-y-2">
                  <li>Використовувати веб-сайт будь-яким способом, що є незаконним або шахрайським</li>
                  <li>Передавати або розповсюджувати віруси чи інше шкідливе програмне забезпечення</li>
                  <li>Збирати дані з веб-сайту для комерційних цілей без дозволу</li>
                  <li>Порушувати безпеку або перешкоджати роботі веб-сайту</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">4. Інформація про продукти</h2>
                <p className="text-medical-gray mb-4">
                  Ми докладаємо всіх зусиль, щоб забезпечити точність інформації про продукти на нашому веб-сайті. 
                  Однак ми не гарантуємо, що описи продуктів, зображення, ціни та інша інформація завжди є повними, 
                  актуальними або без помилок.
                </p>
                <p className="text-medical-gray">
                  Ми залишаємо за собою право змінювати або оновлювати інформацію про продукти в будь-який час без 
                  попереднього повідомлення.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">5. Обмеження відповідальності</h2>
                <p className="text-medical-gray mb-4">
                  Twin Medical не несе відповідальності за будь-які прямі, непрямі, випадкові або наслідкові збитки, 
                  що виникають внаслідок використання або неможливості використання нашого веб-сайту.
                </p>
                <p className="text-medical-gray">
                  Ми не несемо відповідальності за перебої в роботі, втрату даних або інші технічні проблеми, що можуть 
                  виникнути при використанні веб-сайту.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">6. Посилання на зовнішні сайти</h2>
                <p className="text-medical-gray mb-4">
                  Наш веб-сайт може містити посилання на зовнішні веб-сайти третіх сторін. Ці посилання надаються 
                  виключно для вашої зручності.
                </p>
                <p className="text-medical-gray">
                  Ми не контролюємо і не несемо відповідальності за зміст, політику конфіденційності або практику 
                  будь-яких зовнішніх веб-сайтів.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">7. Конфіденційність</h2>
                <p className="text-medical-gray">
                  Використання нашого веб-сайту також регулюється нашою Політикою конфіденційності, яка описує, 
                  як ми збираємо, використовуємо та захищаємо вашу особисту інформацію.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">8. Зміни в умовах</h2>
                <p className="text-medical-gray">
                  Ми залишаємо за собою право змінювати ці Умови використання в будь-який час. Зміни набувають 
                  чинності з моменту їх публікації на веб-сайті. Продовжуючи використовувати веб-сайт після внесення 
                  змін, ви погоджуєтесь з оновленими умовами.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">9. Застосовне право</h2>
                <p className="text-medical-gray">
                  Ці Умови використання регулюються та тлумачаться відповідно до законодавства України. 
                  Будь-які спори, що виникають у зв'язку з цими умовами, підлягають вирішенню в судах України.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">10. Контактна інформація</h2>
                <p className="text-medical-gray mb-4">
                  Якщо у вас є питання щодо цих Умов використання, будь ласка, зв'яжіться з нами:
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-medical-blue">
                  <p className="text-medical-dark mb-2"><strong>Twin Medical</strong></p>
                  <p className="text-medical-gray mb-1">Email: twinmedical.od@gmail.com</p>
                  <p className="text-medical-gray mb-1">Телефон: +38 (093) 646-39-38</p>
                  <p className="text-medical-gray">Адреса: вул. Медична, 123, м. Одеса, 01001, Україна</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
