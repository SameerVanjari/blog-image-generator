// "use client";
import React, { FormEventHandler, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Dialog, DialogContent } from "./ui/dialog";
import { Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";

type Blog = {
  title: string;
  content: string;
};

type Image = {
  url: string;
};

const InputForm = ({
  setImages,
}: {
  setImages: React.Dispatch<SetStateAction<Image[] | null>>;
}) => {
  const [blogData, setBlogData] = useState<Blog>({ content: "", title: "" });
  const [error, setError] = useState({ error: "", title: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setError({ title: "", error: "" });

    if (blogData.content.length > 800) {
      setError({ ...error, error: "Content should be less than 800 letters" });
      return;
    }
    if (blogData.title.length == 0) {
      setError({ ...error, title: "This is required" });
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("/api/generate-summary", {
        method: "POST",
        body: JSON.stringify(blogData),
      });
      const generatedData = await response.json();

      const imageResponse = await fetch("/api/generate-image", {
        method: "POST",
        body: JSON.stringify({ prompt: generatedData.prompt }),
      });
      const image = await imageResponse.json();

      console.log("last", image);
      setImages(image.image.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("generating image error : ==>", err);
      // throw new Error("Something went wrong while generating image.");
      toast({
        title: "Something went wrong with image generation",
        variant: "destructive",
      });
    }
  };
  return (
    <>
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
            name="title"
            placeholder="Enter your blog title"
            onChange={(e) => {
              setBlogData((prev) => ({
                title: e.target.value,
                content: prev.content,
              }));
            }}
          />
          <p className="text-amber-500 text-sm">{error.title}</p>
        </div>
        <div className="space-y-2">
          <label className="form-label text-white" htmlFor="blog-content">
            Blog Content
          </label>
          <Textarea
            className="min-h-[200px] input-dark"
            id="blog-content"
            name="content"
            placeholder="Enter your blog content"
            onChange={(e) => {
              setBlogData((prev) => ({
                title: prev.content,
                content: e.target.value,
              }));
            }}
          />
          <p className="text-amber-500 text-sm">
            {error.error} {blogData.content.length}/800
          </p>
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
      <Dialog open={loading} onOpenChange={setLoading}>
        <DialogContent className="w-full justify-center">
          <Loader2 className="animate-spin" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InputForm;
