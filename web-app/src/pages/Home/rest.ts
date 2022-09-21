import { HTTPVerb, query, WILDERS_PATH } from "../../services/rest";
import { WilderType } from "../../types";

export async function fetchWilders(): Promise<WilderType[]> {
  return query(WILDERS_PATH, HTTPVerb.GET);
}
