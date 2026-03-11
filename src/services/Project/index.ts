// src/services/Project.ts
"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const API_BASE = process.env.NEXT_PUBLIC_BASE_API;

// create project
export const createProject = async (formData: any) => {
  try {
    const response = await fetch(`${API_BASE}/project/create-project`, {
      method: "POST",
      body: formData,
    });
    return response.json();
  } catch (error: any) {
    console.error("Create project error:", error);
    return { error: error.message };
  }
};

// get all projects (safe for build)
export const getAllProjects = async () => {
  try {
    const res = await fetch(`${API_BASE}/project`, {
      cache: "no-store", // ensures fresh fetch every request
    });

    if (!res.ok) {
      console.error("Project fetch failed:", await res.text());
      return { data: [] }; // fallback for build
    }

    return res.json();
  } catch (error) {
    console.error("Project fetch error:", error);
    return { data: [] }; // fallback for build
  }
};

// get single project
export const getSingleProject = async (slug: string) => {
  try {
    const res = await fetch(`${API_BASE}/project/${slug}`);
    return res.json();
  } catch (error) {
    console.error("Get single project error:", error);
    return null;
  }
};

// delete brand
export const deleteBrand = async (brandId: string) => {
  try {
    const res = await fetch(`${API_BASE}/brand/${brandId}`, {
      method: "DELETE",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });

    revalidateTag("brand", "");
    return res.json();
  } catch (error) {
    console.error("Delete brand error:", error);
    return { error };
  }
};