const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getToken = () => {
  try {
    return localStorage.getItem("edutrack_token");
  } catch (error) {
    console.error("Unable to read authentication token:", error);
    return null;
  }
};

const buildHeaders = (customHeaders = {}) => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

const request = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const config = {
    ...options,
    headers: buildHeaders(options.headers),
  };

  try {
    const response = await fetch(url, config);

    const contentType = response.headers.get("content-type");

    let data;

    if (contentType?.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      const message =
        typeof data === "object" && data?.message
          ? data.message
          : "Something went wrong.";

      throw new Error(message);
    }

    return data;
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);

    throw error;
  }
};

const api = {
  get: (endpoint) =>
    request(endpoint, {
      method: "GET",
    }),

  post: (endpoint, body = {}) =>
    request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  put: (endpoint, body = {}) =>
    request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),

  patch: (endpoint, body = {}) =>
    request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),

  delete: (endpoint) =>
    request(endpoint, {
      method: "DELETE",
    }),
};

export { API_BASE_URL, getToken, request };

export default api;