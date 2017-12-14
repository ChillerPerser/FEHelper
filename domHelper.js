
/**
 * DomHelper
 *
 * @copyright Christian <ChillerPerser> Linke
 * @license MIT
 */
class DomHelperClass {

    constructor() {

    }

    /**
     * find the closest parent matching the selector
     * @param  {Node} el
     * @param  {String} selector
     * @return {Boolean|NULL}
     */
    closest(el, selector) {
        var matchesFn;

        // find vendor prefix
        ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        })

        var parent;

        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) {
                return parent;
            }
            el = parent;
        }

        return null;
    }

    /*
    contains(container, node) {
        return container.contains(node);
    }
    */

    /**
     * toggle class
     * @param  {Node} el
     * @param  {String} cls
     */
    toggleClass(el, cls) {
        (el.classList.contains(cls)) ? el.classList.remove(cls) : el.classList.add(cls);
    }

    /**
     * create a node list from (html) str
     * @param  {String} str
     * @return {NodeList}
     */
    createNodeList(str) {
        let div = document.createElement('div');
        div.innerHTML = str;
        return div.children;
    }

    /**
     * get the index of an element
     * @param  {Node} node
     * @return {Number}
     */
    getElementIndex(node) {
        var index = 0;
        while ( (node = node.previousElementSibling) ) {
            index++;
        }
        return index;
    }

    /**
     * get the outer height of an element
     * @param  {Node} el
     * @param  {Boolean} includeMargin
     * @return {Number}
     */
    outerHeight(el, includeMargin) {
        if (!includeMargin) return el.offsetHeight;

        let height = el.offsetHeight,
            style = getComputedStyle(el);

        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
    }

    /**
     * get the outer width of an element
     * @param  {Node} el
     * @param  {Boolean} includeMargin
     * @return {Number}
     */
    outerWidth(el, includeMargin) {
        if (!includeMargin) return el.offsetWidth;

        let width = el.offsetWidth,
            style = getComputedStyle(el);

        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
    }
}

export const DomHelper = new DomHelperClass();
