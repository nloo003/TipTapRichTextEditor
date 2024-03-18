"use client"

type ToDoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}
export function ToDoItem({id,title,complete, toggleTodo}: ToDoItemProps){

  return (
    <li className="flex gap-1 items-center">
        <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e=>toggleTodo(id, e.target.checked)} />
        <label htmlFor={id} className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through">
            {title}
        </label>
    </li>
  )
    
  
}