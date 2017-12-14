
/**
 * EventHelper
 *
 * @copyright Christian <ChillerPerser> Linke
 * @license MIT
 */
class EventHelperClass {

    constructor() {

    }

    /**
     * add the evnt to a the given element
     * @param {Node}     element
     * @param {String}   eventName
     * @param {Function} callback
     * @param {Object}   options   optional
     */
    add(element, eventName, callback, options) {

        // add empty namespaces object to the element
        if (!element.namespaces) element.namespaces = {};

        // save a reference
        element.namespaces[eventName] = callback;

        // bind the event
        element.addEventListener(eventName.split('.')[0], callback, options || false);
    }

    /**
     * remove the event from the given element
     * @param  {Node} element
     * @param  {String} eventName
     */
    remove(element, eventName) {
        if (!this.has(element, eventName)) return false;
        element.removeEventListener(eventName.split('.')[0], element.namespaces[eventName]);
        delete element.namespaces[eventName];
    }

    /**
     * trigger an event
     * @param  {Node}   element
     * @param  {String} eventName
     */
    trigger(element, eventName) {

        let event;

        if (document.createEvent) {
            event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, true);
        } else {
            event = document.createEventObject();
            event.eventType = eventName;
        }

        event.eventName = eventName;

        if (document.createEvent) {
            element.dispatchEvent(event);
        } else {
            element.fireEvent('on' + event.eventType, event);
        }
    }

    /**
     * removes event listener after beeing triggered ones
     * @param  {Node}     element
     * @param  {String}   eventName
     * @param  {Function} callback
     * @param  {Object}   options
     */
    ones(element, eventName, callback, options) {

        this.add(element, eventName, (e) => {
            this.remove(element, eventName);
            callback(e);
        }, options);
    }

    /**
     * check if the element has this event bound
     * @param  {Node}    element
     * @param  {String}  eventName
     * @return {Boolean}
     */
    has(element, eventName) {
        return ('namespaces' in element && eventName in element.namespaces);
    }

    /**
     * list all events bound to the element
     * @param  {Node} element
     * @return {Object|Boolean}
     */
    list(element) {
        return ('namespaces' in element) ? element.namespaces : false;
    }
}

export const EventHelper = new EventHelperClass();
