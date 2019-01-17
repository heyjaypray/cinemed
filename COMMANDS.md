### Animation Example

```javascript
// Modules
import VisibilitySensor from 'react-visibility-sensor';
import {Motion, spring} from 'react-motion';
```

```jsx
<VisibilitySensor
  scrollCheck
  scrollDelay={100}
  intervalDelay={8000}
  onChange={this.onChange} >
    <Motion defaultStyle={{x: 0, opacity: 0}} style={{ opacity: spring(this.state.isVisible ? 1 : 0) }}>
      {style => <div style={style} >Demo Element {JSON.stringify(style.opacity)} </div>}
    </Motion>
</VisibilitySensor>
```

