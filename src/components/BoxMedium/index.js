import React from "react";
import { IoMdTime } from "react-icons/io";

const BoxMedium = (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      width: props.width,
      height: props.imgHeight,
      alignItems: "center",
      marginBottom: "20px",
      paddingTop: "20px",
      borderTop: "1px solid #e6e6e6",
    }}
  >
    <img
      src={props.img}
      style={{
        width: props.imgWidth,
        height: props.imgHeight,
        padding: "0",
        margin: "0",
      }}
    />
    <div
      style={{
        width: props.width,
        height: props.imgHeight,
        marginLeft: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ fontFamily: "Roboto Condensed", fontSize: "18px" }}>
        “Apple” компани цаг агаарын шилдэг апп-ыг худалдаж авчээ
      </div>
      <div
        style={{
          color: "gray",
          fontSize: "11px",
          display: "flex",
          alignItems: "center",
          paddingBottom: "5px",
          paddingTop: "5px",
        }}
      >
        <IoMdTime size="12px" />
        &nbsp;2020-01-13
      </div>
      <div
        style={{
          fontSize: "13px",
          textAlign: "justify",
          textDecoration: "none",
          color: "#888",
        }}
      >
        АНУ-ын “Apple” компани цаг агаарын шилдэг аппликейшн “Dark Sky” –ыг
        худалдан авчээ. Улмаар “Android” болон “Wear OS” системүүд дээр
        ажиллагааг нь зогсоохоо мэдэгджээ. “Dark Sky” аппликейшн нь орон
        нутгуудын цаг агаарыг урьдчилан мэдээлж, минут, минутаар тодорхой
        заадгаараа хэрэглэгчдийн дунд алдартай.
      </div>
    </div>
  </div>
);

export default BoxMedium;
