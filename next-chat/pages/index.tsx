import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";

export default function Home() {
  const { setUserName, setSecret } = useContext(Context);
  return (
    <>
      <Background>
        <AuthContainer>
          <AuthForm onSubmit={(e) => e.preventDefault}></AuthForm>
          <AuthTitle>NextJS Chat</AuthTitle>

          <TextInput
            placeholder="Email"
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextInput
            type={"password"}
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <SubmitButton>Login / Sign Up</SubmitButton>
        </AuthContainer>
      </Background>
    </>
  );
}

const Background = styled.div`
  padding: 100px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(150deg, #d9dbe2, #808aac 100%, #282d39 0);
`;
const AuthContainer = styled.div`
  width: 420px;
  height: 292px;
  padding: 20px 20px;
  position: relative;
  top: calc(50vh - 144px - 100px);
  left: calc(50vw - 240px - 100px);
  background-color: #4a5162;
  border-radius: 24px;
  box-shadow: 0 2px 15px rgb(0 0 0 / 68%);
`;
const AuthForm = styled.form`
  padding-top: 33px;
  width: 60%;
  margin-left: 20%;
`;

const AuthTitle = styled.div`
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 26px;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 24px;
  background-color: #4a5162;
  outline: none;
  border-width: 0px;
  border-bottom: 2px solid #726dfe;
  color: white;

  &::placeholder {
    color: hsla(0, 0%, 100%, 0.568);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 4px;
  border-width: 0px;
  cursor: pointer;
  background-color: #726dfe;
  color: white;
  outline: none;

  &:hover {
    background-color: #938ffe;
  }
`;
