"use strict";
exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 7793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AnimationUtil)
/* harmony export */ });
class AnimationUtil {
    static{
        this.smoothScroll = (element, targetX, targetY, duration)=>{
            if (!element) return Promise.resolve();
            targetX = Math.round(targetX);
            targetY = Math.round(targetY);
            duration = Math.round(duration);
            if (duration === 0) {
                element.scrollLeft = targetX;
                element.scrollTop = targetY;
                return Promise.resolve();
            }
            const start_time = Date.now();
            const end_time = start_time + duration;
            const start_left = element.scrollLeft;
            const start_top = element.scrollTop;
            const distanceX = targetX - start_left;
            const distanceY = targetY - start_top;
            const smoothStep = (start, end, point)=>{
                if (point <= start) {
                    return 0;
                }
                if (point >= end) {
                    return 1;
                }
                let x = (point - start) / (end - start);
                return x * x * (3 - 2 * x);
            };
            let previous_left = element.scrollLeft;
            let previous_top = element.scrollTop;
            return new Promise((resolve)=>{
                const scrollFrame = ()=>{
                    const now = Date.now();
                    const point = smoothStep(start_time, end_time, now);
                    const frameLeft = Math.round(start_left + distanceX * point);
                    const frameTop = Math.round(start_top + distanceY * point);
                    element.scrollLeft = frameLeft;
                    element.scrollTop = frameTop;
                    if (now >= end_time) {
                        resolve();
                        return;
                    }
                    if (element.scrollLeft === previous_left && element.scrollTop === previous_top && (element.scrollLeft !== frameLeft || element.scrollTop !== frameTop)) {
                        resolve();
                        return;
                    }
                    previous_left = element.scrollLeft;
                    previous_top = element.scrollTop;
                    requestAnimationFrame(scrollFrame);
                };
                requestAnimationFrame(scrollFrame);
            });
        };
    }
    static{
        this.smoothScrollWindow = (targetX, targetY, duration)=>{
            const startX = window.scrollX;
            const startY = window.scrollY;
            const distanceX = targetX - startX;
            const distanceY = targetY - startY;
            const startTime = performance.now();
            if (duration === 0) {
                window.scrollTo({
                    left: startX,
                    top: startY,
                    behavior: "auto"
                });
                return Promise.resolve();
            }
            const preventScroll = (event)=>{
                event.preventDefault();
            };
            return new Promise((resolve)=>{
                const animationFrame = (time)=>{
                    let timeFraction = (time - startTime) / duration;
                    if (timeFraction > 1) {
                        timeFraction = 1;
                    }
                    const newX = startX + distanceX * timeFraction;
                    const newY = startY + distanceY * timeFraction;
                    window.scrollTo({
                        left: newX,
                        top: newY,
                        behavior: "auto"
                    });
                    if (timeFraction < 1) {
                        requestAnimationFrame(animationFrame);
                    } else {
                        window.removeEventListener("wheel", preventScroll);
                        window.removeEventListener("touchstart", preventScroll);
                        resolve();
                    }
                };
                window.addEventListener("wheel", preventScroll, {
                    passive: false
                });
                window.addEventListener("touchstart", preventScroll, {
                    passive: false
                });
                requestAnimationFrame(animationFrame);
            });
        };
    }
}


/***/ })

};
;