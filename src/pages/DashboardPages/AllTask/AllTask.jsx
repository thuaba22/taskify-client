import { useState, useEffect, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { toast } from "react-toastify";
import { AuthContext } from "../../../providers/AuthProvider";
import NavBar from "../../../components/shared/NavBar/NavBar";

const AllTask = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

  const fetchTasks = async (status) => {
    try {
      const response = await fetch(
        `http://localhost:5000/tasks/${user.email}/${status}`
      );
      const tasksData = await response.json();
      setTasks((prevTasks) => ({ ...prevTasks, [status]: tasksData }));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    // Fetch tasks for each status
    fetchTasks("todo");
    fetchTasks("ongoing");
    fetchTasks("completed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email]);

  const handleDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    // If dropped outside a valid destination
    if (!destination) return;

    // If dropped in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // Update status based on the destination droppableId
    const newStatus = destination.droppableId;

    try {
      // Update the task status on the server
      const response = await fetch(
        `http://localhost:5000/tasks/${draggableId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        console.error("Error updating task status:", response.status);
        toast.error("Error updating task status. Please try again.");
        return;
      }

      // Update the local state
      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        const taskToUpdate = updatedTasks[source.droppableId].find(
          (task) => task._id === draggableId
        );
        taskToUpdate.status = newStatus;

        // Remove the task from the source list
        updatedTasks[source.droppableId] = updatedTasks[
          source.droppableId
        ].filter((task) => task._id !== draggableId);

        // Insert the task into the destination list at the correct position
        updatedTasks[newStatus] = [
          ...updatedTasks[newStatus].slice(0, destination.index),
          taskToUpdate,
          ...updatedTasks[newStatus].slice(destination.index),
        ];

        return updatedTasks;
      });

      toast.success("Task status updated successfully!");
    } catch (error) {
      console.error("Error updating task status:", error);
      toast.error("Error updating task status. Please try again.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.error("Error deleting task:", response.status);
        toast.error("Error deleting task. Please try again.");
        return;
      }

      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        for (const key in updatedTasks) {
          updatedTasks[key] = updatedTasks[key].filter(
            (task) => task._id !== taskId
          );
        }
        return updatedTasks;
      });

      toast.success("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Error deleting task. Please try again.");
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex">
          {Object.entries(tasks).map(([status, taskList]) => (
            <div key={status} className="flex-1 p-4">
              <h2 className="text-2xl font-bold mb-4">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </h2>
              {/* Use lowercase status for droppableId */}
              <Droppable droppableId={status} key={status}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="bg-gray-100 p-4 rounded"
                    style={{ minHeight: "300px" }}
                  >
                    {taskList.map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-2 mb-2 rounded shadow cursor-pointer"
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="text-2xl font-bold">
                                {task.title}
                              </h3>
                              <div className="badge badge-primary badge-outline">
                                {task.priority}
                              </div>
                            </div>
                            <p>{task.description}</p>
                            <p>{task.deadline}</p>
                            <button
                              onClick={() => handleDeleteTask(task._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default AllTask;
