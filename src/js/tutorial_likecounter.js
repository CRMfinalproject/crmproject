//const PAGE_API_URL = 'http://feathy.online/main/tutorials/rest';
const likeImg = document.querySelector('#js-likeImg');
if (localStorage.getItem('liked') === 'true') {
	likeImg.setAttribute('src', '../images/tutorial/icon_liked.png');
} else {
	likeImg.setAttribute('src', '../images/tutorial/icon_like.png');
}
let likeCounter = 0;
/*fetch(PAGE_API_URL, {method: "GET"})
.then((response) => response.ok ? response.json : throw new Error('Error fetching data')
.then((data) => likeCounter = data.likeCounter)
.catch(error) => throw new Error('Error fetching data');*/
const tutorialLikeBtn = document.querySelector('#js-likeBtn');
const tutorialLikeBtnCounter = document.querySelector('#js-likeBtnCounter');
tutorialLikeBtnCounter.textContent = likeCounter;
tutorialLikeBtn.addEventListener('click', function() {
	event.preventDefault();
	if (localStorage.getItem("liked") === "true") {
		likeCounter--;
   		localStorage.setItem("liked", "false");
   		likeImg.setAttribute('src', '../images/tutorial/icon_like.png');
   	} else {
   		likeCounter++;
   		localStorage.setItem("liked", "true");
   		likeImg.setAttribute('src', '../images/tutorial/icon_liked.png');
   	}
  tutorialLikeBtnCounter.textContent = likeCounter;
  /*fetch(PAGE_API_URL, {method:"PUT"})
  .then(response) => response.ok ? "likeCounter update" : "failed to update likeCounter"
  .catch(error) => throw new Error ('Error fetching data');*/
  return likeCounter;
})