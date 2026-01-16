import './styles/global.scss';

class App {
    test():void {
        const heading:Element = document.querySelector('h1');
        heading.innerHTML = "Frontend Project Starter";
    }
}

const app: App = new App();
app.test();