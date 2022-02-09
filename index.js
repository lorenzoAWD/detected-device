
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
    else if(winsize.width >= 480 && winsize.height < 600){
        return 'landscape'
    }
    else{
        return false
    }
}

const isTablet = () => {
    if(winsize.width >= 768 && winsize.width <=1024 && winsize.height >= 600 && winsize.height <= 1024){
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

const isIpadPro = () => {
    if(winsize.width >= 1024 && winsize.width <=1366 && winsize.height >= 1024){
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
    if(isTablet && isIpadPro){
        return true
    }
    else{
        return false
    }
}

let detectedDevice = {
    isMobile,
    isTablet,
    isIpadPro,
    isAllTablet
}

window.addEventListener('resize', () => {
    winsize = calcWinsize()
})

module.exports = {detectedDevice}
