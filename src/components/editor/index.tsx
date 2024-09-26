import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import { Card } from "@mantine/core";
import "../../styles/editor.css";

const IeseEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: `
      <h3 style="text-align:center">
       Wellcome to the Iese Editor
      </h3>

    `,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <Card className="rounded-lg p-2 mt-2 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 dark:text-white  overflow-hidden ">
        <EditorContent editor={editor} />
      </Card>
    </div>
  );
};

export default IeseEditor;
