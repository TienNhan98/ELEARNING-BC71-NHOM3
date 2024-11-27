import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { callApiKhoaHoc } from "../../../service/callApiKhoaHoc";

export default function ListCoursesByCat() {
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  // console.log("🚀 ~ ListCoursesByCat ~ listKhoaHoc:", listKhoaHoc);
  useEffect(() => {
    callApiKhoaHoc
      .layDanhSachKhoaHoc()
      .then((result) => {
        // console.log(result.data);
        setListKhoaHoc(result.data);
      })
      .catch((err) => {});
  }, []);

  // const top4KhoaHoc = listKhoaHoc.splice(0, 4);

  return (
    <div className="grid grid-cols-4 grid-cols-2 md:grid-cols-4 gap-4">
      {listKhoaHoc.map((item) => {
        return (
          <div className="flex justify-center ">
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={item.hinhAnh} />}
            >
              <Meta title={item.tenKhoaHoc} />
            </Card>
          </div>
        );
      })}
    </div>
  );
}
