import { ToDoItem } from "@/components/ToDoItem";
import { prisma } from "@/db";
import Link from "next/link";
import { Button } from '@mantine/core';
import { Demo } from "./demo";
function getToDos(){
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean){
  "use server"

  await prisma.todo.update({where:{id}, data:{complete}})
}

export default async function Home(){

 
  //await prisma.todo.create({data:{title:"test", complete: false}})
  return (
  <>
    <header className="text-center">
      <h1 className="text-2xl text-center text-green-700">Testing</h1>
      
    </header>
    <Button component={Link} href="/hello">
      Next link button
    </Button>
    <Demo/>
    
  </>
  )
    
  
}