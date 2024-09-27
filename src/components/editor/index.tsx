import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import { Badge, Card, Container, Input, Title } from "@mantine/core";
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
      <Card className="rounded-lg p-4 mt-2 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 dark:text-white  overflow-hidden flex flex-col gap-4">
        <Badge className="text-[1rem] bg-emerald-500">Title</Badge>
        <Input
          value={1111}
          className="text-center w-1/3 min-w-[200px] "
        ></Input>
        <Badge className="text-[1rem] bg-emerald-500 mt-4">Article</Badge>
        <Container className="border border-gray-300 dark:border-gray-600 rounded-lg w-full mx-0 ">
          <EditorContent editor={editor} className="mt-2 p-1" />
        </Container>
      </Card>
    </div>
  );
};

export default IeseEditor;
