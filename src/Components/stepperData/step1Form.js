import React, { useEffect,useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { addFinancialInfo } from "../../store";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material'

const Tag = styled(Stack)(({ theme }) => ({
  width: "147px",
  height: "100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
  gap: "8px",
  color: "#283545",
  // margin: "auto"
}));
const Text = styled('h4')(({ theme }) => ({
    alignItems: 'center',
    fontSize: '20px',
    lineHeight: "24px",
    display: 'flex',
    flexDirection: 'column',
    letterSpacing: "0.02em",
    color: "#283545",
    width: "448px",
    paddingRight: '100px'
  }));

  


export default function Step1Form() {


  const dispatch= useDispatch();

  const jsonFinancialData = require('../../jsonData/financialInfo.json');
  const dataString=JSON.stringify(jsonFinancialData,null,2);
  const data=JSON.parse(dataString);



//Below function maintains the dropdown to select the values

const [selectedOption, setSelectedOption] = useState(Array(data.cards.length).fill(''));

const handleDropdownChange = (event, index) => {
  const updatedOptions = [...selectedOption];
  updatedOptions[index] = event.target.value;
  setSelectedOption(updatedOptions);
  dispatch(addFinancialInfo(event.target.value));
};


  return (
    <>
      
                    <div style={{display: "flex",
                     alignItem:"center",
                     justifyContent:"center", 
                     paddingTop:"40px", 
                     paddingBottom: "80px",
                     backgroundColor: "#F5F5F5"}}>
                        <form>
                        <Tag style={{display:"flex-start"}}>
                        <Chip label="Financial Information" />
                      </Tag>
                                  <h4 style={{ fontSize: '20px',paddingLeft:"10px"}}>Financial datails</h4>  
                                  <p style={{width: "644px",
                                            height: "48px",
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            lineHeight: "24px",
                                            paddingLeft:"10px",
                                            marginTop: '-20px',
                                            color: "#5B6A88",
                                            }}>
                                    Understanding your financial context helps us assess whether this account is suitable for you.
                                    </p> 
                                    <Box
                                        sx={{
                                            width: "644px",
                                            height: "64px",
                                            backgroundColor:  'rgba(180, 197, 215, 0.15)',
                                            marginTop:"20px",
                                            marginBottom:"10px",
                                            marginLeft:"10px"
                                        }}>
                                        <Typography variant="body1" sx={{fontSize:14,fontWeight: 400,color: "#5B6A88",letterSpacing: "0.5px",paddingLeft:5,paddingTop:3}}>
                                        <InfoOutlinedIcon sx={{ fontSize: 15,color: "#5B6A88",}} /> Please complete this section carefully.
                                        </Typography> </Box>     
                            {data.cards.map((c,index)=>{
                                return(
                                  <div>
                                      <p sx= {{paddingLeft:30}}>{c.header}</p>

                                  <FormControl  sx={{minWidth: "644px", margin: "10px", borderColor: '#1353A1',}}>
                                    <InputLabel >{c.header}</InputLabel>
                                    <Select
                                      
                                      sx={{display:"flex",boxSizing:"border-box",flexDirection:"row"}}
                                      labelId="demo-simple-select-label"
                                      varient='filled'
                                      key={index}
                                      value={selectedOption[index]}
                                      onChange={(event) => handleDropdownChange(event, index)}

                                      label="Select an option"
                                    >
                                      {c.options.map((option) => (
                                        <MenuItem id="item" key={option.label} value={option.label}>
                                          {option.label}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                  </div>
                                )}
                            )}
                              
                            
                          </form>
                    </div>
            
      
    </>
  );
}