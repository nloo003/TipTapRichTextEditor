"use client"
import {useEditor,EditorContent} from "@tiptap/react"
import { Toolbar } from "./Toolbar"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import Text from "@tiptap/extension-text"
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Bold from "@tiptap/extension-bold"
import Document from '@tiptap/extension-document'
import Strike from "@tiptap/extension-strike"
import Italic from "@tiptap/extension-italic"
export default function TiptapEditor({
    description,
    onChange
}:{
    description: string
    onChange: (richText: string) => void
}){
    const editor = useEditor({
        extensions: [
            Document,
            Bold,
            Strike,
            Italic,
            Heading,
            Paragraph.configure({
                HTMLAttributes: {
                  class: 'min-h-[1rem]'
                }
              }),
            Underline,
            Text,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),

        ],
        content: description,
        editorProps:{
            attributes: {
                class:
                    "rounded-md border min-h-[150px] border-input text-black text-xl"
            }
        },
        onUpdate({editor}){
            onChange(editor.getHTML())
        },
    })
    return(
        <div className="flex flex-col justify-stretch max-h-[250px]">
            <Toolbar editor={editor} />
            <div className="overflow-auto pt-5">
                <EditorContent editor={editor} className="text-black"/>
            </div>
            
        </div>
    )
}