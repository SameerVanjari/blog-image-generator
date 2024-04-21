import ImageFormContainer from "@/components/ImageFormContainer";

const GenerateImagePage = () => {
  return (
    <div className="grid items-center justify-center min-h-screen px-4 gap-4 md:px-6 bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold  text-white font-montserrat">
            Hero Image Generator
          </h1>
          <p className="text-gray-200 dark:text-gray-400">
            Enter your blog title and content to generate a hero image.
          </p>
        </div>
        <ImageFormContainer />
      </div>
    </div>
  );
};

export default GenerateImagePage;
