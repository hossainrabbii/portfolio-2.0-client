export async function safeFetch(url: string, options?: RequestInit) {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      return {
        success: false,
        status: res.status,
        data: null,
        error: "Server error",
      };
    }

    const data = await res.json();

    return {
      success: true,
      status: res.status,
      data,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      status: null,
      data: null,
      error: "Network error",
    };
  }
}
