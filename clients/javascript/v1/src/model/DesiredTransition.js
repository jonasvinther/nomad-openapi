/**
 * Nomad
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support@hashicorp.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DesiredTransition model module.
 * @module model/DesiredTransition
 * @version 1.1.4
 */
class DesiredTransition {
    /**
     * Constructs a new <code>DesiredTransition</code>.
     * @alias module:model/DesiredTransition
     */
    constructor() { 
        
        DesiredTransition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DesiredTransition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DesiredTransition} obj Optional instance to populate.
     * @return {module:model/DesiredTransition} The populated <code>DesiredTransition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DesiredTransition();

            if (data.hasOwnProperty('Migrate')) {
                obj['Migrate'] = ApiClient.convertToType(data['Migrate'], 'Boolean');
            }
            if (data.hasOwnProperty('Reschedule')) {
                obj['Reschedule'] = ApiClient.convertToType(data['Reschedule'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Migrate
 */
DesiredTransition.prototype['Migrate'] = undefined;

/**
 * @member {Boolean} Reschedule
 */
DesiredTransition.prototype['Reschedule'] = undefined;






export default DesiredTransition;
