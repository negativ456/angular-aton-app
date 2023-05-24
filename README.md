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

## Работа с данными 
Взаимодействие с данными осуществляется с помощью [NgRx](https://ngrx.io/docs)

## Сущности (entities)


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Running unit tests

Run `ng test` to execute the unit tests   via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

