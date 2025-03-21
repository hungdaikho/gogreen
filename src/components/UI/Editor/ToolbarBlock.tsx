import { Editor } from '@tiptap/react';

import { Button } from './UI/primitives/Button';
import {
  BlockquoteIcon,
  CheckboxIcon,
  ListOrderedIcon,
  ListUnorderedIcon
} from './UI/icons/Editor';

type Props = {
  editor: Editor;
};

export function ToolbarBlock({ editor }: Props) {
  return (
    <>
      <Button
        className="toolbarButton"
        variant="subtle"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        data-active={editor.isActive('bulletList') ? 'is-active' : undefined}
        aria-label="Unordered list"
      >
        <ListUnorderedIcon />
      </Button>

      <Button
        className="toolbarButton"
        variant="subtle"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive('orderedList') ? 'is-active' : undefined}
        aria-label="Ordered list"
      >
        <ListOrderedIcon />
      </Button>

      <Button
        className="toolbarButton"
        variant="subtle"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        data-active={editor.isActive('blockquote') ? 'is-active' : undefined}
        aria-label="Blockquote"
      >
        <BlockquoteIcon />
      </Button>

      <Button
        className="toolbarButton"
        variant="subtle"
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        disabled={!editor.can().chain().focus().toggleTaskList().run()}
        data-active={editor.isActive('taskList') ? 'is-active' : undefined}
        aria-label="Task list"
      >
        <CheckboxIcon style={{ width: '16px' }} />
      </Button>
    </>
  );
}
