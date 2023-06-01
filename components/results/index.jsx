import React from "react";

import { Button, Pagination, Select } from "antd";

import { CustomIcons } from "../Icons";

import { useQuery } from "react-query";

import ProductContainer from "../product/product-container";
import FilterBar from "../filter-bar";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Results() {
  const [total, setTotal] = React.useState(0);
  const [gridMode, setGridMode] = React.useState(true);
  const [current, setCurrent] = React.useState(1);
  const [sortMethod, setSortMethod] = React.useState({
    label: "Default",
    value: "default",
  });

  const [showFilterDrawer, setShowFilterDrawer] = React.useState(false);
  const [showFilterBar, setShowFilterBar] = React.useState(true);

  const { data, isLoading } = useQuery(["products", current], async () => {
    let url = "https://api.darsinoo-edu.ir/product";

    if (current === 1) {
      url = `${url}?per_page=12`;
    } else {
      url = `${url}?page=${current}&per_page=12`;
    }

    const res = await fetch(url);
    const data = await res.json();

    return data;
  });

  React.useEffect(() => {
    if (data) {
      setTotal(data.count ?? 0);
    }
  }, [data]);

  return (
    <>
      <FilterBar
        drawerOpen={showFilterDrawer}
        setDrawerOpen={setShowFilterDrawer}
        sideBarOpen={showFilterBar}
      />

      <div className="w-full h-full max-h-[calc(100vh_-_49px)] overflow-auto relaitve px-3">
        <div className="flex items-center justify-start gap-1 py-3 sticky top-0 bg-white z-[20]">
          <Button
            className=" hidden md:flex"
            onClick={() => setShowFilterBar((prev) => !prev)}
          >
            {showFilterBar ? "Hide " : "Show "} Filters
          </Button>

          <Button
            className="md:hidden"
            onClick={() => setShowFilterDrawer((prev) => !prev)}
          >
            {showFilterDrawer ? "Hide " : "Show "} Filters
          </Button>

          <Button
            onClick={() => {
              setGridMode(false);
            }}
            type={!gridMode ? "primary" : "default"}
            icon={<CustomIcons.List />}
            className="flex items-center justify-center shadow-none"
          />

          <Button
            onClick={() => {
              setGridMode(true);
            }}
            type={gridMode ? "primary" : "default"}
            icon={<CustomIcons.Grid />}
            className="flex items-center justify-center shadow-none"
          />

          <Select
            defaultValue={sortMethod}
            className="ml-2"
            onChange={(e) => {
              setSortMethod({
                label: e.label,
                value: e.value,
              });
            }}
            options={[
              {
                label: "Default",
                value: "default",
              },
              {
                label: "Expensive",
                value: "expensive",
              },
              {
                label: "Cheap",
                value: "cheap",
              },
            ]}
          />
        </div>

        {isLoading ? (
          <div className="w-full h-[calc(100vh_-_(96px_+_49px))] flex">
            <CustomIcons.Spinner className="m-auto text-[16px] text-primary-main animate-spin" />
          </div>
        ) : (
          <ProductContainer products={data?.results} gridMode={gridMode} />
        )}

        <div className="w-full flex justify-between items-center py-1">
          <Pagination
            className="bg-white"
            current={current}
            onChange={(e) => setCurrent(e)}
            total={total}
            pageSize={20}
            showSizeChanger={false}
            showLessItems
            showPrevNextJumpers={false}
          />
        </div>
      </div>
    </>
  );
}

export default Results;
