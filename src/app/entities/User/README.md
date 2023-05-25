# Сущность пользователя

Представляет собой блок, который оповещает пользователя о каком-либо событии на странице

- Components

`user`- компонент пользователя

`users-list`- компонент списка пользователей

`add-user-modal`- модальное окно для добавления нового пользователя

`delete-user-modal`- модальное окно для удаления пользователя

`edit-user-modal`- модальное окно для редактирования пользователя

`user-skeleton`- скелетон для блока пользователя

- Const

`UserView` - enum, содержащий возможные типы для отображения списка пользователей (стека/таблица)

- Types

`User` 
```{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: srting;
```

- State

`users` - хранит в себе массив пользователей

`usersTotal` - общее количество пользователей

`isLoading` - флаг для отображения загрузки

`userView` - тип для отображения списка пользователей

- Actions

`getUsersStart`- начало получения пользователей

`getUsersSuccess`- успешное получение пользователей 

`updateUserStart`- начало обновления пользователя 

`updateUserSuccess`- успешное обновление пользователя 

`deleteUserStart`- начало удаление пользователя 

`deleteUserSuccess`- успешное удаление пользователя по id 

`createUserStart`- начало создания пользователя 

`createUserSuccess`- успешное создание пользователя 

`setIsLoading`- устанавливает состояние флага загрузки 

`setUserView`- устанавливает вид отображения списка пользователей

`autoUserView`- устанавливает вид отображения списка пользователей из localstorage, если был задан  

- Effects

`getUsers$` - содержит логику по получению пользователей 

`updateUser$` - обновление пользователя

`deleteUser$` - удаление пользователя

`createUser$` - создание пользователя

`autoUserView$` - устанавливает вид отображения списка пользователей из localstorage

- Selectors

`getUsers` - селектор для получения списка пользователей

`getUsersLoading` - селектор для получения состояния загрузки

`getTotalUsers` - селектор для получения общего количества пользователей

`getUserView` - селектор для получения вида отображения списка пользователей

- Services

`getUsers`

`updateUser`

`deleteUser`

`createUser`

`getUserViewFromLocalStorage`
