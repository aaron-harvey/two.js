import Events from './events.js';
import _ from './utils/underscore.js';
import Collection from './collection.js';

/**
 * @class
 * @name Two.Group.Children
 * @extends Two.Collection
 * @description A children collection which is accesible both by index and by object `id`.
 */
class Children extends Collection {

  /**
   * @name Two.Group.Children#ids
   * @property {Object} - Map of all elements in the list keyed by `id`s.
   */
  ids = {};

  constructor(children) {

    children = Array.isArray(children)
      ? children : Array.prototype.slice.call(arguments);

    super(children);

    this.attach(children);

    this.on(Events.Types.insert, this.attach);
    this.on(Events.Types.remove, this.detach);

  }

  /**
   * @function
   * @name Two.Group.Children#attach
   * @param {Two.Shape[]} children - The objects which extend {@link Two.Shape} to be added.
   * @description Adds elements to the `ids` map.
   */
  attach(children) {
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child && child.id) {
        this.ids[child.id] = child;
      }
    }
    return this;
  }

  /**
   * @function
   * @name Two.Group.Children#detach
   * @param {Two.Shape[]} children - The objects which extend {@link Two.Shape} to be removed.
   * @description Removes elements to the `ids` map.
   */
  detach(children) {
    for (var i = 0; i < children.length; i++) {
      delete this.ids[children[i].id];
    }
    return this;
  }

}

export default Children;
