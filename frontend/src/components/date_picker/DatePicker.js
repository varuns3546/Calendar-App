import React, { useState } from "react";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";
import DayPicker from "./DayPicker";

const DatePicker = ({ onDateChange }) => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const handleMonthChange = (month) => {
        setSelectedMonth(month);
    };

    const handleYearChange = (year) => {
        setSelectedYear(year);
    };

    const handleDayChange = (selectedDate) => {
        onDateChange(selectedDate);
        console.log("DatePicker - selectedDate: ", selectedDate);

    };

    return (
        <div style={styles.datePicker}>
            <div style={styles.header}>
                <div><MonthPicker currentMonth={selectedMonth} onChange={handleMonthChange}/></div>
                <div><YearPicker onChange={handleYearChange} /></div>
            </div>
            <div style={styles.dayPicker}><DayPicker month={selectedMonth} year={selectedYear} onDateChange={handleDayChange}/></div>
        </div>
    );
};


export default DatePicker;

const styles = {
    datePicker: {
        display: 'flex',
        flexDirection: 'column',  
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },
    dayPicker: {
        width: '100%',
        marginTop: '20px',
    }
}
