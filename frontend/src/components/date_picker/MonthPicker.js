const { useState } = require("react");

const MonthPicker = ({onChange}) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const [month, setMonth] = useState(new Date().getMonth());

    const handlePrevMonth = () => {
        let newMonth = month - 1;
        if (newMonth < 0) {
            newMonth = 11; // Wrap around to December
        }
        setMonth(newMonth);
        onChange(newMonth);
    };

    const handleNextMonth = () => {
        let newMonth = month + 1;
        if (newMonth > 11) {
            newMonth = 0; // Wrap around to January
        }
        setMonth(newMonth);
        onChange(newMonth);
    };

    return (
        <div style={styles.monthPicker}>
            <button onClick={handlePrevMonth} style={styles.arrowButton}>&lt;</button>
            <span style={styles.monthName}>{months[month]}</span>
            <button onClick={handleNextMonth} style={styles.arrowButton}>&gt;</button>
        </div>
    );
};

export default MonthPicker;

const styles = {
    monthPicker: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '150px', // Adjust width as needed
    },
    arrowButton: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '1.2rem',
        cursor: 'pointer',
    },
    monthName: {
        fontSize: '1rem',
        fontWeight: 'bold',
    },
};
