import React from 'react';

import { Button, Divider, Input, Slider, Typography } from "antd";
const { Title } = Typography;

import { CustomIcons } from '../Icons';

import style from "../../styles/components/filter-bar/style.module.scss";

function Range() {
    const [range, setRange] = React.useState([0, 100]);

    const registerRangeChangeOfInputs = (idx) => ({
        value: range[idx],
        onChange: (e) => {
            const value = e.target.value;
            if (/\D/.test(value)) return;

            setRange(prev => {
                const clone = [...prev];
                clone[idx] = value;
                return clone;
            });
        }
    });

    return (
        <div className='flex flex-col relative'>
            <Title level={4} className='text-[12px] font-bold uppercase'>
                Price
            </Title>

            <Divider className='my-1' />

            <Slider
                value={range}
                onChange={(e) => {
                    setRange([e[0], e[1]]);
                }}
                range
                className='mx-0'
                min={0}
                max={500} />

            <div className='flex items-center justify-between mt-2'>
                <div className='flex items-center justify-center gap-2'>
                    <Input className={style["number-input"]} prefix="$" {...registerRangeChangeOfInputs(0)} />

                    <CustomIcons.ArrowX className='text-[16px] text-primary-main' />

                    <Input className={style["number-input"]} prefix="$" {...registerRangeChangeOfInputs(1)} />
                </div>

                <Button type='primary' className='text-[12px] shadow-none'>
                    Search
                </Button>
            </div>

        </div>
    );
}

export default Range;