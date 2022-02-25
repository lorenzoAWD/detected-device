
<h1 align="center">Detected Device</h1>
<p align="center">Get the device type, based on window.innerWidth and window.innerHeight.</p>

## Installation
```sh
npm i detected-device
```

## Usage

### Basic
Whith a simple detection

```js
import {detectedDevice} from 'detected-device'

let isMobile = detectedDevice.isMobile()

window.addEventListener('resize', () => {
    isMobile = detectedDevice.isMobile()
})

if(isMobile){
    //code for portrait or landscape smartphone here...
}

```

### Detect device orientation
With specific portrait or landscape detection

```js
import {detectedDevice} from 'detected-device'

let isMobile = detectedDevice.isMobile()

window.addEventListener('resize', () => {
    isMobile = detectedDevice.isMobile()
})

//You can

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

| Option                                | Value      | Description       |
| ------------------------------------- | ---------- | ----------------- |
| `detectedDevice.isMobile()`           | `portrait`,`landscape`,`false` |
| `detectedDevice.isSmallTablet()`      | `portrait`,`landscape`,`false` |
| `detectedDevice.isBigTablet()`        | `portrait`,`landscape`,`false` |
| `detectedDevice.isAllTablet()`        | `true`,`false`                 | isSmallTablet() || isBigTablet()
| `detectedDevice.isAllMobileDevices()` | `true`,`false`                 | isMobile() || isAllTablet()
