import type { Route } from "./+types/home";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/UI/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return(
      <div className="home p-8">
        <Navbar />
      <h1 className="text-3xl text-indigo-700 font-extrabold mb-4">Home</h1>
      <div className="flex gap-4 items-center">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline" size="sm">Small Outline</Button>
          <Button variant="ghost" size="lg">Large Ghost</Button>
      </div>
      <div className="mt-4 w-64">
          <Button fullWidth>Full Width Button</Button>
      </div>
      </div>
  )
}
