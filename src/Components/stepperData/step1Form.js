import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";
import { addFinancialInfo } from "../../store";

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
  margin: "auto"
}));

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '5px',
  height: '700px', // Set the desired height for the scrollable container
  overflowY: 'auto'
});

const SelectWrapper = styled('div')({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '12px 16px',
  gap: '10px',
  width: '644px',
  height: '48px',
  background: '#FFFFFF',
  borderWidth: '1px 1px 2px 1px',
  borderStyle: 'solid',
  borderColor: '#1353A1',
  borderRadius: '4px',
});

const Dropdown = styled('select')({
  display:"flex",
  flexDirection:"coloumn",
  alignItems:"center",
  gap:"16px",
  width:"644px",
  
});

export default function Step1Form() {
  const dispatch = useDispatch();
  const formData = require('../../jsonData/financialInfo.json');

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event, cardKey) => {
    const { name, value, options, multiple } = event.target;
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setFormValues((prevState) => ({
      ...prevState,
      [name]: multiple ? selectedOptions : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addFinancialInfo(formValues));
  };

  return (
    <>
      <Tag>
        <Chip label="Financial Information" />
      </Tag>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          {/* Render the form fields based on the JSON data */}
          {/* You can map over the 'cards' array and render each card dynamically */}
          {formData.cards.map((card) => (
            <div key={card.cardKey}>
              <h3>{card.header}</h3>
              {/* Render the dropdown menu */}
              <SelectWrapper>
                <Dropdown
                  name={card.header}
                  onChange={(e) => handleInputChange(e, card.cardKey)}
                  multiple={card.isMultiSelect}
                >
                  {card.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Dropdown>
              </SelectWrapper>
            </div>
          ))}
        </form>
      </FormContainer>
    </>
  );
}
