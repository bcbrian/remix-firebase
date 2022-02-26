import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MUIDateTimePicker from '@mui/lab/DateTimePicker';

interface Props {
  date: Date | null;
  setDate: (newDate: Date | null) => void
}


export function DateTimePicker({date, setDate, ...textFieldProps}: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MUIDateTimePicker
        renderInput={(props) => <TextField {...props} {...textFieldProps}/>}
        label="DateTimePicker"
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
        }}
      />
    </LocalizationProvider>
  );
}