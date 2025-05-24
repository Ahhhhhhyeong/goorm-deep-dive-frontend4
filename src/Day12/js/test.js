const popupCards = document.getElementsByClassName("popups__card");
// console.log(popupCards);

function popupClose(params) {
  popupCards[params].hidden = true;
  let check = true;
  for (let index = 0; index < popupCards.length; index++) {
    const element = popupCards[index].hidden;
    if(!element) check = false;
  }
  document.getElementsByClassName('popups-close')[0].hidden = check;
}

function popupAllClose(params) {
  for (const element of popupCards) {
    element.hidden = true;
  }
  // console.log(document.getElementsByClassName('popups-close'))
  const button = document.getElementsByClassName('popups-close');
  button[0].hidden = true
}