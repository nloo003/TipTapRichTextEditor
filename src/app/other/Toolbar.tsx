"use client"

import {type Editor} from "@tiptap/react"
import {Bold,Strikethrough, Italic, AlignCenter, AlignLeft,AlignRight, Underline, AlignJustify} from "lucide-react"

import {Toggle} from "@/components/ui/toggle"

type Props = {
    editor: Editor | null
}

export function Toolbar({editor}: Props){
    if (!editor){
        return null
    }
    return (
        <div className="border border-input bg-transparent rounded-md text-black">

            <Toggle
                size="default"
                pressed={editor.isActive("bold")}
                onPressedChange={()=>
                    editor.chain().focus().toggleBold().run()
                }>
                <Bold className="h-6 w-4 text-black"/>
            </Toggle>
            <Toggle
                size="default"
                pressed={editor.isActive("strike")}
                onPressedChange={()=>
                    editor.chain().focus().toggleStrike().run()
                }>
                <Strikethrough className="h-6 w-4 text-black"/>
            </Toggle>
            <Toggle
                size="default"
                pressed={editor.isActive("italic")}
                onPressedChange={()=>
                    editor.chain().focus().toggleItalic().run()
                }>
                <Italic className="h-6 w-4 text-black"/>
            </Toggle>
            <Toggle
                size="default"
                pressed={editor.isActive("underline")}
                onPressedChange={()=>{
                    editor.chain().focus().toggleUnderline().run()

                }}>
                <Underline className="h-6 w-4 text-black"/>
            </Toggle>

            <Toggle
                size="default"
                pressed={editor.isActive({textAlign:"left"})}
                onPressedChange={()=>{
                    editor.chain().focus().setTextAlign('left').run()
                }
                    
                }>
                <AlignLeft className="h-6 w-4 text-black"/>
            </Toggle>

            <Toggle
                size="default"
                pressed={editor.isActive({textAlign:"center"})}
                onPressedChange={()=>{
                    editor.chain().focus().setTextAlign('center').run()
                }
                    
                }>
                <AlignCenter className="h-6 w-4 text-black"/>
            </Toggle>

            <Toggle
                size="default"
                pressed={editor.isActive({textAlign:"right"})}
                onPressedChange={()=>
                    editor.chain().focus().setTextAlign('right').run()
                }>
                <AlignRight className="h-6 w-4 text-black"/>
            </Toggle>

            <Toggle
                size="default"
                pressed={editor.isActive({textAlign:'justify'})}
                onPressedChange={()=>
                    editor.chain().focus().setTextAlign('justify').run()
                }>
                <AlignJustify className="h-6 w-4 text-black"/>
            </Toggle>
        </div>
    )
}
/*
<Toggle
    size="sm"
    pressed={editor.isActive("heading")}
    onPressedChange={()=>
        editor.chain().focus().toggleHeading({level:2}).run()
    }>
    <Heading2 className="h-4 w-4"/>
</Toggle>
*/