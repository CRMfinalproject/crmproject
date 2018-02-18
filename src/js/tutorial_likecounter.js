let likeCounter = 0;

//нужно добавить скрипт для записи количества лайков на сервере?
const tutorialLikeBtn = document.querySelector('#js-likeBtn');
const tutorialLikeBtnCounter = document.querySelector('#js-likeBtnCounter');
tutorialLikeBtnCounter.textContent = likeCounter;
tutorialLikeBtn.addEventListener('click', function() {
	event.preventDefault();
	likeCounter++;
  tutorialLikeBtnCounter.textContent = likeCounter;
  return likeCounter;
})

/* Уточняется:
1. в каком виде и где хранится информация по лайкам страниц туториалов (т.е. куда ее записывать и откуда подтягивать)
2. есть два альтернативных предложения по реализации с LocalStorage:
	a.хранить, поставил ли этот конкретный пользователь лайк, если да – при повторном клике не увеличивать кол-во лайков на странице
	b.ИЛИ, если он поставил, закрашивать значок, а если кликнет еще раз - снимать и уменьшать кол-во лайков на 1
*/