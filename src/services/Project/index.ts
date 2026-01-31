"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// create blog
export const createProject = async (formData: any) => {
  console.log(formData);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project/create-project`,
      {
        method: "POST",
        body: formData,
      },
    );

    // revalidateTag("category", "");
    return response.json();
  } catch (error: any) {
    return new Error(error);
  }
};

// get projects
export const getAllProjects = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
    console.log(response);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// get single projects
export const getSingleProject = async (slug: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`,
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// delete brand

export const deleteBrand = async (brandId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/brand/${brandId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      },
    );
    revalidateTag("brand", "");

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
