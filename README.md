## Info
Get the device type, based on window.inmerWidth and window.innerHeight.

## Documentation

### Install
```php
npm i detected-device
```

### Import
```php
import {detectedDevice} from 'detected-device'
```

### Usage

#### Basic usage
```php
import {detectedDevice} from 'detected-device'

let isMobile = detectedDevice.isMobile()
if(isMobile === 'portrait'){
    //code for portrait smartphone here...
}
else if(isMobile === 'landscape'){
    //code for landscape smartphone here...
}
else{
    //is not mobile device
}
```
#### With `window.resize`
```php
import {detectedDevice} from 'detected-device'

let isMobile = detectedDevice.isMobile()

window.addEventListener('resize', () => {
    isMobile = detectedDevice.isMobile()
})

if(isMobile === 'portrait'){
    //code for portrait smartphone here...
}
else if(isMobile === 'landscape'){
    //code for landscape smartphone here...
}
else{
    //is not mobile device
}
```

### Options
```php

detectedDevice.isMobile() 
detectedDevice.isTablet() 
detectedDevice.isIpadPro() 
detectedDevice.isAllTablet() 
```

## Instance options

| Option                                | Value      | Description      |
| ------------------------------------- | ---------- | ---------------- |
| `detectedDevice.isMobile()`           | `portrait`,`landscape`,`false` |
| `detectedDevice.isTablet()`           | `portrait`,`landscape`,`false` |
| `detectedDevice.isIpadPro()`          | `portrait`,`landscape`,`false` |
| `detectedDevice.isAllTablet()`        | `portrait`,`landscape`,`false` | isTablet && isIpadPro
