import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [text,setText] = useState('Hi');
    useLayoutEffect(()=>{
        alert('change')
        setText('Hello');
    },[])
  return (
    <div>
        {text}
    </div>
  )
}

export default AppUseLayoutEffect