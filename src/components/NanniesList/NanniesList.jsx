import React from "react";
import { List } from "./NanniesList.styled";
import NannyCard from "components/NannyCard";
import { Formik } from "formik";

import { db } from "../../firebase";
import { ref } from "firebase/database";

const nannies = [
  {
    id: 1,
    avatar: "http://picsum.photos/96",
    name: "Anna Shevchenko",
    location: "Kyiv, Ukraine",
    rating: 4.5,
    price: 15,
    age: 27,
    experience: 5,
    kids: { from: "1", to: "8 years" },
    characters: "Patient, Energetic, Creative, Punctual",
    education: "Bachelor’s in Early Childhood Education, First Aid Certified",
    description:
      "I love children and have been working with them for over 5 years. I believe in creating a positive and nurturing environment for kids. I also love outdoor activities and crafts.",
    reviews: [
      {
        id: 1,
        author: "Olga K.",
        rating: "5.0",
        text: "Anna is wonderful! My kids loved her and she was always punctual.",
      },
      {
        id: 2,
        author: "Petr S.",
        rating: "4.0",
        text: "She's great, but sometimes she had to reschedule on short notice.",
      },
    ],
  },
  {
    id: 2,
    avatar: "http://picsum.photos/96",
    name: "Maria Kovalenko",
    location: "Lviv, Ukraine",
    rating: 4.5,
    price: 16,
    age: 32,
    experience: 7,
    kids: { from: "6 month", to: "8 years" },
    characters: "Compassionate, Knowledgeable, Adaptive, Trustworthy",
    education: "Master's in Child Psychology, CPR Certified",
    description:
      "I lhave a passion for teaching and mentoring children. I aim to help them grow and learn in a safe and loving environment. I am also a trained child psychologist, which helps me in understanding and catering to the unique needs of every child.",
  },
  {
    id: 3,
    avatar: "http://picsum.photos/96",
    name: "Olena Petrenko",
    location: "Odesa, Ukraine",
    rating: 4.5,
    price: 17,
    age: 29,
    experience: 6,
    kids: { from: "2", to: "10 years" },
    characters: "Empathetic, Skilled, Observant, Enthusiastic",
    education:
      "Bachelor's in Child Development, Special Needs Child Care Training",
    description:
      "Being with children brings joy to my day. I've worked with children of various age groups, including those with special needs. My approach is hands-on, engaging, and tailored to each child's unique personality",
  },
  {
    id: 4,
    avatar: "http://picsum.photos/96",
    name: "Maria Kovalenko",
    location: "Lviv, Ukraine",
    rating: 4.5,
    price: 16,
    age: 32,
    experience: 7,
    kids: { from: "6 month", to: "8 years" },
    characters: "Compassionate, Knowledgeable, Adaptive, Trustworthy",
    education: "Master's in Child Psychology, CPR Certified",
    description:
      "I love children and have been working with them for over 5 years. I believe in creating a positive and nurturing environment for kids. I also love outdoor activities and crafts.",
  },
  {
    id: 5,
    avatar: "http://picsum.photos/96",
    name: "Maria Kovalenko",
    location: "Lviv, Ukraine",
    rating: 4.5,
    price: 16,
    age: 32,
    experience: 7,
    kids: { from: "6 month", to: "8 years" },
    characters: "Compassionate, Knowledgeable, Adaptive, Trustworthy",
    education: "Master's in Child Psychology, CPR Certified",
    description:
      "I love children and have been working with them for over 5 years. I believe in creating a positive and nurturing environment for kids. I also love outdoor activities and crafts.",
    reviews: [
      {
        id: 1,
        author: "Olga K.",
        rating: "5.0",
        text: "Anna is wonderful! My kids loved her and she was always punctual.",
      },
      {
        id: 2,
        author: "Petr S.",
        rating: "4.5",
        text: "She's great, but sometimes she had to reschedule on short notice.",
      },
    ],
  },
];

const list = ref(db, "babysitters/");

const NanniesList = () => {
  // const elementsOnPage = 3;
  console.log("List", list);

  return (
    <Formik>
      <List>
        {nannies.map((nanny) => (
          <NannyCard key={nanny.id} nanny={nanny} />
        ))}
      </List>
    </Formik>
  );
};

export default NanniesList;
