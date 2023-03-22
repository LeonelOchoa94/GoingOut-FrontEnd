import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker  } from '@mui/x-date-pickers';
import {es} from 'date-fns/locale'
import {TextField} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { CalendarStyle } from './styles/CalendarStyle';

export const Calendar = () => {
  const calendarStyle = CalendarStyle();
  const [value, setValue] = React.useState(new Date())
  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (

    // <ThemeProvider theme={materialTheme}>    </ThemeProvider>
            <LocalizationProvider adapterLocale={es} dateAdapter={AdapterDateFns} >

                    <StaticDatePicker
                        //displayStaticWrapperAs="desktop"
                        label="Reservas"
                        inputFormat="dd-MMMM-yyyyy"
                        orientation="landscape"
                        openTo="day"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        className={calendarStyle.input}
                    />
            </LocalizationProvider>
          
  )
}

export default Calendar;