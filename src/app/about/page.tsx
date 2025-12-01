import Container from "@/components/Container";
import Header from "@/components/Header";
import { MainNav } from "@/components/main-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Shantanu Tiwari and his blog",
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <div className="text-left -mx-8 md:-mx-8 lg:-mx-8">
              <h1 className="font-semibold text-2xl tracking-tighter mt-4 capitalize">
                About Me
              </h1>
            </div>
          </Header>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col md:flex-row gap-8 items-start py-6 lg:py-10">
          <div className="min-w-48 max-w-48 flex flex-col gap-4">
            <p className="text-muted-foreground text-left break-words">
              Software Developer
            </p>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Links</h3>
              <a href="https://github.com/Shantanu-Tiwari" className="text-blue-600 hover:underline text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/shantanutiwari24/" className="text-blue-600 hover:underline text-sm">LinkedIn</a>
              <a href="https://x.com/ShantanuTi43203" className="text-blue-600 hover:underline text-sm">X</a>
            </div>
          </div>
          <div className="text-muted-foreground text-lg py-4 space-y-4">
            <p>Hi, I'm Shantanu Tiwari, a developer obsessed with building useful, scalable products.</p>
            <p>I enjoy turning ideas into real, working systems, from AI-powered tools to collaborative web apps.</p>
            <p>I love solving problems, shipping fast, and experimenting with tech that actually impacts users.</p>
          </div>
        </div>
      </Container>
    </>
  );
}
