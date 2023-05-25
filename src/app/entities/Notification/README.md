# Сущность уведомления

Представляет собой блок, который оповещает пользователя о каком-либо событии на странице

- Components

`notification`- компонент уведомления

`notification-list`- компонент списка уведомлений

- Const

`NotificationType` - enum, содержащий возможные типы для уведомления (успешно/ошибка)

- Types

`Notification` {
  id: number;
  notificationType: NotificationType;
  message: string;
}

- State

`notifications` - хранит в себе массив уведомлений

- Actions

`addNotification`- добавляет новое уведомление в notificationList

`removeNotification`- удаляет существующие уведомление по id из notificationList 

- Selectors

`getNotifications` - селектор для получения ограниченного количества уведомлений
