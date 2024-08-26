import {memo} from 'react';
import {Box} from "@mui/material";

const RightBar = memo(() => {
 return (
  <Box bgcolor="green" flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
   RightBar
  </Box>
 );
});

export default RightBar;