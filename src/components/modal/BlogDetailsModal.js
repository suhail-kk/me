import { Modal } from "antd";
import React from "react";
import { getRelativeTime } from "../../utils/helpers";

export default function BlogDetailsModal({ modal, handleCloseModal, item }) {
  return (
    <Modal
      centered
      footer={null}
      //   title={item?.title}
      open={modal}
      width={900}
      onCancel={handleCloseModal}
    >
      <div className="flex flex-col sm:flex-row">
        <img
          src={item?.cover_image || "./assets/images/articles/default.jpg"}
          alt="cover"
          className="w-full sm:w-1/2 h-48 sm:h-[600px] object-cover rounded-bl-lg rounded-tl-lg"
        />
        <div className="p-5 sm:p-10 flex flex-col justify-between">
          <div className="h-full  flex flex-col items-center justify-center gap-4">
            <span className={`tag bg-[#47bcd4] mb-5`}>Technology</span>
            <h4 className="font-bold text-lg mt-2 text-center">
              {item?.title || "--"}
            </h4>
            <p className="text-sm text-gray-600 mt-2 text-justify">
              {item?.description || "--"}{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dev.to/sfsfsdfsdfsd/software-devs-picked-these-2-log-formats-3602"
              >
                <span className="text-blue-500 text-xs cursor-pointer">
                  Read more
                </span>
              </a>
            </p>
            <div className="w-full flex justify-start flex-wrap gap-1">
              {item?.tag_list?.length > 0
                ? item?.tag_list?.map((item, i) => (
                    <p className="text-blue-500 font-semibold">#{item} </p>
                  ))
                : ""}
            </div>
          </div>
          <div className=" mt-4 flex items-center">
            <div className="flex items-center">
              <img
                src={
                  item?.user?.profile_image ||
                  "./assets/images/articles/avatar.jpg"
                }
                alt="user"
                className="rounded-full w-10 h-10 mr-3"
              />
            </div>
            <div className="">
              <h5 className="font-medium">{item?.user?.name || "--"}</h5>
              <small className="text-gray-500">
                {getRelativeTime(item?.published_at) || "--"}
              </small>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
