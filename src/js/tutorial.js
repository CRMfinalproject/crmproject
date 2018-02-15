const counter = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

//нужно добавить скрипт для записи количества лайков на сервере?

const tutorialFavBtn = document.querySelector('#js-favBtn');
const tutorialLikeBtn = document.querySelector('#js-likeBtn');
const tutorialLikeBtnCounter = document.querySelector('#js-likeBtnCounter');
tutorialLikeBtnCounter.textContent = counter.value();

//нужно добавить корректный скрипт добавления страницы в закладки

tutorialFavBtn.addEventListener('click', function(){
	event.preventDefault();
	window.external.addFavorite('#', 'Tutorial on ...');
});

tutorialLikeBtn.addEventListener('click', function() {
	event.preventDefault();
	counter.increment();
	tutorialLikeBtnCounter.textContent = counter.value();	
})


