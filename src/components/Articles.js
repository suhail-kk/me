import React, { useEffect, useState } from "react";
import { BlogCard, SectionHeading } from "./display";

export default function Articles() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    handleFetchArticles();
  }, []);

  const handleFetchArticles = async () => {
    try {
      const res = await fetch(
        "https://dev.to/api/articles?tag=softwaredevelopment&per_page=9",
        {
          method: "GET",
        }
      );
      const response = await res.json();
      setData(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex flex-col gap-10 md:gap-14 items-center p-5 md:p-10">
      <SectionHeading
        textYellow="Articles"
        subHead="blogs"
        tracking={"tracking-[25px] md:tracking-[45px]"}
      />

      {loading ? (
        <p>Loading...</p>
      ) : data?.length > 0 ? (
        <div className="max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 sm:gap-y-10">
          {data?.map((item, i) => (
            <BlogCard item={item} />
          ))}
        </div>
      ) : (
        <p>No data fount</p>
      )}
    </div>
  );
}
