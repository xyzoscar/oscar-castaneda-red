import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example page",
  description: "This is an example page",
};

interface IParams {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: IParams) {
  const { slug } = await params;

  return (
    <div className="mt-24">
      <p>Page {slug}</p>
    </div>
  );
}
