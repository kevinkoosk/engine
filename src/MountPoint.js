'use strict';

var Position = require('./Position');

/**
 * @class MountPoint
 * @constructor
 * @component
 * @param {LocalDispatch} dispatch LocalDispatch to be retrieved from corresponding Render Node of the MountPoint component
 */
function MountPoint(node) {
    Position.call(this, node);
}

/**
*
* Stringifies MountPoint
*
* @method
* @return {String} the name of the Component Class: 'MountPoint'
*/
MountPoint.toString = function toString() {
    return 'MountPoint';
};

MountPoint.prototype = Object.create(Position.prototype);
MountPoint.prototype.constructor = MountPoint;

MountPoint.prototype.onUpdate = function onUpdate() {
    this._node.setMountPoint(this._x.get(), this._y.get(), this._z.get());

    if (this.isActive()) this._node.requestUpdateOnNextTick(this._id);
    else this._requestingUpdate = false;
};

module.exports = MountPoint;
