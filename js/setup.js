'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomFromMassive = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var createWizard = function (wizardName, wizardSurname, wizardCoat, wizardEyes) {
  var wizardId = {
    name: wizardName[getRandomFromMassive(wizardName)] + ' ' + wizardSurname[getRandomFromMassive(wizardSurname)],
    coatColor: wizardCoat[getRandomFromMassive(wizardCoat)],
    eyesColor: wizardEyes[getRandomFromMassive(wizardEyes)]
  };

  return wizardId;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var pasteWizard = function (wizard) {
  var fragment = document.createDocumentFragment();

  fragment.appendChild(renderWizard(wizard));
  similarListElement.appendChild(fragment);
};

var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards[i] = createWizard(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS);
}

for (i = 0; i < wizards.length; i++) {
  pasteWizard(wizards[i]);
}

document.querySelector('.setup-similar').classList.remove('hidden');
