
const calcWinsize = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

let winsize = calcWinsize()





const isMobile = () => {
    if(
        winsize.width < 768
    ){
            return 'portrait'
    }
    else if(
        winsize.width > 767 && winsize.height < 500
    ){
        return 'landscape'
    }
    else{
        return false
    }

}

const isTablet = () => {
    if(winsize.width >= 768 && winsize.width <=1024 && winsize.height <= 1024){
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

let detectedDevice = {
    isMobile,
    isTablet,
    isIpadPro
}

window.addEventListener('resize', () => {
    winsize = calcWinsize()
    detectedDevice = {
        isMobile,
        isTablet,
        isIpadPro
    }
})

module.exports = {detectedDevice}
