import React, { useState } from "react";
import { SearchICCP } from "../../components/SearchICCP";
import { LabelButton } from "../../components/LabelButton";
import { TablePagination } from "../../components/TablePagination";
import { IconBook9 } from "../../icons/IconBook9";
import { IconBookmarkInBook } from "../../icons/IconBookmarkInBook";
import { IconGrid } from "../../icons/IconGrid";
import { IconLineSpacing1 } from "../../icons/IconLineSpacing1";
import { IconRightArrow18 } from "../../icons/IconRightArrow18";
import { IconRightArrow28 } from "../../icons/IconRightArrow28";
import { IconServer9 } from "../../icons/IconServer9";
import "./style.css";
import { FormInput } from "../../components/FormInput";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { IconEye2 } from "../../icons/IconEye2";
import { IconExclamationMark22 } from "../../icons/IconExclamationMark22";
import { IconPlus3 } from "../../icons/IconPlus3";

export const ReestryPage = () => {
  const initAIC = [
    {
      id: 1,
      title: 'АИС «Открытая платформа «Образование»',
      firstCount: 45,
      secondCount: 111,
      thirdCount: 23
    },
    {
      id: 2,
      title: 'АИС «Электронный журнал куратора»',
      firstCount: 12,
      secondCount: 32,
      thirdCount: 6
    },
    {
      id: 3,
      title: 'АИС SCHOOLS.BY',
      firstCount: 7,
      secondCount: 0,
      thirdCount: 0
    },
    {
      id: 4,
      title: 'АИС "Подготовка прогнозных показателей приема и формирование органа...',
      firstCount: 44,
      secondCount: 78,
      thirdCount: 11
    },
    {
      id: 5,
      title: 'Информационно-аналитическая система ИАС "1-ДУ"',
      firstCount: 12,
      secondCount: 24,
      thirdCount: 0
    },
    {
      id: 6,
      title: 'АИС "Общереспубликанский банк данных участников централизованного т...',
      firstCount: 55,
      secondCount: 101,
      thirdCount: 23
    },
    {
      id: 7,
      title: 'Управление контингентом студентов',
      firstCount: 4,
      secondCount: 0,
      thirdCount: 0
    },
    {
      id: 8,
      title: 'Республиканская АИС «Электронное образование»',
      firstCount: 29,
      secondCount: 87,
      thirdCount: 14
    },
    {
      id: 9,
      title: 'Республиканская АИС ведения централизованного банка данных документ...',
      firstCount: 31,
      secondCount: 72,
      thirdCount: 16
    },
  ]

  const [tableData, setTableData] = useState(initAIC)

  return (
    <div className="personal-area-page">
      <div className="personal-area">
        <Header
          className="header"
          accountImageClassName="view-13"
          userName="Имя Фамилия"
        />
        <div className="top">
          <div className="nav-wrapper">
            <div className="nav-item">
              <IconRightArrow28 className="icon-instance-node-2" color="#676A71" />
              <div className="nav-noactive">Главная</div>
            </div>
            <div className="nav-item">
              <IconRightArrow28 className="icon-instance-node-2" color="#272A33" />
              <div className="nav-active">Личный кабинет</div>
            </div>
          </div>
          <div className="areas">
            <div className="header-araes">Личный кабинет</div>
            <div className="nav-tabs">
              <div className="nav-tab-active">
                <div className="text-wrapper-31">Реестры</div>
              </div>
              <div className="nav-tab-noactive">
                <div className="nav-tab__text">Электронные сервисы</div>
              </div>
              <div className="nav-tab-noactive">
                <div className="nav-tab__text">Потребление данных</div>
              </div>
              <div className="nav-tab-noactive">
                <div className="nav-tab__text">Справочники</div>
              </div>
              <div className="nav-tab-noactive">
                <div className="nav-tab__text">Отчёты</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="workspace">
          <div className="areas">
            <p className="ic-cp-title">Выбор ИС/СР для внесения метаданных</p>
            <SearchICCP className="design-component-instance-node" />
          </div>
          <div className="labels-wrapper">
            <div className="labels-buttons">
              <LabelButton className="design-component-instance-node" text='Просмотр ИС/ИР'>
                <IconEye2 className="icon" color="#6E7686" />
              </LabelButton>
              <LabelButton className="design-component-instance-node" text='Доп сведения ИС/ИР'>
                <IconExclamationMark22 className="icon" color="#6E7686"/>
              </LabelButton>
              <LabelButton className="design-component-instance-node" text='Добавить' mode="active">
                <IconPlus3 className="icon" color="white" />
              </LabelButton>
            </div>
            <div className="labels-buttons">
              <IconGrid className="icon-instance-node-2" color="#6E7686" />
              <IconLineSpacing1 className="icon-line-spacing" />
            </div>
          </div>
          <div className="aic-table">
            <div className="areas">
              <div className="aic-table__header">
                <div className="aic-table__header__title">Список АИС</div>
                <div className="nav-item">
                  <div className="table-pagination-length">Показывать по:</div>
                  <div className="active-pagination-length-wrapper">
                    <div className="active-pagination-length-text">25</div>
                  </div>
                  <div className="noactive-pagination-length-wrapper">
                    <div className="noactive-pagination-length-text">50</div>
                  </div>
                  <div className="noactive-pagination-length-wrapper">
                    <div className="noactive-pagination-length-text">100</div>
                  </div>
                </div>
              </div>
              <div className="aic-table__body">

                {tableData.map(({id, title, firstCount, secondCount, thirdCount}) =>
                  <div className="table-line" key={id}>
                    <div className="table-line__text-wrapper">
                      <div className="table-line__text">{title}</div>
                    </div>
                    <div className="table-line__buttons-wrapper">
                      <div className="table-line__button-wrapper">
                        <IconBook9 className="icon-instance-node-3" color="#676A71" />
                        <div className="table-line__buttons-wrapper">
                          <div className="table-line__button-counter-wrapper">
                            <div className="table-line__button-counter-text">{firstCount}</div>
                          </div>
                          <div className="icon-right-arrow-wrapper">
                            <IconRightArrow18 className="icon-instance-node-3" color="#676A71" />
                          </div>
                        </div>
                      </div>
                      <div className="table-line__button-wrapper">
                        <IconServer9 className="icon-instance-node-3" color="#676A71" />
                        <div className="table-line__buttons-wrapper">
                          <div className="table-line__button-counter-wrapper">
                            <div className="table-line__button-counter-text">{secondCount}</div>
                          </div>
                          <div className="icon-right-arrow-wrapper">
                            <IconRightArrow18 className="icon-instance-node-3" color="#676A71" />
                          </div>
                        </div>
                      </div>
                      <div className="table-line__button-wrapper">
                        <IconBookmarkInBook className="icon-instance-node-3" color="#676A71" />
                        <div className="table-line__buttons-wrapper">
                          <div className="table-line__button-counter-wrapper">
                            <div className="table-line__button-counter-text">{thirdCount}</div>
                          </div>
                          <div className="icon-right-arrow-wrapper">
                            <IconRightArrow18 className="icon-instance-node-3" color="#676A71" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <TablePagination className="design-component-instance-node" />
          </div>
        </div>
        
        <Footer className="view" href="mailto:dev@agsr.by" />
      </div>
    </div>
  );
};
