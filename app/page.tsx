"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [error, setError] = useState("");

  const addTask = () => {
  if (task.trim() === "") {
    setError("Please enter a task.");
    return;
  }

  setTasks([...tasks, task.trim()]);
  setTask("");
  setError("");
};

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = "✓ " + updatedTasks[index];
    setTasks(updatedTasks);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          TODO APPLICATION
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>

        {error && (
  <p className="text-red-500 text-sm mb-4">
    {error}
  </p>
)}

        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks yet. Add your first task!
            </p>
          ) : (
            tasks.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border rounded-lg p-3"
              >
                <span className="text-gray-800">{item}</span>

                <div className="flex gap-2">
                  <button
                    onClick={() => completeTask(index)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Complete
                  </button>

                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </main>
  );
}