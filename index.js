const calcWinsize = require('mozz-calc-winsize')


let winsize = calcWinsize()



const _isMobile = () => {
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
let isMobile = _isMobile()

window.addEventListener('resize', () => {
    winsize = calcWinsize()
    isMobile = _isMobile()

})
