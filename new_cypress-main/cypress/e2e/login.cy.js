describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст.пароль


         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нашла кнопку и нажала войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // текс виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользовотеля
   })

   it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст.пароль


    cy.get('#mail').type('qerman@dolnikov.ru'); // ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нашла кнопку и нажала войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // текс виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользовотеля
})

   it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст.пароль


    cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
    cy.get('#pass').type('iLoveqastudio7'); // ввели неверный пароль
    cy.get('#loginButton').click(); // нашла кнопку и нажала войти
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // текс виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользовотеля
})

it('Проверка, что в логине есть @', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст.пароль


    cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
    cy.get('#pass').type('iLoveqastudio1'); // ввели неверный пароль
    cy.get('#loginButton').click(); // нашла кнопку и нажала войти
    
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // текс виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользовотеля
})
it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст.пароль

    cy.get('#forgotEmailButton').click(); // нажать кнопку восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел почту для восст
    cy.get('#restoreEmailButton').click(); // нажал отправить код
    
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю, на совпадение текст
    cy.get('#messageHeader').should('be.visible'); // текс виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользовотеля
})

it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст.пароль


    cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин с строчными буквами
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нашла кнопку и нажала войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // текс виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользовотеля
})

})




// найти поле логин и ввести правильный логин +
// найти поле пароль и ввести правильный пароль +
// найти кнопку войти и нажать войти +
// проверить успешнуюю авторизацию