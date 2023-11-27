import PropTypes from "prop-types";
import React from "react";
import { ReestyLogo } from "../../icons/ReestyLogo";
import "./style.css";

export const  Footer = ({ className, href }) => {
  return (
    <div className={`footer-wrapper ${className}`}>
      <div className="contacts-wrapper">
        <div className="text-wrapper-2">Контакты</div>
        <div className="info">
        <p className="text-info">+375 33 112 22 45</p>
          <p className="text-info">+375 29 222 44 88</p>
          <a className="text-info" href={href} rel="noopener noreferrer" target="_blank">
            dev@agsr.by
          </a>
          <p className="text-info">г. Минск, ул. К.Цеткин, д. 24-705</p>
        </div>
      </div>
      <div className="support">
        <div className="text-wrapper-2">Техническая поддержка</div>
        <div className="info">
        <p className="text-info">+375 25 111 22 33</p>
          <p className="text-info">+375 29 222 44 55</p>
          <div className="text-info">dev@agsr.by</div>
          <div className="text-link">Связаться с поддержкой</div>
        </div>
      </div>
      <div className="company-info">
        <ReestyLogo className="footer-logo" />
        <div className="company-info-text">
          Автоматизированная информационная
          <br />
          система «Реестры»
        </div>
        <p className="company-info-text">
          © АИС «Реестры», 2022.
          <br />
          Все права защищены.
        </p>
      </div>
      <div className="footer-wrapper-1">
        <div className="line-divider" />
        <div className="main-partner-wrapper">
          <div className="partner-wrapper">
            <img className="img" alt="Img" src="/img/2x.png" />
            <div className="partner">
              <div className="text-wrapper">Условный партнёр</div>
            </div>
            <div className="partner">
              <div className="text-wrapper">Условный партнёр</div>
            </div>
            <div className="partner">
              <div className="text-wrapper">Условный партнёр</div>
            </div>
            <div className="partner">
              <div className="text-wrapper">Условный партнёр</div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper-2">
          <div className="line-divider" />
          <p className="element-dev-agsr-by">
            © АИС «Реестры»
            <br />
            Разработчк: ОАО «Агентство сервисизации и реинжиниринга» (г. Минск, ул. К. Цеткин, д. 24–705 dev@agsr.by)
          </p>
        </div>
      </div>
      
    </div>
  );
};

Footer.propTypes = {
  href: PropTypes.string,
};
