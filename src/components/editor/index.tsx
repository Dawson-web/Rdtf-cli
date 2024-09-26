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
        Devs Just Want to Have Fun by Cyndi Lauper
      </h3>

    `,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <Card className="rounded-lg p-2 mt-2">
        <EditorContent editor={editor} />
      </Card>
    </div>
  );
};

export default IeseEditor;
