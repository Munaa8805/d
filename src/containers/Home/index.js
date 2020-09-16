import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Layout from "../../hoc/Layout/Layout";
import classes from "./index.module.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import CategoryTitle from "../../components/CategoryTitle";
import HomeCategory from "../../components/HomeCategoryNews";
import HomeCategory1 from "../../components/HomeCategoryNews1";
import HomeCategory4 from "../../components/HomeCategoryNews4";
import HomeCategory21 from "../../components/HomeCategoryNews21";
import HomeCategory22 from "../../components/HomeCategoryNews22";
import HomeCategory23 from "../../components/HomeCategoryNews23";
import Footer from "../../components/Footer";
import "moment/locale/mn";
import NewsList from "../../components/NewsList/NewsList";
import NewsList2 from "../../components/NewsList2/NewsList";
import NewsList3 from "../../components/NewsList3/NewsList";
import NewsItem2 from "../../components/newsItem2/NewsItem";
import NewsItem3 from "../../components/newsItem3/NewsItem";
import NewsItem4 from "../../components/newsItem4/NewsItem";
import NewsItem5 from "../../components/newsItem5/NewsItem";
// import NewsItem from '../../components/NewsList/NewsItem/NewsItem';

class Home extends Component {
  state = {
    news: [],
    isLoaded: false,
    slideIndex: 0,
    slideIndex1: 0,
    slideNews: [
      "Ерөнхийлөгч Дэлхийн банкны дэд ерөнхийлөгчийг хүлээн авч уулзлаа",
      "Д.Эрдэнэбат Дарханы замаар Ерөнхий сайдад асуулга тавилаа",
      "Тэтгэврийн зээлгүй иргэдэд сая төгрөг бэлнээр олгохгүй",
    ],
    slideNews1: [
      "Болор цом”-ын эзэн Б.Жамбалдорж: Манай үеийнхний зул задарлаа",
      "Н.Ундрал: Арванхоёрдугаар сар жилийн хамгийн сайхан мөн завгүй сар",
      "Дуучин А.Бямбацогт, Г.Саранзаяа: Бид дууныхаа дүрсжүүлэлтэнд маш их",
    ],
  };
  componentDidMount() {
    fetch(`http://103.119.92.97:3050/news/newsAll`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        this.setState({
          isLoaded: true,
          news: {
            ontslohNews: json.news.newsHomeSpecial,
            ulstorNews: json.news.newsPoliticsSpecial,
            niigemNews: json.news.newsNiigem,
            interviewNews: json.news.newsInterview,
            worldNews: json.news.newsDelhiid,
            urlagNews: json.news.newsUrlag,
            sportNews: json.news.newsSport,
            utgaNews: json.news.newsUtgaZohiol,
            photoNews: json.news.newsPhoto,
            videoNews: json.news.newsVideo,
          },
        });
      });
  }

  render() {
    const { isLoaded } = this.state;

    if (isLoaded === false) {
      return "Loading";
    } else {
      var {
        ontslohNews,
        niigemNews,
        interviewNews,
        worldNews,
        urlagNews,
        sportNews,
        utgaNews,
        photoNews,
        ulstorNews,
        videoNews,
      } = this.state.news;
      return (
        <Layout>
          <div className={classes.core}>
            <div className={classes.bigOne}>
              <div className={classes.slider}>
                <div className={classes.colBox}></div>
                <div className={classes.lrow}>
                  <div
                    className={classes.banner0}
                    style={{ marginLeft: "-330px" }}
                  >
                    <div
                      className={classes.banner1}
                      style={{
                        border: "1px solid grey",
                        height: "200px",
                        width: "200px",
                        marginLeft: "90px",
                        color: "white",
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        src={require(`../../components/assets/unnamed.gif`)}
                        alt="unnamed"
                      />
                    </div>

                    <div
                      className={classes.nList1}
                      style={{ height: "100px", marginLeft: "80px" }}
                    >
                      <NewsList />
                    </div>
                  </div>
                  <div
                    className={classes.banner01}
                    style={{ marginLeft: "-330px", marginTop: "30px" }}
                  >
                    <div
                      style={{
                        border: "1px solid",
                        height: "200px",
                        width: "200px",
                        marginLeft: "90px",
                        color: "grey",
                        backgroundColor: "white",
                        marginTop: "80px",
                      }}
                    >
                      <img
                        alt="unnamed"
                        src={require(`../../components/assets/banner2.png`)}
                      />
                    </div>

                    <div
                      className={classes.nList2}
                      style={{ height: "100px", marginLeft: "80px" }}
                    >
                      <NewsList2 />
                    </div>
                  </div>
                  <div
                    className={classes.banner02}
                    style={{ marginLeft: "-330px", marginTop: "120px" }}
                  >
                    <div
                      style={{
                        border: "1px solid",
                        height: "200px",
                        width: "200px",
                        marginLeft: "90px",
                        color: "grey",
                        backgroundColor: "white",
                        marginTop: "160px",
                      }}
                    >
                      <img
                        alt=""
                        src={require(`../../components/assets/banner4.jpg`)}
                      />
                    </div>

                    <div
                      className={classes.nList3}
                      style={{ height: "100px", marginLeft: "80px" }}
                    >
                      <NewsList3 />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "block",
                    width: "700px",
                    marginTop: "-1260px",
                    marginLeft: "-20px",
                  }}
                >
                  <div className={{ width: "100%", height: "auto" }}>
                    <div className={classes.nukasda}>
                      <Carousel
                        slideIndex={this.state.slideIndex}
                        afterSlide={(slideIndex) =>
                          this.setState({ slideIndex })
                        }
                        renderBottomCenterControls={({ currentSlide }) => (
                          <div className={classes.ctitle}>
                            {ontslohNews[this.state.slideIndex].title}
                          </div>
                        )}
                        renderTopLeftControls={({ currentSlide }) => (
                          <div style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                            <p
                              style={{
                                color: "white",
                                fontSize: "24px",
                                marginTop: "20px",
                              }}
                            >
                              <CategoryTitle title="Онцлох мэдээ" />
                            </p>
                          </div>
                        )}
                        renderCenterLeftControls={({ previousSlide }) => (
                          <div
                            className={classes.button}
                            onClick={previousSlide}
                          >
                            <MdNavigateBefore size={65} />
                          </div>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                          <div className={classes.button} onClick={nextSlide}>
                            <MdNavigateNext size={65} />
                          </div>
                        )}
                      >
                        <a href={"/detail/" + ontslohNews[0].id}>
                          <img
                            alt="unnamed"
                            src={ontslohNews[0].image}
                            className={classes.slideImg}
                          />
                        </a>
                        <a href={"/detail/" + ontslohNews[1].id}>
                          <img
                            alt="unnamed"
                            src={ontslohNews[1].image}
                            className={classes.slideImg}
                          />
                        </a>
                        <a href={"/detail/" + ontslohNews[2].id}>
                          <img
                            alt="unnamed"
                            src={ontslohNews[2].image}
                            className={classes.slideImg}
                          />
                        </a>
                      </Carousel>
                    </div>
                  </div>
                  <div className={classes.commentBorder}>
                    <CategoryTitle
                      title="Коммент"
                      color="#0054a5"
                      style={{ marginLeft: "5px !important" }}
                    />
                    <div
                      className={classes.comment}
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <div
                        className={classes.comment1}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          fontSize: "18px",
                          width: "433px",
                          fontFamily: "Roboto Condensed",
                          marginLeft: "-10px",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #e6e6e6",
                            height: "120px",
                            marginLeft: "10px",
                            padding: "0px 10px",
                          }}
                        >
                          <div
                            style={{
                              width: "60px !important",
                              height: "auto",
                              marginTop: "5px",
                              borderRadius: "5%",
                              display: "grid",
                              gridTemplateColumns: "60px 60px 80px 60px",
                              gridGap: "5px",
                            }}
                          >
                            <img
                              alt=""
                              src={require(`../../components/assets/admin.webp`)}
                              style={{ borderRadius: "30%" }}
                            />
                            <p
                              style={{
                                fontSize: "12px",
                                marginLeft: "10px",
                                marginTop: "10px",
                              }}
                            >
                              user1
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                marginTop: "10px",
                                color: "grey",
                              }}
                            >
                              2 цагийн өмнө
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                marginTop: "10px",
                                color: "grey",
                              }}
                            >
                              202.21.124.21
                            </p>
                          </div>
                          <div style={{ fontSize: "16px" }}>
                            Давгүй сайт болсон байна
                          </div>
                        </div>
                      </div>
                      <div
                        className={classes.comment2}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          fontSize: "18px",
                          width: "433px",
                          fontFamily: "Roboto Condensed",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #e6e6e6",
                            height: "120px",
                            marginLeft: "10px",
                            padding: "0px 10px",
                          }}
                        >
                          <div
                            style={{
                              width: "60px",
                              height: "auto",
                              marginTop: "5px",
                              borderRadius: "5%",
                              display: "grid",
                              gridTemplateColumns: "60px 60px 80px 60px",
                              gridGap: "5px",
                            }}
                          >
                            <img
                              alt=""
                              src={require(`../../components/assets/admin.webp`)}
                              style={{ borderRadius: "30%" }}
                            ></img>
                            <p
                              style={{
                                fontSize: "12px",
                                marginLeft: "10px",
                                marginTop: "10px",
                              }}
                            >
                              user2
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                marginTop: "10px",
                                color: "grey",
                              }}
                            >
                              1 цагийн өмнө
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                marginTop: "10px",
                                color: "grey",
                              }}
                            >
                              202.21.124.21
                            </p>
                          </div>
                          <div style={{ fontSize: "16px" }}>
                            Мэдээгээ өдөр бүр оруулж байна
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classes.urtBanner}
                    style={{
                      width: "939px",
                      marginTop: "30px",
                      marginBottom: "-280px",
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
                        alt=""
                        src={require(`../../components/assets/bannerLong.PNG`)}
                        style={{ width: "100%", height: "160px", margin: "0" }}
                      />
                      <img
                        alt=""
                        src={require(`../../components/assets/bigbanner2.jpg`)}
                        style={{ width: "100%", height: "160px", margin: "0" }}
                      />
                      <img
                        alt=""
                        src={require(`../../components/assets/bigbanner1.jpg`)}
                        style={{ width: "100%", height: "160px", margin: "0" }}
                      />
                    </Carousel>
                  </div>
                </div>

                <div
                  style={{ marginTop: "-1050px" }}
                  className={classes.colBox}
                >
                  <div className={classes.rowblock}>
                    <div
                      className={classes.grid}
                      style={{ marginTop: "-150px" }}
                    >
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href={"/detail/" + worldNews[0].id}
                      >
                        <div
                          style={{
                            width: "220px",
                            height: "110px",
                            marginLeft: "20px",
                            position: "relative",
                          }}
                        >
                          <HomeCategory
                            img={worldNews[0].image}
                            title1={worldNews[0].title}
                          />
                          <div
                            className={classes.pcat}
                            style={{
                              backgroundColor: "rgba(0,0,0,0.7)",
                              color: "white",
                            }}
                          >
                            {" "}
                            <CategoryTitle title="Дэлхийд" />
                          </div>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href={"/detail/" + niigemNews[0].id}
                      >
                        <div
                          style={{
                            width: "220px",
                            height: "110px",
                            marginLeft: "20px",
                            marginTop: "80px",
                            position: "relative",
                            border: "0",
                          }}
                        >
                          <HomeCategory
                            img={niigemNews[0].image}
                            title1={niigemNews[0].title}
                          />
                          <div
                            className={classes.pcat}
                            style={{
                              backgroundColor: "rgba(0,0,0,0.7)",
                              color: "white",
                            }}
                          >
                            {" "}
                            <CategoryTitle title="Нийгэм" />
                          </div>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href={"/detail/" + interviewNews[0].id}
                      >
                        <div
                          style={{
                            width: "220px",
                            height: "110px",
                            marginLeft: "20px",
                            marginTop: "80px",
                            position: "relative",
                            borderBottom: "0",
                          }}
                        >
                          <HomeCategory
                            img={interviewNews[0].image}
                            title1={interviewNews[0].title}
                          />
                          <div
                            className={classes.pcat}
                            style={{
                              backgroundColor: "rgba(0,0,0,0.7)",
                              color: "white",
                            }}
                          >
                            <CategoryTitle title="Ярилцлага" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />

              <div
                style={{
                  marginTop: "-1040px",
                  marginLeft: "-20px",
                  display: "grid",
                  gridTemplateColumns: "600px 300px 300px",
                }}
                className={classes.slider1}
              >
                <div
                  className={classes.ulstorBig}
                  style={{
                    marginLeft: "285px",
                    marginTop: "50px",
                    marginRight: "400px",
                    display: "block",
                    width: "300px",
                    borderTop: "2px solid #e6e6e6",
                  }}
                >
                  <CategoryTitle title="Улс төр" color="#0054a5" />

                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={"/detail/" + ulstorNews[0].id}
                  >
                    <HomeCategory4
                      img={ulstorNews[0].image}
                      title1={ulstorNews[0].title}
                    />
                  </a>
                </div>
                <div
                  className={classes.ulstorSmall1}
                  style={{ marginLeft: "30px", marginTop: "-100px" }}
                >
                  <NewsItem2 className={classes.uls1} />
                  <NewsItem3 />
                </div>
                <div
                  className={classes.ulstorSmall2}
                  style={{ marginTop: "-100px" }}
                >
                  <NewsItem4 />
                  <NewsItem5 />
                </div>
              </div>
              <br />
              <div style={{ marginLeft: "-20px" }} className={classes.slider1}>
                <div
                  className={classes.videoMedia}
                  style={{
                    borderTop: "2px solid #e6e6e6",
                    marginTop: "-150px",
                    width: "500px",
                    marginLeft: "-200px",
                  }}
                >
                  <CategoryTitle title="Видео" color="#0054a5" />

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "500px 500px",
                    }}
                  >
                    <div className={classes.videoMedia1}>
                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "14px",
                          borderBottom: "2px solid #e6e6e6",
                        }}
                        href={"/detail/" + videoNews[0].id}
                      >
                        <HomeCategory1
                          img={videoNews[0].image}
                          title1={videoNews[0].title}
                        ></HomeCategory1>
                      </a>
                    </div>
                    <div>
                      <div
                        className={classes.videoM1}
                        style={{ marginTop: "-20px" }}
                      >
                        <HomeCategory21 />
                      </div>
                      <div
                        className={classes.videoM2}
                        style={{ marginTop: "-70px" }}
                      >
                        <HomeCategory22 />
                      </div>
                      <div
                        className={classes.videoM3}
                        style={{ marginTop: "-80px" }}
                      >
                        <HomeCategory23 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "-120px" }}>
                <div
                  style={{ marginLeft: "-20px" }}
                  className={classes.slider2}
                >
                  <div
                    className={classes.doodSlider1}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "270px 270px 270px",
                      marginLeft: "110px",
                    }}
                  >
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={"/detail/" + worldNews[0].id}
                    >
                      <div
                        className={classes.delhiid}
                        style={{ width: "250px" }}
                      >
                        <CategoryTitle title="Дэлхийд" color="#0054a5" />

                        <HomeCategory
                          img={worldNews[0].image}
                          title1={worldNews[0].title}
                        />
                      </div>
                    </a>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={"/detail/" + urlagNews[0].id}
                    >
                      <div className={classes.urlag} style={{ width: "250px" }}>
                        <CategoryTitle title="Урлаг" color="#0054a5" />

                        <HomeCategory
                          img={urlagNews[0].image}
                          title1={urlagNews[0].title}
                        />
                      </div>
                    </a>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={"/detail/" + sportNews[0].id}
                    >
                      <div className={classes.sport} style={{ width: "250px" }}>
                        <CategoryTitle title="Спорт" color="#0054a5" />
                        <HomeCategory
                          img={sportNews[0].image}
                          title1={sportNews[0].title}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <br />
                <div
                  style={{ marginLeft: "-20px", marginTop: "-30px" }}
                  className={classes.slider2}
                >
                  <div
                    className={classes.doodSlider2}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "270px 270px 270px",
                      marginLeft: "110px",
                      marginTop: "-100px",
                    }}
                  >
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={"/detail/" + interviewNews[0].id}
                    >
                      <div className={classes.inter} style={{ width: "250px" }}>
                        <CategoryTitle title="Ярилцлага" color="#0054a5" />
                        <HomeCategory
                          img={interviewNews[0].image}
                          title1={interviewNews[0].title}
                        />
                      </div>
                    </a>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={"/detail/" + utgaNews[0].id}
                    >
                      <div className={classes.utga} style={{ width: "250px" }}>
                        <CategoryTitle title="Утга зохиол" color="#0054a5" />
                        <HomeCategory
                          img={utgaNews[0].image}
                          title1={utgaNews[0].title}
                        />
                      </div>
                    </a>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={"/detail/" + photoNews[0].id}
                    >
                      <div className={classes.photo} style={{ width: "250px" }}>
                        <CategoryTitle title="Фото мэдээ" color="#0054a5" />
                        <HomeCategory
                          img={photoNews[0].image}
                          title1={photoNews[0].title}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "-50px" }}>
                <Footer />
              </div>
            </div>
          </div>
        </Layout>
      );
    }
  }
}
export default Home;
