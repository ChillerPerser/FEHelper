
/**
 * Helper
 *
 * @copyright Christian <ChillerPerser> Linke
 * @license MIT
 */
class HelperClass {

    constructor() {

    }

    /**
     * check if val is a function
     * @param  {Mixed}  val
     * @return {Boolean}
     */
    isFunction(val) {
        return (typeof val === 'function');
    }

    /**
     * check if val is an object
     * @param  {Mixed}  val
     * @return {Boolean}
     */
    isObject(val) {
        if (val === null) { return false; }
        return ((isFunction(val)) || (typeof val === 'object'));
    }
}

export const Helper = new HelperClass();
