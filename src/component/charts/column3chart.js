import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

export default function DemoColumn () {
  const data = [
    {
      type: '1-3秒',
      value: 0.16,
    },
    {
      type: '4-10秒',
      value: 0.325,
    },
  
    {
      type: '30+分',
      value: 0.215,
    },
  ];
  const paletteSemanticRed = 'hsl(199deg 78% 62%)';
  const brandColor = 'hsl(191deg 32% 48%)';
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if(type === '30+分'){
        return 'hsl(15deg 90% 60%)'
      }
      else if(type==='4-10秒')
      {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: false,
    yAxis:false,

  };
  return <Column className='DemoColumnChart' {...config} />;
};
