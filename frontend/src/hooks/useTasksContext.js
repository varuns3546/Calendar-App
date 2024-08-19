import { TasksContext } from "../context/TasksContext"
import { useContext } from "react"

export const useTasksContext = () => {
  const context = useContext(TasksContext)

  if(!context) {
    throw Error('useDaysContext must be used inside a TasksContextProvider')
  }

  return context
}