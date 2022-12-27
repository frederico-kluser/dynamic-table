import { Close, Send } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const TableForm = ({ data, setAddItem, url }: any) => {
  const [inputs, setInputs] = useState<any>({});

  const fields = Object.keys(data[0]);
  const types: any = {};
  const form = data && fields.map((property) => {
    if (property !== 'id') {
      types[property] = isNaN(data[0][property]);
      return (
        <>
          <TextField onChange={(event) => {
            setInputs((prev: any) => ({
              ...prev,
              [property]: event.target.value,
            }))
          }} type={types[property] ? 'string' : 'number'} id="outlined-basic" key={property} name={property} label={property} variant="outlined" style={{
            marginTop: 16,
          }} />
          <br />
        </>
      );
    }
  });

  const formValidator = (): boolean => {
    let result = false;

    fields.forEach((field) => {
      if (!inputs[field] && field !== 'id') {
        result = true;
      }
    });

    return result;
  }
  
  console.log('inputs :', inputs);

  return (
    <>
      {form}
      <Button disabled={formValidator()} color="success" variant="contained" startIcon={<Send />} style={{
        marginTop: 16,
      }} onClick={() => {
        axios.post(url, inputs)
        .then(function (response) {
          console.log(response);
          setAddItem(false);
        })
        .catch(function (error) {
          console.log(error);
        });
      }}>
        Add
      </Button>
      <Button color="error" variant="contained" startIcon={<Close />} onClick={() => {
        setAddItem(false);
      }} style={{
        marginTop: 16,
        marginLeft: 16,
      }}>
        Cancell
      </Button>
    </>
  );
};

export default TableForm;
