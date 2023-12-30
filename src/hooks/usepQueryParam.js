import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
    const search = useLocation().search;
    const urlSearchParams = new URLSearchParams(search)
    const params = Object.fromEntries(urlSearchParams.entries());
    return params
}
 
