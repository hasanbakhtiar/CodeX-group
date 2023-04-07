import {useEffect,useState} from 'react'

const useEffectApp = () => {

    
    const [value,setValue] = useState(0);
    const [data,setData] = useState('info')

    useEffect(()=>{
        console.log('useEffect is running...');
    },[data,value]);
    
  return (
    <div>
        {value}
        <div>
            <button onClick={
                ()=>{
                    setValue(value+1)
                }
            }>change</button>
        </div>
        {data}
        <div>
            <button onClick={()=>{setData('new value')}}>new</button>
        </div>
    </div>
  )
}

export default useEffectApp