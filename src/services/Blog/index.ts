"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// create blog
export const createBlog = async (formData: any) => {
  console.log(formData);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blog/create-blog`,
      {
        method: "POST",
        body: formData,
      },
    );

    // revalidateTag("category", "");
    return await response.json();
  } catch (error: any) {
    return new Error(error);
  }
};

// get brands
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
      cache: "no-store", // important for SSR
    });

    if (!res.ok) {
      console.error("Blog fetch failed:", await res.text());
      return { data: [] }; // prevent build crash
    }

    return res.json();
  } catch (error) {
    console.error("Blog fetch error:", error);
    return { data: [] }; // prevent build crash
  }
};

// get single projects
export const getSingleBlog = async (slug: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`,
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// delete blog

export const deleteBlog = async (brandId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blog/${brandId}`,
      {
        method: "DELETE",
        // headers: {
        //   Authorization: (await cookies()).get("accessToken")!.value,
        // },
      },
    );
    // revalidateTag("brand", "");

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
