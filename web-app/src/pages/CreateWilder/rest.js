import { query, WILDERS_PATH } from "../../services/rest";

export async function createWilder(firstName, lastName) {
  return query(WILDERS_PATH, "POST", { firstName, lastName });
}
