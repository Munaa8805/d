import React from "react";
import styles from "./ZohiogchBulan.module.css";
import Zohiogch from "./Zohiogch/Zohiogch";
import CategoryTitle from "../CategoryTitle";
const ZohiogchBulan = (props) => (
  <div className={styles.container}>
    <CategoryTitle title="ЗОХИОГЧИЙН БУЛАН" color="#F0141E" />
    <Zohiogch
      blogImg="http://www.mnb.mn/uploads/202001/news/thumb/b7b8a1a60d3d151c8e77be9065bee3ce_x2.jpg"
      blogTitle="Өөр ардчиллаас жинхэнэ ардчилал руу"
      writerName="Т.Болор-Эрдэнэ"
      writerImg="http://www.mnb.mn/uploads/publisher/thumb/5604ddd4d4f27ab0e44f1f20f97ed8c9e592a2bb.jpg"
    />
    <div style={{ marginTop: "10px" }}>
      <Zohiogch
        blogImg="http://www.mnb.mn/uploads/202001/news/thumb/61d7839341315bb0582da6a5a051393a_x2.jpg"
        blogTitle="Төгөлдөр хуурч С.Саянцэцэг нөгөөдөр тоглолтоо хийнэ"
        writerName="Р.Оюунжаргал"
        writerImg="http://www.mnb.mn/uploads/publisher/thumb/b1990f2e8427e7466e615be324cba19fe6f238b6.jpg"
      />
    </div>
  </div>
);

export default ZohiogchBulan;
