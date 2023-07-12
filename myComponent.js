
const template = document.createElement('template');
template.innerHTML = `
 <style>
 .my-component {
    position: absolute;
    bottom: -90px;
    transform: translate(-100%, -50%);
    animation: slideLeftToCenter 1s forwards;
    width: 300px;
    height: 200px;
    background-color: #f1f1f1;
    z-index: 9999;
 }
 .open {
   opacity: 0; 
 }
 @keyframes slideLeftToCenter {
    0% {
      left: 0;
      transform: translate(-100%, -50%);
    }
    100% {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
 </style>
   <div class="my-component">
     <slot></slot>
   </div>
 `;


// Define the custom web component
class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    toggleComponent() {
        const component = this.shadowRoot.querySelector('.my-component');
        component.classList.add('open')
        console.log(123)
    }

    connectedCallback() {
        this.querySelector('.my-component-close').addEventListener('click', () => {
            this.toggleComponent();
        });
    }
}


customElements.define('my-component', MyComponent);