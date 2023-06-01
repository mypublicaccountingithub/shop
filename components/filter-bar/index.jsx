import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Typography, Button, Divider, Drawer } from "antd";
const { Link: AntdLink, Text } = Typography;

//  icons
import { CustomIcons } from "../Icons";
//  styles
import styles from "../../styles/components/filter-bar/style.module.scss";
import Title from "./title";
import Range from "./range";
import Options from "./options";
import { useMediaQuery } from "../../hooks/useMediaQuery";
//  components

// actions

function FilterBar({ drawerOpen, setDrawerOpen, sideBarOpen }) {
  //  variables
  const popular = [
    "Popular product 1",
    "Popular product 2",
    "Popular product 3",
  ];

  const Links = ["Lighting", "All Product"];

  return (
    <>
      <div
        className={`hidden md:grid transition-all overflow-hidden flex-shrink-0 relative ${sideBarOpen ? "max-w-[100vw]" : "max-w-[0px]"
          }`}
      >
        <div
          className={`flex flex-shrink-0 flex-col w-[320px] h-full max-h-[calc(100vh_-_49px)] overflow-auto px-4 py-3`}
        >
          <div className="flex flex-col gap-2">
            {popular.map((text, idx) => (
              <AntdLink key={idx} className={styles["popular-items"]}>
                {text}
              </AntdLink>
            ))}
          </div>

          <div className={styles["links-container"]}>
            {Links.map((text, index) => (
              <div key={index} className={styles["links-items"]}>
                <Text className="uppercase text-[12px] font-bold text-primary-main">
                  {text}
                </Text>

                <CustomIcons.ArrowRight className="text-[12px] text-primary-main" />
              </div>
            ))}
          </div>

          <Title>Shop by</Title>

          <div className="flex flex-col gap-4 mt-4">
            <Options
              title="Color options"
              list={[
                {
                  title: "Red",
                  amount: 16,
                },
                {
                  title: "Blue",
                  amount: 100,
                },
                {
                  title: "Green",
                  amount: 6,
                },
              ]}
            />

            <Range />

            <Options
              title="Color options"
              list={[
                {
                  title: "Red",
                  amount: 16,
                },
                {
                  title: "Blue",
                  amount: 100,
                },
                {
                  title: "Green",
                  amount: 6,
                },
              ]}
            />
            <Options
              title="Color options"
              list={[
                {
                  title: "Red",
                  amount: 16,
                },
                {
                  title: "Blue",
                  amount: 100,
                },
                {
                  title: "Green",
                  amount: 6,
                },
              ]}
            />
            <Options
              title="Color options"
              list={[
                {
                  title: "Red",
                  amount: 16,
                },
                {
                  title: "Blue",
                  amount: 100,
                },
                {
                  title: "Green",
                  amount: 6,
                },
              ]}
            />
          </div>

          <Title>Compare</Title>

          <Text className="text-[12px] text-primary-main/60 mt-1">
            You have no items to compare
          </Text>
        </div>
      </div>

      <Drawer
        className="w-[min(320px,100%)] h-full md:hidden"
        open={drawerOpen}
        placement="left"
        onClose={() => setDrawerOpen(false)}
      >
        <div className="flex flex-col h-full max-h-[calc(100vh_-_49px)] overflow-auto px-4 py-3">
          <div className="flex flex-col gap-2">
            {popular.map((text, idx) => (
              <AntdLink key={idx} className={styles["popular-items"]}>
                {text}
              </AntdLink>
            ))}
          </div>

          <div className={styles["links-container"]}>
            {Links.map((text, index) => (
              <div key={index} className={styles["links-items"]}>
                <Text className="uppercase text-[12px] font-bold text-primary-main">
                  {text}
                </Text>

                <CustomIcons.ArrowRight className="text-[12px] text-primary-main" />
              </div>
            ))}
          </div>

          <Title>Shop by</Title>

          <div className="flex flex-col gap-4 mt-4">
            <Options
              title="Color options"
              list={[
                {
                  title: "Red",
                  amount: 16,
                },
                {
                  title: "Blue",
                  amount: 100,
                },
                {
                  title: "Green",
                  amount: 6,
                },
              ]}
            />

            <Range />

            <Options
              title="Color options"
              list={[
                {
                  title: "Red",
                  amount: 16,
                },
                {
                  title: "Blue",
                  amount: 100,
                },
                {
                  title: "Green",
                  amount: 6,
                },
              ]}
            />
            <Options
              title="Color options"
              list={[
                {
                  title: "Red",
                  amount: 16,
                },
                {
                  title: "Blue",
                  amount: 100,
                },
                {
                  title: "Green",
                  amount: 6,
                },
              ]}
            />
            <Options
              title="Color options"
              list={[
                {
                  title: "Red",
                  amount: 16,
                },
                {
                  title: "Blue",
                  amount: 100,
                },
                {
                  title: "Green",
                  amount: 6,
                },
              ]}
            />
          </div>

          <Title>Compare</Title>

          <Text className="text-[12px] text-primary-main/60 mt-1">
            You have no items to compare
          </Text>
        </div>
      </Drawer>
    </>
  );
}

export default FilterBar;

