import { html, css, LitElement } from "lit"
import { property } from 'lit/decorators/property.js';

class MyDetails extends LitElement {
  static get styles () {
    return css`
      :host([expanded]) .content {
        border: 5px solid tomato;
        display: block;
      }

      .content {
        display: none;
      }
    `
  }

  @property({ reflect: true, type: Boolean }) expanded: boolean = false

  // expanded: boolean;

  // static get properties () {
  //   return {
  //     expanded: { reflect: true, type: Boolean }
  //   }
  // }

  // constructor () {
  //   super()
  //   this.expanded = true
  // }

  render () {
    return html`
      <button @click=${() => this.expanded = !this.expanded}>
        Toggle Content
      </button>
      <div class="content"><slot></slot></div>
    `
  }
}

window.customElements.define("my-details", MyDetails)
