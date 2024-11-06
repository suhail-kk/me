import React from "react";
import { VideoCard } from "./display";
import { Videos } from "../constants/images";
// import { Pagination } from "antd";

// const ITEMS_PER_PAGE = 6;

export default function VideosList() {
  //   const [currentPage, setCurrentPage] = useState(1);

  //   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  //   const endIndex = startIndex + ITEMS_PER_PAGE;

  //   const visibleVideos = useMemo(() => {
  //     console.log(`Fetching videos for page ${currentPage}`);
  //     return Videos.slice(startIndex, endIndex);
  //   }, [currentPage]);

  //   const onPaginationChange = (page) => {
  //     setCurrentPage(page);
  //   };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {Videos.map((item, i) => (
          <VideoCard item={item} key={i} />
        ))}
      </div>
      {/* <div className="flex justify-center mt-6">
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={Videos.length}
          pageSize={ITEMS_PER_PAGE}
          onChange={onPaginationChange}
        />
      </div> */}
    </div>
  );
}
