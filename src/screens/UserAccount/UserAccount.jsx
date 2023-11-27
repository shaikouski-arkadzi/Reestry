import React from "react";
import { FormInput } from "../../components/FormInput";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { IconRightArrow1 } from "../../icons/IconRightArrow1";
import { UserInterfaceEyeSlash1 } from "../../icons/UserInterfaceEyeSlash1";
import { UserInterfaceEyeSlash2 } from "../../icons/UserInterfaceEyeSlash2";
import "./style.css";

export const UserAccount = () => {
  return (
    <div className="user-account-wrapper">
      <div className="profile">
      <Header
          className="header-instance"
          accountImageClassName="account-image"
          userName="Имя Фамилия"
        />
        <div className="nav-wrapper">
          <div className="nav">
            <div className="labels">
              <IconRightArrow1 className="icon-right-arrow" color="#676A71" />
              <div className="nav-noactive">Главная</div>
            </div>
            <div className="labels">
              <IconRightArrow1 className="icon-right-arrow" color="#272A33" />
              <div className="nav-active">Профиль</div>
            </div>
          </div>
          <div className="page-header">Профиль</div>
        </div>
        <div className="profile-card">
          <div className="profile-info">
            <img className="image" alt="Image" src="/img/2.svg" />
            <div className="profile-info">
              <div className="labels">
                <div className="name-surname">Имя Фамилия</div>
              </div>
              <div className="labels">
                <div className="status-label-wrapper">
                  <div className="status-label">Активный</div>
                </div>
                <div className="user-label-wrapper">
                  <div className="user-label">Пользователь</div>
                </div>
              </div>
            </div>
          </div>
          <div className="line-divider-2" />
          <div className="profile-form">
            <div className="block-header">Личные данные</div>
            <div className="profile-form">
              <div className="profile-form-line">
                <FormInput
                  className="FormInput-instance"
                  divClassName="design-component-instance-node"
                  prop="one"
                  textLabel="Имя*"
                  text="Имя"
                />
                <FormInput
                  className="FormInput-instance"
                  divClassName="design-component-instance-node"
                  divClassNameOverride="FormInput-2"
                  prop="one"
                  textLabel="Фамилия*"
                  text="Фамилия"
                />
              </div>
              <div className="profile-form-line">
                <FormInput
                  className="FormInput-instance"
                  divClassNameOverride="FormInput-3"
                  prop="one"
                  textLabel="Отчество*"
                  text="Введите отчество"
                />
                <FormInput
                  className="FormInput-instance"
                  divClassName="design-component-instance-node"
                  divClassNameOverride="FormInput-4"
                  prop="one"
                  textLabel="Идентификационный номер*"
                  text="1234455PB88"
                />
              </div>
              <FormInput
                className="FormInput-instance"
                divClassNameOverride="FormInput-5"
                prop="one"
                textLabel="Логин*"
                text="Введите логин"
              />
            </div>
          </div>
          <div className="line-divider-2" />
          <div className="profile-form">
            <div className="contact-block">
              <div className="block-header-wrapper">
                <div className="block-header">Контакты</div>
              </div>
              <div className="edit-button">
                <div className="edit-text">Редактировать</div>
              </div>
            </div>
            <div className="profile-form-line">
              <FormInput
                className="FormInput-instance"
                prop="one"
                textLabel="Адресс электроной почты"
                text="agsr@mail.ru"
              />
              <FormInput
                className="FormInput-instance"
                divClassNameOverride="FormInput-6"
                prop="one"
                textLabel="Мобильный номер"
                text="+375 29 123 44 55"
              />
            </div>
          </div>
          <div className="line-divider-2" />
          <div className="profile-form">
            <div className="password">
              <div className="block-header-wrapper">
                <div className="block-header">Пароль</div>
              </div>
              <div className="edit-button">
                <div className="edit-text">Редактировать</div>
              </div>
            </div>
            <div className="profile-form">
              <div className="profile-form-line">
                <div className="password-wrapper">
                  <div className="text-password">Текущий пароль</div>
                  <div className="password-input">
                    <div className="password-password">**********</div>
                    <UserInterfaceEyeSlash2 className="user-interface-eye" />
                  </div>
                </div>
              </div>
              <div className="profile-form-line">
                <div className="password-wrapper">
                  <div className="text-password">Новый пароль</div>
                  <div className="password-input">
                    <div className="password-password">**********</div>
                    <UserInterfaceEyeSlash2 className="user-interface-eye" />
                  </div>
                </div>
                <div className="password-wrapper">
                  <div className="text-password">Подтвердите пароль</div>
                  <div className="password-input">
                    <div className="password-password">**********</div>
                    <UserInterfaceEyeSlash1 className="user-interface-eye" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line-divider-2" />
          <Button
            className="save"
            divClassName="save-instance"
            status="default"
            text="Сохранить"
          />
        </div>
      </div>
      <Footer className="footer" href="mailto:dev@agsr.by" />
    </div>
  );
};
