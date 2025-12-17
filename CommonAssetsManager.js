class CommonNavigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="index.html">
                <img src="Pictures/UnrealWeb.png" alt="Test Link">
                <button onclick="Unreal()">Click me</button>
            </a>
        </nav>
        `
    }
}

class CommonFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p>Website made entirelly by Émile Gélinas and hosted on <a href="https://github.com/timilyo80" title="Go to my Github profile">my Github</a></p>
        <p>No LLM/AI were used during the creation process of this website</p>
        <p>You can contact me by email at <a href="mailto:emg0811@gmail.com" title="Go to email program to send me an email">emg0811@gmail.com</a></p>
        `
    }
}

customElements.define('common-navigation', CommonNavigation)
customElements.define('common-footer', CommonFooter)