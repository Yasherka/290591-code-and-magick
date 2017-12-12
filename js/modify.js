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

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;


  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target.cloneNode();
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
    artifactsElement.style.outline = '2px dashed red';
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    if (!evt.target.firstChild && evt.target.className === 'setup-artifacts-cell') {
      evt.target.appendChild(draggedItem);
    }
    artifactsElement.style.outline = '';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
    artifactsElement.style.outline = '2px dashed red';
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    if (!evt.target.firstChild && evt.target.className === 'setup-artifacts-cell') {
      evt.target.style.backgroundColor = 'yellow';
    }
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    if (!evt.target.firstChild && evt.target.className === 'setup-artifacts-cell') {
      evt.target.style.backgroundColor = '';
    }
    evt.preventDefault();
  });

})();
