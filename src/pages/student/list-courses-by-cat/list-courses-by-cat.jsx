import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { callApiKhoaHoc } from "../../../service/callApiKhoaHoc";
import { useNavigate } from "react-router-dom";

export default function ListCoursesByCat() {
  let navigate = useNavigate();
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  // console.log("🚀 ~ ListCoursesByCat ~ listKhoaHoc:", listKhoaHoc);
  useEffect(() => {
    callApiKhoaHoc
      .layDanhSachKhoaHoc()
      .then((result) => {
        console.log(result.data);
        setListKhoaHoc(result.data);
      })
      .catch((err) => {});
  }, []);

  const topKhoaHocPhoBien = listKhoaHoc.slice(0, 4);
  const khoaHocThamKhao = listKhoaHoc.slice(10, 14);
  const cacKhoaHoc = listKhoaHoc.slice(30, 34);

  return (
    <div>
      {/* topKhoaHocPhoBien*/}
      <a href="#" className="no-underline inline-block ml-5 mt-3">
        <p
          className="font-bold"
          style={{
            color: "#f6ba35",
          }}
        >
          Khóa học phổ biến
        </p>
      </a>
      <div className="grid grid-cols-4 grid-cols-2 md:grid-cols-4 gap-4">
        {topKhoaHocPhoBien.map((item) => {
          return (
            <div className="flex justify-center ">
              <Card
                onClick={() => {
                  navigate(`/chitiet/${item.maKhoaHoc}`);
                }}
                hoverable
                style={{
                  width: 300,
                  height: 350,
                }}
                cover={
                  <div className="h-[175px] overflow-hidden">
                    <img
                      alt="example"
                      src={item.hinhAnh}
                      className="w-full h-full object-fill"
                    />
                  </div>
                }
              >
                <p className="text-center font-semibold">{item.tenKhoaHoc}</p>
                <p>Lập Trình hiện đang là xu hướng trên toàn thế giới...</p>
              </Card>
            </div>
          );
        })}
      </div>
      {/* khoaHocThamKhao */}
      <a href="#" className="no-underline inline-block ml-5 mt-3">
        <p
          className="font-bold"
          style={{
            color: "#000000",
          }}
        >
          Khóa học tham khảo
        </p>
      </a>
      <div className="grid grid-cols-4 grid-cols-2 md:grid-cols-4 gap-4">
        {khoaHocThamKhao.map((item) => {
          return (
            <div className="flex justify-center ">
              <Card
                onClick={() => {
                  navigate(`/chitiet/${item.maKhoaHoc}`);
                }}
                hoverable
                style={{
                  width: 300,
                  height: 350,
                }}
                cover={
                  <div className="h-[175px] overflow-hidden">
                    <img
                      alt="example"
                      src={item.hinhAnh}
                      className="w-full h-full object-fill"
                    />
                  </div>
                }
              >
                <p className="text-center font-semibold">{item.tenKhoaHoc}</p>
                <p>Lập Trình hiện đang là xu hướng trên toàn thế giới...</p>
              </Card>
            </div>
          );
        })}
      </div>
      {/* khoaHocThamKhao */}
      <a href="#" className="no-underline inline-block ml-5 mt-3">
        <p
          className="font-bold"
          style={{
            color: "#000000",
          }}
        >
          Khóa học Front End React Js
        </p>
      </a>
      <div className="grid grid-cols-4 grid-cols-2 md:grid-cols-4 gap-4">
        {cacKhoaHoc.map((item) => {
          return (
            <div className="flex justify-center ">
              <Card
                onClick={() => {
                  navigate(`/chitiet/${item.maKhoaHoc}`);
                }}
                hoverable
                style={{
                  width: 300,
                  height: 350,
                }}
                cover={
                  <div className="h-[175px] overflow-hidden">
                    <img
                      alt="example"
                      src={item.hinhAnh}
                      className="w-full h-full object-fill"
                    />
                  </div>
                }
              >
                <p className="text-center font-semibold">{item.tenKhoaHoc}</p>
                <p>Lập Trình hiện đang là xu hướng trên toàn thế giới...</p>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
