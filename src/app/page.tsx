'use client'

import React, { useState } from 'react';
import Input from "./ui/Input";
import Button from './ui/Button';
import EditTodo from './ui/EditTodo';

export default function Home() {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<{ id: number; task: string; completed: boolean; isEditing: boolean }[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, { id: todos.length + 1, task: todo, completed: false, isEditing: false }]);
    setValue('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number) => {
    setIsEditing(true);
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: true } : { ...todo, isEditing: false }));
  };

  const editTask = (task: string, id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, task, isEditing: false } : todo));
    setIsEditing(false);
  };

  return (
    <div className="bg-[#12427d] w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-5 ">
      <p className="text-white text-5xl">{isEditing ? 'Update' : 'Todo List'}</p>
      <div className="w-[100%] flex flex-col justify-center items-center gap-5 ">
        {isEditing ? (
          <EditTodo editTodo={editTask} todo={todos.find(todo => todo.isEditing)} />
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); addTodo(value); }} className="flex items-center justify-center gap-5 w-[100%] ">
            <Input
              type='text'
              className="border-white border-2 bg-transparent h-[70px] rounded-xl outline-none text-center text-white md:w-[30vw]"
              placeholder='Type your task'
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <Button
              type='submit'
              text='Add'
              style='bg-green-800 hover:bg-green-700 w-[100px] h-[50px]'
            />
          </form>
        )}
        <div className="md:w-[40vw] w-[100%] h-fit  flex items-center justify-center">
          <ul className="flex flex-col w-[100%] items-center justify-center gap-5">
            {todos.map((todo, index) => (
              todo.isEditing
                ? null 
                : (
                  <li key={index} className="h-10 flex items-center gap-5 justify-center w-[100%] rounded-lg">
                    <p className='bg-white hover:bg-slate-400 md:w-[90%] sm:w-[80%] w-[100%] h-[50px] flex items-center justify-between rounded-lg'>{todo.task} <div className='flex items-center justify-between h-[50px] md:w-[20%] sm:gap-3'>
                      <Button text='Edit' style='w-[50px] h-[50px] bg-blue-500' onClick={() => editTodo(todo.id)} />
                      <Button text='Del' style='w-[50px] h-[50px] bg-red-500' onClick={() => deleteTodo(todo.id)} />
                    </div></p>
                    
                  </li>
                )
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
