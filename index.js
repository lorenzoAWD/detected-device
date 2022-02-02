const calcWinsize = require('mozz-calc-winsize')


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
    // else if(winsize.width >= 769 && winsize.width <=1365 && winsize.height <= 1023){

    //         if(winsize.width > winsize.height){
    //             return 'landscape'
    //         }
    //         else{
    //             return false
    //         }
    // }
    else{
        return false
    }

}

let detectedDevice = {
    isMobile,
    isTablet
}

window.addEventListener('resize', () => {
    winsize = calcWinsize()
    // isMobile = _isMobile()
    detectedDevice = {
        isMobile,
        isTablet
    }
})

module.exports = {detectedDevice}
