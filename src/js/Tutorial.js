export default class {
    constructor(contentHtml) {
        debugger;
        this.contentHtml = contentHtml;
        this.sidebarHtml = document.querySelector('#js-tutorial-sidebar').textContent.trim();
    };
    render(){
        event.preventDefault();
        document.querySelector('.content').innerHTML = this.contentHtml + this.sidebarHtml;
    }
}

