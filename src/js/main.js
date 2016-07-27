import $ from 'jquery';
import enquire from 'enquire.js';

$('#site-title').css('color', 'red');
console.warn('merge');

enquire.register('screen and (min-width:768px)', {
  match() {
    console.warn('desktop');
  },
  unmatch() {
    console.warn('mobile');
  }
});
