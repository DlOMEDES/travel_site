import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.mainHeader = $('.main-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.onHeaderPoint();

    this.sections = $('section');
    pageSectionWaypoints();
  }

  onHeaderPoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if(direction == 'down') {
          that.mainHeader.addClass('main-header--dark');
        } else {
          that.mainHeader.removeClass('main-header--dark');
        }
      }
    });
  }

  pageSectionWaypoints() {
    this.sections.eact(function() {
      var currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function() {
          var sectionLinks = currentSection.getAttribute('data-matching-link');
          $(sectionLinks).addClass('current-link');
        }
      });
    });
  }
}

export default StickyHeader; 