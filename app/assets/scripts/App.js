import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import ScrollToSee from './modules/ScrollToSee';
import StickyHeader from './modules/stickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();

new ScrollToSee($('.feature__item'), '85%');
new ScrollToSee($('.person'), '90%');
var stickyHeader = new StickyHeader();

var modal = new Modal();



// var scrollToSee = new ScrollToSee();
// var $ = require('jquery');
// // var Person = require('./modules/Person'); importing before es6
// import Person from './modules/Person';

// class Adult extends Person {
//   tax() {
//     console.log(this.name +' now owes bright bucks');
//   }
// }

// var john = new Person('jdoe', 'red');
// john.greet();
// var jane = new Adult('jdoe', 'orangered');
// jane.greet();
// jane.tax();

