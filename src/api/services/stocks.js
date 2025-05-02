import apiClient from "../client";
import endpoints from "../endpoints";

export const getIndices = async () => {
  const response = await apiClient.get(
    `${endpoints.STOCKS}${endpoints.STOCKS}`
  );
  return response;
};
