export const createCategory = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response?.ok) {
      const errorData = await response.json();
      console.error("API error:", errorData);
      return null;
    }

    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export const getAllCategory = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category`,
    );
    const categories = await response.json();
    return categories;
  } catch (error) {}
};
