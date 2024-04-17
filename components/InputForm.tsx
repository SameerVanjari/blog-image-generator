"use client";
import React, { FormEventHandler, useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

type Blog = {
  title: string;
  content: string;
};

const InputForm = () => {
  const [blogData, setBlogData] = useState<Blog>({ title: "", content: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log("blog ====> ", blogData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg space-y-4 bg-white/10 p-6 rounded-lg shadow-lg"
    >
      <div className="space-y-2">
        <label className="form-label text-white" htmlFor="blog-title">
          Blog Title
        </label>
        <Input
          className="input-dark"
          id="blog-title"
          placeholder="Enter your blog title"
          onChange={(e) => {
            setBlogData((prev) => ({
              title: e.target.value,
              content: prev.content,
            }));
          }}
        />
      </div>
      <div className="space-y-2">
        <label className="form-label text-white" htmlFor="blog-content">
          Blog Content
        </label>
        <Textarea
          className="min-h-[200px] input-dark"
          id="blog-content"
          placeholder="Enter your blog content"
          onChange={(e) => {
            setBlogData((prev) => ({
              title: prev.content,
              content: e.target.value,
            }));
          }}
        />
      </div>
      <div className="flex justify-center">
        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white"
          size="lg"
        >
          Generate Image
        </Button>
      </div>
    </form>
  );
};

export default InputForm;
