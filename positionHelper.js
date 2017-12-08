
/**
 * PositionHelper
 *
 * @copyright Christian <ChillerPerser> Linke
 * @license MIT
 */
class PositionHelperClass {

    constructor() {
    }

    /**
     * get the scroll top position
     * @return {Number}
     */
    getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    /**
     * get the scroll left position
     * @return {Number}
     */
    getScrollLeft() {
        return window.pageXOffset || document.documentElement.scrollLeft;
    }

    /**
     * get the position of an element
     * @param  {Node} el
     * @return {Object}
     */
    getPosition(el) {
        return {'left': el.offsetLeft, 'top': el.offsetTop}
    }

    /**
     * get the offset of an element (position in viewport)
     * @param  {Node} el
     * @return {Object}
     */
    getOffset(el) {
        return el.getBoundingClientRect();
    }
}

export const PositionHelper = new PositionHelperClass();
