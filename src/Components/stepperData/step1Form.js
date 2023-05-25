import React, { useEffect,useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { addFinancialInfo } from "../../store";

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
  color: "#B4C5D7",
  // margin: "auto"
}));


export default function Step1Form() {


  const dispatch= useDispatch();

  const jsonFinancialData = require('../../jsonData/financialInfo.json');
  const dataString=JSON.stringify(jsonFinancialData,null,2);
  const data=JSON.parse(dataString);



//Below function maintains the dropdown to select the values

      const [selectedOption, setSelectedOption] = useState([]);
      const handleDropdownChange = (event) => {
        setSelectedOption(...selectedOption,event.target.value);
        dispatch(addFinancialInfo(event.target.value));
      };
     

  return (
    <>
      
                    <div style={{display: "flex", alignItem:"center",justifyContent:"center", paddingTop:"80px", paddingBottom: "80px"}}>
                  
                        
                        <form>
                        <Tag style={{display:"flex-start"}}>
                        <Chip label="Financial Information" />
                      </Tag>
                            {data.cards.map((c,index)=>{
                                return(
                                  <div>
                                  <FormControl  sx={{minWidth: "644px", margin: "10px"}}>
                                    <InputLabel >{c.header}</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      varient='filled'
                                      key={index}
                                      value={selectedOption[index]}
                                      onChange={handleDropdownChange}
                                      label="Select an option"
                                      sx={{maxHeight:"48px"}}
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
