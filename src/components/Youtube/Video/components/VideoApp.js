import React from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import axios from "axios";

import styles from "./VideoApp.module.css";

class VideoApp extends React.Component {
  state = {
    videos: [
      {
        id: "Z0hsM-UAX4s",
        title:
          "Цахим хаягны нууц үгээ алдсан 200 гаруй хүн цагдаагийн байгууллагад ханджээ /2020.02.06/",
        description:
          "Интернэт сүлжээгээр бусдыг залилан мэхлэгчдийн арга улам нарийссаар байна. Гэмт этгээдүүд онлайн хэлбэрээр хуурамч гүйлгээ хийх, албан байгууллагын нууц код нэрийг нь ашиглан мөнгийг нь залилж байгааг хууль хяналтынхан сэрэмжлүүллээ.",
        imgUrl: "https://i.ytimg.com/vi/Z0hsM-UAX4s/default.jpg",
      },
      {
        id: "2ttZhLgX8Hg",
        title: "Цагийн хүрдийн баатар - Хөрөнгийн зах зээлийг хөгжүүлэгч",
        description:
          "Цагийн хүрдийн баатар - Хөрөнгийн зах зээлийг хөгжүүлэгч /Ард санхүүгийн нэгдлийн гүйцэтгэх захирал Ч.Ганхуяг/",
        imgUrl: "https://i.ytimg.com/vi/2ttZhLgX8Hg/default.jpg",
      },
      {
        id: "_DqbDJMweOo",
        title:
          "2020 оны 2 дугаар сарын 1-нээс 3 дугаар сарын 2 хүртэл хилээр нэвтрүүлэхийг хориглолоо /2020.01.31/",
        description:
          "УИХ-ын чуулганаар коронавирусийн асуудлаар мэдээлэл сонссон байна. Манай улсад шинэ төрлийн коронавирусийн халдвар бүртгэгдээгүй байгаа. Гэхдээ асуудлыг ҮАБЗ-ийн түвшинд ярьж бараа бүтээгдэхүүний импорт, экспортыг хэвээр үлдээж хилээр иргэдийн зорчих хөдөлгөөнийг түр хугацаанд хориглож байгаа юм. Энэ асуудлыг Засгийн газрын ээлжит хуралдаанаар шийдвэрлэсэн. Мөн УИХ-ын чуулганаар коронавирусийн халдварын өнөөгийн байдал, халдвараас урьдчилан сэргийлэх чиглэлээр хэрэгжүүлж байгаа ажлын талаар Засгийн газраас мэдээлэл сонслоо. ",
        imgUrl: "https://i.ytimg.com/vi/_DqbDJMweOo/default.jpg",
      },
    ],
    selectedVideo: {
      id: "j9DZHvy-AaA",
      title: "Амны хаалтаа тогтмол зүүхийг зөвлөж байна /2020.02.07/",
      description:
        "ХӨСҮТ-д ирсэн шинжилгээний хариу бүгд сөрөг буюу халдваргүй гарсан байна. Одоогийн байдлаар Ховд аймагт 2 хүн, Дархан-Уул аймагт 1 хүнийг тусгаарлан хянаж байгаа. Коронавирус илрээгүй гээд иргэд тайвширч болохгүй, амны хаалтаа тогтмол хэрэглэж, зөвлөмжүүдийг дагах хэрэгтэй гэдгийг Эрүүл мэндийн яамнаас мэдээллээ.",
      imgUrl: "https://i.ytimg.com/vi/D9a_J1xfyjk/default.jpg",
    },
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    let content = null;
    if (this.state.selectedVideo) {
      content = <VideoDetail video={this.state.selectedVideo} />;
    } else {
      content = <div>Видео ажиллахгүй байна</div>;
    }

    return (
      <div className={styles.container}>
        <div className={styles.selectedContent}>{content}</div>
        <div className={styles.listContent}>
          <VideoList
            handleVideoSelect={this.handleVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default VideoApp;
