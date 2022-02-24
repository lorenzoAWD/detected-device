## Info
Get the device type, based on window.innerWidth and window.innerHeight.

## Documentation

### Install
```php
npm i detected-device
```

### Usage

#### Basic
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


## Instance options

| Option                                | Value      | Description      |
| ------------------------------------- | ---------- | ---------------- |
| `detectedDevice.isMobile()`           | `portrait`,`landscape`,`false` |
| `detectedDevice.isTablet()`           | `portrait`,`landscape`,`false` |
| `detectedDevice.isIpadPro()`          | `portrait`,`landscape`,`false` |
| `detectedDevice.isAllTablet()`        | `true`,`false`                 | isTablet() || isIpadPro()
| `detectedDevice.isAllMobileDevices()` | `true`,`false`                 | isMobile() || isAllTablet()
