import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const DateSelect = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={['month', 'year']}
        defaultValue={dayjs('Jan-2024')}
        format="MMM YYYY"
        sx={(theme) => ({
          boxShadow: 0,
          '& .MuiInputBase-root': {
            p: 0,
            border: 'none',
            background: `${theme.palette.info.dark} !important`,
          },
          '& .MuiOutlinedInput-root': {
            pr: theme.spacing(0.75),

            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 0,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderWidth: 0,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 0,
            },
          },
          '& .MuiOutlinedInput-input': {
            p: 0,
            pl: theme.spacing(1),
            color: 'text.secondary',
            fontSize: theme.typography.caption.fontSize,
            fontWeight: 500,
            height: 30,
            width: 64,
          },
          '& .MuiIconButton-edgeEnd': {
            color: 'text.secondary',
            '& .MuiSvgIcon-fontSizeMedium': {
              fontSize: theme.typography.subtitle1.fontSize,
            },
          },
        })}
      />
    </LocalizationProvider>
  );
};

export default DateSelect;
