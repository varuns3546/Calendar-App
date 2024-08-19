import { useState } from 'react'
import { useTasksContext } from '../hooks/useTasksContext'

const TaskForm = ({date}) => {
  console.log('task form date: '+ date)
  const { dispatch } = useTasksContext()

  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [reoccuring, setReoccuring] = useState(false)
  const [reoccuringOption, setReoccuringOption] = useState(-1)
  const [sunday, setSunday] = useState(false)
  const [monday, setMonday] = useState(false)
  const [tuesday, setTuesday] = useState(false)
  const [wednesday, setWednesday] = useState(false)
  const [thursday, setThursday] = useState(false)
  const [friday, setFriday] = useState(false)
  const [saturday, setSaturday] = useState(false)

  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const task = {title, description, date}
    const response = await fetch('http://localhost:4000/api/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle(null)
      setDescription(null)
      setReoccuring(false)
      setReoccuringOption(false)
      setSunday(false)
      setMonday(false)
      setTuesday(false)
      setWednesday(false)
      setThursday(false)
      setFriday(false)
      setSaturday(false)
      setEmptyFields([])
      setError(null)

      dispatch({type: 'CREATE_TASK', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <label>{`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`}</label>

      <label>Task:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />
      <label>Description:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
      />
      <div style={styles.inputGroup}>
        <label>Reoccuring</label>
        <div style={styles.checkBox}>
          <input
            type="checkbox"
            onChange={(e) => setReoccuring(e.target.value)}
            value={reoccuring}
          />
        </div>
        
      </div>
      {reoccuring && 
           <select value={reoccuringOption} onChange={(e) => setReoccuringOption(e.target.value)}>
            <option value="">Select</option>
            <option value="0">By Day/Days of Week</option>
            <option value="1">By Day/Days of Month</option>
       </select>
      }
      {reoccuringOption === "0" && 
        <div style={styles.dayOptions}>
          <div style={styles.dayInputGroup}>
            <label style={styles.dayLabel}>S</label>
            <input
              type="checkbox"
              onChange={(e) => setSunday(e.target.value)}
              value={sunday}
            />
          </div>
          <div style={styles.dayInputGroup}>
            <label style={styles.dayLabel}>M</label>
            <input
              type="checkbox"
              onChange={(e) => setMonday(e.target.value)}
              value={monday}
            />
          </div>
          <div style={styles.dayInputGroup}>
            <label style={styles.dayLabel}>T</label>
            <input
              type="checkbox"
              onChange={(e) => setTuesday(e.target.value)}
              value={tuesday}
            />
          </div> 
          <div style={styles.dayInputGroup}>
            <label style={styles.dayLabel}>W</label>
            <input
              type="checkbox"
              onChange={(e) => setWednesday(e.target.value)}
              value={wednesday}
            />
          </div>
          <div style={styles.dayInputGroup}>
            <label style={styles.dayLabel}>T</label>
            <input
              type="checkbox"
              onChange={(e) => setThursday(e.target.value)}
              value={thursday}
            />
          </div>    
          <div style={styles.dayInputGroup}>
            <label style={styles.dayLabel}>F</label>
            <input
              type="checkbox"
              onChange={(e) => setFriday(e.target.value)}
              value={friday}
            />
          </div>
          <div style={styles.dayInputGroup}>
            <label style={styles.dayLabel}>S</label>
            <input
              type="checkbox"
              onChange={(e) => setSaturday(e.target.value)}
              value={saturday}
            />
          </div>
        </div>
      }
      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TaskForm;

const styles = {

  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dayOptions:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dayInputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  dayLabel: {
    marginLeft: '10px'
  }

};
