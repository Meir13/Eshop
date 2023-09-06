export const getFilterUrl = (searchFromUrl, filter, skipPathName) => {
  const searchParams = new URLSearchParams(searchFromUrl);

  const category = searchParams.get("category") || "all";
  const query = searchParams.get("query") || "all";
  const price = searchParams.get("price") || "all";
  const rating = searchParams.get("rating") || "all";
  const order = searchParams.get("order") || "newest";
  const page = searchParams.get("page") || "1";

  const filterCategory = filter.category || category;
  const filterQuery = filter.query || query;
  const filterPrice = filter.price || price;
  const filterRating = filter.rating || rating;
  const filterOrder = filter.order || order;
  const filterPage = filter.page || page;

  let link = `${
    skipPathName ? "" : "/search?"
  }category=${filterCategory}&query=${filterQuery}&page=${filterPage}&price=${filterPrice}&rating=${filterRating}&order=${filterOrder}`;

  return link;
};
