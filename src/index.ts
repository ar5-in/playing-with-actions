import './styles/global.scss';

class App {
    test():void {
        const heading:Element = document.querySelector('h1');
        heading.innerHTML = "GitHub Actions!";
    }
}

const app: App = new App();
app.test();
