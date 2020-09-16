import React, { Component } from "react";
import classes from "./NewsList.module.css";
import NewsItem from "./NewsItem/NewsItem";

class NewsList extends Component {
  state = {
    news: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch(`http://103.119.92.97:3050/news/list/categoryNews3`)
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
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[10].id}>
            {" "}
            <NewsItem
              imgUrl={news[10].image}
              newsTitle={news[10].title}
              category={news[10].categoryname}
              date={news[10].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[11].id}>
            {" "}
            <NewsItem
              imgUrl={news[11].image}
              newsTitle={news[11].title}
              category={news[11].categoryname}
              date={news[11].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[12].id}>
            {" "}
            <NewsItem
              imgUrl={news[12].image}
              newsTitle={news[12].title}
              category={news[12].categoryname}
              date={news[12].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[13].id}>
            {" "}
            <NewsItem
              imgUrl={news[13].image}
              newsTitle={news[13].title}
              category={news[13].categoryname}
              date={news[13].date}
              newsShortContent={
                '"Эрүүл мэндийн даатгалын сангаас үнийн хөнгөлөлт олгох зайлшгүй шаардлагатай эмийн нэр, төрөл, үнийн дээд хязгаар хөнгөлөх хэмжээг тогтоох тухай" Эрүүл мэндийн даатгалын Үндэсний зөвлөлийн 12-р тогтоолын хэрэгжүүлэх талаар ярилцаж ЭМЯ болон Эрүүл мэндийн даатгалын ерөнхий газрын удирдлагууд болон холбогдох мэргэжлтнүүд оролцож ярилцаж улмаар Эм ханган нийлүүлэх байгууллага, эмийн сангуудаас гаргах саналыг судлан, шийдвэрлэх шаарлагатай гэж үзлээ.'
              }
            />
          </a>
          <a style={{ textDecoration: "none" }} href={"/detail/" + news[14].id}>
            {" "}
            <NewsItem
              imgUrl={news[14].image}
              newsTitle={news[14].title}
              category={news[14].categoryname}
              date={news[14].date}
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
