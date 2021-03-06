# Semantics

Semantics is essential when creating layouts. Atomic layout allows to render any exposed component as a valid HTML element. That is possible by using the polymorphic feature of `styled-components`.

{% hint style="info" %}
Please refer to the [**Polymorphic prop API**](https://www.styled-components.com/docs/api#as-polymorphic-prop) of styled components.
{% endhint %}

## Example

```jsx
import { Composition } from 'atomic-layout'
import { Footer as CustomFooter } from '@components'

const PageContent = () => (
  <Composition as="main" template="header footer">
    {({ Header, Footer }) => (
      <>
        <Header as="header">{...}</Header>
        <Footer as={CustomFooter}>{...}</Footer>
      </>
    )}
  </Composition>
)

export default PageContent
```

