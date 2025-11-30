import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-medical-blue to-primary-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Політика конфіденційності
            </h1>
            <p className="text-xl text-blue-100">
              Як ми збираємо, використовуємо та захищаємо вашу особисту інформацію
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
                <h2 className="text-2xl font-bold text-medical-dark mb-4">1. Вступ</h2>
                <p className="text-medical-gray mb-4">
                  Twin Medical ("ми", "нас", "наш") поважає вашу конфіденційність. Ця Політика конфіденційності пояснює, 
                  як ми обробляємо вашу інформацію при використанні нашого веб-сайту та послуг.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">2. Збір інформації</h2>
                <p className="text-medical-gray mb-4">
                  Ми <strong>не збираємо та не зберігаємо</strong> автоматично жодної особистої інформації під час вашого 
                  відвідування нашого веб-сайту.
                </p>
                <p className="text-medical-gray mb-4">
                  Єдина інформація, яку ми можемо отримати - це та, яку ви надаєте нам добровільно через контактні форми:
                </p>
                <ul className="list-disc pl-6 text-medical-gray space-y-2">
                  <li>Ім'я та контактна інформація (телефон, email)</li>
                  <li>Назва компанії/організації (за бажанням)</li>
                  <li>Повідомлення та запити</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">3. Використання інформації</h2>
                <p className="text-medical-gray mb-4">
                  Інформацію, яку ви надаєте через контактні форми, ми використовуємо виключно для:
                </p>
                <ul className="list-disc pl-6 text-medical-gray space-y-2">
                  <li>Відповіді на ваші запити</li>
                  <li>Надання інформації про наші продукти та послуги</li>
                  <li>Обробки замовлень</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">4. Передача даних третім особам</h2>
                <p className="text-medical-gray">
                  Ми <strong>не продаємо, не передаємо і не надаємо доступ</strong> до вашої особистої інформації третім 
                  сторонам, за винятком випадків, передбачених законодавством України.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">5. Файли cookie</h2>
                <p className="text-medical-gray">
                  Наш веб-сайт <strong>не використовує файли cookie</strong> для відстеження або збору особистої інформації.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">6. Ваші права</h2>
                <p className="text-medical-gray mb-4">
                  Ви маєте право в будь-який час:
                </p>
                <ul className="list-disc pl-6 text-medical-gray space-y-2">
                  <li>Запросити видалення вашої інформації</li>
                  <li>Відмовитися від подальших контактів</li>
                  <li>Отримати інформацію про дані, які ми зберігаємо</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">7. Безпека</h2>
                <p className="text-medical-gray">
                  Ми вживаємо розумних заходів для захисту інформації, яку ви надаєте нам добровільно, від несанкціонованого 
                  доступу або розголошення.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">8. Зміни в політиці</h2>
                <p className="text-medical-gray">
                  Ми залишаємо за собою право оновлювати цю Політику конфіденційності. Всі зміни будуть опубліковані на 
                  цій сторінці.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-medical-dark mb-4">9. Контактна інформація</h2>
                <p className="text-medical-gray mb-4">
                  Якщо у вас є питання щодо цієї Політики конфіденційності або ви хочете скористатися своїми правами, 
                  будь ласка, зв'яжіться з нами:
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-medical-blue">
                  <p className="text-medical-dark mb-2"><strong>Twin Medical</strong></p>
                  <p className="text-medical-gray mb-1">Email: twinmedical.od@gmail.com</p>
                  <p className="text-medical-gray mb-1">Телефон: +38 (093) 646-39-38</p>
                  <p className="text-medical-gray">Адреса: вул. Медична, 123, м. Одеса, 01001, Україна</p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-medical-gray text-sm italic">
                  Ми дбаємо про вашу конфіденційність і використовуємо тільки ту інформацію, яку ви надаєте нам добровільно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
