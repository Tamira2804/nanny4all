import React, { useState } from "react";
import {
  CardThumb,
  AvatarBlock,
  Image,
  InfoBlock,
  TitleBlock,
  NameBlock,
  Title,
  Subtitle,
  AspectList,
  AspectItem,
  CharactersList,
  CharactersItem,
  Description,
  Btn,
} from "./NannyCard.styled";
import sprite from "../../assets/icons/sprite.svg";
import NannyReviews from "components/NannyReviews";

const NannyCard = ({ nanny }) => {
  const {
    avatar,
    name,
    location,
    rating,
    price,
    age,
    experience,
    kids,
    characters,
    education,
    description,
    reviews = [],
  } = nanny;

  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <CardThumb>
      <AvatarBlock>
        <Image src={avatar} alt={name} />
      </AvatarBlock>
      <InfoBlock>
        <TitleBlock>
          <NameBlock>
            <Subtitle>Nanny</Subtitle>
            <Title>{name}</Title>
          </NameBlock>
          <AspectList>
            <AspectItem>
              <svg>
                <use href={`${sprite}#icon-map-pin`} />
              </svg>
              {location}
            </AspectItem>
            <AspectItem>
              <svg>
                <use href={`${sprite}#icon-star`} />
              </svg>
              Rating: {rating}
            </AspectItem>
            <AspectItem>
              Price / 1 hour: <span>{price}$</span>
            </AspectItem>
          </AspectList>
        </TitleBlock>
        <CharactersList>
          <CharactersItem>
            <span>Age: </span>
            {age}
          </CharactersItem>
          <CharactersItem>
            <span>Experience: </span> {experience} years
          </CharactersItem>
          <CharactersItem>
            <span>Kids Age: </span>
            {kids.from} to {kids.to} old
          </CharactersItem>
          <CharactersItem>
            <span>Characters:</span> {characters}
          </CharactersItem>
          <CharactersItem>
            <span>Education: </span> {education}
          </CharactersItem>
        </CharactersList>

        <Description>{description}</Description>
        <div className="reviews">
          {showMore ? (
            <NannyReviews reviews={reviews} />
          ) : (
            <Btn onClick={handleReadMore}>Read More</Btn>
          )}
        </div>
      </InfoBlock>
    </CardThumb>
  );
};

export default NannyCard;
