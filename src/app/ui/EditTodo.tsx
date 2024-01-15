'use client'

import React, { useState } from 'react';
import Input from "./Input";
import Button from './Button';

interface EditTodoProps {
  editTodo: (task: string, id: number) => void;
  todo: { id: number; task: string; completed: boolean; isEditing: boolean };
}

export default function EditTodo({ editTodo, todo }: EditTodoProps) {
  const [editedTask, setEditedTask] = useState<string>(todo.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(editedTask, todo.id);
  };

  return (
    <div className="w-[100%] h-fit flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex items-center justify-center gap-5 w-[100%]">
        <Input
          type='text'
          className="border-white border-2 bg-transparent h-[70px] rounded-xl outline-none text-center text-white w-[100%]"
          placeholder='Edit your task'
          onChange={(e) => setEditedTask(e.target.value)}
          value={editedTask}
        />
        <Button
          type='submit'
          text='Update'
          style='bg-green-800 hover:bg-green-700 w-[100px] h-[50px]'
        />
      </form>
    </div>
  );
}
