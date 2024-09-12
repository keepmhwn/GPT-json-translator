type HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export default async function request({
  path,
  method,
  body,
}: {
  path: string;
  method: HTTPMethod;
  body?: Record<string, unknown>;
}) {
  const response = await fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify({ ...body }) : undefined,
  });

  return response.json();
}
