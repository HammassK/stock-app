import { useQuery } from "@tanstack/react-query";
import { getIndices } from "../services/stocks";

export const useIndices = () => {
  return useQuery({
    queryKey: ["indices"],
    queryFn: getIndices,
  });
};
