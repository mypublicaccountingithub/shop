import React from 'react'

import { Typography } from 'antd'
const { Title : AntdTitle } = Typography
function Title({
    children , className
}) {
  return (
    <div className={'flex flex-col ' + className}>
        <AntdTitle level={3} className='text-[14px] uppercase mt-8 font-bold'>
                { children }
        </AntdTitle>

        <span className='inline-block bg-primary-main w-[20px] h-[2px] '/>
    </div>
  )
}

export default Title