class Integration {
    constructor(contentHtml) {
        this.contentHtml = contentHtml;
        this.triggerBtn = document.querySelector('#js-menu-integration');
		this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', () => this.render());
    };
    render(){
        this.target = event.target;
		this.prev = document.querySelector(".burger-menu__item--selected");
		if((typeof this.prev !== "undefined") && (this.prev !== this.target)){
			this.prev.classList.remove("burger-menu__item--selected");
		}
		this.currentBtn.classList.add("burger-menu__item--selected");
        document.querySelector('.content').innerHTML = this.contentHtml;
    }
}

let integrationPageHtml = document.querySelector('#js-integration-content').textContent.trim();
let integrationPage = new Integration(integrationPageHtml);