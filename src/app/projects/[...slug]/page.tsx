"use client";
import ProjectDetail from "@/components/ProjectDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      {slug}
      <ProjectDetail />
    </>
  );
}
