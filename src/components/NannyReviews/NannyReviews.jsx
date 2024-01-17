import React from "react";
import { List, Item, Block, Author, Rating, Text } from "./NannyReviews.styled";
import ReviewAvatar from "components/ReviewAvatar/ReviewAvatar";
import Button from "components/Button/Button";
import sprite from "../../assets/icons/sprite.svg";

const NannyReviews = ({ reviews }) => {
  return (
    <List>
      {reviews.length < 1 || !reviews ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <Item>
            <Block>
              <ReviewAvatar name={review.author} />
              <div>
                <Author>{review.author}</Author>
                <Rating>
                  <svg>
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                  {review.rating}
                </Rating>
              </div>
            </Block>
            <Text>{review.text}</Text>
          </Item>
        ))
      )}
      <Button text="Make an appointment" width="215px" />
    </List>
  );
};

export default NannyReviews;
