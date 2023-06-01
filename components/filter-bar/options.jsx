import React from 'react'

import { Divider, Typography } from "antd"
const { Title, Text } = Typography

function Options({
    title , list
}) {
  return (
    <div className=''>
        <Title level={4} className='text-[12px] font-bold uppercase'>
            { title }
        </Title>

        <Divider className='my-1'/>

        <div className='flex flex-col gap-1'>
            {list.map(({title , amount }, idx) => (
                <div className='flex cursor-pointer justify-between items-center text-primary-main/60 hover:text-primary-main/80' key={idx}>
                    <Text className='text-inherit  text-[12px]'>
                        {title}
                    </Text>

                    <Text className='text-inherit text-[12px]'>
                        {`(${amount})`}
                    </Text>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Options