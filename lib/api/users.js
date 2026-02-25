import { USERS_API_BASE, DEFAULT_PAGE_SIZE } from "@/utils/constants";

export async function getUsers(page = 1, limit = DEFAULT_PAGE_SIZE) {
  const skip = (page - 1) * limit;

  const res = await fetch(
    `${USERS_API_BASE}?limit=${limit}&skip=${skip}&select=id,firstName,lastName,email,image,company,role`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status}`);
  }

  const data = await res.json();

  return {
    users: data.users,
    total: data.total,
  };
}

export async function getUserById(id) {
  const res = await fetch(`${USERS_API_BASE}/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch user ${id}: ${res.status}`);
  }

  return res.json();
}