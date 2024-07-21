# Build a testimonial card

## Implementation Details

1. Use ShadowDOM -> Template -> Slot to create web component.
2. Wrap ur element with `<slot>` to create a flexible template, e.g. `<slot name="anyName"><h1 class="title">hello world!</h1></slot>`
3. Use `::slotted` to style projected element, e.g. `title, ::slotted(.title){ color:red; }`.
