const { useState } = require("react");

const YearPicker = ({onChange}) => {
    const [year, setYear] = useState(2024);

    // Function to generate an array of years
    const getYears = () => {
        let currentYear = new Date().getFullYear();
        let years = [];
        for (let i = -5; i <= 25; i++) {
            years.push(currentYear + i);
        }
        return years;
    };

    const handleYearSelected = (value) => {
        const newYear = parseInt(value)
        setYear(newYear)
        onChange(newYear)
    }

    return (
        <div>
            <select value={year} onChange={(e) => handleYearSelected(e.target.value)}>
                {getYears().map((yearOption) => (
                    <option key={yearOption} value={yearOption}>
                        {yearOption}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default YearPicker;