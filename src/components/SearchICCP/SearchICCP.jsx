import React from "react";
import { IconClose } from "../../icons/IconClose";
import { IconSearch } from "../../icons/IconSearch";
import { Button } from "../Button";
import "./style.css";

export const SearchICCP = ({ className }) => {
  return (
    <div className={`SearchICCP ${className}`}>
      <div className="search-input-wrapper">
        <div className="input-with-icon">
          <IconSearch className="icon-instance-node" color="#D4D7DB" />
          <input 
            className="input" 
            type="text" 
            value='Выберите ИС/СР для внесения метаданных...' 
          />
        </div>
        <IconClose className="icon-instance-node" color="#D4D7DB" />
      </div>
      <Button
        className="search-button"
        divClassName="text-search-button"
        status="default"
        text="Показать"
      />
    </div>
  );
};
