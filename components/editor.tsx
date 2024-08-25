"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import TextAreaAutoSize from "react-textarea-autosize";
import EditorJS from "@editorjs/editorjs";
import { useCallback, useEffect, useRef, useState } from "react";
import Header from "@editorjs/header";
import List from "@editorjs/list";
// @ts-ignore: Unreachable code error
import LinkTool from "@editorjs/link";
// @ts-ignore: Unreachable code error
import Code from "@editorjs/code";

export default function Editor() {
  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState(false);

  const initializeEditor = useCallback(async () => {
    const editor = new EditorJS({
      holder: "editor",
      onReady: () => {
        ref.current = editor;
      },
      placeholder: "ここに記事を書く",
      inlineToolbar: true,
      tools: {
        header: Header,
        LinkTool: LinkTool,
        list: List,
        code: Code,
      },
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();
    }

    return () => {
      ref.current?.destroy();
      ref.current = undefined;
    };
  }, [isMounted, initializeEditor]);
  return (
    <form>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link
              href={"/dashboard"}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              戻る
            </Link>
            <p className="text-sm text-muted-foreground">公開</p>
          </div>
          <button className={cn(buttonVariants())} type="submit">
            <span>保存</span>
          </button>
        </div>
        <div className="w-[800px] mx-auto">
          <TextAreaAutoSize
            id="title"
            autoFocus
            placeholder="Post Title"
            className="w-full resize-none overflow-hidden bg-transparent text-5xl focus:outline-none font-bold"
          />
        </div>
        <div id="editor" className="min-h-[500px]" />
        <p className="text-sm text-gray-500">
          Use
          <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
            Tab
          </kbd>
          to open the command menu
        </p>
      </div>
    </form>
  );
}
