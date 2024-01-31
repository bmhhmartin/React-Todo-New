import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";
import TopPanel from "./TopPanel";

const TaskBoard =()=>{
    
    const allTasks = {
        id: crypto.randomUUID(),
        title: 'Learn React JS',
        description: 'Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit',
        tags: ['React', 'JS', 'Web'],
        priority: 'High',
        isFav: false
    }

    const [tasks, setTasks] = useState([allTasks]);
    const [addShowModal, setAddShowModal] = useState(false);

    const handleAddTask =({newTask})=>{
        alert('New task added ' + newTask);
    }

    return (
        <section className="mb-20 mt-[150px]" id="tasks">
            {addShowModal && <AddTaskModal onSave={handleAddTask} closeModal={()=>{setAddShowModal(false)}}/>}
            <div className="container mx-auto">
                <TaskSearch></TaskSearch>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TopPanel addClick = {()=>{setAddShowModal(true)}}></TopPanel>
                    <TaskList mainTasks={tasks}></TaskList>
                </div>
            </div>
        </section>
    )
}
export default TaskBoard;