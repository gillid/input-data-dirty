# InputDataDirty
JavaScript tiny lib to control whether [inputs, select, textarea] has any value.  
Toggles `true / false` value on `data-dirty` attribute.  
The only dependency is `jquery`


## Install
```npm
npm install input-data-dirty
```
## Import
```javascript
import InputDataDirty from 'input-data-dirty'
```
## Usage
### Case 1 "Adding attribute"
#### Run `init()` without options
```javascript
InputDataDirty.init()
```
#### And add `data-dirty` attribute to [inputs, select, textarea] you want to control
```html
<input data-dirty>
```

### Case 2 "Control it all"
#### Run `init.()` with `controlAll` flag
```javascript
InputDataDirty.init({
    controlAll: true
})
```