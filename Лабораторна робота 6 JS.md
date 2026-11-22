**Лабораторна робота № 6** 

**«JavaScript для вебсторінок»** 

**Мета роботи:** навчитися застосовувати JavaScript для динамічності та інтерактивності  вебсторінок 

**6.1 Теоретичні відомості** 

Для підключення зовнішнього файлу використовується тег \<script\>: 

\<script src="script.js"\>\</script\> 

Атрибут src визначає шлях до файлу JavaScript. 

У лабораторній роботі цей тег розміщується перед \</body\>, щоб HTML-елементи  сторінки були створені до виконання JavaScript-коду. 

DOM (Document Object Model) – об'єктна модель документа, яка представляє HTML сторінку у вигляді дерева об'єктів. 

Кожен HTML-елемент є вузлом цього дерева. JavaScript може знаходити, створювати,  змінювати та видаляти такі елементи. 

![][image1]  
Для роботи з DOM використовується об'єкт document. 

Наприклад: 

const container \= document.getElementById("balloon-container"); Призначення CSS-класу:  
balloon.className \= "balloon"; 

Властивість className дозволяє призначити елементу CSS-клас. 

Додавання елемента до документа: 

container.appendChild(balloon); 

Метод appendChild() додає створений елемент до визначеного контейнера. Видалення елемента: 

balloon.remove(); 

Метод remove() видаляє елемент із DOM. 

Таким чином, JavaScript дозволяє змінювати структуру вебсторінки без редагування її  HTML-коду. 

JavaScript може змінювати зовнішній вигляд HTML-елементів, встановлюючи значення  CSS-властивостей. 

Наприклад: 

balloon.style.backgroundColor \= "red";   
balloon.style.left \= "50%"; 

У першому рядку змінюється колір кульки, у другому – її горизонтальна позиція. Для додавання CSS-класу використовується метод: 

balloon.classList.add("pop"); 

У цьому прикладі до кульки додається клас pop, для якого в CSS визначено анімацію  лопання. 

JavaScript не виконує саму CSS-анімацію, а змінює клас елемента, після чого браузер  застосовує відповідні стилі. 

Подія (event) – дія або зміна стану, яку браузер може виявити та обробити. 

Прикладами подій є натискання кнопки миші, переміщення курсора, натискання  клавіші або завершення анімації. 

Для реагування на події використовується метод addEventListener(). 

balloon.addEventListener("click", function() {   
 balloon.remove();   
}); 

У цьому прикладі після натискання на кульку виконується функція, яка видаляє її зі  сторінки.  
Основні події JavaScript: 

**Подія Призначення** 

click Натискання на елемент 

mouseover Наведення курсора 

mouseout Виведення курсора за межі елемента 

keydown Натискання клавіші 

animationend Завершення CSS-анімації 

load Завершення завантаження ресурсу або сторінки залежно від об'єкта 

JavaScript дозволяє виконувати певні дії через заданий проміжок часу або повторювати  їх періодично. 

Функція setInterval() забезпечує багаторазове виконання функції через визначені  інтервали часу. 

setInterval(createBalloon, 800); 

У цьому прикладі функція createBalloon() викликається кожні 800 мілісекунд. Функція setTimeout() виконує функцію один раз після заданої затримки. 

setTimeout(function() {   
 balloon.remove();   
}, 200); 

У цьому прикладі кулька видаляється приблизно через 200 мілісекунд. 

Обидві функції використовують час у мілісекундах: 1000 мс \= 1 секунда. 

Для створення різнокольорових кульок, які з'являються в різних місцях екрана,  використовуються математичні функції JavaScript. 

Math.random() – повертає псевдовипадкове число від 0 включно до 1 невключно. Math.floor() – округлює число до найближчого меншого цілого. 

Наприклад: 

const colors \= \["red", "blue", "green"\]; 

const color \= colors\[   
 Math.floor(Math.random() \* colors.length)   
\]; 

У цьому прикладі випадковим чином вибирається один із трьох кольорів. Аналогічно можна визначити випадкову горизонтальну позицію кульки: balloon.style.left \= Math.random() \* 90 \+ "%";  
**Оголошення (декларація) функцій** 

Щоб створити функцію нам треба її *оголосити*. 

Це виглядає ось так: 

**function showMessage() {** 

 **alert('Всім привіт\!');** 

**}** 

Спочатку ми пишемо **function** – це ключове слово (keyword), яке дає зрозуміти  комп’ютеру, що далі буде оголошення функції. Потім – *назву функції* та список  її *параметрів* в дужках (розділені комою). Якщо параметрів немає, ми залишаємо *пусті  дужки*. І нарешті, код функції, який також називають *тілом функції* між фігурними дужками. 

**function name(parameter1, parameter2, ... parameterN) {** 

 **// ...тіло функції...** 

**}** 

Нашу нову функцію можна викликати, написавши її ім’я і дужки: showMessage(). 

**function showMessage() {** 

 **alert( 'Шановні друзі\!' );** 

**}** 

**showMessage();** 

**showMessage();** 

Виклик showMessage() виконує код із тіла функції. В цьому випадку, ми побачимо  повідомлення двічі. 

**Локальні змінні** 

Змінна, яка оголошена в функції доступна лише в тілі цієї функції. 

Наприклад: 

**function showMessage() {** 

 **let message \= "Привіт, я JavaScript\!"; // локальна змінна**  
 **alert( message );** 

**}** 

**showMessage(); // Привіт, я JavaScript\!** 

**alert( message ); // \<-- Помилка\! Змінна недоступна поза функцією** 

**Зовнішні змінні** 

Функція може використовувати зовнішні змінні, наприклад: **let userName \= 'Іван';** 

**function showMessage() {** 

 **let message \= 'Привіт, ' \+ userName;** 

 **alert(message);** 

**}** 

**showMessage(); // Привіт, Іван** 

Функція має повний доступ до зовнішньої змінної. Вона теж може її змінювати. Наприклад: 

**let userName \= 'Іван';** 

**function showMessage() {** 

 **userName \= "Богдан"; // (1) змінено зовнішню змінну** 

 **let message \= 'Здоровенькі були, ' \+ userName;** 

 **alert(message);** 

**}** 

**alert( userName ); // Іван перед викликом функції showMessage showMessage();**  
**alert( userName ); // Богдан, значення було змінено після виклику функції  showMessage** 

Зовнішня змінна використовується тоді, коли немає локальної. 

Якщо всередині функції є змінна з таким самим ім’ям, то вона *перекриває* зовнішню.  Наприклад, наступний код використовує локальну змінну userName. Зовнішня ігнорується. **let userName \= 'Іван'; // оголошення зовнішньої змінної** 

**function showMessage() {** 

 **let userName \= "Богдан"; // оголошення локальної змінної** 

 **let message \= 'Привіт, ' \+ userName; // Богдан** 

 **alert(message);** 

**}** 

**// функція завжди віддасть перевагу локальним змінним** 

**showMessage();** 

**alert( userName ); // Іван, без змін, функція не змінила глобальну змінну** 

**Глобальні змінні** 

Змінні, оголошені поза будь-якими функціями (такі як зовнішня змінна userName з коду  вище), називаються *глобальні* змінні. 

Глобальні змінні доступні в будь-якій функції (окрім випадків, коли глобальна змінна  перекрита локальною). 

Хорошою практикою вважається мінімізація використання глобальних змінних. У  сучасному коді зазвичай є декілька або зовсім немає глобальних змінних. Більшість змінних  знаходяться в межах функцій. Іноді буває корисно зберігати “загальні” дані (на рівні проєкту)  в таких глобальних змінних. 

**6.2 Робота в лабораторії** 

Відкрийте Visual Studio Code та створіть папку для лабораторної роботи, наприклад  Лаб6.У цій папці необхідно створити три файли: 

index.html – структура вебсторінки  
style.css – оформлення та анімація 

script.js – інтерактивність 

![][image2]

Відкрийте файл **index.html** та введіть такий код: 

\<\!DOCTYPE html\> 

\<html lang\="uk"\> 

\<head\> 

\<meta charset\="UTF-8"\> 

\<meta name\="viewport" content\="width=device-width, initial-scale=1.0"\> \<title\>Магазин повітряних кульок\</title\> 

\<link rel\="stylesheet" href\="style.css"\> 

\</head\> 

\<body\> 

\<header\> 

\<h1\>�� Світ повітряних кульок ��\</h1\> 

\<p\>Даруємо радість та святковий настрій\!\</p\> 

\</header\> 

\<main\> 

\<h2\>Ласкаво просимо\!\</h2\> 

\<p\>У нас ви знайдете кульки для будь-якого свята.\</p\> 

\<h2\>Наш асортимент\</h2\> 

\<p\>�� Кольорові кульки\</p\> 

\<p\>�� Святкові набори\</p\> 

\<p\>�� Кульки для подарунків\</p\> 

\<button\>Замовити кульки\</button\> 

\</main\> 

\<footer\>  
\<p\>© 2026 Магазин повітряних кульок\</p\> 

\</footer\> 

\<script src\="script.js"\>\</script\> 

\</body\> 

\</html\> 

Зверніть увагу на два рядки: 

\<link rel="stylesheet" href="style.css"\> 

\<script src="script.js"\>\</script\> 

Перший підключає файл стилів CSS, другий – файл JavaScript. Таким чином, усі три  файли працюватимуть разом. 

Відкрийте **style.css** і додайте: 

/\* Загальні налаштування сторінки \*/ 

body { 

margin: 0; 

font-family: Arial, sans-serif; 

background-color: \#0f172a; 

color: \#e2e8f0; 

text-align: center; 

} 

/\* Верхня частина сторінки \*/ 

header { 

background-color: \#1e293b; 

padding: 40px 20px; 

border-bottom: 1px solid \#334155; 

} 

h1 { 

font-size: 36px; 

color: \#38bdf8; 

margin-bottom: 10px; 

} 

header p { 

color: \#94a3b8; 

font-size: 18px; 

}  
/\* Основний вміст \*/ 

main { 

max-width: 800px; 

margin: 40px auto; 

padding: 40px 20px; 

background-color: \#1e293b; 

border: 1px solid \#334155; 

border-radius: 16px; 

} 

h2 { 

color: \#38bdf8; 

margin-top: 30px; 

} 

main p { 

font-size: 17px; 

line-height: 1.8; 

} 

/\* Кнопка \*/ 

button { 

background-color: \#0284c7; 

color: white; 

border: none; 

padding: 14px 30px; 

font-size: 16px; 

border-radius: 8px; 

cursor: pointer; 

transition: 0.3s; 

} 

button:hover { 

background-color: \#38bdf8; 

transform: translateY(\-3px); 

box-shadow: 0 5px 20px \#0284c755; } 

/\* Нижня частина сторінки \*/ 

footer { 

background-color: \#1e293b; 

color: \#94a3b8; 

padding: 20px; 

border-top: 1px solid \#334155; 

} 

Додаємо контейнер для кульок у HTML Відкрийте файл **index.html.**  
Перед закривальним тегом \</body\> перед строкою \<script src="script.js"\>\</script\> додайте: 

\<div id\="balloon-container"\>\</div\> 

![][image3]  
id="balloon-container" – унікальний ідентифікатор, за яким JavaScript зможе знайти  контейнер і додавати в нього кульки. 

Відкрийте файл style.css. 

Не видаляйте попередні стилі\! Додайте наведений код у кінець файлу. 

/\* Контейнер для кульок \*/ 

\#balloon-container { 

position: fixed; 

top: 0; 

left: 0; 

width: 100%; 

height: 100%; 

pointer-events: none; 

overflow: hidden; 

} 

/\* Повітряна кулька \*/ 

.balloon { 

position: absolute; 

bottom: \-100px; 

width: 55px; 

height: 70px; 

background-color: red; 

border-radius: 50%; 

cursor: pointer; 

pointer-events: auto;  
animation: fly 8s linear forwards; 

} 

/\* Ниточка кульки \*/ 

.balloon::after { 

content: ""; 

position: absolute; 

top: 70px; 

left: 27px; 

width: 1px; 

height: 40px; 

background-color: \#94a3b8; 

} 

/\* Анімація польоту \*/ 

@keyframes fly { 

from { 

transform: translateY(0); 

} 

to { 

transform: translateY(\-120vh); 

} 

} 

position: fixed Закріплює контейнер відносно вікна браузера position: absolute Дозволяє розміщувати кульки в довільних місцях контейнера border-radius: 50% Надає кульці овальну форму 

bottom: \-100px Початкова позиція нижче екрана 

animation Запускає анімацію 

@keyframes Визначає етапи руху 

translateY() Переміщує кульку вертикально 

pointer-events Керує реакцією на натискання миші  
![][image4]animation: fly 8s linear forwards; означає, що анімація fly триває 8 секунд, рух  відбувається з постійною швидкістю, а після завершення зберігається кінцевий стан. Створюємо кульки за допомогою JavaScript. Відкрийте файл **script.js** і введіть код: 

 // Метод getElementById() знаходить HTML-елемент за його ідентифікатором const container \= document.getElementById("balloon-container"); 

const colors \= \[ 

"\#ff6b6b", 

"\#38bdf8", 

"\#a78bfa", 

"\#34d399", 

"\#fbbf24" 

\]; 

function createBalloon() { 

// Створюємо новий HTML-елемент 

const balloon \= document.createElement("div"); 

// Призначаємо CSS-клас 

balloon.className \= "balloon"; 

// Випадковий колір 

const color \= colors\[ 

Math.floor(Math.random() \* colors.length) 

\]; 

balloon.style.backgroundColor \= color; 

// Випадкова горизонтальна позиція 

balloon.style.left \= Math.random() \* 90 \+ "%";  
// Додаємо кульку на сторінку 

container.appendChild(balloon); 

// Видаляємо після завершення анімації 

balloon.addEventListener("animationend", function() { 

balloon.remove(); 

}); 

} 

// Створюємо нову кульку кожні 800 мс 

setInterval(createBalloon, 800); 

1\. Пошук контейнера 

const container \= document.getElementById("balloon-container"); Метод getElementById() знаходить HTML-елемент за його ідентифікатором. 2\. Створення нового елемента 

const balloon \= document.createElement("div"); 

JavaScript створює новий елемент \<div\>, якого спочатку не було в HTML-документі. 3\. Випадкове розташування 

balloon.style.left \= Math.random() \* 90 \+ "%"; 

Math.random() генерує випадкове число від 0 до 1 (не включаючи 1). Множення на 90 задає  випадкову позицію кульки в межах 0–90% ширини контейнера. 

4\. Додавання елемента 

container.appendChild(balloon); 

Метод appendChild() додає нову кульку всередину контейнера. 

5\. Повторне створення 

setInterval(createBalloon, 800); 

Функція setInterval() викликає createBalloon() кожні 800 мілісекунд, тобто кожні 0,8  секунди. 

Тепер необхідно навчити кульку реагувати на натискання. 

