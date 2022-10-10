import { Box } from "@mui/material"
import { Progress } from 'antd';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function Card(props) {
  const {title,myclass}=props


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
        backgroundColor: 'black',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <h3 style={{ color: 'white' }}>{title}</h3>
      <div className="cardcontent">
        <Progress type="circle" percent={75} strokeWidth='6' />
        <div className="progress-report">
          {/* HHHH */}
          <div className="totalfiles-Card">
            <div className="databox-Card"></div>
            <h4>User File</h4>
          </div>
          <div className="totalfiles-Card">
            <div className="databox-Card" style={{backgroundColor:'gray'}}></div>
            <h4>Total Files</h4>
          </div>
          <div className="totalfiles-Card">
            <p>75%</p>
            <ArrowDropUpIcon style={{color:'lightgreen',position:'relative', top:'10px'}}/>
          </div>

        </div>
      </div>



    </Box>

  )
}
export default Card