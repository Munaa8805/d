import React from "react";
import classes from "./index.css";
import Date from "../Date";

const MenuNews = (props) => {
  return (
    <div style={{ display: "flex" }} className={classes.menuContainer}>
      <style>{classes}</style>
      <div
        className={classes.menuItem}
        style={{
          borderRight: "1px solid white",
          width: "237px",
          paddingRight: "5px",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <img
          src="http://www.mnb.mn/uploads/202002/news/thumb/bc79fdb3fb28fac1474a79149ad533eb_x3.jpg"
          style={{ height: "130px", width: "237px" }}
        />
        <div className={classes.title}>
          Гол мөрний мөсөн дээгүүр зорчихгүй байхыг анхааруулж байна
        </div>
        <Date size="10px" />
      </div>
      <div
        className={classes.menuItem}
        style={{
          borderRight: "1px solid white",
          width: "242px",
          paddingRight: "5px",
          paddingLeft: "5px",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <img
          src="http://www.mnb.mn/uploads/202002/news/thumb/c19b337bb5096a6a08b80ef3cb4984ec_x3.jpg"
          style={{ height: "130px", width: "237px" }}
        />
        <div className={classes.title}>
          БНСУ-д коронавирусийн халдвар авсан 2 иргэн бүрэн эдгэрэн эмнэлгээс
          гарлаа
        </div>
        <Date size="10px" />
      </div>
      <div
        className={classes.menuItem}
        style={{
          borderRight: "1px solid white",
          width: "242px",
          paddingRight: "5px",
          paddingLeft: "5px",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <img
          src="http://www.mnb.mn/uploads/202002/news/thumb/baa1190faf7c181efb93d9e03d78abac_x3.jpg"
          style={{ height: "130px", width: "237px" }}
        />
        <div className={classes.title}>
          “Орос танк” “инстаграм”-д сая дагагчтай боллоо
        </div>
        <Date size="10px" />
      </div>
      <div
        className={classes.menuItem}
        style={{
          borderRight: "1px solid white",
          width: "242px",
          paddingRight: "5px",
          paddingLeft: "5px",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <img
          src="http://www.mnb.mn/uploads/202002/news/thumb/2a6809a85489ce6977a3c82247a3ab79_x3.jpg"
          style={{ height: "130px", width: "237px" }}
        />
        <div className={classes.title}>
          Зөвшөөрөлгүй тээвэрлэсэн 6.85тн түүхий нүүрсийг амгалан дулааны
          станцад хүргүүллээ
        </div>
        <Date size="10px" />
      </div>
      <div
        className={classes.menuItem}
        style={{
          borderRight: "1px solid white",
          width: "242px",
          paddingLeft: "5px",
          display: "flex",
          flexFlow: "row",
          flexFlow: "column",
        }}
      >
        <img
          src="http://www.mnb.mn/uploads/202002/news/thumb/e55bdbc45602d94f70137bdabd06e150_x3.jpg"
          style={{ height: "130px", width: "237px" }}
        />
        <div className={classes.title}>
          ГХЯ-ны Төрийн нарийн бичгийн дарга Кувейт
        </div>
        <Date size="10px" />
      </div>
    </div>
  );
};
export default MenuNews;
