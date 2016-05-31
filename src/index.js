import {Button} from './components/button/button.js'

(function(win) {
  if(win._tanmonoLoaded) return;
  else win._tanmonoLoaded = true;
  win.Button = Button;
})(window);

module.exports = {
  Button: Button
};
