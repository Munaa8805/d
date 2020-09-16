import React, { Component } from "react";
import classes from "./NewsList.module.css";
import NewsItem from "./NewsItem/NewsItem";

class NewsList extends Component {
  state = {
    news: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch(`http://103.119.92.97:3050/news/list/categoryNews`)
      .then((res) => res.json())
      .then((json) => {
        console.log("listJson", json);
        this.setState({
          isLoaded: true,
          news: json.news,
        });
      });
  }

  render() {
    const { news, isLoaded } = this.state;
    if (isLoaded === false) {
      return "Loading";
    } else {
      return (
        <div className={classes.container}>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[0].id}>
            <NewsItem
              imgUrl={news[0].image}
              newsTitle={news[0].title}
              category={news[0].categoryname}
              date={news[0].date}
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[1].id}>
            <NewsItem
              imgUrl={news[1].image}
              newsTitle={news[1].title}
              category={news[1].categoryname}
              date={news[1].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[2].id}>
            <NewsItem
              imgUrl={news[2].image}
              newsTitle={news[2].title}
              category={news[2].categoryname}
              date={news[2].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[3].id}>
            <NewsItem
              imgUrl={news[3].image}
              newsTitle={news[3].title}
              category={news[3].categoryname}
              date={news[3].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[4].id}>
            <NewsItem
              imgUrl={news[4].image}
              newsTitle={news[4].title}
              category={news[4].categoryname}
              date={news[4].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
        </div>
      );
    }
  }
}
export default NewsList;
