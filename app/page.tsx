import InputForm from "@/components/InputForm";

const Page = () => {
  return (
    <div className="grid items-center justify-center min-h-screen px-4 gap-4 md:px-6 bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-serif">
            Blog Hero Image Generator
          </h1>
          <p className="text-gray-200 dark:text-gray-400">
            Enter your blog title and content to generate a hero image.
          </p>
        </div>
        <InputForm />
      </div>
    </div>
  );
};

export default Page;
