export const getUsernameFromQueryParams = (
  queryParams: string = window.location.search
) => {
  // Could be implemented via URLSearchParams but this has what to test
  // new URLSearchParams(queryParams).get('username')
  return queryParams
    ?.substring?.(1)
    .split("&")
    .find((pair) => pair.split("=")[0] === "username")
    ?.split("=")[1];
};
