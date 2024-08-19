import { useTasksContext } from '../hooks/useTasksContext'

const DayDetails = ({ day }) => {
  const { dispatch } = useTasksContext()

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/days' + day._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_DAY', payload: json})
    }
  }

  return (
    <div className="day-details">
      <h4>{day.title}</h4>
      <p><strong>Date: </strong>{day.date}</p>
      <p><strong>Tasks: </strong>{day.tasks}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default DayDetails