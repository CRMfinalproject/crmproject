# crmproject

## Основные команды гита:
* git clone - Клонує репозиторій
* git pull - Стягує оновлення з репозиторію
* git push - Записує оновлення коду на віддалений репозиторій
* git status - показує статус в локальному репозитрії
* git add . - гіт починає відслідковувати зміни що внесені в файл
* git commit -m “commit text” - зберігає поточний стан файла
* git commit -am “text commit ” - короткий запис команда git add . та git commit -m “” (Працює лише для вже відстежуваних файлів)
* git log - показує історію комітів
* git branch - показує список локальних гілок
* git branch name - створює гілку з ім‘ям name
* git branch -a - показує список віддалених гілок
* git checkout -b name - створює нову гілку з ім’ям “name” і переходить в неї
* git checkout name - перехід до потрібної гілки
* git merge name - злятя гілки “name” в поточну
* git merge --abort - відміна злиття гілок
* git push -u origin name - перший пуш нової локальної гілки на гітхаб
* git branch -d name - видалення локальної гілки (потрібно з неї вийти)
* git push origin --delete name - видалення віддаленої гілки на гітхабі
* git stash - ховає внесені зміни в “карман“. (Використовується тоді коли потрібно перейти в іншу гілку але не хочеться робити коміт)
* git stash apply - відновлює код з “кармана” (Повертає схований код)

## Инструкция по галпу:
* Установить node.js (вроде у всех должен быть). Проверить, что установлен: **node -v**
* В консоли перейти в корень проекта
* Выполнить команду **npm i**
* Ждать пока установятся все зависимости
* После окончания установки запустить командой **npm start**
* Если сервер запустился, но файл отображается не правильно, перегрузите страницу в браузере несколько раз (у меня обычно надо еще 2 раза перегрузить, чтобы подкачались все файлы)
* я пока закоментировала в js таске **.pipe(uglify())** (109 строка), потому что он удаляет команду debugger, кому нужно, раскоментируйте
* если вам нужно, чтобы сервер загружался в Google Chrome, а он загружается в другом браузере, раскоментируйте строчку **browser: ‘google chrome’,** (138 строка)

## Папки
* Работаем только с папкой **src**, галп сам переносит в **dist**
* HTML файлы складываем в папку **src/html** и подключаем в index.html таким образом **//= header.html**
* Изображения складываем в папку **src/images** (пути прописывать такие, какие будут, когда файлы будут в дисте)
* Шрифты складываем в папку **src/fonts**
* Скрипты складываем в папку **src/js**