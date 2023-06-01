import React from 'react';

import { Button } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { CustomIcons } from '../Icons';

import style from "../../styles/components/product/style.module.scss";
import {
  addFavoriteItem,
  removeFavoriteItem,
} from "../../redux/slices/favourites";

function ActionButtons({ columns = false, product }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favorites);

  const buttons = [
    {
      getIcon() {
        if (items?.some((item) => item?.id === product?.id))
          return CustomIcons.HeartFill;
        return CustomIcons.HeartLine;
      },
      onClick() {
        if (items?.some((item) => item?.id === product?.id)) {
          dispatch(removeFavoriteItem(product?.id));
          return;
        }
        dispatch(addFavoriteItem(product));
      },
    },
    {
      getIcon() {
        return CustomIcons.Scale;
      },
      onClick() {
        return;
      },
    },
    {
      getIcon() {
        return CustomIcons.Eye;
      },
      onClick() {
        return;
      },
    },
  ];

  return (
    <div className={`${style["action-buttons"]} ${columns ? "flex-col" : ""}`}>
      {buttons.map(({ getIcon, onClick }, idx) => {
        const Icon = getIcon();
        return (
          <Button
            onClick={onClick}
            className={style["action-button"]}
            key={idx}
            icon={<Icon className="text-[14px] text-primary-main" />}
          />
        );
      })}
    </div>
  );
}

export default ActionButtons;