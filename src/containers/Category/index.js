import React, { Component } from "react";
import classes from "./index.css";
import Carousel from "nuka-carousel";
import SideLeft from "../../components/SideLeft";
import Social from "../../components/newsSocial";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoMdTime } from "react-icons/io";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import CategoryNews from "../../components/CategoryNews";
import ReactPaginate from "react-paginate";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      pageCount: 20,
      backcolor: `${document.getElementById("1")}`,
      pnp: "1",
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    var property = document.getElementById(1);
    this.state.backcolor = document.getElementById(1);
    (property.style.backgroundColor = "#F5F5F5"),
      (property.style.borderBottom = "1px solid #6C87B2");
    property.style.color = "black";
    const { id } = this.props.match.params;
    fetch(`http://103.119.92.47:3050/news/newsAll`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        this.setState({
          name: json.name,
          isLoaded: true,
          news: json.news,
          page: json.page,
        });
      });
  }
  getData(btn) {
    var property = document.getElementById(btn);

    if (this.state.backcolor != "null" && property != null) {
      var property1 = this.state.backcolor;
      property1.style.backgroundColor = "white";
      property1.style.borderBottom = "1px solid white";
      property1.style.color = "#9A9B9F";
      this.setState({
        backcolor: document.getElementById(btn),
        pnp: btn,
      });
      (property.style.backgroundColor = "#F5F5F5"),
        (property.style.borderBottom = "1px solid #6C87B2");
      property.style.color = "black";
    }
  }

  render() {
    return (
      <div className={classes.newsContainer}>
        <div className={classes.newsCenter}>
          <Breadcrumb items={["ЭХЛЭЛ", "АНГИЛАЛ", "УЛС ТӨР"]} />

          <div className={classes.Special}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ width: "420px", height: "249px" }}
                src="http://www.mnb.mn/uploads/202001/news/thumb/286064a7b945fb85a0da46f78d48b486_x3.jpg"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "420px",
                height: "249px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontFamily: "Roboto Condensed",
                  borderBottom: "1px solid #e6e6e6",
                }}
              >
                Орон нутгийн ИТХ-ын сонгуулийн хуулийн төслийг эцсийн
                хэлэлцүүлэгт шилжүүлэв
              </div>
              <div>
                <div
                  style={{
                    width: "400px",
                    height: "40px",
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "gray",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IoMdTime size="13px" />
                    &nbsp;2020-01-13
                  </div>
                  <Social size="20px" />
                </div>
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontFamily: "Roboto",
                  textAlign: "justify",
                  margin: "0",
                  padding: "0",
                  width: "400px",
                  height: "167px",
                }}
              >
                Улсын Их Хурлын 2019 оны намрын ээлжит чуулганы өнөөдрийн
                (2020.01.23) нэгдсэн хуралдаанаар Улсын Их Хурлын гишүүн
                Л.Энх-Амгалан нарын нэр бүхий гишүүдийн өргөн мэдүүлсэн Аймаг,
                нийслэл, сум, дүүргийн иргэдийн Төлөөлөгчдийн хурлын сонгуулийн
                тухай хуулийн төсөл болон хамт өргөн мэдүүлсэн Аймаг, нийслэл,
                сум, дүүргийн иргэдийн...
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "20px",
              marginBottom: "20px",
              paddingTop: "10px",
            }}
          >
            <Carousel
              slideIndex={this.state.slideIndex}
              afterSlide={(slideIndex) => this.setState({ slideIndex })}
              renderCenterLeftControls={({ previousSlide }) => (
                <div className={classes.button} onClick={previousSlide}>
                  <MdNavigateBefore size={65} />
                </div>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <div className={classes.button} onClick={nextSlide}>
                  <MdNavigateNext size={65} />
                </div>
              )}
            >
              <img
                src="https://news.mn/wp-content/uploads/2018/12/1170x250.jpg"
                style={{ width: "100%", height: "120px", margin: "0" }}
              />
              <img
                src="https://news.mn/wp-content/uploads/2019/12/newsmn-banner.jpg"
                style={{ width: "100%", height: "120px", margin: "0" }}
              />
              <img
                src="http://www.mnb.mn/uploads/202001/news/thumb/52179c2fe7609a6935b06defeb6e0700_x3.jpg"
                style={{ width: "100%", height: "120px", margin: "0" }}
              />
            </Carousel>
          </div>
          <div style={{ marginLeft: "40px" }}>
            <CategoryNews
              width="800px"
              img="http://www.mnb.mn/uploads/202001/news/thumb/82a4a7a84c08b2d8a621a5d03f234874_x3.jpg"
              imgWidth="200px"
              imgHeight="121px"
            />
            <CategoryNews
              width="800px"
              img="https://news.mn/wp-content/uploads/2019/11/%D1%81%D1%83%D1%80%D0%B3%D1%83%D1%83%D0%BB%D1%8C-23-810x500.jpg"
              imgWidth="200px"
              imgHeight="121px"
            />
            <CategoryNews
              width="800px"
              img="https://news.mn/wp-content/uploads/2020/01/21d84f8d65055e8ae0675cffc75a7704-810x491.jpg"
              imgWidth="200px"
              imgHeight="121px"
            />
            <CategoryNews
              width="800px"
              img="http://www.mnb.mn/uploads/202001/news/thumb/82a4a7a84c08b2d8a621a5d03f234874_x3.jpg"
              imgWidth="200px"
              imgHeight="121px"
            />
            <CategoryNews
              width="800px"
              img="http://www.mnb.mn/uploads/202001/news/thumb/82a4a7a84c08b2d8a621a5d03f234874_x3.jpg"
              imgWidth="200px"
              imgHeight="121px"
            />
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                height: "30px",
                width: "100%",
                borderTop: "1px solid #E6E6E6",
                borderBottom: "1px solid #E6E6E6",
                marginBottom: "10px",
              }}
            >
              <div
                className={classes.nextButton}
                onClick={this.getData.bind(this, this.state.pnp - 1)}
              >
                <MdNavigateBefore size={25} />
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 1)}
                id="1"
                type="button"
              >
                1
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 2)}
                id="2"
                type="button"
              >
                2
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 3)}
                id="3"
                type="button"
              >
                3
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 4)}
                id="4"
                type="button"
              >
                4
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 5)}
                id="5"
                type="button"
              >
                5
              </div>
              <div
                className={classes.prevButton}
                onClick={this.getData.bind(this, this.state.pnp + 1)}
              >
                <MdNavigateNext size={25} />
              </div>
            </div>
          </div>
        </div>

        {/* Left */}
        <div
          style={{
            marginTop: "35px",
            paddingLeft: "60px",
            borderLeft: "1px solid #e6e6e6",
            width: "300px",
          }}
        >
          <SideLeft />
        </div>
      </div>
    );
  }
}
export default Category;
