import React, { Component } from 'react';
import USD from '../../assets/flags/usd.png';
import EUR from '../../assets/flags/eur.png';
import JPY from '../../assets/flags/jpy.png';
import GBR from '../../assets/flags/gbp.png';
import RUB from '../../assets/flags/rub.png';
import CNY from '../../assets/flags/cny.png';
import KRW from '../../assets/flags/krw.png';
import TextLoop from "react-text-loop";
// import {parseString} from 'xml2js'
class Exchange extends Component {
    state = {
        slideIndex: 0,
        slideIndex1: 0,
        slideNews: ["Ерөнхийлөгч Дэлхийн банкны дэд ерөнхийлөгчийг хүлээн авч уулзлаа", "Д.Эрдэнэбат Дарханы замаар Ерөнхий сайдад асуулга тавилаа", "Тэтгэврийн зээлгүй иргэдэд сая төгрөг бэлнээр олгохгүй"],
        slideNews1: ["Болор цом”-ын эзэн Б.Жамбалдорж: Манай үеийнхний зул задарлаа", "Н.Ундрал: Арванхоёрдугаар сар жилийн хамгийн сайхан мөн завгүй сар", "Дуучин А.Бямбацогт, Г.Саранзаяа: Бид дууныхаа дүрсжүүлэлтэнд маш их"],
        data: [],
        flags: [USD, EUR , JPY , GBR ,RUB , CNY ,KRW]

    };
    componentDidMount() {
        fetch('https://monxansh.appspot.com/xansh.json?currency=USD|EUR|JPY|GBP|RUB|CNY|KRW')
            .then(res => res.json())
            .then(json => {
                console.log("json", json)
                this.setState({
                    isLoaded: true,
                    data: json
                })

            });

    }
    render() {

        if (!this.state.isLoaded) {

            return "";

        }
        return (
            <TextLoop >
                {this.state.data.map((item, i) =>
                    <div style={{ display: "flex", alignItems: "center", color:"white" }}>
                        <img alt="" style={{ width: "20px", height: "15px", margin: "0", padding: "0" }} src={`${this.state.flags[i]}`} />
                        &nbsp;<strong>{item.code}</strong>
                        &nbsp;&nbsp;&nbsp;<strong style={{ color: "white" }}>{item.rate_float}</strong><span>₮</span>
                    </div>

                )}
            </TextLoop>


        )
    }
}
export default Exchange