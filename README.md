# Проект Simon Say.
Этот проект реализован с использованием следующих технологий:
1. vue.js
   1. Vue Router
   1. components
   1. props
1. Css
   1. SASS
##  Как это работает.
В случайном порядке срабатывают кнопки. Пользователь запоминает и повторяет последовательность 
кнопок. В случае правильного повторения пользователь переходит к следующему раунду.
#### В игре есть следующие опции:
1. Normal - работа кнопки сопровождается цветом и звуком.
1. Cound only - работа кнопки сопровождается только звуком. 
1. Light only - работа кнопки сопровождается только цветом.
1. Free board - неигровой режим, пользователь может ознакомиться со звуком сопровождения для каждой кнопки.
#### В игре три уровня сложности:
1. Время между срабатыванием кнопок 1.5 s.
1. Время между срабатыванием кнопок 1 s.
1. Время между срабатыванием кнопок 0.4 s.
### Настройка проекта
Для запуска проекта на машине разработчика используйте в консоли следующие команды:
* npm install
* npm run serve
### Для публикации проекта на GitHab Pages:
1. В файле vue.config.je укажите название вашего репозитория на GitHab:
`module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/'
}`
1. соберите проект, введя в консоли команду:
npm run build
3. После создания папки Dist, в файле deploy.sh также укажите название вашего репозитория на GitHab:
```
   set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:YOUR_USER_NAME/REPOSITORY_NAME.git master:gh-pages

cd -
```

#### Посмотреть данный проект вы можете на [GitHab Pages](https://irina357.github.io/simon_test/).
