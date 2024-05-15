export const calendarStyles = {
  backgroundColor: '#0f172a',
  color: '#ffffff',  
  '.MuiPickersCalendarHeader-root': {
    backgroundColor: '#1e293b', 
    color: '#ffffff',  
  },
  '.MuiPickersCalendarHeader-switchViewButton': {
    color: '#38bdf8',  
    '&:hover': {
      backgroundColor: '#0f172a',  
      color: '#e0f2fe',  
    },
  },
  '.MuiPickersDay-root': {
    color: '#38bdf8',  
    '&.Mui-selected': {
      backgroundColor: 'black',  
      color: 'white', 
    },
    '&:hover': {
      backgroundColor: '#0ea5e9',  
      color: 'black'
    },
    
  },
  '.MuiPickersDay-dayOutsideMonth': {
    color: '#64748b',  
  },
}