# Запуск проекта

```
  npm install - устанавливаем зависимости
  npm start - Запуск проекта в режиме разработки
```
---
## Скрипты

- `npm run start` - Запуск проекта в режиме разработки
- `npm run build` - Сборка проекта
- `npm run test` - Запуск unit тестов
---
## Архитектура проекта
Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs)

## CI pipeline
Конфигурация github actions ./github/workflows. В CI происходит проверка сборки проекта и unit тестирование 

## Стилизация
Для стилизации проекта используется [TailwindCSS](https://tailwindcss.com/)

## Работа с данными 
Взаимодействие с данными осуществляется с помощью [NgRx](https://ngrx.io/docs)

## Сущности (entities)

[Notification](/src/app/entities/Notification)

[User](/src/app/entities/User)

## Фичи (features)

[AuthForm](/src/app/features/AuthForm)

[view-switcher](/src/app/features/view-switcher)

## Страницы (pages)

`login-page` - страница авторизации пользователя

`users-page` - страница со списком пользователей

## Widgets

[Header](/src/app/widgets/Header)

## Shared

- Используемые ui компоненты

`Modal`, `grid-icon`, `table-icon`, `ui components from material UI`

- Const

`localstorageKeys` - ключи для localstorage

`Modals` - enum, содержащий типы модальных окон

## Backend

Данные получаются с помощью сервиса тестовых REST API - [Reqres](https://reqres.in/)

## Deploy

Деплой приложения осуществляется с помощью github pages - https://negativ456.github.io/angular-aton-app
