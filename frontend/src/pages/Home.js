import { useEffect, useState } from "react"
import { useTasksContext } from "../hooks/useTasksContext"

// components
import DayDetails from "../components/DayDetails"
import TaskForm from "../components/TaskForm"
import DatePicker from "../components/date_picker/DatePicker"

const Home = () => {
  const { days, dispatch } = useTasksContext()
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/tasks')
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'SET_TASKS', payload: json})
        }
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
     
    }

    fetchTasks()
  }, [dispatch])

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);

  };


  return (
    <div className="home" style={styles.container}>
      <DatePicker onDateChange={handleDateChange} />
      <div className="days">
        {days && days.map(day => (
          <DayDetails day={day} key={day._id} date={selectedDate} />
        ))}
      </div>
      {selectedDate && <TaskForm date={selectedDate} />}
    </div>
  )
}

export default Home

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '20px',
    marginTop: '-200',  
  },

  

};