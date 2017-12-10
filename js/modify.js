'use strict';

(function () {
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.colorize.setCoatColor();
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.colorize.setEyesColor();
  });

  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.backgroundColor = window.colorize.setFireballColor();
  });
})();
