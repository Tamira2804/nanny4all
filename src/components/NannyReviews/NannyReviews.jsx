import React, { useState } from "react";
import { List, Item, Block, Author, Rating, Text } from "./NannyReviews.styled";
import ReviewAvatar from "components/ReviewAvatar/ReviewAvatar";
import Button from "components/Button/Button";
import sprite from "../../assets/icons/sprite.svg";
import Modal from "components/Modal";
import ModalAppointment from "components/ModalAppointment";

const NannyReviews = ({ reviews }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <List>
        {reviews.length < 1 || !reviews ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <Item key={review.id}>
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
        <Button
          text="Make an appointment"
          width="215px"
          onClick={openModal}
          alignSelf="flex-start"
        />
      </List>
      {isOpenModal && (
        <Modal onClose={closeModal} isOpenModal={isOpenModal}>
          <ModalAppointment onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default NannyReviews;
