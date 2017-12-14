
/**
 * Generator
 *
 * @copyright Christian <ChillerPerser> Linke
 * @license MIT
 */
class GeneratorClass {

    constructor() {
    }

    /**
     * create a random string
     * @param  {Number} len
     * @return {String}
     */
    createRandomString(len = 8) {

        let text = '',
            possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < len; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}

export const Generator = new GeneratorClass();
