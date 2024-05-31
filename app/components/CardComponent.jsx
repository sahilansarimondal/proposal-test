"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";

let noCounter = 1;

const Card = styled.div`
  background-color: rgba(
    255,
    255,
    255,
    0.6
  ); // White with slight transparency
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;

  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #000000;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const CardComponent = () => {
  const [no, setNo] = useState("No");
  const [yes, setYes] = useState("Yes");

  const clickHandler = (value) => {
    if (value === "Yes") {
      toast.success("I love you too ❤️");
      return;
    } else {
      if (noCounter >= 3) {
        toast.error(
          "Are you afraid to fall in love with me? 😟"
        );
        noCounter = 0;
      } else {
        noCounter++;
      }
      if (no === "No") {
        setNo("Yes");
        setYes("No");
      } else {
        setNo("No");
        setYes("Yes");
      }
      return;
    }
  };
  return (
    <Card className="w-5/6 sm:w-auto ">
      <Title>I Love You 💕</Title>
      <Description>Will You Be My Girlfriend?</Description>
      <ButtonContainer>
        <Button
          onClick={() => clickHandler(yes)}
          className={`${
            yes === "No"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }  rounded-3xl`}
        >
          {yes === "Yes" ? "Yes" : "No"}
        </Button>
        <Button
          onClick={() => clickHandler(no)}
          className={` ${
            no === "No"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          } rounded-3xl`}
        >
          {no === "No" ? "No" : "Yes"}
        </Button>
      </ButtonContainer>
      <Toaster />
    </Card>
  );
};

export default CardComponent;