У файлі **script.js** знайдіть рядок: 

container.appendChild(balloon);  
Безпосередньо після нього додайте: 

// Лопання кульки при натисканні 

balloon.addEventListener("click", function() { 

balloon.remove(); 

}); 

Метод addEventListener() дозволяє реагувати на події. 

У нашому випадку: 

\- click – подія натискання мишкою. 

\- function() – функція, яка виконується при натисканні. 

\- balloon.remove() – видаляє кульку зі сторінки. 

На попередньому етапі ми реалізували рух повітряних кульок і їх зникнення при  натисканні мишкою. Тепер удосконалимо цей ефект: при натисканні кулька буде швидко  збільшуватися, лопатися та розлітатися на дрібні кольорові частинки. Для цього доповнимо  вже створені файли style.css і script.js. Файл index.html змінювати не потрібно. 

Відкрийте файл **style.css.** Не видаляючи попередній код, додайте в кінець файлу: 

/\* Анімація лопання кульки \*/ 

.balloon.pop { 

animation: pop 0.15s ease-out forwards; 

} 

@keyframes pop { 

0% { 

transform: scale(1); 

opacity: 1; 

} 

70% { 

transform: scale(1.4); 

opacity: 1; 

} 

100% { 

transform: scale(1.8); 

opacity: 0; 

} 

} 

/\* Частинки після лопання \*/  
.particle { 

position: absolute; 

width: 8px; 

height: 8px; 

border-radius: 50%; 

pointer-events: none; 

animation: explode 0.5s ease-out forwards; 

} 

/\* Анімація розльоту частинок \*/ 

@keyframes explode { 

from { 

transform: translate(0, 0); 

opacity: 1; 

} 

to { 

transform: translate(var(\--x), var(\--y)); 

opacity: 0; 

} 

} 

.balloon.pop – стиль кульки після додавання класу pop. 

scale(1.4) – збільшує кульку в 1,4 раза. 

opacity – визначає прозорість елемента: 1 – повністю видимий, 0 – невидимий. .particle – стиль маленьких частинок, що утворюються після лопання. explode – анімація розльоту частинок. 

var(--x) і var(--y) – CSS-змінні, значення яких задаватимуться через JavaScript. Відкрийте файл **script.js.** Знайдіть раніше доданий код: 

// Лопання кульки при натисканні 

balloon.addEventListener("click", function() { 

balloon.remove(); 

});   
Видаліть його та замініть на: 

// Лопання кульки при натисканні 

balloon.addEventListener("click", function() { 

// Запобігаємо повторному натисканню 

if (balloon.classList.contains("pop")) { 

return; 

}  
// Визначаємо координати кульки 

const rect \= balloon.getBoundingClientRect(); 

const x \= rect.left \+ rect.width / 2; 

const y \= rect.top \+ rect.height / 2; 

// Створюємо 12 частинок 

for (let i \= 0; i \< 12; i\++) { 

const particle \= document.createElement("div"); particle.className \= "particle"; 

// Колір частинок такий самий, як у кульки 

particle.style.backgroundColor \= color; 

// Початкова позиція частинок 

particle.style.left \= x \+ "px"; 

particle.style.top \= y \+ "px"; 

// Обчислюємо напрямок розльоту 

const angle \= (i / 12) \* 2 \* Math.PI; 

const distance \= 40 \+ Math.random() \* 40; 

const dx \= Math.cos(angle) \* distance; 

const dy \= Math.sin(angle) \* distance; 

// Передаємо координати в CSS 

particle.style.setProperty("--x", dx \+ "px"); particle.style.setProperty("--y", dy \+ "px"); 

// Додаємо частинку на сторінку 

container.appendChild(particle); 

// Видаляємо частинку через 500 мс 

setTimeout(function() { 

particle.remove(); 

}, 500); 

} 

// Запускаємо анімацію лопання 

balloon.classList.add("pop"); 

}); 

У файлі script.js знайдіть наявний обробник: 

// Видаляємо після завершення анімації 

balloon.addEventListener("animationend", function() { balloon.remove(); 

});  
Замініть його на: 

// Видаляємо кульку після завершення анімації 

balloon.addEventListener("animationend", function(event) { 

if (event.animationName \=== "fly" \|\| 

event.animationName \=== "pop") { 

balloon.remove(); 

} 

}); 

![][image5]  
Властивість event.animationName містить назву анімації, яка завершилася. \- fly – кулька завершила політ і вийшла за межі екрана. 

\- pop – кулька завершила анімацію лопання. 

В обох випадках кулька видаляється з HTML-документа. При цьому частинки продовжують  свою анімацію незалежно від кульки. 

Визначення координат кульки 

const rect \= balloon.getBoundingClientRect(); 

Метод getBoundingClientRect() повертає координати та розміри HTML-елемента відносно  вікна браузера. 

const x \= rect.left \+ rect.width / 2; 

const y \= rect.top \+ rect.height / 2;  
Визначаємо координати центра кульки, з якого розлітатимуться частинки. 

Створення частинок 

