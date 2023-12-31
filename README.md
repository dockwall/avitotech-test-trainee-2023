# Тестовое задание для стажёра Frontend

[Репозиторий с оригинальным описанием](https://github.com/avito-tech/frontend-trainee-assignment-2023)

## Как запустить

1. Клонировать репозиторий/скачать zip.
2. В корне проекта выполнить `npm install` (д.б. установлен Node.js)
3. Там же `npm start`
4. Открыть в браузере ссылку [http://localhost:3001](http://localhost:3001)

## Что не успел сделать (список для дальнейших улучшений)

### Главная страница

- Добавить дополнительные фильтры (например, мультиселект по тэгам + сортировка по релевантности к данным тегам)

### Страница игры

- Доработать карусель скриншотов
- Доработать отображение системных требований

### Общие технические требования

- Рефакторинг (вынести хелперы, доработать store и т.д.)
- Создать отдельный компонент для отображения ошибок
- Доработать адаптивный интерфейс (как оказалось, у Semantic UI не всегда все гладко с адаптивом)
- Разработать прокси бэкенд для работы с API и вынести туда ключ RapidAPI. Либо настроить CORS и не использовать RapidAPI
- Сохранять результаты запросов на 5 минут (например, открытие карточек)
- Адаптировать приложение под большое количество тайтлов. Как вариант, показывать игры страницами по 50 карточек
- Один и тот же запрос при ошибке крутить не более трех раз в течение 5 минут
