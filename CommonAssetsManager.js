
//Some reusable assets from when I thought I wouldn't make a single page website. Still keep it around because why not.

class CommonNavigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <div>
                <img src="Pictures/UnrealWeb.png" alt="My Unreal Engine projects" onclick="ShowProject(0)">
            </div>
        </nav>
        `
    }
}

class CommonFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

            <p>- Website made entirelly by Émile Gélinas and hosted on <a href="https://github.com/timilyo80" title="Go to my Github profile">my Github</a></p>
            <p>- No LLM/AI were used during the creation process of this website</p>
            <p>- You can contact me by email at <a href="mailto:emg0811@gmail.com" title="Go to email program to send me an email">emg0811@gmail.com</a></p>
  
        `
    }
}

customElements.define('common-navigation', CommonNavigation)
customElements.define('common-footer', CommonFooter)