for (let i \= 0; i \< 12; i++) { 

Цикл for виконується 12 разів, створюючи 12 окремих HTML-елементів. 

Визначення напрямку розльоту 

const angle \= (i / 12\) \* 2 \* Math.PI; 

const distance \= 40 \+ Math.random() \* 40; 

const dx \= Math.cos(angle) \* distance; 

const dy \= Math.sin(angle) \* distance; 

Функції Math.cos() та Math.sin() використовуються для обчислення напрямку руху  частинок. Частинки розлітаються в різні боки на випадкову відстань від 40 до 80 пікселів. 

Передавання значень у CSS 

particle.style.setProperty("--x", dx \+ "px"); 

particle.style.setProperty("--y", dy \+ "px"); 

Метод setProperty() встановлює значення CSS-змінних, які використовуються в анімації  explode. 

Запуск анімації 

balloon.classList.add("pop"); 

Метод classList.add() додає HTML-елементу новий CSS-клас. У нашому випадку клас pop замінює анімацію польоту на анімацію лопання. 

**6.3. Домашнє завдання:** 

Змінити стилі сторінки сайту (кольорову гамму)Змінити параметри повітряних кульок: − додати до масиву colors щонайменше три нові кольори; 

− реалізувати інший розмір кульок. Важливо: після зміни розміру кульки потрібно  також змінити розташування ниточки у; 

− зробити іншу швидкість їхнього польоту. 

Зміст протоколу: index.html – структура вебсторінки, style.css – оформлення та  анімація, script.js – інтерактивність, скрін отриманої стрінки.

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfgAAADRCAYAAAAg/KA1AAAeXklEQVR4Xu3d93dVVf7G8e9/Mr/MrDVrTS9rdIqOIzPOqKMwzihiQXoRFRUpCiKMjBVdNgQRqSIlFGk2Suhg6BKQYgIE6SS00MKstb95PsyON/sKQjg54ez7/uG1cnP62ftkP/uUnPt///3vfx0AAIjL/4UDAABA9hHwAABEiIAHACBCBDwAABEi4JG4o0ePms6dO7t//OMfrk2bNub06dN5016NtmzZYn72s5+5++67z/3zn/80a9eudWfPnnXPPfecue2229xf//pX9+GHHxrNe8cdd7guXboY/X7u3DkbJj179sxbV6Grqamx40SOHTuWNx5AwxHwSBwBT8BfKgIeaDwEPBI3YMAAM2bMGHfq1Cl38uRJU1FR4V5//fU6I0eOdFVVVW7q1Klm8uTJbvr06dboy+7du93bb7/tJk2aZBSuGu87EP7zrFmzjNZ14sQJ995775mioiJbr36Ktu2jjz5yhw4dMsuXL7ftWLNmjfHb/+WXX5rWrVtbp2TDhg1GnZX58+e7rl27Gi378OHD7qabbjIHDx50LVq0cH/84x/NgQMHrKPgxz/66KN5ZaVljB071owbN85NmTKlXhl9/vnnbt68eeadd96x39XRkI0bN1qZTJs2zWgalfGcOXPM0qVL6y1LZew7IrJw4UK3evVqKxNRmS1atMg6JaJlaL7y8nLj5ztz5oxRnWgeX/5+PdoGUVnpd22nqK58PefWtd9/lZ+G+fX4+vX1p7p9//336zpgK1assPLTcSSqf83nj48hQ4bYzyNHjpi33nrLfvry8fvmt9cfkyoT0e8qw71795o333zTtlPrkRkzZlj5L1iwwOgY0T775YnqxG+/jqWvvvrK6lDCYwFIGgGPxCkIRQ1c7nA1lh07drRGTv785z+7srIyO1OWlStXurvuusstXrzYaBmap0+fPmb06NE2TMEv/vM999xj1Jj37t27LvB69eplP3WWLdoGXUnwAb5s2TJryP/yl78YhZam8eM1rX73HRQt45VXXrEQFr9fDzzwgNE82iYfdNpenem/++675tsCXvs1bNgwo8BSkNxyyy1G26Zg8OVZUlLibrzxRgtheeihh9zmzZvd448/brp37+4GDx7sunXrZlQeCnSVuWjZ6oBUVlYaXZ345JNP3J/+9Cfjy8KH05IlS9zs2bOtoyN+m1988cU62uavv/7atGzZ0rZLy5ROnTrZNvsOjkLe17Ova83v68eXX+5xpPr14wcNGuSGDx9ed3yobBXaP/7xj432V/P54+NHP/qR1b+/wvK9733P7dixw/Yrd990jPljc8+ePbZNUlpaah01X167du2ybfYdQn3eunWru+aaa8yIESOsjv3yRHXirVq1yvXt27eugxYeC0DSCHgkzp/h6mwmd7gaPDWA/gzob3/7mwW8LnWLzhqfeeaZujO6v//97zZMy5GnnnrqOwNeQaB1SI8ePexM7ac//al58skn3S9/+Uu3fv16o8a2f//+7tprrzX+DDAM+O3btxs16DNnzrROhGjbFPw333yz2b9/v22TgkEUeAoNH8japrlz59p2iEJE+71v3z7jy8kHuvZNwTRw4ECj9alMfABr+zRcHRXR8ps1a+bGjx9vcsvcdy50VqszUenXr58FnToKovGtWrWyKxvy2GOP2W2F22+/3fjt8+W9bdu2evXrO09++boikTu9tsXXs69rnfnnBryvJ9FnlcENN9xg1CFUufrwvP/++226u+++24QBr31SsPorSuo0qd61X7n75penMlIn79///rdR2f785z+vuyKgTpoPddFtGx3nfn99wPsOn+h33yHQ8du2bdu6KyC5ZQc0BgIeiSPgCXgCnoBH0yPgkTh/j/TWW2917du3d4888ogpLi7+1oD3Afzss89ag+sDT5fYNb2CUnRZU+MVyvKLX/zCfv7mN78xumyue6i6NCwKMIWGv0Ss+71qdP090Ouvv94uM/tLrGHA63Lyww8/bEEimzZtctXV1XWBqGHanlGjRhmFloLZB7Aum2t4boBoGv+MgT6rI+P3T/uv+7RhwPsAVHnoYTTd9xXdAlDoaR7R8nUvXZfhRZfcw4DXMn/wgx8Y3TPW+D/84Q/m6aeftn3yzxwoVBV0YcDr3rNoGzWP7o2LD3jfIVIAapt9eenyuK9nX9fqFOUGvLbbl48+a3v9eHU61EHw9/y1LB0nuR08v4+i2x8Kcd1WEW2vjkHfYfD7lls/6rD5WzY6NnSMrVu3zrz00kvuzjvvrLvF8Lvf/c46MXpWQHzA+1sI4jsNok6gOgnh3wvQWAh4JM6foempaDXAehBNFKB6yMmP1zAFYfPmzY0essodr+k1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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiMAAADpCAYAAAD2xjdKAABHqUlEQVR4Xu3dZ3RcZ3oneO+sveO1d+w5Xntm1/ZSUksACSITKMSqQs4555xzBgogkQMDSBDMBDPFKIoSc5BItaRWaHW32nHWM9s9s2173Z7jtX3c7vkws3v2nGfv+xQvWHhvgUQVQOKi8P/wO0C98VbVW/f+694L8leMRiMBAAAArJdfkQsAAAAAXieEEQAAAFhXCCMAAACwrhBGAAAAYF0hjAAAAMC6QhgBAACAdbXmYcSU30DhiVlMrgMAAACQrWkYCS3tpbCJu5R1+xcsdvoOhacVa9oBAAAAqFYdRsLDw8lQO8kCJz+iwLF7lHr7vyxKvva3mj5rraenh6Wnp1NOTg7V1dUxud16UbenoKCAsrKyqLOzk8nt1ot43YSWlhZNnTNiY2PZwMAARUVFaer1JD8/n5qbm5lcB5tbTU0NlZeXM7lupdTPvtgvyXWvm/oZX6vPOTiuoLyLleYmaOpcQwaz9DfZqXsxhJHXAGFE20YvEEZgOQgjsNYQRpa3ojASkpjDDPmtS8rDFTvq9pLv2GOrccXgDUr88JdLyOM5SwSOjz/+mN5///1FVVVVNDg4yDIzM6mtrY2OHDnC5P5r7fr163T79u3Fbbl06RIfhOV26vb09fVRXl4e/xREndjRZWdnM7mfM3Jzc+mDDz5gd+7coSdPnlBTUxOT26rETle4cOGCpm4lIiIiWHt7Oz+Oj49nIyMjFB0drWn/ukRGRtL9+/eptLSUqeXq6/3gwQNePx0dHUzuvx7MZjNNTU2xx48f0927d+np06fsdQTY6upq+vTTT9nNmzd5/ezbt4/JbV+npKQkunbt2uLa/uyzz/gzt7CwwOT2a0F8ZsTrIch1K6V+9sV+Sa5zVHFxMe9vBLlO7Itetp3qZ9zZzzm8WElTL+UmGJlcp+qfuslGO3I1dbqQ0Mg++ugq74Mu3/ku662x09ZGRkE5XTx7RukzwrKV/Zht/fCR03RC7NeGe5ncX1hRGPEc/Yhtn/sz8mk7SaHmKOZbv5+2Dz+g7SMPmVfXeQqJTaOYm79cQh7PWeIALj7YYoetktu8zjAidoa1tbWL22IymTRtBNswItcdPnyYWltbmVznjIsXL1JXVxcT2yRCgtiu5bZNWG0YSUhIYPfu3dPUrbfZ2Vnas2cPU8tESBIOHTqkab/eDh48SEePHmUxMTH8HooDsWAbqF4VsQ7UcC3mFqFShCJBBF25/esktkd84RBE0FY/cy9a2+ttLcNISUkJf8bsfc7E+yXeO7ncFsLIqzV65h515BqZXKfSfRgp6Wa3Dg3x49Ezj1h/rZ22NvZfuUM1SdrPYWXfPnZ8ZwOZ7PSztaIwYkguYFsnPqN39v8Zuc18w97p+4De6f+QvKumWLgpgtub3/vlEvJ4zlLDiFx+5coVJr45yGFkfHx88duE2IGNjo5q+jtruR2AmFMQ32rFt0vxUxDbL76Jnz17ljU0NPA3XvHtXdi9e7dmLEfZHszkszTiwCJ2ROq3S/GaFBUVacKIeqZAbPOtW7f4oK0euEX4Eq+joH4zPXXqFPvyyy/pxo0b3EZQv8GJU9SCeC1EH3FGQlDPRnz44YdMjCXaqOOnpqZqnp+jxA5cfX1FMBNl6nzirJQ4ZT0/P89Enb310tvby0RwFG3GxsbYu+++u+Txrl27NPM7IiUlhR4+fEhxcXFMrldNT08z9f0RAVQQ76/c1lG2YUQ8FmOq75fYPrFuxRoWRL162l+8fuIygLrWz58/z6/huXPnmL0vDs7IyMhg4r0Rj9WzcOq6Vt87sa7FNqrvtVi/to/FehXt1M+i+LyI/uIMgyA+O+Kboe0lYPV52T439YuIOIuirltBrGVR/rrDyIteDzmMiPoTJ04w0V+svdVelnJ94vJKAh08eYHXx5mzB1leWStduf8pnZ2fYhMHj9DRoeeXw9JrBuj6EcvSMJJeQKcunGZTUwfpijJOgtJWWOxXUMauXL3I853a2cvKpo7SmYNTdOL8SVZts03qdmm3/eWKu8bZoSHrZeslYSS9RlnXB9nU1Al675Q4W2p9PW4/eUL7D+2nqYNn2MXjU9x/7N07bKali/elTSU5TJ5XQBhZBYQRhBHbxwgjCCMII64OYWRdw4i4SVUISCqgN2a+pTf2/ZnVnj+hrTX7KdxoYmr7sGv/vIQ8nrPEwVwcvMUBT7h69Sqfvn7vvfeY+LDahhERTsSOR9y3IIgPqTgoJSYmMnl8R4kPsNjxqNsjdsjiQ6/ukMV84gB4+fJlJrbfdocgTi+L7RT3WghrcbpZPE/1ssSjR49oaMh6uk2YmZnhg5i6A21sbOTtsA0j4vW0PfiI7VefX319Pe+wxH0vgjqOehlBvLbisfr6isdiXnUHLy5F2Z5qVw+86g5WvHei/vTp00wEAPn5OUq8puoOubKykt8f9bGoW8l6Ef0E8Z6K7RP3Lghim8VBS31+Ymx5fkeI+dUQoLJYLPwhFsRNtuJ9EoFNENso3p+5uTkmApE8pqPE+J9//jkTnynxHG3vObJdL+KxeP3U11CEBPV+E/H+iu1T11JhYaFmLmfIYUSsadt1Lda07bpWg6gahtS1JtqIm6vFGhTEPWeijbrWRZgWXw7U+7vU56auXfW5iecliH2PWMvq2hGfPfEZWesw8r3vfY+p26kSZeL5vuz1sA0j4nVRv3iItuLLkW0QBXtK2b2PLlNOgrJ/UV43QdQtuUxjyqZ7D68thoudxz+gnoKkJWGkd/YK7WrIZqL/rsN3aLAhganzHbv9kNWmWOcwK/ssYf7WY2opSF+8TGmy2SZ1u+RtLyjrXNyXjO7qWxJ6VF3j77LxbvE8pTCizJNZWM5GR8fo3qePqNhYw548uaJslxhDHMNMNLpwj3orEuj0w6/Z4b5SiozMpYuPH7Ga9KXzJuSUrCyMGGLS2Jbms/T7HTfo9ye+sdr9p/T7M39M7jUHmLihldtf+ecl5PGctdw9I8uFEXHw++STT5Z8aMUHTf2mLo/vKDGW7T0jgpjz+PHjTG2nbo8cRtQ6dYcuj79a4syCCGzqDb7iG504oNq+FuKgbxtGxAFR3BwoqO3UMynirIG9HZUcPuTHtuHGtp84KIgDuPptUuzwRbk4CAhipyrP5Qz1HhFx1kiENPXMlahzZL2I10C0V89EiG/X3d3di9+2VxsmxRziwChuvBVEmfhLjL179zLx/oiAJu6DEdR+6voR39TlMR1lG3bUm0Ztb7h+WRhR30t1PPXg9rKbK1dKDiPqmQp1Xavzqeva9rMmyGtNba8+H7W9WAtyGLF9Xmpf9QZXcUBX90OCCHNif7TWYUQNU7b7HEF9Do68HuL5qOFKPBbPUYQoQZ4blsotq6XpE+fpwqFdTJTJ94zsPPE+9VUUs5sfLvA9E7ZhZPzy48UzKeJsxszMHqooSGTWeRLpzoObTJ7fnFJMUzPz9MGFBSYCiLpN6nbJfUzmiMV9i7p/kY2/e4+1ZVkf24aRhonjyrj9TPQ/++hjqjUmsVt3Ly0Zp3v8Ej/H+Tsfs6ZEa3n/9E021CSdDDCZVxZG/qB+gf1e1y16q2yGgiPj2Zb2K/R7U3+i+GP2h93vU1B0Cvlf+ucl5PGctdxlmuXCiDgtK05ji29AgvgWqQaYtWC7E1OJx+rBScwlDlDqN+nlwsha/qlvRUXFkpv6du7cufjNWZy5mZyc5NdBJbbRNoyI09HqDYviYGTbVtR99NFHlJyczNQ51fAhDqTidZbDiHpwE9+8xGMRSgSx0xNnH+QDhBpG1uKylSD+nFoQgUjsyG3/esmR9SJ2GOJ5iD9ZFsQBS+zwDxw4wOR5nSHOoIn3SFDL1AO+eH/Ea6iud3Xb1LBi28dZYh2oBzDxWHy7V88eiPf8zJkzi5cuRL16yehlYUT+nDhLDiPqJbbl1rWzYUS83isJI+qZB7GWxRpTL5OIv/p7lWFErlOfgyOvhxhHnO0UxGNxuU18eRHk8UGVzvLzlZ+mJLrx8BZLVOqG5m9Rf2UCE22Taix0/6OP2cFB6/qyDSP1O0/Q6X1NTNTl5Fcsnklp7B3igLH7zPtssiyf21Tl57OKCuvjkZP3WHfp821St0tsk3b7XyAhhx48vsGSnpXZhpGh+Tu0qzWdJeTU06fffKIEESPbeeIa7SrO4TGEd+/eo8IkZc32H2EnJ8QaS6dzSrlQkKSdH2FkFeztZBFGEEZWA2HkxRBGEEbWF8LIuoaRHXHZbHt6/dJ7Q0wR9L81naXfHv+jRb/T+5i8Lv5iCXk8ZzkaRsQBWdx0qN7DIQKBuFlL7u8ssQMQoUMNG+JAInbe6r99IO5LEPcSqAdje2FEnOZXT43u379fM4ejROhQxxOXFcQ2qpcZRJhQywRxIBV/AmwbRsQY6g2Z4uAtdkzi308RxLVwcRBWL7uI52z7fqj/DoS6g1bDiLgUo16OEa+HekBQ/5xZPkCsdRhR2dvROrJexJ/WfvHFF4thJi0tjU/Hr+U/sicCoDjgC+I9FOtGfT/F/T9iG8XlJkG8ZuJ9VG/CfNFNryslhxFBvSx07NgxrhcHWkG8l+prul5hRP0H+9R1rV5eU9f1qw4j6mdHvF/i865+VtYrjDjyeog1rm6veg+U+lmVxwdVFhudmVa+nExTXXkuE3XJhdU0o5QLZXniMoSZbj7+mBUmW/uXVFtYpbgUowTEOssYE190Rvuff0Y6RqapIFH8ObsIkhFkGZvhNjUl2axjl/XSzq7Oama22SZ1u7Tb/iKZNDw9o/TLYWp5ZccIK8lStiVZXBqaZhM726lrdIyylDYCb+Ooso3TVjXFz/74wGRmdZZR3q5qpVzQzr/CMKJS7wmxFaaEkz+sPsx+Y/TH9BuWL2jr+V8s2nZq7f4FVpHuRcqXy9VrYGJHrbZR24ky9ZuuesOf3N9ZYk71hjWVug2C7Tds9duJqLe9Zme7fWuxbbbz2nu+4rG6raKNehZF3S7RRn2sjiFfY1xufHVs2/62c6uv13Lj2Y6jsu2/WvbGdGS92HtOtq+hPJ+zbNeP+j7Zzmv7+gpqe3kcZ8jrU1DHV8vUeQX5vZK31fazKc+1GvL7IOa3fa1s1/SL1pq8fepjdV3YvrbynGo/QbSxXdvqNqivzVq8P7bvuVwnv8YreT1EuFLPGqrbLo8Lzkuv7qf3T+xich1oORRGlqP+Nc0bReP0a72f0ttnf8G27bpPARnWPwEEAAD9UM8QqWeJYO1kFlXSzNQuSo0wM7ketBBGAAA2IYSRVwdhxHFrEkZUIpB4ZLVSQHIxCxfXi+y0AwCA9SX+kT71hlu5DuB1W9MwAgAAAOAohBEAAABYVwgjAAAAsK4QRgAAAGBdIYwAAADAuvoV8R+9hYSE6JLBYCB//x0ADhHrBvQlICBAUwbrx8/Pj3x8fEAn5H3YZoQwAi5H3vHC+kMY0ReEEX2R92Gb0a+I/0NF7Cj0yMvLi9zc3AEc4u3tDTrj4eGhKYP189Zb36EtW7aATsj7sM0IYQRcjrzjhfWHMKIvCCP6Iu/DNiOEEXA58o4X1h/CiL4gjOiLvA/bjBBGwOXIO15Yfwgj+oIwoi/yPmwzQhgBlyPveGH9IYzoC8KIvsj7sM0IYQRcjrzjhfWHMKIvCCP6Iu/DNiOEEXA58o4X1h/CiL4gjOiLvA/bjBBGwOXIO15Yfwgj+oIwoi/yPmwzQhgBlyPveGH9IYzoC8KIvsj7sM1oVWEku2mG/vLv/pH+8R+X8/d0/+wYBSttBbn/yyCMgDPkHa8jEnZ4kynAKt5HWy+LSskmc5g3k+vsCjNTZrSVpm4FTFEpFGUKYnKdw4JMlJUSpS1/BZwJI4ERPlRe5MvE4/gsP6qq8mexRm371Qmi7OxMO+UrE52ZTaYgbbleORtGtia0Md+YOHKLqiH/lAwmt1u9HdTSUmmnXJ/8/II1ZVu2bFfKrbR1S8n7sM1oVWFk/vO/pnePjFBcXJxElI3QL/6/X9Jf//wf6P6ZMeZoIFmLMBJb1ESzUxbW2dlJ0YkxND/Zy0R9dmM/VcWb2fSR49xmYrifBbgF0cx405LxYkp6aXKkk3V2jpClLXuxrmn6CA0o/Xfv3c2MAc/LhM6GUnKLLabjs1Osc2CKhprTNNsMqyPveF/G39fqYpkf9QR7U2ywD/uy3JcSfbXtbSUVVVNchDeT6+xKK6CJKitN3QrklluoPDeGyXXRGRkUZqfPsmJyadpSri1/BZwJIwk1AfTFnWCWWhVITx6F0/4DIayx1EfTfnVCqbq6wk65DSVIZkRbyXUpFdUUG2qnj045HkbeJvfINDKNfmhV00yhvZcpqq2fveOx1U6f5UUmVVBS5A5N+XMZ9NOffmqnXJ/2Xf8enZ2psynbTjNnP6br+yqZ3F4m78M2I4QRhBGXI+94XwZhxE7dGkMY0ReEkbWFMLJ6qwojh7/6OS3s7daUBwSIsm76p//n7+jk3Hn6x1/+kt1bGLLTdnlrEUYSKzqpMT+EqWU5TeOsobKYZie6aJtSJszOT3J9WecMyzWE0Pxs5/PxAtJp/3gzbd/mztzcPKi0fZwKo7xZ5+w8BSvtkqt7WUNu0GKZwGMkVtJEYz5zc99OB+bHNdvs2raRn3KAF9TH/v5+TG3j6+fHtH1XRt7xvswlJYQI+6OVUGJTXhrlQ58pgSRG+V2Q+wmRKZlkNHgz8XtaSgYVFBSwSKOB24SZo5koy6huXBJGIlOyF9tHm8O4ne0BLyM7mwzKT0E8FmGkpa6QiT4pkcbF8fv37aPmghwKMxhZZkYm5Ys5n40XnZGj9MnhwMKhRedhJLEukL6+H8IKWgz05Sfh1N3gx4L9te1tZeRYX9Pnl9AMlJ1vLVPLM5TwJtoJkcYIysxMIW/ldRMyU5Ks7XMyGI9Z30n7+q3kQKIGQfF+qu+peG/k7dILx8OI8jmtmKbUhQfM3DhKScc+oqgOC/MMflGw2EKN3YM0ODhIsemR7Pqj/4MevX+c6uorWEpsGLeLTKxgiZHVS8JIWGwK92+rSGTy+P6RiVw/2N3Itmzxp7Z+MWc/i/S3js1tno0jj7Ea77iH0cUHP6KFsVo2tvAxPbg4Qe7vvMnk9jJ5H7YZORRGUouqqLGxcdGHf/J3y4SRBvbnf/WX9B9/+lP62c//nv3X/+t7dtoub63CyKE9g6yzs5GClDJ3DyM7d+selUVvX2w7d2qBqqqqaWR8mO1wXxpGDLmN1FWRtGT8kPwm6iiPZ51zp6hV6d862MuMyreFzoNnabCzkzWUpnAYWdg7wqpaO6guN0Wzza4suqyVvnvnPPNTHnsor8fTpx+wRA+ljV823fnuE1aRqO2/EvKO92Ue1fqxPumbbUKIN31V60vpyu+C3E8ot0xTbow3K7fsps6SZAqKz2UTg3V8YBvZ1cOigoIoraFnMYyEJuZRV1MBBQVFsd6xXWT0M1L/mIWlZNdSZ2ky+SrzCGI+EUYGO0tYUFA8jU0MUoifP6ufnKScIAP5KSFDmJ1WvrUq4w7M7GMN+UmUXNpKrQXpbCOFEV8lfNR1BNKNByZ2pN9f016IzSpmHRXK6xqfQvGR3qyyeZgKU+K5TC2f2DtH2fFBzN8vjqanLfyaCPtnd1JSVBCllHayJuX1MmSX0mS9lUEJz7bzVk1MUJohlUaHa5h4P7PjYzXbpxeOhpE3fCIpsEx5jidussDMTkpeuE9hZVXsTTt9hOz2UfbB/kEKyK+m/FQ3NnL4Kzo8WkE+WZ3sR1fGuf3pz/6MZZtzrGHEP4J9ffc9Pibsu/st6y70t87xrP6Hf/Qx5Sv11ZV9rGbgNB2ZbKYUZduEzHB/+vGf/2Dx2NLTUaDZ1tV6291EX/3sn9jPvrpE7m+/PISo5H3YZrSiMJJS0sX+08//VlkgP13097/4r8uEkSBmjoigCGFonv23n39lp+3y1iqMyGdGEqsHWHNjE+221CyWzx7eo8wbSD6e25mb29Iw4h5eQNNdpUvGz6gdoqrkHaxz9jDFBCg7tQO7WIBSb+/MyO7OCpZZN0LtuSbNNruybZ7+FBMZztxF2TYfio2NZOLslDhbFBkTzTz57JPj5B3vyxgDrO5X+1FzoPL7M18qjysM2va2loYR6+/e3uISSoz14JaaT4OVuYz72FymySnro4HuGiUAV7H6plqKVNokF9WwI7snlIPk0vnkyzSW6enFMzd8QBTtnh1Q1aAhyrlOXHKyvUyk4zCSnOlP+06E0aNzBpZduYOGegx06j0jOzlkP4z4GeNYbXcPNVfnLZ61Gh4ZXAx0qgnlNXke9J69X9Jrpz6e6it74SU26+vrR5U1HayluYGiTKGadnrhaBjZss1A/g3zlDw+y7yUYJK+7yR5xKSxN+T2z7wTkcOO3X9E7873UYT/Fta9+1Pa3S1ufBXb8R268c03FOZfSF/e2cMWL9NU7WR/+cVHNDc3RycWzrHSzHDrHM/qP9/fu2Re95RSuvn4Pp22dLEwZY7G2WP00eXLrCE5RrOtq7OdJhce072zk+zsvR/SwmStnXb2yfuwzQhhBGHktUIYQRhZCYSRVwthBGFEb1YURrr2LrC//f4CRUZGLlr4/t8uE0Yk3XvZeoWRvSOtrLKyitIycmnfZA/zcN9Klf0zVJ0YytR7Rp4LoeOnDnA/oSgznvJaR6i/qYpVVnbTuLLT8nB3Z2rwMKfVsrGeUr5006L0FSrL8snL9p6RbZ40Mn2AIkK8mbzt4Bx5x7tSQTu8KV85cMUGWZUGaNvIXhpGIjNoZqSNifs+UqraFw9okTkV1NWQtTiWKS6OxI2UrUMWVlfZQzVZJgo1RbHkSOMLw0jFyCRliPC0XBgR82yQMJJa5E/DQwGUFOHNIhN8aXBnIPW2+DHxXsl9hFCTeL0Ufv5UXDNEpdmRrKVvglJFOAg1MVOoNYw877s0jOyb7KRQpTylso21l6aTd1IeTTYXMdEnOSuL2wjWyzRGMhmDWVBOGY1U5Gm2Ty8cDiMKj8xRCsrOZm4JrRRWWqppIwuNibFy20pjR76kqfZk1jrxPu3te36pJGXwAH386VWarDezxTBiqmM/+fY98rcdT/m9vq2V/E1Z7H//0QdcFhOTxyJilO1030Z7F/6CDZb6U3ZMBPn4d7OffLtfs62rsevkI3p8eZLc33mLveMeTpcf/4hO7spjcnuZvA/bjFYURrqVICL8/KvDS8qXv4FVso5hZNt2bwoMNCzy9fO1OfNhrVcfi7ql/beSf8DzvjuUb6nim3uA8rsgyqw3slp5Kd+M+Nu+mwfz9/clL7+A5/MH7CB3JYDYzr/dy588t29l8raDc+Qd76uUXFxNsWHeTP3d2zuMVVcXKz99KSmjhNVUVVFBWQVVpsYzb+WAmVlZvXhmpCQtkSLj8qgkPZH5+puopqacUuJTWXFyLMUmF1NybBgT8xdXVy/ekBqdlEl1NaVkCotl1cXJ3Ca1spKJsy7ekda5eX6bNq+ao2HEWZHxKaxWeT1rKopph/IZFPx3xFF1XS1V1VayKOWzXKm8Js/7Pnu/noWRmbF+qlbGqK0uYWIMb19/qqytZwUJ0VRcaz2TJVSNjVGS8nrW1NUwMUfcDvtnb/TAmTCy5a13aMubbz7zNr3x5lvaNpLE/Ap2fG6OjsyO0jb3t5lbZA4dP3mcshOD2Ba3evqbv/6I3N/ewrZsCaf5+VESf8UjlDZO0BFljMN7LcxNGXv/8aMUrvwUcqpbeI6DE7Uss3QXtz841ci2uoXT3NETNDd3nFXmeGi2dTViE7Np6ztLX493toZTYmwwk9vL5H3YZuTyYQQ2H3nHC+vvdYWRVZMv07yUuBQTSoOT/Y79WfU6cyqMvELm5iP0cF+rpnyzkPdhmxHCCLgceccL6w9hRF8QRvRF3odtRggj4HLkHS+svw0TRsJiV375KiSSKqrqWHqSSVuvY3oJI0GJ2ezEoX3ksVVcktG22QzkfdhmhDACLkfe8cL62zBhZJPQSxgBK3kfthmtKowMX/0+/ewnf0pffvnli/3pT9jf/PC6ZuwXQRgBZ8g7Xlh/CCP6gjCiL/I+bDNCGAGXI+94Yf0hjOgLwoi+yPuwzWhVYSQ4PJbG9hygAwdsXaR//H//C7u5WLaflaSFa8Z+EYQRcIa844X1hzCiLwgj+iLvwzajVYUR+yro5//tn1i3ps4xCCPgDHnHC+sPYURfEEb0Rd6HbUYII+By5B0vrD+EEX1BGNEXeR+2GSGMgMuRd7yw/hBG9AVhRF/kfdhmtKIwklbeyf7q7/+Bfv7zn7/E/00/+6OHLNHOWI5AGAFnbN26FXTmnXfe0ZTB+nnjjZX/9/bw6n3nO29veisKI+J/shVik1IoLS3tpWIjwpl2HMcgjIAz5A86AADo2wrDyPpAGAFnyIscAAD0DWEEXI68yAEAQN8QRsDlyIscAAD0DWEEXI68yFfjzcAUCswpYlu8Yyi4pE7TZq0ExcSSp51yAABX5/phxDecdu1eYPfv36f7N9+lnGgTc0utsJY9c/PdWTIa0uiq8rvA5VePkqmwkYnH7YXhyrhmdv7WfSpPtZ3P2ndxzGd9becQ8xemRTGuU9qUt1otaaeYbqyh+l17bMpuUndODM+zZK4711lJZDiV9E8vGaOxUGyrndfFhcmL3FlvB8SQf/0BihsYYd5l45QytZ/c/PyY3H5Znv4sxuCvrbNRtXsfxdopBwBwdQgjNgduhBHXIC9yZyGMAAC8HhsqjPjHF9Ngax65K78LarlvcDSb2NWiOTDVjl2m7z24wJKNJmrbd4G+fnSFGXKa6NuvH1GuMYXd/OwHNNY4Rk+//Zp15prIGBZCUVU97Nuvv6Yn985RmE80u//1t9SYYztf7mI/277ffvcmMyrzdx65TN88vcayRJ3y08cvhBlzO+nrb79LtUo7oaZjH339vQdUkmyyattH3//6MeUYcpk619ztz9m5vmG69cWP6LClhhmTSygrJUTzmrg6eZE7yyurm+LnHlDc0D6rvXcocfQQ7UhOZHJ7lcGUwMSfuZsMvhRT1ckODSo/TdEUbzIwbv8spAiLYcTNl6WKP5VPjNGMv2WLJ0vkP6VPJV+3LcwQk8hzGvw9mae/gR8nxhiYdhwAAH3YUGHE3cOHaob2086WPCYCiQgh+48eYjmxAZoD0/zdL2lhoIaJxx5xNcoB/0tW3qKEkW+eUldFO3v01Q+ot6RXOcj/yOrRPbpytPV5GHl6gwZP3aLTI8PMfhix9rPtKwKHIM+/02KtW+wfVaWUP6Uc5Xeha/4uPVwYeF7vEU8PlTm7yluZOteTB++z/IQdVDO8QJ99+gm7uHeCjAbtwdrVyYvccV7MO6uG4g4+pvCyMha1+x5FtljIzcuNafsp3KJoerSB+fsbKT3aRN6ZFWy2WfnpGUwjuy3MTWkfm99CFckhTA0j1V3DLMnoT0llbVSbGcvUOWo6J1hmkpGMSalkik1i0101ypyxFB0ZxPqmpsno70/JOdFMs60AADrxK319fZoQoBdyGGFKIKkemmVDnfW0d36OsmMCmKatov/kQ7pzeIL5KI/T23fTD764xeIKlDDygy/o9KFDbLRBOVh4WM848FmHPDOFh+ywCSPXyNucS/e++1321Tf2woi1n21f2zCS2bt3cf6quheHker+k/TZnSMU6uNuld5OXynbWxpXyHiutmb67POHrMgYScmRsRRuSmXiTE9fe6HmNXF18iJ33HbmkT9KGSdukG9KL0s+eZcC0srpbY93mLaf4i03qmnoZo0NlWTw86Qtsblsd1Uut8mssrCMUDdq2DlAvm9tYdYw4kuzR2ZYVVUVVTU0UXVSFLPO4UtT0/Vscc63/VhD8wA11hVQoI8bSy9uoI6ORoo3BTLNtgIA6ATCCMKIy5EXueMQRgAAXqdfkQOAntgNI4ISSISKjgHKitqhrbfhm1hC733whD28e5eePnlAfcpBQXDje0buU5TSTrD2eXapRfHk4V26+8E5KlIChaAGh9yWfewH39oLI9Z+tn2//cHX7K4y/yfffbg4vxpUFvtLYcTTN4lOvffh4nhPnj6hg33V5KHMI4gwUhW1nbr2X2KPbpyl2w+e8jzC5589psJ0o+Y1cXXyInfWm+ElFN1poS0+6Sx6cJretNNuCTcf8vPZxnyzK2m8Iou2mK32NhZwm7f9ElhvWx91VWYu9rWGkbdocM8M8/NUx3NjgcZ4pewtskxMMxE43Hz8yGeHlZ/n2xRd0kQ9pUksxM+PtnlH08HZHqbZVgAAndiYYcRBvv6hzGyOIFN48PM6Lz8ym8KVA7s7s5Z7k1FpJ4j2ot7bx5+ZjaHWNh6+zKTU+3rZzmXty/1s+i4+lub3sB3z2bgms4m8lN8FUeblu2PJeNbt9H42l5l8PKxtrO1MZDTan2szkRe50958h9582035+TZ7850VjO1posamWlbVUENR29z5bIlQ29hC2RGhSru3mGX+JCX4vb3YN6m6loKUn9uiUlhzQxVV1VZTqNtbLLGwmaKClPqgRNaszFHbUEm+YVFMtK9tqKagbW6svKaZqqpqKTMhiGm2FQBAJzZFGIHNRV7kurM9jO0Zbae35DoAgE0IYQRcjrzIdQdhBABgCYQRcDnyItcXfypuaGTxAXrfVgCA1wNhBFyOvMgBAEDfEEbA5ciL3NV85zvfYe7u7gAALgFhBFyOfPB2NQgjAOBqEEbA5cgHb1fz9ttvL3rjjTcAADa8NQkjweERLKeonNo7u6ir65nOdqoqyaOI8GAm93sZhBFwhnzwdjW2YUSuAwDYiFYdRsLNSdTWO8Dam2opKyWeIiMjWWxSOlXXt1FfbwdLiTJq+r8Iwgg4Q17kr4t/cDR1TBymo0PlTK5fKwgjAOBqEEbA5ciL/HVBGAEAcM7qwoghnJq6LNRQksGCDYF22gRRWkENs/S1kznUzjjL2AhhpCnag7KVn0K12YMKvLVtZAfPnGJGO3X25NeNs7p8k6ZuJZoOHmXJduoclVzaTE2lKUyu0wt5kb8uDa3NlNrQTx/OtTK5fq0gjACAq1lVGInLLKGhzjoKMQQwuX5RYDCrbLNQVU6Ctn4Zeg8jPYme9CjbgwzK70J84DZ6UuZNFT7uTG6vMkZEsO126uyp6jnGeqqiNXUrYbl2k4n/fG9pnZGOHx/TtH+RnMZBsjTmMrlOL+RF/jqFFVuDCMIIAMDKrSqM5NV0U01+hqZ8OUm55dTXWKApX45ew0hsoAf7QZEnGbYurUtQyr8t9mJyP9XBIwcZ/37yNPWNjrLZQ0cpPyyQ3LxD2ODMbrJYBunc9VtMhJGAsEgam97NLLtnqTPfTKktE6yvLImCU+ppZrCQqfNZrt1hc32jND57iDryw1lq2U765JPb1NdaxpJLmujYoTFl3Dk2NtBP41ODdPDYLAv2Rhh5GYQRAADHIYw4AWEEYWQ5CCMAAI5bVRgpauunouxUTflyYjKKyNJdpClfjl7DiNc2q8tF3jRr3krblDLBz8OdTud70+GIbUzup7p28xrj3+/dpyg/T+ZX2EXn+uoovXaYjbSlcpv2sfNMhJH2w5dotK6aFVX10qP355TgEslOnTlOR0+fWBxPnc9y7R6rj/Kj7X5F9P65fubmFk23bh1bbCeCxlRPsTJWEnv46Dr5KwGkbtdp1lFiRBh5CYQRAADHrSqM5Fa0U2tZjqZ8ORlFDdRdl68pX45ew4jKVwkf5/I9KU/5XWiO3U6zSgjxVH4X5PaqJWHk2U+W00TXLE2L94i0FgVyeU3vKSbCSP+596kuLY7FxsZRTGTYYv+ds5foxtlp8lZ+F9TypfeM5NLNa4PMXhixhgxxb8rzOtt7VhBGlpdf30EDw2N0YLdVd0c9edlpt1oIIwDgalYVRowJObRzsIuiwwxMrlcZwsyso3+IClLMmvrl6D2MCOIMia+b1Q4lnHjYaSN7WRjxSyllp07NUGFhIS1cvc9EGMiuGqOjE/1M1LUUZlJq8xA73FdKpQPHaLQ5jdWOnqSS5BeFEU86eeUa5WcmMoSRjQFhBABcDcLIKiGM6I+8yF0NwggAuJpVhZGAgCAqb+6nnvZaFhsRrmkTaoyiqpYu1tFUSsGB8hjL2whhxBnmiAim/r5Y5x1AZkPA4mODOYbi4uLJZApngXwfiCdFxsYzUSfKRDthh/g3TpQxos1BLDAsissM5khmvXTjQxFKnSDmEG1iI8OZ944gMuzw4TmECOX9FG38AsOZmEttY22nfW56IC9yV4MwAgCuZlVhJDwmg7otFmppamL9fb3U3FBP5aVFrKq2gXp7+qi5rowZQ5Y/e2KPq4YReLXkRe5q1CCydetWzf98CQCwETkVRoLDY1h7r4VqC9MoKDCIRUTHU15ROVVVVTERSOJjIihI+bYvyOO8DMIIOEM+eLsa9X+5fPPNNwEAXALCCLgc+eDtahBGAMDVOBxGDGEmqmvvZS1V+RTiwD0gjkIYAWfIB28AANA3x8KIIYzKGjupq7mchQTZabOGEEbAGfIiBwAAfVthGAlmueWN1NfeRJEhQUzbbm0hjIAz5EUOAAD6hjACLkde5AAAoG8rCiNh0amst7eNYsNDNPWvCsIIOENe5AAAoG8rCiMBAeLfBzGQKTzUTt2rgzACzpAXOQAA6NsKw8j60H8Y2Uqzx/0p2t2dlbX50fHjBhpp3s607Vdn3/FjFGan/GWqdx1jRYnaOlckL3IAANA3hJFVQRjRI3mRAwCAviGMrIoHPflROOUne7GvvgqnxgJPKs3wYNr2qxMVG0eedsqfC6f5+V2a8iBTHAvwldu7JnmRAwCAviGMrIo1jOTu2MbO3wyjW9eDqS5nG9O2F3ZQ19gUs1jGqK88h7wM4axvamaxTKjaeYj27hym+vQEtvfAPh5j7+GjrM4yTGN7Z6k5K5yllu2kTz65TX2tZUyds2rnPMsJc6fi1j4aswyyydFqO9u38cmLHAAA9A1hxAnqf+zj6bedPvlhOGVud2fmiG3UOmGgL+4EMrkfC0ijm5f2s/DgEP4XbKuHTrGevGCljReXCT3H7lJn3vP/xffazWvWn/cfsLhAP/LcEUcfXD/M3Nyi6datY5o5e47dYlVR7nT06k3KjgljgWEGTVtXIC9yAADQN4QRJyCM6Ju8yAEAQN8QRpwQlunF3r0aSjfO7CBDoie79G4wXboeQocHvZncTxWdUMxGDx2jrtIM6jxwmRX6L22nBgj18WIYUX6qv4vLPtdvnGIrCSNB5njqGN3HDk00a9q6AnmRAwCAviGMOGG771YWG+tBgb7u5O5hFRHlQdFR28hTnDVx1/ZjYTnU1VHJsnpGab6qgKLzm9mpAwOUlVVJdfkpbNkwcv8j1t5SSY09E3SotZiJsyqnrl6ljJQYVli7lypzwpeEkf72HmWOenb+1Ih2+1yAvMgBAEDfEEZeN88ASk5NY6mpSeRrUxcRn6KUpVFwgJdVRDwFeD6vj4mN5Z/qmZGYxOdjqOMERyRQcnwkCwyJ5XF6F66zfGUsax8rUafZPhcgL3IAANA3hJHXDWHklZMXOQAA6BvCyAa09J6RF/Gn1MwKOnJqL7MNPq5MXuQAAKBvCCMbUGxcHJPLtfwpKS2NQgz+TFvvmuRFDgAA+qbrMOLj40seHp4ADpEXOQAA6BvCCLgceZEDAIC+6TqMGAwhFBxsAnCIvMgBAEDfEEbA5ciLHAAA9A1hBFyOvMgBAEDfNnUYMZmiNWVGU4ym7IViiyiiqJYFR+ZSZHmLts0aScopokg75bCUvMgBAEDfEEakMoSRjU9e5AAAoG8Oh5GwqCSqbWhiLS0tVF6QSaGGACa3Xa1XFUbCE4vZqZOHKCn6eSAxRqfTwZNnKD8xisn9ZCHRmWRunqeU4RlmrJmm9N1HKDQygcntlxWZzLITk7V1Nsbfv0OVdsphKXmRAwCAvjkYRkzU2jNI9aU5LD4pndr6BqkyPYFp26/OqwojwcFmVto+Ru+eOUipKVls/5nLNNxeSSFKG0Hbb6mIun2UeugBpc6cZSlz9yht30WKLq9lcntVQnoxKy6uoPSEJMrun2V3Dys/0/MpNz2VcftnIUVYDCPGJFak9C8uKNCMHxwczwpEfXEZxRhNLDG7hOdMjItnkXFp/LggO41px9mY5EUOAAD65lgYMafT8HAvmZTfBVGWXlhDvbUF7HlbAws3mSk8NFg7zgq9ujCiMlPZwH569OQx2zdQtaIQEhwcx8Jz6yhp7jHFVtWwhN33KL59J4VGRDFtP4WxjN69NM/Ky9vJ0lBLeZYD7N5R5WdWHV197yQzKu2LuvbSbiUgCWoY6dl3hg00V5Nl5iQN1JczdY7e6XNs2NJOzZYRqqisZZcW5pQ5+6mxtoQdvHCZmsuVMUZbmWZbNyh5kQMAgL4hjCCMIIwAAMC6ciyMBEVSl2WISjKTWFR0LNW1D1BtXgqztgml4ppG1tPbR91dHZSbHsc0473Eqw4jxqg02nf6Eu3et49dPH2AEqO0N7VqiXs7ksncdoQyTt6m6Pr9LO3kA4ptHKXwmBim7acwJdOhY2fYYH83JcbGU3DlAHt/fIDbdO++wBozomny1AXKMpmYNYyk061HH7Lx8Ska33+U5juamHWOdHrv+hxbnDOqkB0/fJYsvc2UEBPNLHtP0J6pXUsvC7kAeZEDAIC+ORZGFNGp2dTe3cuGBvupqa6MwoIDmKhPyKqkwa4mlhAbQ8lZRTQ01MPinrVZqVcVRkLNKWzu7JVn94iYmbiH5PLZeYo3m5ncTxaS3kEpY/spOKaOpew++fIzK8ZEio2xKtp5gM4Pd1NwaR+7OTPIbaJzOtihqQN0fLp/sa81jMTQhZtXWGykOl40i08rVMpi6Pz1SyxeKTPGJFNMvFVsZAK1TR+lwwONLDk2mZLzu+je+8eYZls3KHmRAwCAvjkcRjgkpOawwe4STV12URe1lGQxa1ko9QyNsKwE7Vgv8srCSGQaa6qTL8uYqayujRIjI5jcTyM8nkIiEig4NJaFRCRq28iSa+ng/Cwb33+AWlJS+WyJcPjYceoqLVbaibMqMXTm/lNqyXn+Vzmd88cpX/mZ0jLMDu+fovE9s1QSF8Nap05TXb6JksoH2CFljj0H9lJWWRMT7fcc2E/lScls9+xRGh+fpZ09NUyzrRuUvMgBAEDfEEaW1CGMuAJ5kQMAgL45FUYCUrOZpbtIUxeTWkSD/Z0sIzmOMotqaGigjUUE2RnrBV5VGNG9yDx249opMsl18FLyIgcAAH1b8zASEBBM6YVVbHh0mLpaGig1Jpxp277Y5gwjWTR04DDrKnSdf/vjdZIXOQAA6Nsqw0gJRUbFUXpmJssUsnKotqWTdbdWUqjc1wGbM4zAasmLHAAA9A1hBFyOvMgBAEDfVhVGhncO0EBfH7W3ty9qa2mhypJ8ZgwN0vZ1QFBQKIWFRQA4RF7kAACgbw6HkaCQcEotrWGjo8NUkbX2/yeNaseOHQrxE2Dl5EUOAAD65mAYCaaypk7q7WxhtXUN1D/QTxkJJqZtvzpeXl7k5uYO4BB5kQMAgL4hjIDLkRc5AADom2NhJCKNdo0MUGyYgYmynPJG6q7JZ5r2q4Qw4k4VvRM0MzNjYy//Y2ZCTuQOTfsXCUrMp7m5OTpw4MCijuoiioiIlEQwX0/tGLKgcPNiv1CD/5I6d3dte0d4+gbY2bZI8vP2YHJ7lbzIAQBA3xwMI6k0NDxAqVFhLNAQTAU17dRels007VcJYcSd5i9epKioKBu1dPPmKXb85FHKdiCQZNf30WRfBaWkpD6TRn3T87SwsLDEuSvXWWtJvGYMWdfMYbr+4X126+zYs/JQNjQ5Smlmg6bPSu2cX7pdqmN72pjcXiUvcgAA0DfHwkiAgfKqWmmgt4c1t7TTQH8XJUeGMm371VmrMJJfN8lOnTrF9vaUMlEXkV29WF6dHcFluRVjTC0/OFbJuH1x42L58b09mrnW2vz5s1JZNt24PsXyynrog+vnKCbQncl9ZSKMjHUXU2xs7DPx1D0yQcPDw0vsOX6O9dVna8aQeYWm0snTJ9iNy/PPyrcxc2IenTh9klJDvZnc1x5Pv8DF7bt89ZTNtsZSWIAftzl7fp7JfVXyIgcAAH1DGEEYQRgBAIB15WAYUQQGU1xCEktKSqJoc5i2zRqRw4hvVBbVFMRrDj7bfYNYW0uFpk7YdfkJOz87QjOH7tL9Yz1M1A2dvkdPnn7EPpzv5bJGyzX25MoBKigooOxUM9tuzqZPvvySLO0FLC8zQTPXWtOGETMNTk6xyclJOnPpHtVluTO5r0yEkYsL+7mfqqkkjfz9/ZdIrOljvXVZmjFkVcPHqDUrlDU112jqQ9Ja6MhwNZPr7Onbf/T59k1Zn6Pq9JEZboMwAgDgWhwPI6+RHEa2+YSQZd9hqiuIY6JMhJDh2UOsMc96ZmMpT7r85IesuzKaQ8ZiGPFOpsdffUntXd3s+59/SObtz8PIl09u8z0KB4ZbWHX3Pvri/od0SCkTDgw32ZlvbWnDyFLBxmQK9ndncp1MhJHO8ihNucwrMIwZg19+P8ruy1cpSvkpyHVWZrp0aTfT1mm96PmqdQgjAACuZUOFEcHdJ5gG9h5mdUWZNLhnjupzzUxuK2w3F9PnP/iSlUVZg4YaRhJrd9G3P/ySLp68xr7/7Q+ptzjC5szIHBW2jHO5cPrkHH3/yRUus5Z/TzPfWnvRwVnILB6kzGh3JtfJVhJGHBlPGDp9mVK83Zlcx7xT6PLpIaaps0M83+TcdjY1Nc2G2vPY/IWLZDKZ6cL5OSb3VcmLHAAA9A1hBGHE6fEEhBEAAFitDRdGBHefINY3M0d1WSZNva35q7fpux8cZd5uahixsJFzj+m9uUkqLCxis+cf0IeHBp5fpvn4Np28cIO+eHqHFeWU0MOPH3KZ8PGdC5r51trLwkh937tUn+3O5DrZSsKII+MJqTXDtK+3hG3T1HtQSc8+Gq5JY3Jfe8Tz9Q0IZ9HRMcwcFsjm37tPp06dpr6GHCb3VcmLHAAA9G1DhhFHZBUUUYIphInHoeZ0ykpIsFLqzKGBi22DTYlUlJvObYSioiKWZg5joo0pIXux3LbvqzJ/8V2KiopeFODnTcbELLZr1y5auHCfFuZ3sV27esloZwxVUkkjHZ2b5n6qzEST0+Ox7QHUv+com7K0UVy0sp3Rcayxf4KO7BmggO3uTNPXjtmzF5Y8X1snL57StLdHXuQAAKBvLh9GNrqi5kGanp5elJtspq0enszffwe17rxErUU7mL+/H221M8airdu5jy1Pj23Oj7c4rg9Lyy+j4clZmt09yqoLM8h7q532L5BYVL/k+dpqr17+bIgteZEDAIC+IYzoHMIIwggAgKtDGNngiutnqTjJncl1zljr8daDvMgBAEDfEEbA5ciLHAAA9A1hBFyOvMgBAEDfEEbA5ciLHAAA9A1hBFyOvMgBAEDfEEbA5ciLHAAA9A1hBFyOvMgBAEDfEEbA5ciLHAAA9M2lw0ig91bK83WnSL+trNJX20ZW2DFFWTHuTK6zKyabdpZaaepWILWwgwpTQ5hc57DgNBrrKNKWbzLyIgcAAH1zyTAS7ruNPajwpgovd9rhtZU9VR7X+mvb24pIzqfwQHcm19mV00TXLFaauhWo6jlGPVXRTK4r2TlCMXb6LCuqim4d69GWbzLyIgcAAH1zyTDycY03a/JbWm703Upf1HhRivK7IPcTCtvHKDXYnRW2j9NgcxdZRidZdW4kt8ksq2PDlkHq3n38eRjx8KWq9kGyWIZZXVkWGeNzaWdtEXPz8qOhoQEKUMYQxFgijBw70MssljHqrc5T+mSwdz96SgctXWQMTmWTo+M0pIy7q6GKVXYP0cT0BCX5ejOEESt5kQMAgL4hjEgQRjY+eZEDAIC+rSqMhEfFUVVVKcWYwphcv1rOhpHj+V7sUPQ28rYpr4rcTh8XelKo8rsg9xN6jt2iqih31nPsHu0qNZFbYAa7fXUvuYWl0fXTM8xHaR/RNLEYRuJK++jYZCOZzUls4c5NinHzpekLZ5il7xD1FJqWzCfCyNyuMubmZqALt69SsFIuWK7dpBzRTgkZwsMre5U5fWn/naesMy2MQsstdLy7iiGMWMmLHAAA9G1VYSQ1u4iGhwdpYKCHFeekUEiQQdPOWc6GkW1brQ7neVOHvxIY/LexpwWeZHrJ/yK7NIxYf3dzE/dzRNOtW8f4HpEFSw0T7T3ymhfDSHnXPB0Yq6fy8opniilQaZPesot9ceca+XounU++Z+TYrVsUpfwU5DCiBg1Rvlhne88KwgiTFzkAAOjbqsOIpbuYYpIyWWtnH3W21FJitIkF2unjCGfDiC2jhzsFbLcKd9fWy14aRgwpdO3KSZZiMlP91KnFMGDIqaVT8/1kUsqForJS8vZLo4Xzh1lx5TAd7iulhMwS1laQ+sIw0nH0CrWmGMlTCRkCwsjKyIscAAD0DWFEgjCy8cmLHAAA9G0NwkjR4mNDSDhlF1fTwMAAqyrKpLDgIE2/lVqLMOKoyNR8CvNxZ+rvbm6+LC8vjduERaaxiopKSs3MpmwleAmiLjq7mMsFUSbapUaGMTFGQUkhRRhjmCgT9ZFhvkz0T83L53tRBIPSpqKimAw+YSwvNerZHHnMILbZYJ2b57dps5nJixwAAPRtTcOIyhyTxBpau6m3o4XSEqOZwc4YL7IeYQQ2PnmRAwCAvr2SMLLIEELp+aXUNzDAGioKyRwarG23DIQRcIa8yAEAQN8QRsDlyIscAAD0bVVhJDmrkAZeFEaeCTPHs6ZuCw12Nmjql4MwAs6QFzkAAOibw2HEEBxKJpOJRcXFU2ZajKaNraAQI+WW1rCBAQtVFGZq2iwHYQScIS9yAADQtxWFkdDwcBYSGkH1HT3U39fLBgb6qSwrkYJDw6yCAq19Ag0sJimD2roGqKutlsVHGjVjvwjCCDhDXuQAAKBvCCPgcuRFDgAA+raCMBJKDd39rKe7m3oayyk8JIhFxOfS4K5B6ugZYEXp0RQUFkUl1U1swNJDxdmpFBwYwLRjvxjCCDhDXuQAAKBvKwgjAWSMzWXDo6PU291Bzc3NiyzDIzTQXMlE4Mit7aS2+nIWaQzRjOWI1YYR34Ct5LVd+X2bVaBhGwXu0LZbLZ+AYOYt5rJT/yLbvf0owMebyXXgHHmRAwCAvq0gjBgpq6yGjY5aKC85mZJtlFTW0kBXM0uLjSRjZBT/M/Cr/afghdWGkX3XQ6mlxJ2aJwPZ7VuhdOOsH3kodYLc3llNu99lFWnaOlu+hiDaLpWlVbTT7qYiJrcH58iLHAAA9A1hZA0gjOiLvMgBAEDfVhBGoqmmqZ2NjPZRjHTvR2peJQ10trCchBf/ma+jVhtGjt4zU3flNvrw8wg21eZBEWZtO1vbvX0pNDSUBQda/78YL58AppaJNkKgwUAhQQHksyOIeW1z558B/gFMtPfx9lxsP/H+LaoKDeFAooYSUS7aCG7bvClEzB0SzLbZ2T54OXmRAwCAvq0gjIh/KySBDYwOU3F6DAUqgUQICg6j6lYLtVfms7U4G2JrbcLIVspv8GO3Hxnpg7P+FLjVncntheEjC9RdW8fGphtom1c8HT1xgtU+K8tpHGS33t1N1SWZ/L/7qv/Db8+xu/Tuvn5WW7uLTi3spnBzHDv54DGN11ZQkDKPIOYT41gac1lG/QHaN1JHE5N7mMnO9sHLyYscAAD0bQVhJIxqWntYe0srDVgGqKGumrV29lJPWwv1DlpYfkKUnf7OczaMhEZ4sOtPzNRSqBzw87Yzc6Y3fe+bcMrZ4c7kfsLI/Dnqby1jBn8fSq3rp7GGNKa2UcPIZGshP14aRm5TTYI7E3W9pz+gkiB3Zrl2k3Kk+WzDSHHXFB2f6qGQoEAmbxusjLzIAQBA3xBGJAgjG5+8yAEAQN9WEEYCKDohiYUEBpAxOoEyMzNZRloKhQUFkCkq3irMoOm7Gk6FEc9tdPpqCDtxwI+CPNxp74kgdv1qEA23epK70k7Q9FX4enlTXEEXu315N8WWddH+3lIm6r18vRfDiAgQomxpGLlFjQnezG2bF+2/cpOSfd3ZwOWblLvNnbZ5+jDx57y2YcTLx5eMMZl08tYNFmVn++Dl5EUOAAD6tqIwsl6cCiOrtG/fEbJYpti4pUIpC6bxvSeZxTJIY91VlFbZwdor07lP854LrNhkPTNyae9uZpmcpz1DYgzr2MXd0zQ/2UV5xc3sZHsVh5GBhmxWP3qQ55gZ38nU+0rAMfIiBwAAfUMYWWPqGRJBrrOnrHc/dRRHMLkOnCMvcgAA0DeEkTWGMLL+5EUOAAD6hjCyxpr3XqBiszuT62Rlrf10YH6cgpXfBbkenCMvcgAA0DeEEXA58iIHAAB903UY2e4XSG95BwE4RF7kAACgbwgj4HLkRQ4AAPqm6zDyvxZN0r/IOwCwYv9d823NIgcAAH3TfRj51dBygBX7F6ULmkUOAAD6hjACLgVhBABg40EYAZeCMAIAsPG4eBippd/JHaT/IbSK/eucYfp1o9xm9f6nyAb2WxFVmjp4vRBGAAA2HtcMI+FV7F+mTFDakffoN6MHWdzJO/Q7kY4Ghkr6vfgGpq2zqj72p2xwclxTB68XwggAwMbjkmHkt4v3s4gDd5UwcpfMs7dZxvH7ZBo6omlv6zciaul/SWxm/yaulv5V7F76yV/9O/ZvlUDyu/GNNu0rlccNmjDyuwnNTIzxm0btHL8T38xE/W9FVNNvRjYw8fj3YmvpV43V7N/ydjTRryt9BHkc0EIYAQDYeBBGJAgjGxvCCADAxuOSYeTXY1rZO73XyNA2TX/YfI5FDM3Tr0fUaNrbmnv6Y9qz/yJb+PgiGXo/oP/8D3/Dmsfn6Pxf/BUFmMrZr+fO0598+2hJGAlsO0jnbn3M2m58Qe+d379k/MC2eXr68DPWtl9pMz1HFz/7D6xNmfPGrfMUtft77OqHF+nMvW/IoPQT5G0FLYQRAICNxyXDyB80LrC4Yx+TcUQ5uB96xCIm3qU38ns17W0d/f5Paef+Ofa7MSK4jNO//9mfMlEfv+cxDU/uYtnzn1HXUM+SMDL8J/+Zrp75kI2f+YT+/V98s2T84R//JSWnlDNrWSud+eP/wAYGZul/jqym0nOfstsfXKN/84J7VUALYQQAYONxyTDyq2GdzHjkHv1udC0FzD5gf5j24rMiwm+bqyl0+A77yb/7VCkbob/42Z8xbpMyQE8evs8Wvv4x/UHo0htYh775SyrIq2bqeP+juYb964hqGvz+f6JCpU741dAq+k1zLf2W0kbInHhKf/7d6/SbUbXMq/IgPfzrvyY/ZRxB3lbQQhgBANh4EEYkCCMbG8IIAMDGs+ZhJDDISAXF5ay8XCsjIVrTZzlOh5HwWvavktrp18QBP6mT/VqYnbaSm49+xJdXhIUrF7js2Pf/Ixs+eIIf9936P9mpC9bHJXM/YJ3DI0qAuECffvYNGxeXasb3U+rMdfb+3DFyKx2jz7/7IzZ+5kuq23mU7jz9honHR86MUcvdHzPR//ytj8hNmUOQtxW0EEYAADaeNQ8jORXt1NVUw3JyciSlNLizl+KUdoLcV+Z0GHmlKmnk079ihTlyHaw3hBEAgI1nhWEkkAUFBWkYDKLueduixj5qLMpg2nGiqW/UQqnK74K2fik9hpHygx/TuRvvMbkO1h/CCADAxoMw4iCEEX1DGAEA2HhWEEYCKT6ngvX09Gh0dTRTrCmIifauHkZA3xBGAAA2nhWEkWSyjA6ywvR0SpeUV9dTT30BE+3XMoz8fv4I/ffFxwBWrvmWZpEDAIC+rSCMpCpBpI9Fa+qUUJFdRH2NVuJxYUMvNZVkseDgYEkc9Y0MUIrSTpDHknl5eZGbmzuAQ+RFDgAA+oYwAi5HXuQAAKBvax5GIuKyqX9wJ9u5U6u9uoSClXaCPJYMYQScIS9yAADQtzUPI2sJYQScIS9yAADQN4fCSKydP+1Nzy2mviYruY5Jf/rrCIQRcIa8yAEAQN8QRsDlyIscAAD0bYVhZITtsnMPyK7hYRoZsZLrhMHeNooOD2DasV8MYQScIS9yAADQtxWGEefvGWnsG6Xs1AAm170Mwgg4Q17kAACgbwgj4HLkRQ4AAPqGMAIuR17kAACgbwgj4HLkRQ4AAPqGMAIuR17kAACgbysIIzHUPTTIqktKqETS0NRGQ71Wcp3QMzhE6TEBTDv2iyGMgDPkRQ4AAPqGMAIuR17kAACgbysIIwFkikpi+fn5DstMitKMt1III+AMeZEDAIC+rSiMrBeEEXCGvMgBAEDfEEbA5ciLHAAA9A1hBFyOvMgBAEDfEEbA5ciLHAAA9A1hBFyOvMgBAEDfEEbA5ciLHAAA9A1hBFyOvMgBAEDfEEbA5ciLHAAA9A1hBFyOvMgBAEDfEEbA5ciLHAAA9A1hBFyOvMgBAEDfEEbA5ciLHAAA9O3/B5oFi8chOv9KAAAAAElFTkSuQmCC>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaYAAAChCAYAAACMAxsPAAAsGklEQVR4Xu3daVdb15on8PokmmeERiTQLGYQ8ywGAWLG2BiDAYPj2bHjeUqcGMez4yF2nNwkd6jq23VXV1d1r1pVq7tf9Jv+NP8++5EB6QibiCky93nxW8va+5yzj4R8/tpbW2f/g0KhQK7cgSrS0tKC6pAnrbySytL5XKas/XeKy+XKKmOMMfZp+wd5waY0VpQHPUQ87hifR6VbR+Tbto8dQcisyirfKRxMjDG2/3AwMcYYyyu5B5NMfWIWtSU6slpmLKogBwdboNxgn53CwcQYY/vPtoLJ4a3F3OEhmJUKslouekpC1K7P2mcncTAxxtj+s6VgsrqjZHZmCi5TZt1qT2m3e0sCBxNjjO0/HEyMMcbySu7BZPTg2KlzZLS3dW3K+Oq08Y6xo6gq0pOsfXcYBxNjjO0/uQdTHuFgYoyx/YeDiTHGWF7hYGKMMZZXOJgYY4zlFQ4mxhhjeYWDiTHGWF7hYGKMMZZXOJi2zQLXxBMSHjqD4tYkVGo1yd52M07Y6vqh0qhJdj1jjO1/uQeTxop4T4KIH9dOTo7AplUQjdWN/oEkWqVyYWJyHG6zMvsYO+T3CCarKwB3gYZQmbENZYt3iFq73TCpRHjpIbQGPcmu/43UJkTDfqJVbVDPGGN5LPdgkqmNT6M+bCaBmji6akvW6irbxhHzbeMCu4m9DiZXuAnjIz2wSr0ZQVecQEnyS9RdfEcCA8twltdDZY2SwOQK/FJZ9Oi3xGgxQuftRWhmhfiTd1B64Aw0zgpS3H0Vscv/hGDyBCluG6aek6X5PCKjZ0l0+oXURkw6n3ISPfMrIodWEDxwL6UnCaVSgUBdFxnta4Reu3tLjzDG2E7jYMoBBxNjjO2+bQaTEUOzCwialUQM8/WOjqO3c5CM9FTTRTJ7v52xV8EUbuojA62lUMuHxoxtiM5eIGpNqsze+x3x1ETpsaHmFAn1HUNg+Q8wWwqJqHONvYMz7CIbDuUZGhA9cpuGCWmo0NIqhdMlqa1yUn72ZxgLpGNpPMRW3QGVev387IE6jI8mYNdrify5McZYvtliMInvVzSIj86it9q7Vu4INOLgSBd0JicZPTSLcrd5g/13xp4Ek9qCWFc/SXZUQqOWfWe2QTAVjf9AbF47PdaWjZHI8E1Ell5Lr42ZiDpbz0t4YmVko2BSFvWg5vQPCPQvE39iGZ7GLil8ykn5qR+gtxRkn/d7qWBKIiD9HQR5PWOM5ZstBJMG7UPTpL/Ol1FX2jyEZEuqlyA0JKTtqoo2OMbO2JNgSiMfyqPyDYJJX3mSBPsPUI/RNfaCOEMROJLPUFReSxSaYoQWX8JgthAxwy8oelQOG6Hja7wILjyF2WYi6+eTGsr7UDDxUB5j7FPFwZQDDibGGNt9uQeT0YHm5hYipotnrsekQWVD81p5XZlvVxcL3OtgErKmi2tKYK9pJUrZ90+W2kM09OaI1pBUuQvOznki6syO9LBRQONqRnHfcsr7yQ/KgjC83UuEjlcqJj84iKNxFGqdLvM8ebo4Y+wTlnsw5ZHfI5gYY4ztLg4mxhhjeYWDiTHGWF7hYGKMMZZXOJg2sRdtMMYYW8fBtIm9aIMxxtg6DqZN7EUbjDHG1nEwbWIv2mBsM+WjF8nf3q7Av0E92wviR/Vq1Lb3IWjfvZtTs60E029aj6mTDPY3Q/eJ38R1L9qQU5tsJOB1bvoD5ZJIKcyydaAcJWF8fuNLcnppCSv3vkGr30Lk+6/qOnKcXDtzFre/eoVTI11EI9UFBxfw+OFtcv2rx7gx0Q+DyU2WvriFsyeX8PLlE9JdZqXjxXrnyZe3z2BpaQ41tgIib3fVF49+IndO9UBh9OPxL/9CrsyLewhmb8/YbrIWlcBp1ZHVMq3BSYaGu6DeYJ90aqMTpf4UeR3bXO7BJJO+7EVdYhpltvXb39R0TX3yy17sRRvpzDYPhsfGSahI3BWiAuETrxGe/jrliLhrefva9oVFFRgbH4THrCUKhRkn7q1gqKGezC0sScc6inu3TpFCfXabcu5YHD8+vU5czhAeP7+HEpeBmNwx/PjHHxHzFpLVfTqOrZCbp/pgizTh8TcXicOYffxsTtxZeUpePLiKru5DeHz7GfliuQXFrcNYPHWKXL39AHcOj8Ak7Se0fr6Ct/cvS+G3RA71d0rlVgwfOUdOSmXPXzzBYI2D2D1VmFtMbSs8e/EQPT4b6g7dICuXxlHgLMfbn/5IaqNeHLx+D5/VlhKFokQ6zyeoDhWS7OciKQzj/pufyJULS/j88nW8fZDiKXRh6drXuCyVCw8f3MdIZREi1cfJzz8/kc7rNJ4/e0r6i11wlLbi7KVr5N2TW7CLNsyFZODQUXxx9Tv85ZenZGlxDtXldbjz/B35TvowcfHyI1xZGCUKXQEmz32Nm1fPkksrb/Dgiw74S4+Sx1/P03MYOHOdXO6sQ6j/NF59s0CMBcV48v1fEG+tJRM3nuLB0hDMzhry7N2PGA2s39g5i/T+vv7dc8QCZjJ+8xFunZuTPuieJK/vL9B2RdWT5N2La/R3njpzg7z6+iYevXqDkz31pPPYRdweaJO1o0Fj3xR5cFP64HT2G1z9fI6YFRZ8dukl+psC6By8Qt7evQS/U+wnrl0qlETrMTbYDatOQVaPG4i1k4aImx4bG8+R6vkfEJg4g/KjD4lOes8r1Rrpg9kI6W0KZ78O7KM4mDaxF22k42DiYOJg4mD6e7fNYMpcj0ncxLWjPPVHE1qSR9BWvf54p+1FaOxFG6tsnkoMj/SgUKshqfIKRE+9gd5sJuvrMSnWbhprKizCkBRkQsTTgG8fXMTZ756S8Srx+ptx9+EKKXZtvvRF4+HTeHJ5iRiiTXj+8ArqqjrJ1euncPv1OxwOeklqHxtOPH5Hjnf6Ees8g3/881Ny8uQS7rx4iYmeciJvK6UYd+7dJgfPfI5Xrx5gdPIEuXY6mbmttwpPXn6FoFtBWj+/h8+HRWDIj7kuNnAZX10cJfK6iSvfYLEjkhZMh3Ho3Lf4t//+F7LVYPr6yQopL1HAW1qLp/euk46hi/jmYt/atv6KJJ7c+wLVUigJKzenpXI9xi+tkNOJKtquKFxFnn37PpjShCoW8eDOEUJlFh++fP6aNJZZofOEcO/JtyRa7JMC6zvU+Y0kMngW939TMB0n/fO38a//+lfEG8JEa3bh1uM3ePPuJVkc/NDf+D0RTN//hC8fPSKXlsepXO8oJg/evkatXYPJM3fIQlctxHVm6YsHpL+1DAdOXfloMOlsbtz//jWpMUtlukKclwJY6K71SMH0BnelDzivb54mTrGfSoNoXQ/paa/MGqpTagzo7B8k1vfrnRmbzpNI7yDEd0/WnlvEW92Q2k+pJuFYD4Z6m6AXz1P+erANbTGYNl6PSX4T1+7+Ce4x5cBX3oSRkT64TVqSKpd6TMceQmvUE4WhCZEjV6CRPskJYpv0YKqJtOPhoxs4Ln0qF+6fP4d4UxL3pTKhyLYaeBsLJBbwp7ePUVFgIgpfPb7/0z/j/rlhYjEocO7BM+lTcRFRKEw4eu47PLk+TsxaBQXTrQtHiDhmuL4Lj66fJuYN2lQoQvjym6ukvLIYvR1NqGuZI3cuzSM5dwrP7l4mS2ev4pcfv/loMBkcXtx8+oRcOr+Ea7ff4GsplASFwoCu5NRaj+nm3bvor3etBdOffn6BR9/cwsPHT0kqmB7g1fXLZGnpAv7w05stB1P3Zzdx/aC4CW9qW0+0Bi8f3EGHFEpCqse0hBvSeQkjzcW0Xa7BdOvxI1IbkB67Arjz7CGpcCgQH7uIH5/dJvIe069/fE7t3/v+B7IaTP/l15fk6dP7+PLrR2vBJEIjuXgP//yX70ml9/1d8T9ECqbb7/6EX3/6jiwkAu/rUtcUEUbHRwdw49sHJGKS6jQ2nP/yBemsNsuC6RJ+uXdHOudT5MH9R6ivr8GL109JER27ACcuvyYDLTU4cfUdnv/yI659NkxE+2qNCXUdA6RXCkOd7LwLvJXoaYiQ1TJj0zkSaO6mx5auC6Qk9j4o04JpROrJ281qkvWasCxbCKYPL3uxyuoOkP5EF09+yNGGQ3lpwWSoOY1g3+Ta9tlDeQo0z57AlaFuIj6hxefP44vpTiImM8jbFAJdc+SXN0/QYE3vVZlw/N5zDLYWEbe/T/qEfw1OUyE5cuY+nt45QIEliH3EUN7zB7eISzqn/vkb+GK2i8jbJc4qPH5+m6SGVBSINgyTe1e/xKOX79Ab9pKS3plNgykcG8TbxzeJq9CBhfPfpQVTZtuJUyv46kznWjD95//8FW2hEG7ce0p2usdUVZ7E4/ufwy69VkLi0BVcm+5eG8pL9ZgU6Fi8TR5cHqDH2wkmf3wcj28fJYXOIL599TrnHtN//sc/k2RNCKeurQdTVe8EXq6cQLxvkbx9eBI2+euR7v1QXnu0gjx69TMOVqfCV3B4W/HLX37GN8fHiCgrLGrGdy9XiEN6vGGPSerRCMs3H+OwFAKnv/6OjNd4YXTU49vXD4nXnBrKS3ZG8Pn9lymz9e/b/8BQnlKDhq4BmomXPhsvI5g0VvjmfiBmq4WH8raJg2kTe9FGOg6mVBkHEwcTB9Pfr9yD6SPrMRkdXjRLjxurQ0Qp33eH7UVo7EUbcpnTxSsQPfsrgskTJLWs+vq2G00XFxoHJokYljkQ33x8u3PoAFkd4lpamCFBMZxn9+LA7AJZWpTKrFKZzUsmRdnqPpKZ0TgN5/livWRRKjvY1waj1IYgb5cYXRhIxon1/WSJwiIfGehqht/XinnpOML4yAhGBuMoNClISUsvWqKpJezXGRAfOkiWlo5isC6JeGspcRU303FWz/fIRAJWvXThr+wkA13iImVAZ+8gcdstqOzsRYPbTsSwULxvQAo8Pcl6LoLehp6BPuIokALb7sZgbycxSPXl7f1r7R8YTJXZXPXk6PvyuakkEeFV2tqX8Rovzk3B6zAQeq2cMSTi1YTaF98xvfoDuX5ROtbBYTil11WwR5ox2t+6dq426XFfmw9Wey0Z6BHf6Ujh3tRJ2v1FKAw3YWygnSgUWjR29CMQDpDeqWnEfG4otGYSHz2Ejo9NfjCY0ZlMokj62wkFgXrMHh5fe6woLMKtH39BV62dKPQmxA/MoCtcQsQxKhrb0Rj0EH9dR8ZrMznQSNsYzD5yeGEJx+aPIOQ1E4VCh4a2IYSlf+tNJWR67gg9Tj/P9OniYor4QKKVvndK/+5p9TummoWv4ZdCuUDaRxB1PF18e3IPpjyyF6GxF218nOw7pqx6xmTk3zHJ6/NYWdcwntw6vjbrUl7/ezA6i6WefOr3eRnlsu+Y2M7hYNrEXrTxcU7Y6vppJVshu54xGV0Bugb6idu6QX0eqpQu7sL84YlUz2mDbfKNxttMrMWrEzjYTuFg2sRetPFxHEwsRxxMe4KDafdwMG1iL9pgjDG2joOJMcZYXuFgYowxllc4mBhjjOUVDqYdVN0xiFD6Oi3GACJzrxEcPEGcFe/voZUjZUEY9rJGIq9jjLH9ZgvBZESsuZnI12MSP74dGh5Ba2snmRzvh1mp3OAYO+P3CCarKwB3gYaslevdZHSgHbq0H79qy8cQGVrMOkauVL5+RMdOEuUG9blQm6wI+71QSf8W5PWMMfZ720IwZRLLXlS5VUTcXbw+uP4L6obENDqqxI0+s/fbCXsdTK5wE8ZHemDVqMlqub86TppKHfTYUnuIBA8/ROzEc/gTy6SguBg6by9CMyvEn7yD0gNnoNZqial0CeHDNxCY+ialaxCGkh74Dqyg7sz3RBzHVdm01ra15wJCyXOIzLwgtnAYqpJeVJ/4IwlNXZPKv4e7qpGIX77XdSaQaCwnWlX282SMsd8TB1MOOJgYY2z3bSmYVm/S2tLSiUnpQq2VyoSmocMIm81oireTqtZujLRV0/CTID/Odu1VMIWb+shAaynUWRdyPbqTfaRAl/kDWDGUF+6fSyuzwL/8B5gthUSUucbewVnWRaLLz6E1GiHWTxL8x36E2WrfcChPae8gkanP6d55SneclE6eh8bXi4q5G0Ss2aSyhWGL1pPVcwnUdZLRRCP02vXFHRlj7Pe2pWBKF2kdQnulm9RLPaSDg/1wmZTEEq7DQPMmC4dtw54Ek9qCWFc/SXZUQqPO/M7M7K1AvLGUKGX7ZgeTF+Gl19CZzESU2XpewtM2T6JHLkk9p/X9vbM/odDt3DCY1MEBUnMy1Yta5Y51QC0FU9nhq0Sd9p1XurVgSnahyKLLqmeMsd/LtoOpIj6K5oidWIMNGOkQQZRa9KsrOY6AffcuensSTGk2Gsqr6x6hmXgZs/Heyw4mBRzJZygqryUKTTFCiy9hMHtJyeE3sHptUFpjJDr3DTQ6Ha1aW7l4n2j0719PQwWJLD6GwSiWx1hvQwzlfTiYeCiPMZbfOJhywMHEGGO7L/dg0ljR0NxCxHTxkCdzKWVvtHZtnSZ53U7b62ASMqaL690Y7Guhi/tGF3iVowy2cI2s3AVn5zwRQ29mR1qoGPzwxhel8jmi04vvm1J1ptJRIp/8oLJHUNyzPpRnD1dAWRCEo6qDKGULNfJ0ccZYvss9mPLI7xFM6cx2L3xFBVnljDHGto6DiTHGWF7hYGKMMZZXOJgYY4zlFQ4mxhhjeYWDiTHGWF7hYGKMMZZXOJgYY4zllS0E00fWY5LqatvaMHdikbhVu3tzUA4mxhjbf7YQTJnSl70QdxwXN29Nzi8QDibGGGO54mBijDGWV7YUTB9aj2m1noOJMcbYVm0pmNKlr8e0WsbBxBhjbKu2HUzpy16slnEwMcYY2yoOJsYYY3kl92D6yHpMRocXze/XYlrlc2UuYreTOJgYY2z/yT2Y8ggHE2OM7T8cTIwxxvIKBxNjjLG8wsHEGGMsr3AwMcYYyyscTDtIU9SKwkB0vcwYQHHHIWi0OiLfPhee3kVS29kJ5Qb1BeEBUtbcnFWXQW/CREMIpR43OVgbgEmtQF1ZgFQYNNn7bEj8FECFntoKLHTVoL5QR6hOrcNwUxVZ6ChHyKjeYP/9TklaK0sRLzZvUL8zCi02TNb50RBIGa7Ymf8TjpIAcRYYZXVamMoGYCi0EVGmKWqDp7GPKDc4FmO54mDaQRxMHEzrOJgY26otBFPmshfVIU9GfbQ2Vb7bv2ES8i2YDLGLCMaH18v2MJhK+h+T8XNns+oymO14t9iN7uoo+WmqBU4pmI6Nx8mUXX4h2lxXdweOBwuIvO7iRBx9Dn1W+adFj5uTHaTS9ltDdm+CyV8UwA+zLeiuayLPkpGsbXKl1JrR0dtLUsvZpDPDPfYY9mCEiDIOJrbTthBMmTrG51FmUxLxA9sSEUYaK5mePwSzSvwHzd5vJ+x5MKml/7ADoyi164koUznLUdy7TMJz7xASwSQFEoVS/Bj8nQeg0miJQmGBrWkSGp2eiP0NwSEUFJeQrPbe8/QtInHiOqlsbsqoM/ir0bV8HQce/O+U85sEk1qPkRo/imxWMhBxQa9YD6Zz5SHMddWho8REaB+plzXeUkMWuqpQaRTPZf2YuQZTTWlYOk4d6QkXZtS1VJZRedxvIVQWLUFNKOWoVNdW9BvCU2cgQ03VWGgrg1PqtQmirshdRMcRpqqLYRZl0ntJSARdONheh7EKN7EajJhoqcePJ8bIpYF6HG0phcugJBaTGQfbpOfSVk6KTKINJdqkQBIWumrR7lo/X7PJhK5SD/rqKshsUxTOtIu/y1NMz3+o3ElEmdPjwaB0XsKU1NahmA8FUjkxFWCo0oMSu4t0+1J/A191B+lurs64wfIqtd5IWhNJhNyZwWktqUSipZyslhlK+4g/cQoVJ39ZCyYRSv7EMjyxDiK2VRoKYW9IEhXtb4ClcpQYC50ob5FCL+Yn8vNiTNhmMGnQOz6NYrOSpJcL4/NHYNsHwaSWehlC39AwyvypiwUx1iA6fx9anY5k9ZgUXkSWX0NrNBFR5hr/Ee7yUiKCyr/wBkaLlcjbTecbfErGzpxOlTlbydEf/gpHoTmjx+QJNmL+2BJZWkoZ7qgjmg2OLRwbGSCPEqXSxdOCR4e7SJVZDZ+zEAV6FXF5/Hh1oBkuqZcliH1zCaaGWAxftgVhlN4fwrGxHsyGLEi0NpLLDV5o1Tpcmeohg8VGnJ8axv3OEHEU2PF4shU+nYLI2yMqLa5N9JERn5ECqrRQR3zeAB6MxmDTKEiytQXXWosRq64jP89JPUi9FpcmukinW5z7h3tMkSIH7FKwhINh8mwyBktafU2T9Jyq1t8zHpcbv5wcQ7/dQNobG3G9vkgKxWLyYCwGu0qNyb42cihcgMqGZvx5vp14LVrMDrRjMWglWc99jThPNSK1bRjuboFJOkdB1OmNUgAPD5MKj/wYatS29SDoMBLaPjKH8MgiUW7QY1I7EyiduUboGBo3AjNvidVjh9LsQ3j2CdGI94z096loSpC+jhh0WefO/t5tKZjWl71oQU9PPzw2LVmtj7QlyURv9a527fckmNQWjBxZInUlhow6bcUEwokja49/SzCpfP2Ijn5GVM44wuMnoVQpSFbbaeTBZO+cIVNXbkCtyGEo7wPkQ3lnpnrJlHRxslkLcVgKNWGhpwV/ONIJr15BxLa5BNOFA70Yc673IGKl1bjeE8Kdg3HSZE8NeTbVNZIrzS6cH+vCgMtAFDoLVibaEDAoiMftoZ6P6MkJtRad1CPy4MFILbHLzqexrQ1fVDvWHpd4vHg6Xo8+KZSEK42p99TJ4U4y6hHn+uFgclgdOCK1f0IKC+HNdAuK0+o3CqaHUvgUSv8WKsprcKvVi472VvLDwQ7qMX0xOUDutHkpmO62FZP0tn+ris5hHBxqIQapNzNyaBYVxXYi31Zf4EZPb3PGUjb25G24o9Vko6G8rGCSGOsuEF9bB/ThY/D3jJL1tsT1QovW/kmMdVZlnQf7+8bBtBkOJg4mDiYOJranthRM6RxlTeitDxPx2Fvbi8OjXUSnzN5+J+1JMCnWh/IGRsdR5l9vUx0dRWTw6Nrjwu5vU98xre2bHUwKhQuBuafE2fsQThrSy25TTh5MlrZDZPraHRqeKz3+ZyK+Y9rSUF5GMGlw93A3qbUa8dWRfvS4DUShK6ChtK0G06GBThz0rk+KaapvwPmYG2fHOkncmQr/wc4W8lnE+tFgkrcnGAqdeCido1CiyayrrYnhcsP62mFhXwhf90fRIoWSsHEwaXFtvINUOd7PWtSayd3pXrTbtbDaHOTBRNOWgqlSOi/hRn1R1vPZWjB9fChvYHSMVJdkDuX5Yp1oCq+/PkJh4iaKymJEoXEicOTdpsGktNSS8PS3cA/eoSE9gep5KI9tIvdgkt1dvCeRoOXUBWuwAedOL6OrtZXs9sy8vQqmNfLJD5oSBGdfIzh6k/gPPUawaxgqRxkp7r2A2JW/IZg8Rczvx+wtLXdI7YmH0OgzJxJspHTiNA48/D/kzLu/oevQCHSOIBl5+R8YufUWB1b+SsbPbK3HNN7bQe4PNuHCcAtO1RYTvUKFuUQHVgabyalkO/4kekwmHRlpqsLt+TE8H2shw6XSBdpkwVRbLfn+swl8NdiILp+ZOKXQWJnqxPGuJnJ3uBo2gwpuu5fcPdhOvbKvEuXEplPmHExi8sFwWwN5PNqGhe4Y2ouNxCB9QLg0Gsf57jpyd1J6Hxfo1r5j2jiYFEg0NpDnE+2pyQ/Scxfmkl24MtSIO5NdhHpM0oV3dXLDlZlhvJ1qx0RlEQl9IJjM0nkJX4x142KP1APsqCSVBdotBVOukx+U+gIST/RnzcRTuxMoW3hMfEO3EFl4uRZMhmgfAmP3UHfhD6Sk8wC09IFFfMAwwDn+AlUzn9PIiSB+YsCTH9hmcg+mPLLnwcTYPiVm4gndDeGsOsb2GgcTY4yDieUVDibGGGN5hYOJMcZYXuFgYowxllc4mBhjjOUVDibGGGN5hYOJMcZYXtlCMH142QuN1Y3m90te7PaPawUOJsYY2384mBhjjOWVLQRTpvT1mNbKV9djmp2Efh8se8EYY2zvbDOYPrAek9FBpiYHod/FG7lyMDHG2P6zpWD62LIX3mitVN5JEolmmJTcY2KMMfbbcTAxxhjLK1sKpnTy9ZjS1cQPodqtyirfKRxMjDG2/+QeTB9Zj8no8L6flddD+ruqd3WxQA4mxhjbf3IPpjzCwcQYY/sPBxNjjLG8wsHEGGMsr3AwMcYYyyscTIwxxvIKBxNjjLG8wsHEGGMsr3Aw5RlDYAjOykYir/t0qNBdW0oaimwYa4wiZFST7G23r7lCaitQQOR1O62hLIq+kDWrXK4sFCCJkANdNaVodxmJfLucKXUIBMMwaRUkq36blAY7XG3T0JmNRF7P2F7YQjB9eNmLVe5AJakr80GZtf/O4WBSQBtNIpw8llX++1Lh+kySzIeL8WqhF+FCLcnedvtyDaa6mjpcbnARed1mfmswxTs6yNedAVycSuBEoJDIt8uV0eZHT1cMKunfgrx+u3IOJo0HvoPPYSpUkKx6xraAgynPcDDljoNp53AwsXywhWDKlLUek7EIhw7Pk6OjbVDtp1sSqc3oGBhFqV1PRJnKWY7i3uWU1iRU6vXhKqU1iuKeJal8iIg6nbcXlmg78caPwdPQCaVKQUQo+RLLcJTGSOo4TlirWmGNTRF/Yg56gxF6/yAJTN9H7ORLqXyZOMvqss9bxpdcQuLEdVLd2kpl7u4jpKyrHZ3L19HUN0DU7/cpGThGxD4VTbVZx5RrqwyTKpMRfZU+FOqURNTVlIax0FVHesKZF2u33YVZqfxAlZcYpbLqqA+9JR4y01GHkTIndFK5IEJJHKe9yEjEMQxGE7rDRSQZq8DR5igceiVpKo/i6sEk3h7uIGLfDs/HF7QsDwfXzlfo8q5vL/4W4y21WGgrJ0Wm1N/f7S0h8WIz6iM+lFu0RKHSoblnCLUhO5G3JRgLAxgc7CFWzWq5eO2UKG2Mo9pvW99eZYWtcVb62y8Qs8P9vk6co0l6z0y/Ly8i4pZitqoBWCr7iaizOIugNNqJOy69jzsmoNUriDiW2t6IgmiMuLuWpfdsH1QGG3F3f47q8/8VkZFlUtJ5gPZzBGNkMN4Eoyr7OTL2MdsMpuz1mFr7JxAoKSWHR/ZHMKnNdtI3NIwyvzOtzoLQiR9hMJmJyhGFzmSQwrmGRJeewVhgkAIqQLRGAyxN91B76iHR6Q1wjb2DM+wi4pja0hGEBxdIqo0KlF/6b/DUtBKNfwrR8VNQSq+rkGuPydI8ibn730IvXfCEIimY9AYFar/8d3L25WsYLT4Mfv+/SHnAj8jCOxy8ME90WumiE2uArcRPpo8uYmlpac3MaBzmj3z34fUW48loDHbp3IVyjwMF0nk43SXk26lG2A0quC1mYpX+PTPUj9djNcSm0+L6VBwtDh0Rx2yobcAXdU4iHtudbvz42TgZ8RlRU1WLGx0lRNRvp8dUUxXDtabVi78CswMdWJR6UPRhQVLr3LyXodKZ0NQ7TFprwxk9n8JAFUYG47Cb9WS1XKkvJPGeOCxpr68pdhnBnkEpoAqIqUR8oNHB1vs1CXYkIQLK4KkmCmMA5Sf/Bn9bgqjszYgeXaEPIPQhRFMM36FnMFkVRLShj55F/eevicFaDOfwA7hKq8iHe0ypIC0urcWY9HysRjWRvxaMbWRLwfShZS+sxbVIdpRLb34/2RfBpLZg5MgSqSsxZNUXJu6gZvE+We0x6aoWSKh3Kmt7EUyh3lEirxM2CqbwsYdSqOmJwtCEyJEr0OgUJNdg0njKMPXz/8PByytktce0GkyDM6WyfWwYe/XvKPEVE/nxcmWUAvzCoQF8NdhIVntMLWJoWHK2PHu4a2aoG6cjhUReJ2wUTI/G6olbeuyTwvDb4SpSoNjZYCovK8fr+T6ckHpLwmqPaVOaAjJwYBadVT4USH8X4fD0JJzG7O0dwTrSVu3PKNc4Eyg7+QtC0vtFoB6TLoDg9COilx9LCqbo0RcwSqEjyNv5UDAFE3EiHpvqL8Lf0kE+HEzriuviOHqgjxjV2fWMyXEwbYaDiYMpDQcTBxPbfVsKpnSp9ZjKyPDRJfRJF7qWzgGyfPQg6t9PgBDk+27XngSTYn0ob2B0HGX+jdq0ENfEK/jbuqGOjJDo6HEabkvfdrvBpLR3IjJ1XgpABVEHBxAZOZ51nM0YSirJsX/8v/AWez4STAp0P/93xOqDZLXM5PaTXIfyVhUWWMnT+X402nWoly74wpV2b9a22w2miD+Mu/0RIr6XqimrxrU2D5Efy1ZQiKn6CGzScxDk9fJgWhWvj5FHo5XQy+rkNhvKGx9JZA7lqQxo70kQzwcmkGgDY6RSvFe0XvinXxCLS/aa7UAwFXRehbe2kShULhRPfQez00TWj8VDeWzrcg+mj6zHtLbNfuoxpcua/OCCI36JJiwIoYMrsJaIC6s4Lxc8B58iPHQGJclTRF9g/mgwWWoOSp9yHyB28gUpbhuGSlOD6NlfEUyeIKGpFeni5Vvfz+BDZPEdgkMnyWaTHwpCM+g7/hUSJ16QmW+ewmg2fTSYCkMLOPr638jgievo/OwYfdckyLfdjLPQjjMdMSx0NZG7w9WwGVTUkxLOjffgQn89TrWWEg99x7RRMGlIb10Frh0awpvpdnKg2gufFEyvFwbJ6a463J1sQbNFR8S+9gInnsz2kTOyyQ8VkQr8y5lhlBeqifz814MpdeHtq4zihHSMCwNtZCaW/h3kBrYw+cHiCKKvu57IZ+LpIn0o6V9GYOQi8fXM0Db6silSsfAI/sRpOGsS5EPBpLbUEu/ABVSf/6v0YWeBWJweCqaqz74m/uQFep+tT47QSu/pqyg7cpvw5Ae2E3IPpjyy58H0u5AN5WXVMzl5j0levx3xlmZcrt0kfHaUCqWNXSjzFJLs+t0n7zExtts4mPIeB1OuOJh2FgcT22scTHmPgylXOxtMSvRUR3G8q5Hcm2iA+7dOcNgnOJjYXuNgYnvCpNOSg82VGT9W3Y9CrrQfwDLGcvZJB5PJ9PFf7DPGGPv0cDAxxhjLK590MDHGGNt//i6CKVhWTvQqFYzhMRhtOiLf7rcQN221haqJvI4xxtj2bSGYPrzshcbqRnNL6oe3pLEaul38ge1vobYUYzBeT9TSuTgGxE1TC4h8299CWzGJcGKGyOsYY4xtHwdTjjiYGGNsd20hmDKlr8dkDNRgpK0qa5vdpre5ycjYAEwaVUZdpLEPMb+ViMcimMRSD0JJ7zLs4bTz1fhQFF+EPyHWt5mFVpsa7lMWlhKxtlJw5hGi/TPEXD6BAu/6vd1UjjLYy+rp1kVCYmQUAffmyyAwxhhbt81gylyPSQTT3NToWo8p5Nn933PY3FGMDCdJkTkzlBQKPfqHxB2NlUSUOQbeoHL6C6JSFyNy8lcYrSESXH4Hi9MIlbObVCx9A5UxhPDSQ6LT6zJ6TLryeUTHltfWRrL3PYenen0RPbXZhsTwOCoCbiI/d8YYY9m2FEwfWvZifRvRSzAieWQeoayw2Dl6ZxSLC4dg1aiJvN4WrEVHrT/j7ubyoTzXyM9wtk2RysNnaSXZ1f2DJ36FpUrqHQ0vEnGMjKE8TQkix19CZwiSwNF7FF4Z56EvwuHFBVLl3drwIWOM/T3hYOJgYoyxvLKlYEqXWo8pTOR1zUNHUFW0u/d3E0N5k+MjpMiSGYItg+MoNonlEdbL5MFUsvBHFBQPkNK5a1CpxTHEsJsb4eUX0IcnUDr2GRHDdebmy4j0zxCxf2H3CooSZ0io91BGWzyUxxhjucs9mD6yHpPR4U3NyusZJAkprJTy/XeBfPKD2hYiw/EGmomXvm1B5wOUHTxN/GN34W+Lr31HZO25hcjoaQQPfUXclc0QAeWfeUsCyVsomX4o9ZYOE3E8pbMXDTf/B7HYUhMsePIDY4xtXe7B9AkQM/GEKu/u37JIBFPZzFUillWX1zPGGMsNB9M2cTAxxtjO2pfBtFcKYtOIzj6CxWkg8nrGGGO542BijDGWVziYGGOM5RUOJsYYY3mFg4kxxlhe+TsIptT98gSTWpX1A9sMGh/sNS1rv2vKqpfTlNBNX2su/oUYTJbsbRhjjOVkC8GUuezF5OQIbFoFEfXRxl4kOlvIXi97URKJQq9K3ax1lbgtUXdDhCgV2Xd+yGDsQOnseajUCpJV/wGBpR/JWjC9/4FtadiX9QNfxhhjH8fBlI6DiTHGfndbCKZMtfFpVLlVxBpswGBzJGub3aWWzmGIDEhtq2RBsHq/vNV75olgqlq+S/z9dxA99Dk0RVWkZPAr1F38AYH+ZeKpb4Ou6gAqj78hFSf+CP/4K1R9tkI0utQxs4LpvVBjD0Z666BVK0n2uTPGGJPbUjCt3128E5MjPdBKZUJl2zgODsfX1mOamByH27yLF2S1BfGBYVQHiohSVr+6eq3otaz2XEQwFccqiHgcPP4z9AYT2ajHpK04gNLRZeI58Cs81V2InPkjWQ2iDwWT4Aw1Ynykl1i1fGcIxhjbzJaCKV2kdQjtlW4igqk+bF6r89fE0Va9e3fVFjduTQyOoD5STJSy+o1uSyQfyvstwbS6zIVn8le4ozVbCKZB4nPyDV0ZY2wzHEwcTIwxlle2HUwV8VE0R+xEfMc00lG+VteSnELUvrvrMW34HZPaQpLDibUl1Vd9NJgUUUTPvpX+bSCifjvBxN8xMcZY7nIPJtl6TCGPLaPeG61d+45JXrfbVmfl2UIxsrp6bfo2xvAYjDYdEY8L6yeg1miJeKwr6YcvsUzE5AeNu0I6VjUxl0/CZHfD1jRJtK5qFPcswS9tu6rA6+VZeYwxtg25B9MnwB0sI3b97i3rzhhjbHdwMDHGGMsr+zKYGGOMfbo4mBhjjOWVTzqYjEYjTCYTY4yxfYSDiTHGWF755INJXsYYY+zTxsHEGGMsr2whmIowMXOEzM7O4rsndxG2KUl5+wiOSGWiXPj65Z8x3evb4Bg7g4OJMcb2Hw4mxhhjeWULwZRp8sr3GG1Wk7XyAj95/e4JfOrd+5ErBxNjjO0//x9bpZzPJDSoOQAAAABJRU5ErkJggg==>

[image4]: <data:image/png;base64,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>

[image5]: <data:image/png;base64,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>