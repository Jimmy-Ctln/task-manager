import { useState } from "react";

export const AddNewTask = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [task, setTask] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.setItem(task, task)
    setTask('')
  }


  return (
    <div className="w-full h-full gap-5 py-5 my-8 max-w-[600px] px-5 rounded-xl bg-gray-500 flex items-center cursor-pointer">
      {isClicked ? (
          <form className="flex items-center w-full" onSubmit={handleSubmit}>
            <label className="text-nowrap text-2xl">Title :</label>
            <input
              className="bg-gray-600 m-5 pl-5 w-2/6 text-2xl"
              type="text"
              value={task}
              onChange={ev => setTask(ev.target.value)}
              placeholder="Choose a title for your new task"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
      ) : (
        <div className="flex w-full items-center gap-2" onClick={() => setIsClicked(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <p className="text-2xl">Add a new list</p>
        </div>
      )}
    </div>
  );
};
