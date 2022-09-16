import { WILDERS_PATH } from "../../services/rest";

export async function fetchWilders() {
  const response = await fetch(WILDERS_PATH);
  const fetchedWilders = await response.json();
  return fetchedWilders;
}
