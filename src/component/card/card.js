import { Box } from "@mui/material"
import { Progress } from 'antd';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SquareIcon from '@mui/icons-material/Square';

function Card(props) {
  const { title, myclass, content1, content2 } = props


  return (
    <Box
      className='card-width-3'
      id={myclass}
      sx={{
        // width: 300,
        //   {
        //     xs:400,
        //     sm:300,
        //     md:300,
        //     lg:200,
        //     xl:200,

        //   },
        // height: 170,
        backgroundColor: 'hsl(232deg 18% 9%)',

      }}
    >
      <h4 >{title}</h4>
      <div className="cardcontent">

        <div className="progressDiv">

          <Progress
            type="circle"
            percent={75}
            strokeWidth='6'
            width='100'
          />
        </div>
          <div className="progress-report-parent-div">
            <div className="progress-report">
              <SquareIcon sx={{color:'lightblue'}} />
              <p style={{color:'white'}}>{content1}</p>
            </div>
            <div className="progress-report">
              <SquareIcon sx={{color:'lightblue'}}/>
              <p style={{color:'white'}}>{content2}</p>
            </div>
            <div style={{display:'flex'}}>
              <p style={{color:'white'}}>75%</p>
              <ArrowDropUpIcon sx={{color:'green'}}/>  
            </div>
          </div>
      </div>



    </Box>

  )
}
export default Card