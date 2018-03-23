class Likecounter {
	constructor() {
		this.likeImg = document.querySelector('#js-likeImg');
        this.container = document.querySelector('#js-likeBtn');
        this.likeBtnCounter = document.querySelector('#js-likeBtnCounter');
        this.likeCounter = 0;
        this.render();
        this.container.addEventListener('click', () => this.countLikes());
	};
	render() {
        if (localStorage.getItem('liked') === 'true') {
            this.likeImg.setAttribute('src', '../images/tutorial/icon_liked.png');
        } else {
            this.likeImg.setAttribute('src', '../images/tutorial/icon_like.png');
        }
        this.likeBtnCounter.textContent = this.likeCounter;

    }
	countLikes() {
        event.preventDefault();
        if (localStorage.getItem("liked") === "true") {
            this.likeCounter--;
            localStorage.setItem("liked", "false");
            this.likeImg.setAttribute('src', '../images/tutorial/icon_like.png');
        } else {
            this.likeCounter++;
            localStorage.setItem("liked", "true");
            this.likeImg.setAttribute('src', '../images/tutorial/icon_liked.png');
        }
        this.likeBtnCounter.textContent = this.likeCounter;
        return this.likeCounter;
	}
}

//let tutorialLikeCounter = new Likecounter();