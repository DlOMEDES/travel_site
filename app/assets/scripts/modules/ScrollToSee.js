import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ScrollToSee {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercent = offset;
    this.hiddenFirst();
    this.onWaypoints();
  }

  hiddenFirst() {
    this.itemsToReveal.addClass('reveal-item');
  }

  onWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass('reveal-item__visible');
        },
        offset: that.offsetPercent
      });
    });
  }
}

export default ScrollToSee;