// import { html, css, LitElement } from "lit"
// Uncomment the above


import { attr, FASTElement, css as FASTCSS, html as FASTHTML } from '@microsoft/fast-element';
import {
  FoundationElement,
} from "@microsoft/fast-foundation"

// Move this to the top of the file to get "{reflect: true, type: Boolean}" working
import { html, css, LitElement } from "lit"
import { property } from 'lit/decorators.js';

class NameTag extends FoundationElement {
  @attr greeting: string = 'Hello';

  static definition = {
    name: "he-name-tag",
    template: FASTHTML`<div>${x => x.greeting}</div>`,
    styles: FASTCSS`div { color: red }`,
  }
}

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

  // removing "type: Boolean" causes reflection to happen as expected.
  @property({ reflect: true, type: Boolean }) expanded: boolean = true;

  render () {
    return html`
      <button @click=${() => this.expanded = !this.expanded}>
        Toggle Content
      </button>
      <div class="content"><slot></slot></div>
    `
  }
}

FASTElement.define(NameTag)
window.customElements.define("he-details", MyDetails)
