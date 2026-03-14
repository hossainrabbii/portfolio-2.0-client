export const createToDo = async (formData: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/todo/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    return await response.json();
  } catch (error: any) {
    return new Error(error);
  }
};

export const getTodo = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/todo`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data;

    // return await response.json();
  } catch (error: any) {
    return new Error(error);
  }
};
