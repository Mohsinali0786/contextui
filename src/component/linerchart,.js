import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { Box } from '@mui/system';

export default function LinerChart (){
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
    yAxis:false,

  };

  return(
    <Box
    id='cards'
    className='lineragraph'
    sx={{
 
    }}
>
    {/* <h5>Recent Activities</h5> */}
    <Area {...config} className='graphcolour'/>
    {/* <Line {...config} /> */}
    <div className='lineargraph-content'>
        <h5>WEE KLY</h5>
        <div>
            <p style={{fontSize:'10px'}}>This Week<br/>+72%</p>
            <p style={{fontSize:'10px'}}>Last Week<br/>+60%</p>
        </div>
    </div>

</Box>
    
      
      )
};
