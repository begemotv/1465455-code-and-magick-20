/* eslint-disable semi */
'use strict';

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var FIRST_NAME_ARR = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME_ARR = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR_ARR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR_ARR = ['black', 'red', 'blue', 'yellow', 'green']; // добавил _ARR чтобы название константы не повторяло название свойства в объекте wizards
var FIREBALL_COLOR_ARR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
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
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var wizardContainer = document.querySelector('.wizard');
console.log(wizardContainer);
var wizardCoat = wizardContainer.querySelector('.wizard-coat');
var wizardEyes = wizardContainer.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var wizardCoatRepaint = function () {
  wizardCoat.style.fill = COAT_COLOR_ARR[randomNumber(COAT_COLOR_ARR.length)];
  return wizardCoat.style.fill;
}

var wizardEyesRepaint = function () {
  wizardEyes.style.fill = EYES_COLOR_ARR[randomNumber(EYES_COLOR_ARR.length)];
  return wizardEyes.style.fill;
}

var wizardFireballRepaint = function () {
  wizardFireball.style.background = FIREBALL_COLOR_ARR[randomNumber(FIREBALL_COLOR_ARR.length)];
  return wizardFireball.style.background;
}

wizardContainer.addEventListener('click', function () {
  wizardCoatRepaint();
  wizardEyesRepaint();
  wizardFireballRepaint();
});
