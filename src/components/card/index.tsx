import React from "react";

import { ICard } from "../../models/cards.model";

type Props = {
  card: ICard;
};
const Card = ({ card }: Props) => <div>{card.label}</div>;

export default Card;
