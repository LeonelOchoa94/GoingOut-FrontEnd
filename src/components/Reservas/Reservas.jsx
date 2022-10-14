
import {React,useState} from 'react';
import { WbSunny } from '@mui/icons-material';
import { ErrorOutline } from '@mui/icons-material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker  } from '@mui/x-date-pickers';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import {es} from 'date-fns/locale'
import { Grid, Paper,TextField, Badge } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import { CalendarPickerSkeleton } from '@mui/x-date-pickers/CalendarPickerSkeleton';
import { CalendarStyle } from './styles/CalendarStyle';


export default function CustomCalendar() { 
    const calendarStyle = CalendarStyle();
    const [selectedDate, handleDateChange] = useState(new Date());    
    const [selectedDays, setSelectedDays] = useState([1, 6, 10, 24, 15]);
    const dates = ["2022-10-08", "2022-10-11", "2022-10-19"];
   
    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }

    const handleMonthChange = async () => {
        return new Promise(resolve => {
          setTimeout(() => {
            setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 31)));
            resolve();
          }, 1000);
        });
      };


    const customDayRenderer = (date,selectedDates,pickersDayProps) => {
        const stringifiedDate = date.toISOString().slice(0, 10);
        if (dates.includes(stringifiedDate)) {
            return ( <Badge
            key={date.toString()}
            overlap="circular"
            badgeContent={<ErrorOutline color='primary' sx={{ fontSize: '1em' }}/>}
          >
            <PickersDay {...pickersDayProps} sx={{background: "yellow" }}/>
          </Badge>
            )
          //return <PickersDay {...pickersDayProps} disabled />;
        }
        return <PickersDay {...pickersDayProps}/>;
      }

    return (
        <div>
            <LocalizationProvider adapterLocale={es} dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                      //displayStaticWrapperAs="desktop"
                        label="Reservas"
                        value={selectedDate}
                        orientation="landscape"
                        onChange={handleDateChange}
                        onMonthChange={handleMonthChange}
                        renderInput={(params) => <TextField {...params} />}
                        renderLoading={() => <CalendarPickerSkeleton />}
                        renderDay={customDayRenderer}
                        className={calendarStyle.input}                       
                    />
            </LocalizationProvider>
          </div>
    );}


    