# Simple chat -- interview task

## Specification - interview

### Первый экран:
[] Поле ввода имени
[] Список введенных ранее имен
[] Кнопка отчистить историю сообщений(в самом низу).
[] После ввода имени и нажатия ENTER или выбора имени из списка открывается 2 экран.


### Второй экран:
#### Шапка:
[] круглый аватар(Первая заглавная буква имени, на цветном фоне, цвет присваивается случайный из списка(10 цветов))
[] выход(возвращение на первый экран)
[] поле ввода текста
[] кнопка отправить(сохраняется текст и дата)
[] список сообщений(аватар, текст, дата. Если это автор сообщения, то аватар справа от текста, иначе слева от текста.)


[] Нужно иметь возможность зайти под одним пользователем, написать сообщение, выйти зайти под другим, ответить на сообщение, и так до бесконечности.

### Требования:
[] Отображение даты в понятном виде, например Сегодня в 10:25, Вчера в 18:11, 19 июля в 0:01, 30 марта 2019 в 20:00.
[] У пользователей должен быть ID, если 2 раза ввести на первом экране, одно имя, то это 2 разных пользователя.
[] Цвет у одного и того же пользователя не должен меняться.
[] Верстка должна быть адаптивной
[] Работать во всех современных браузерах

### Будет плюсом:
[] Использование Vue
[] Чистый код с комментариями

## Features
1. Simple Chat 
2. Authtorithation(login/logout)
3. save chat messages to DB

## Using 
1. API:
   1. Nodejs, Express, Socket.io
2. UI:
   1. Vue, Vuex, Vue Router, Vuetify, vue-socket-io

## How run chap app in local evn

### Requirement 
1. node >= 12
  

### Linux/Winwows
1. clone repo and run below command in CLI
```bash
npm run api
npm run ui
```
2. Open in browser localhost with port 8080 
```
localhost:8080
```

### TODO:!
1. Rewrite api from native js to typescript
2. Remove type 'any' from whole code 
3. Add more comments
4. Fix: linting errors
5. Setup build 



