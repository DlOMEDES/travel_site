import $ from 'jquery';

class MobileMenu {
  constructor() {
    // store DOM element to reuse
    this.mainHeader = $('.main-header');
    this.menuBtn = $('.main-header__btn');
    this.menuContent = $('.main-header__navigation');
    this.navList = $('.nav-ul__list');
    this.events();
    
  }

  // event listeners
  events() {
    this.menuBtn.click(this.toggleMenu.bind(this));
  }

  // functionality
  toggleMenu() {
    this.menuContent.toggleClass('main-header__navigation--visible');
    this.mainHeader.toggleClass('main-header__expanded');
    this.navList.toggleClass('nav-ul__list--expanded');
    this.menuBtn.toggleClass('main-header__btn--close');
  }  
}

export default MobileMenu;
