
/**
 * AnimationHelper
 *
 * @copyright Christian <ChillerPerser> Linke
 * @license MIT
 */
class AnimationHelperClass {

    constructor() {
    }

    /**
     * skip the next transition
     * @param  {Node} stage
     * @param  {String} cls
     * @param  {Method} method
     */
    skipTransition(stage, cls, method) {

        stage.classList.add(cls);

        method();

        stage.offsetHeight;

        stage.classList.remove(cls);
    }
}

export const AnimationHelper = new AnimationHelperClass();
