export const sendMail = async (data: any) => {
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

// get
export const getAllMails = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/sendmail`,
    );
    const mail = await response.json();
    return mail;
  } catch (error) {}
};
