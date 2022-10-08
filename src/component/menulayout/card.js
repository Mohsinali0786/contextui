import { Box } from "@mui/material"
 function Card(){
    return(
        <Box
        sx={{
          width: 300,
        //   {
        //     xs:400,
        //     sm:300,
        //     md:300,
        //     lg:200,
        //     xl:200,

        //   },
          height: 170,
          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />

)}
export default Card