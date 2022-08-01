## Getting started

```bash
git clone https://github.com/lit-fast-import-order-bug
cd lit-fast-import-order-bug
npm install
```

In seperate terminals run the following:


```bash
npm run start

# Other terminal

npm run start:example
```

Then go to `localhost:8000`, There should be content in a
5px tomato border. If there is not, you are seeing
reflected booleans issue.

### NOTE

This bug has only been noted in Firefox, with Boolean
reflected attribute on Lit elements when FAST is detected
before Lit. To fix the bug, go to `src/index.ts` and import
"lit" before "@microsoft/fast-element"

## Testing with Parcel

```bash
npx parcel examples/parcel-index.html
```

The issue is observed using both ESbuild and Parcel.

### Order is important

#### Doesn't work

```js
import { attr, FASTElement, css as FASTCSS, html as FASTHTML } from '@microsoft/fast-element';

// Move this to the top of the file to get "{reflect: true, type: Boolean}" working
import { html, css, LitElement } from "lit"
```

#### Does work

```js
import { html, css, LitElement } from "lit"
import { attr, FASTElement, css as FASTCSS, html as FASTHTML } from '@microsoft/fast-element';
```
