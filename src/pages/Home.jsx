import { Button } from "antd";
import { useEffect } from "react";
import useOnFetch from "../hooks/useOnFetch";

const Home = () => {
  const fetch = useOnFetch();

  const getData = () => {
    fetch({
      url: "https://dummyjson.com/products",
      method: "GET",
    })?.then((res) => {
      console.log("res : ", res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <Button>Test</Button>;
};
export default Home;
