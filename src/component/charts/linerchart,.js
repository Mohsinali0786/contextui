import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { Box } from '@mui/system';
import ToggleBtn from '../buttons/togggleBtn';
import  DemoColumn from '../charts/column3chart';
export default function LinerChart() {
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
        yAxis:false
    };
    return (
        <Box
            id='cards'
            className='lineragraph'
            sx={{

            }}
        >
            <Area {...config} className='graphcolour' />
            <div className='lineargraph-content'>
                <h5>WEE KLY</h5>
                <div className='lineargraph-content-div'>
                    <p style={{ fontSize: '7px' }}>This Week<br /><span style={{ fontSize: '13px' }}><b>+72%</b></span></p>
                    <p style={{ fontSize: '7px' }}>Last Week<br /><span style={{ fontSize: '13px' }}><b>+60%</b></span></p>
                </div>
                <div>
                    <div className='togglebtn-div'>
                        <ToggleBtn />
                        <p >Show in Chart Form</p>
                    </div>
                    <div className='column3chart-div'>
                        <p><span>Activity</span><span><b>14H</b>15M</span></p>
                        <DemoColumn/>

                    </div>
                </div>
            </div>

        </Box>


    )
};
