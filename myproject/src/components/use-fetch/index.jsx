import useFetch from "./test";
export default function FetchDetail() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  if (pending) return <h1>Pending</h1>;
  if (error) return <h1>Error</h1>;
  console.log(data)
  return (
    <div>
      <h1>Use Fetch</h1>
      <ul>{data && data.products.map(item=> <li>
        {item.title}
      </li>)}</ul>
    </div>
  );
}
