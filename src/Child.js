import React, { memo } from 'react'

const Child = ({ parentFun,value}) => {
    console.log("chil")
    console.log(value)
    return (
        <></>
    )
}

export default memo(Child)