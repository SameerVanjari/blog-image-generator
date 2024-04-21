import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="bg-purple-100">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-pink-500">
                  AI-powered blog hero image generator
                </h1>
                <p className="max-w-[600px] text-pink-500 md:text-xl dark:text-pink-400">
                  Automatically generate high-quality hero images for your blog
                  posts using AI.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-pink-500 px-8 text-sm font-medium text-purple-50 shadow transition-colors hover:bg-pink-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-purple-50 dark:text-purple-900 dark:hover:bg-purple-50/90 dark:focus-visible:ring-purple-300"
                  href="/generate-image"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
              height="310"
              src="/hero_image.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3 xl:gap-16">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-500">
                Easy to Use
              </h2>
              <p className="max-w-prose text-purple-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-purple-400">
                The platform analyzes your blog post and offers a selection of
                images that best fit your content. Simply choose the one you
                like, and you&apos;re ready to go.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-500">
                Customizable
              </h2>
              <p className="max-w-prose text-purple-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-purple-400">
                Want to add your own touch? Our image editor lets you crop, add
                text, and apply filters to make your hero image truly unique.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-500">
                Fast
              </h2>
              <p className="max-w-prose text-purple-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-purple-400">
                No more searching for the perfect image. With our AI, you can
                create a stunning hero image in seconds, so you can focus on
                writing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-500">
              Your subscription
            </h2>
            <p className="max-w-[700px] text-center text-purple-500 md:text-xl/relaxed dark:text-purple-400">
              Unlock the full potential of the AI-powered blog hero image
              generator with a subscription. Choose the plan that&apos;s right
              for you.
            </p>
          </div>
          <div className="grid max-w-4xl gap-6 mx-auto lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col rounded-lg border border-purple-100 dark:border-purple-800">
              <div className="flex flex-col h-[250px]">
                <div className="flex items-center justify-between p-4 border-b border-purple-100 dark:border-purple-800">
                  <div className="text-lg font-medium">Free</div>
                  <div className="text-sm font-medium">$0/mo</div>
                </div>
                <div className="grid h-0.5 w-full border-t border-purple-100 dark:border-purple-800" />
                <ul className="p-4 flex-1 grid gap-2 text-sm list-disc list-inside text-purple-500 dark:text-purple-400">
                  <li>Basic image selection</li>
                  <li>Standard editor</li>
                  <li>3 image exports per month</li>
                </ul>
              </div>
              <Button size="sm">Select</Button>
            </div>
            <div className="flex flex-col rounded-lg border border-purple-100 dark:border-purple-800">
              <div className="flex flex-col h-[250px]">
                <div className="flex items-center justify-between p-4 border-b border-purple-100 dark:border-purple-800">
                  <div className="text-lg font-medium">Basic</div>
                  <div className="text-sm font-medium">$9/mo</div>
                </div>
                <div className="grid h-0.5 w-full border-t border-purple-100 dark:border-purple-800" />
                <ul className="p-4 flex-1 grid gap-2 text-sm list-disc list-inside text-purple-500 dark:text-purple-400">
                  <li>Enhanced image selection</li>
                  <li>Customizable editor</li>
                  <li>Unlimited image exports</li>
                </ul>
              </div>
              <Button size="sm">Select</Button>
            </div>
            <div className="flex flex-col rounded-lg border border-purple-100 dark:border-purple-800">
              <div className="flex flex-col h-[250px]">
                <div className="flex items-center justify-between p-4 border-b border-purple-100 dark:border-purple-800">
                  <div className="text-lg font-medium">Premium</div>
                  <div className="text-sm font-medium">$29/mo</div>
                </div>
                <div className="grid h-0.5 w-full border-t border-purple-100 dark:border-purple-800" />
                <ul className="p-4 flex-1 grid gap-2 text-sm list-disc list-inside text-purple-500 dark:text-purple-400">
                  <li>Advanced image selection</li>
                  <li>Designer editor</li>
                  <li>Priority support</li>
                </ul>
              </div>
              <Button size="sm">Select</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-500">
              Try it now
            </h2>
            <p className="max-w-[600px] text-purple-500 md:text-xl/relaxed dark:text-purple-400">
              Experience the power of AI-generated hero images. Sign up to get
              early access.
            </p>
          </div>
          <form className="flex flex-col gap-2 max-w-sm">
            <Input
              className="mx-auto"
              placeholder="Enter your email"
              type="email"
            />
            <Button className="mx-auto" size="lg" type="submit">
              Sign Up
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
