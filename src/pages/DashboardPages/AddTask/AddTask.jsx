/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../providers/AuthProvider";
import PageTitle from "../../../components/PageTitle/PageTitle";
import NavBar from "../../../components/shared/NavBar/NavBar";
import Footer from "../../../components/shared/Footer/Footer";

const AddTasks = () => {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const [taskPriority, setTaskPriority] = useState("low"); // Updated state name
  const { user } = useContext(AuthContext);

  const handleDateChange = (date, name) => {
    setValue(name, date);
  };

  const onSubmit = async (data) => {
    console.log(data);
    // Set the task priority field in the form data
    data.priority = taskPriority;
    // Include user email in the form data
    data.userEmail = user.email;

    try {
      // Make API request to post task data to the appropriate collection
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.insertedId) {
        toast.success("Task Added Successfully!");
        reset();
      }
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Error adding task. Please try again.");
    }
  };

  return (
    <div>
      <PageTitle title="Taskify | Add Tasks"></PageTitle>

      <NavBar></NavBar>
      <div className="bg-white p-10">
        <h2 className="text-5xl font-bold text-center">Add A Task</h2>
        <hr className="border-2 border-[#5F33E1] w-[100px] mx-auto mt-3 mb-4" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Task Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Task Title"
                  className="input input-bordered w-full"
                  {...register("title", { required: true })}
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Task Priority</span>
              </label>
              <label className="input-group">
                <select
                  name="priority"
                  className="select select-primary w-full"
                  value={taskPriority}
                  onChange={(e) => setTaskPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <label className="input-group">
                <DatePicker
                  className="border-2"
                  showIcon
                  selected={watch("deadline")}
                  onChange={(date) => handleDateChange(date, "deadline")}
                  isClearable
                  placeholderText="Select Deadline"
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <textarea
                  name="description"
                  placeholder="Description"
                  className="textarea textarea-bordered w-full"
                  {...register("description", { required: true })}
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Task"
            className="btn bg-[#5F33E1] hover:bg-[#5F33E1] text-white btn-block"
            required
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddTasks;
