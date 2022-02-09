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

### Options
```php

detectedDevice.isMobile() 
detectedDevice.isTablet() 
detectedDevice.isIpadPro() 
detectedDevice.isAllTablet() 
```

## Instance options

| Option                  | Value      | 
| ----------------------- | --------- | 
| `detectedDevice.isMobile()`                    | `portrait`,`landscape`,`false`  
