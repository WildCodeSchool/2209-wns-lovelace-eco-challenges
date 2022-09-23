import { HTTPVerb, query, WILDERS_PATH } from "../../services/rest";

export const deleteWilder = (id: string) => {
  return query(`${WILDERS_PATH}/${id}`, HTTPVerb.DELETE);
};
