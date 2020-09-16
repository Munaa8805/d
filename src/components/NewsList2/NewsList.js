import React, { Component } from "react";
import classes from "./NewsList.module.css";
import NewsItem from "./NewsItem/NewsItem";

class NewsList extends Component {
  state = {
    news: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch(`http://103.119.92.97:3050/news/list/categoryNews2`)
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
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[5].id}>
            <NewsItem
              imgUrl={news[5].image}
              newsTitle={news[5].title}
              category={news[5].categoryname}
              date={news[5].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[6].id}>
            <NewsItem
              imgUrl={news[6].image}
              newsTitle={news[6].title}
              category={news[6].categoryname}
              date={news[6].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[7].id}>
            <NewsItem
              imgUrl={news[7].image}
              newsTitle={news[7].title}
              category={news[7].categoryname}
              date={news[7].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[8].id}>
            <NewsItem
              imgUrl={news[8].image}
              newsTitle={news[8].title}
              category={news[8].categoryname}
              date={news[8].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[9].id}>
            <NewsItem
              imgUrl={news[9].image}
              newsTitle={news[9].title}
              category={news[9].categoryname}
              date={news[9].date}
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
