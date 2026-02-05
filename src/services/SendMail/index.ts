export const sendMail = async (data: any) => {
  console.log(data);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/sendmail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (!response?.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    return error;
  }
};
