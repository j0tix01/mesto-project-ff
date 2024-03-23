const cardTemplate = document.querySelector("#card-template");
const placesList = document.querySelector(".places__list");

// Функция для создания элемента карточки
function createCard(cardData, deleteCallback) {
  const cardContent = cardTemplate.content.cloneNode(true);
  const cardElement = cardContent.querySelector(".card");
  const cardImage = cardContent.querySelector(".card__image");
  const cardTitle = cardContent.querySelector(".card__title");
  const deleteButton = cardContent.querySelector(".card__delete-button");
  // Значения вложенных элементов по ТЗ
  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  // Обработчик клика по ТЗ
  deleteButton.addEventListener("click", function () {
    deleteCallback(cardElement);
  });
  return cardContent;
}

// Функция для удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// Выводим все карточки из массива на страницу методом append
initialCards.forEach((cardData) => {
  const cardContent = createCard(cardData, deleteCard);
  placesList.append(cardContent);
});
