'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandElementOfArray = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var createWizard = function (Name, Surname, Coat, Eyes) {
  var wizardId = {
    name: getRandElementOfArray(Name) + ' ' + getRandElementOfArray(Surname),
    coatColor: getRandElementOfArray(Coat),
    eyesColor: getRandElementOfArray(Eyes)
  };

  return wizardId;
};

var createWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderSimilarWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizardElement(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards[i] = createWizard(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS);
}

renderSimilarWizards(wizards);

document.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && setupUserName !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var changeColor = function (elem, array) {
  elem.style.fill = getRandElementOfArray(array);
};

var changeBackColor = function (elem, array) {
  elem.style.backgroundColor = getRandElementOfArray(array);
};

wizardCoat.addEventListener('click', function () {
  changeColor(wizardCoat, COAT_COLORS);
});

wizardEyes.addEventListener('click', function () {
  changeColor(wizardEyes, EYES_COLORS);
});

wizardFireball.addEventListener('click', function () {
  changeBackColor(wizardFireball, FIREBALL_COLORS);
});
