import { useState } from "react";

import { ICard, ICardSetup } from "../models/cards.model";

import cardSetups from "../assets/cards";

const useCards = () => {
  const parseCards = (cards: ICard[], setup: ICardSetup): ICard[] => {
    const newCards = Array(setup.quantity).map((c) => ({
      label: c.label,
      value: c.value,
      isDrawn: false,
      isShown: false,
    }));
    return [...cards, ...newCards];
  };

  const [cards, setCards] = useState(cardSetups.reduce(parseCards, []));

  const changeCard = (card: ICard) => {
    const { value } = card;
    const edit = (c: ICard) => (c.value === value ? card : c);
    setCards(cards.map(edit));
  };

  const drawCard = () => {
    const notDrawn = cards.filter((c) => !c.isDrawn);
    const random = Math.floor(Math.random() * notDrawn.length);
    const card = notDrawn[random];
    changeCard({ ...card, isDrawn: true, isShown: true });
  };

  const clearTable = () => {
    const clear = (c: ICard) => ({ ...c, isShown: false });
    setCards(cards.map(clear));
  };

  const newGame = () => {
    const clear = (c: ICard) => ({ ...c, isDrawn: false, isShown: false });
    setCards(cards.map(clear));
  };

  return {
    cards: cards.filter((c) => c.isShown),
    drawCard,
    clearTable,
    newGame,
  };
};

export default useCards;
