
const calcWinsize = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight 
    }
}

let winsize = calcWinsize()


const isMobile = () => {
    if(winsize.width < 768 && winsize.width < winsize.height){
        return 'portrait'
    }
    else if(winsize.width >= 480 && winsize.width < 999 && winsize.height < 600){
        return 'landscape'
    }
    else{
        return false
    }
}

const isSmallTablet = () => {
    if(winsize.width >= 744 && winsize.width <=1194 && winsize.height >= 600 && winsize.height <= 1194){
        if(winsize.width < winsize.height){
            return 'portrait'
        }
        else{
            return 'landscape'
        }
    }
    else{
        return false
    }
}
const isBigTablet = () => {
    if(winsize.width >= 1024 && winsize.width <=1366 && winsize.height >= 900){
        if(winsize.width < winsize.height){
            return 'portrait'
        }
        else{
            return 'landscape'
        }
    }
    else{
        return false
    }
}

const isAllTablet = () => {
    if(isSmallTablet() || isBigTablet()){
        return true
    }
    else{
        return false
    }
}

const isAllMobileDevices = () => {
    if(isMobile() || isAllTablet()){
        return true
    }
    else{
        return false
    }
}

let detectedDevice = {
    isMobile,
    isSmallTablet,
    isBigTablet,
    isAllTablet,
    isAllMobileDevices
}

window.addEventListener('resize', () => {
    winsize = calcWinsize()
})

module.exports = {detectedDevice}
