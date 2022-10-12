import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { Box } from '@mui/material'
const LinerChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
    };
    return (
        // <>

        <Box
            id='cards'
            className='lineragraph'
            sx={{
                backgroundColor: 'black',
         
            }}
        >
            {/* <h5>Recent Activities</h5> */}
            <Line {...config} className='graphcolour'/>
            <div className='lineargraph-content'>
                <h5>WEE KLY</h5>
                <div>
                    <p style={{fontSize:'10px'}}>This Week<br/>+72%</p>
                    <p style={{fontSize:'10px'}}>Last Week<br/>+60%</p>
                </div>
            </div>

        </Box>
        // </>

    )
};

export default LinerChart