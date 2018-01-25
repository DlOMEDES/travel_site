import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.mainHeader = $('.main-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.onHeaderPoint();

    this.headerLinks = $('.nav-ul a');

    this.sections = $('section');
    this.pageSectionWaypoints();
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
    var that = this;
    this.sections.each(function() {
      var currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if(direction == 'down') {
            var sectionLinks = currentSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('current-link');
            $(sectionLinks).addClass('current-link');
          }
        },
        offset: '10%'
      });

      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if(direction == 'up') {
            var sectionLinks = currentSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('current-link');
            $(sectionLinks).addClass('current-link');
          }
        },
        offset: '-40%'
      });
    });
  }
}

export default StickyHeader; 