# Auth form feature

Представляет собой форму для авторизации пользователя

- Components

`login-form`- компонент для логина пользователя

`registration-form`- компонент для регистрации пользователя

- Const

`NotificationType` - enum, содержащий возможные типы для уведомления (успешно/ошибка)

- Types

LoginForm 
```ts
email: string;
password: string;
```
RegistrationForm
```ts
email: string;
password: string;
```
UserData
```ts
email: string;
password: string;
```

- State

`userData` - данные о пользователе

`isLoading` - флаг для отображения загрузки

- Actions

`loginStart`- начало логина

`loginSuccess`- успешный логин

`signupStart`- начало регистрации

`signupSuccess`- успешная регистрация

`autoLogin`- автоматический вход, если пользователь уже был авторизован

`setIsLoading`- устанавливает состояние флага загрузки

`logout`- выход 

- Selectors

`getLoading` - селектор для получения состояния загрузки

`isAuthenticated` - селектор, который проверяет авторизован пользователь или нет

- Effects

`login$`

`signup$`

`autoLogin$`

`logout$`

- Services

`login` - сервис для отправки запроса на логин

`signUp` - сервис для отправки запроса на регистрацию

`setUserInLocalStorage` - сервис для установки пользователя в localstorage

`getUserFromLocalStorage` - сервис для получения пользователя из localstorage

`logout` - сервис для выхода из системы

