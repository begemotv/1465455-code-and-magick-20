'use strict';

var FIRST_NAME_ARR = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME_ARR = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR_ARR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR_ARR = ['black', 'red', 'blue', 'yellow', 'green']; // добавил _ARR чтобы название константы не повторяло название свойства в объекте wizards

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomNumber = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var wizards = [
  {
    name: FIRST_NAME_ARR[randomNumber(FIRST_NAME_ARR.length)] + ' ' + SECOND_NAME_ARR[randomNumber(SECOND_NAME_ARR.length)],
    coatColor: COAT_COLOR_ARR[randomNumber(COAT_COLOR_ARR.length)],
    eyesColor: EYES_COLOR_ARR[randomNumber(EYES_COLOR_ARR.length)]
  },
  {
    name: FIRST_NAME_ARR[randomNumber(FIRST_NAME_ARR.length)] + ' ' + SECOND_NAME_ARR[randomNumber(SECOND_NAME_ARR.length)],
    coatColor: COAT_COLOR_ARR[randomNumber(COAT_COLOR_ARR.length)],
    eyesColor: EYES_COLOR_ARR[randomNumber(EYES_COLOR_ARR.length)]
  },
  {
    name: FIRST_NAME_ARR[randomNumber(FIRST_NAME_ARR.length)] + ' ' + SECOND_NAME_ARR[randomNumber(SECOND_NAME_ARR.length)],
    coatColor: COAT_COLOR_ARR[randomNumber(COAT_COLOR_ARR.length)],
    eyesColor: EYES_COLOR_ARR[randomNumber(EYES_COLOR_ARR.length)]
  },
  {
    name: FIRST_NAME_ARR[randomNumber(FIRST_NAME_ARR.length)] + ' ' + SECOND_NAME_ARR[randomNumber(SECOND_NAME_ARR.length)],
    coatColor: COAT_COLOR_ARR[randomNumber(COAT_COLOR_ARR.length)],
    eyesColor: EYES_COLOR_ARR[randomNumber(EYES_COLOR_ARR.length)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
