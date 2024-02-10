import React, { useState } from "react";
import {
  CardThumb,
  HeartIcon,
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
import { calculateAge } from "../../helpers/calculateAge";

const NannyCard = ({ nanny }) => {
  const {
    avatar_url,
    name,
    location,
    rating = 0,
    price_per_hour,
    birthday,
    experience,
    kids_age,
    characters = [],
    education,
    about,
    reviews = [],
  } = nanny;

  const age = calculateAge(birthday);

  const [showMore, setShowMore] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <CardThumb>
      <HeartIcon onClick={handleFavorite}>
        <svg>
          <use href={`${sprite}#icon-heart-stroke`} />
        </svg>
      </HeartIcon>
      <AvatarBlock>
        <Image src={avatar_url} alt={name} />
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
              Price / 1 hour: <span>{price_per_hour}$</span>
            </AspectItem>
          </AspectList>
        </TitleBlock>
        <CharactersList>
          <CharactersItem>
            <span>Age: </span>
            {age}
          </CharactersItem>
          <CharactersItem>
            <span>Experience: </span> {experience}
          </CharactersItem>
          <CharactersItem>
            <span>Kids Age: </span>
            {kids_age}
          </CharactersItem>
          <CharactersItem>
            <span>Characters:</span> {characters}
          </CharactersItem>
          <CharactersItem>
            <span>Education: </span> {education}
          </CharactersItem>
        </CharactersList>

        <Description>{about}</Description>
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
