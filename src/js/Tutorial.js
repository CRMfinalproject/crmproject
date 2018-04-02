export default class {
    constructor(contentHtml) {
        this.contentHtml = contentHtml;
        this.sidebarHtml = document.querySelector('#js-tutorial-sidebar').textContent.trim();
        this.triggerBtn = document.querySelector('#js-menu-tutorials');
        this.triggerBtn.addEventListener('click', () => this.render());
    };
    render(){
        event.preventDefault();
        document.querySelector('.content').innerHTML = this.contentHtml + this.sidebarHtml;
    }
}

