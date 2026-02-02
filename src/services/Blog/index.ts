"use server";
import { safeFetch } from "@/lib/safeFetch";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

let baseUrl = process.env.NEXT_PUBLIC_BASE_API;
// create blog
export const createBlog = async (formData: any) => {
  if (!baseUrl) {
    return {
      data: null,
      error: "API not configured.",
    };
  }
  try {
    const response = await safeFetch(`${baseUrl}/blog/create-blog`, {
      method: "POST",
      body: formData,
    });

    // revalidateTag("category", "");
    // return response.json();

    if (!response?.success) {
      return {
        data: null,
        error: response?.error,
      };
    }

    return {
      data: response?.data,
      error: null,
    };
    // console.log(response);
  } catch (error: any) {
    return new Error(error);
  }
};

// get blogs
type ApiResult<T> = {
  data: T | null;
  error: string | null;
};

export const getAllBlogs = async (): Promise<ApiResult<any>> => {
  if (!baseUrl) {
    return {
      data: null,
      error: "API not configured.",
    };
  }

  const response = await safeFetch(`${baseUrl}/blog`, {
    cache: "no-store",
  });

  if (!response.success) {
    return {
      data: null,
      error: response.error,
    };
  }

  return {
    data: response.data,
    error: null,
  };
};

// get single projects
export const getSingleBlog = async (slug: string) => {
  try {
    const response = await fetch(`${baseUrl}/blog/${slug}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// delete brand

// export const deleteBrand = async (brandId: string) => {
//   try {
//     const response = await fetch(
//       `${baseUrl}/brand/${brandId}`,
//       {
//         method: "DELETE",
//         headers: {
//           Authorization: (await cookies()).get("accessToken")!.value,
//         },
//       },
//     );
//     revalidateTag("brand", "");

//     return response.json();
//   } catch (error) {
//     console.error(error);
//   }
// };
