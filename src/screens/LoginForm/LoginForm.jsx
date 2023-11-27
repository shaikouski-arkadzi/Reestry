import React from "react";
import { Header } from "../../components/Header";
import { IconRightArrow1 } from "../../icons/IconRightArrow1";
import "./style.css";
import { Footer } from "../../components/Footer";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";

export const LoginForm = () => {
  return (
    <div className="login-form-wrapper">
      <div className="nav-wrapper">
          <IconRightArrow1 className="icon-right-arrow" />
          <div className="nav-text">Вернуться на главную</div>
        </div>
      <Header
        className="design-component-instance-node"
        accountImageClassName="account-image"
        userName="Имя Фамилия"
      />
      <div className="form-login">
        <div className="form-login__header">Вход</div>
        <div className="fields">
          <div className="fields">
            <div className="fields">
              <FormInput
                  className="FormInput-instance"
                  divClassNameOverride="FormInput-3"
                  prop="one"
                  textLabel="Имя*"
                  text="Введите имя"
                />
              <FormInput
                className="FormInput-instance"
                divClassNameOverride="FormInput-3"
                prop="one"
                textLabel="Пароль"
                text="Введите пароль"
              />
            </div>
            <Button
              className="login"
              divClassName="login-instance"
              status="default"
              text="Вход"
            />
            <Button
              className="login2"
              divClassName="iufl"
              status="second"
              text="Авторизация с использованием ЕС ИФЮЛ"
            />
          </div>
        </div>
      </div>
      <Footer href="mailto:dev@agsr.by" />
    </div>
  );
};
