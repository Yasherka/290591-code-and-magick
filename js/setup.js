'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var createWizard = function (Name, Surname) {
    var wizardId = {
      name: window.util.getRandElementOfArray(Name) + ' ' + window.util.getRandElementOfArray(Surname),
      coatColor: window.colorize.setCoatColor(),
      eyesColor: window.colorize.setEyesColor()
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
    wizards[i] = createWizard(WIZARD_NAMES, WIZARD_SURNAMES);
  }

  renderSimilarWizards(wizards);

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
