import React, { useState } from "react";

const DayPicker = ({month, year, onDateChange}) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const startDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const handleDayClick = (day) => {
        const newSelectedDate = new Date(year, month, day);
        setSelectedDate(newSelectedDate);
        onDateChange(newSelectedDate);
        console.log("DayPicker - newSelectedDate: ", newSelectedDate);

    };


    const renderDays = () => {
        const totalDays = daysInMonth(month, year);
        const startDay = startDayOfMonth(month, year);
        const days = [];

        // Add empty cells for days before the start of the month
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Add days for the current month
        for (let day = 1; day <= totalDays; day++) {
            const date = new Date(year, month, day);
            const isSelected = selectedDate && selectedDate.getDate() === day;
            const classNames = isSelected ? 'calendar-day selected' : 'calendar-day';

            days.push(
                <div key={day} className={classNames} onClick={() => handleDayClick(day)} style={styles.day}>
                    {day}
                </div>
            );
        }

        return days;
    };
    return (
        <div style={styles.dayPicker}>
            <div style={styles.headers}>
                <div className="calendar-day-header">S</div>
                <div className="calendar-day-header">M</div>
                <div className="calendar-day-header">T</div>
                <div className="calendar-day-header">W</div>
                <div className="calendar-day-header">T</div>
                <div className="calendar-day-header">F</div>
                <div className="calendar-day-header">S</div>
            </div>
            <div style={styles.days}>{renderDays()}</div>
        </div>

   );
};

export default DayPicker;

const styles = {
    dayPicker: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
   },
   headers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '4px',
    marginBottom: '4px',  
    width: '100%',
    fontSize: '1rem',


    },
    days: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridAutoRows: 'minmax(50px, auto)',
        width: '100%',
        fontSize: '.7rem',

    },
    day: {
        padding: '3px',
        border: '1px solid #bbb', 
    },
    
};