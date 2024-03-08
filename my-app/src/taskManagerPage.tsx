
import { AddNewTask } from "./components/addNewTask";
import { useEffect, useState } from "react";

export const TaskManagerPage: React.FC = () => {

  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const keys: string[] = [];
    for(let i = 0; i < localStorage.length; i++) {
      const key: string | null = localStorage.key(i)
      if(key !== null) {
        keys.push(key)
      }
      setTasks(keys)
    }
}, []);

  const deleteStorage = () => {
    localStorage.clear()
  }

  console.log(tasks)
  
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl">Task Manager</h1>
      <p className='cursor-pointer border-b' onClick={deleteStorage}>Delete storage</p>
      <div className="flex w-full gap-5 justify-center">
        <div className=" h-[500px] my-8 w-full max-w-[500px] rounded-xl bg-sky-200">
          {tasks && (
            <div className="flex flex-col gap-5 p-8">
              {tasks.map((task, index) => 
                  <div className="bg-gray-500 rounded-xl" key={index}>
                    {task}
                  </div>
              )}
            </div>
          )}
        </div>
          <AddNewTask/>
      </div>
      <div>
        <h3 className="text-3xl">By Jimmy Catalano</h3>
      </div>
    </div>
  );
};
