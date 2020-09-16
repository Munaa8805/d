// import React, { Component } from 'react';
// import { Row,Col } from 'reactstrap';
// import Spinner from '../components/UI/Spinner/Spinner';
// import classes from './News.css';
// import Box from '../components/UI/box';
// import {GoCommentDiscussion} from 'react-icons/go';
// //import NewsSide from '../components/newsSide/index';
// //import Footer from '../components/Footer.js';
// // import { FacebookProvider, CommentsCount ,ShareButton } from 'react-facebook';

// class News extends Component {
//   constructor(props){
//     super(props);
//       this.state={
//           news:{},    
//           isLoaded:false,
//           isLoading:false,
//           banner:"",
//           html:""
//       }
//   }
//   componentDidMount(){
//     const {id}=this.props.match.params;

//     fetch(`http://localhost:3050/news/${id}`)
//     .then(res=>res.json())
//     .then(json=>{
//         this.setState({
//             isLoaded:true,
//             news:json.data,
//             html:json.data.html,
//             link:"http://localhost:3000/news/"+id+""
//         })
//     });
    
//   //   const ids='D';
//   //   fetch(`http://103.119.92.52:3050/news/banners/${ids}`)
//   //  .then(res=>res.json())
//   //   .then(json=>{
//   //      console.log("json",json);
//   //          this.setState({
//   //              banner:json.banner,
//   //              isLoading:true,
//   //           })
  
//    //});
// }
 
//         render() {
       
//           var { isLoaded , news , link ,isLoading,banner,html}= this.state;
        
//          const banners=[];
//           if(!isLoaded){
            
//               return <Spinner/>
//           }
//           else{
//             // if(isLoading==false){
//             //   banners[0]= <center><h3>D1-750X90</h3></center>
//             //   banners[1]= <center><h3>D2-750X90</h3></center>
//             //  }
//             //  else{
//             //   banners[0]=<Row className={classes.hide} style={{height:"90px",width:"100%"}}><center><img height="90px" width="100%" src={`http://www.bestinfo.mn/`+banner[0].image} /></center></Row>
//             //   banners[1]=<center><img height="90px" width="100%" src={`http://www.bestinfo.mn/`+banner[0].image} /></center>
//             // }
//             return (
//               <div> 
//                  {/* <div className="">

//                    </div> */}
//                <Row>
//                  <Col md="7" id="col" style={{margin:"0", padding:"0"}}>
//                  {/* {banners[0]} */}
//                     <Row style={{margin:"0",padding:"0"}}>
//                       <Box 
//                         html={html} 
//                         img={`${news.news[0].image}`} 
//                         date={news.news[0].date}
//                         title= {news.news[0].title } 
//                         text={news.news[0].text} 
//                         category={news.news[0].categoryname} 
//                         shareUrl={this.props.match.url} 
//                         shareTitle={news.news[0].title}  
//                       />
//                     </Row>
//                     <br/>
//                     <hr />
//                     {/* <Row className={classes.hide} style={{margin:"0",padding:"0"}}>
//                       {banners[1]}
//                     </Row> */}
//                     <Row style={{margin:"0",padding:"0",textAlign:"center"}}>
//                      <div className="comment">
//                       <label><h3>Сэтгэгдэл</h3></label>
//                       <div style={{width:"auto"}}>
//                         <div style={{ height: "50px", fontSize: "16px", color: "#6C87B2", width: "840px", display: "flex", flexDirection: "row", alignItems: "center",marginBottom:"20px" }}>
//                         {/* <GoCommentDiscussion size={30} style={{marginRight:"10px"}}/>СЭТГЭГДЭЛ */}
                                   
//                         </div>  
//                         <textarea style={{width:"100%",height:"150px",backgroundColor:"#F6F6F6"}} placeholder="Таны сэтгэгдэл" /> 
//                         <input style={{width:"500px",backgroundColor:"#F6F6F6"}} placeholder="Зочин" /> 
//                         <input style={{fontFamily:"Roboto Condensed",fontSize:"16px",color:"white",width:"50px",height:"50px",backgroundColor:"#6C87B2",height:"30px",marginTop:"10px",marginBottom:"10px"}} type="submit" value="Илгээх"/>
//                       </div>
                   
//                       <div class="fb-comments" data-href={link} data-numposts="6">
//                       </div>
//                      </div>
                  
//                     </Row>
                    
//                 </Col>
               
//                 <Col md="2" id="col" className={classes.hide} style={{marginTop:"10%"}}>
//                 {/* <NewsSide/> */}
//                 </Col>
//                 <Col md="3" id="col" className={classes.hide} >
               
//                  </Col>     
//                </Row>
              
//                <Row className={classes.Hfooter}>
//                 <Col md="11" id="col" style={{marginRight:"0",padding:"0"}} >
//                     {/* <Footer/> */}
//                 </Col> 
//                 <Col md="1" id="col" style={{marginRight:"0",padding:"0"}}>
//                 </Col>      
//             </Row> 
//               </div>
//             )
//       }  
//     }
//     }
    
// export default News;
    




















































































// import React, { Component } from 'react';
// import classes from './index.css'
// import Carousel from 'nuka-carousel';
// import SideLeft from "../../components/SideLeft"
// import Social from "../../components/newsSocial"
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
// import { IoMdTime , IoIosWarning } from "react-icons/io";
// import { MdPhone } from "react-icons/md";
// import CategoryTitle from "../../components/CategoryTitle"
// import { MdNavigateNext, MdNavigateBefore} from "react-icons/md";
// import { GoCommentDiscussion} from "react-icons/go";
// import Author from '../../components/Author/Author';

// import Like from "../../components/Like"
// import Share from "../../components/shareButton"


    
// class News extends Component {
//     state = {
//         slideIndex: 0,
//         };
      
//     render() {
      
//         return (
//          <div className={classes.newsContainer}>
//              <div className={classes.newsCenter}>
//                 {/* <Breadcrumb items={['ЭХЛЭЛ','УЛС ТӨР']} /> */}
//                  <div className={classes.newsTitle}>
//                        Угаарын хий мэдрэгчийг зааврын дагуу ашиглах хэрэгтэй байгааг анхаарууллаа
//                  </div>
//                  <div className={classes.newsTime}>
//                  <Author authorName={'Ж.Амарсанаа'} authorImage={'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'} category={['УЛС ТӨР', 'МЭДЭЭ']}/>
//                      <Social size="25px"/>

//                  </div> 
//                  <img src="http://www.mnb.mn/uploads/202001/news/thumb/ec12df840ffe7c4d6fbe26a680327dab_x3.jpg" style={{width:"100%",height:"auto",marginBottom:"20px"}}/>  
//                  <div style={{fontSize:"15px",textAlign:"justify"}}>
//                        Сайжруулсан шахмал түлштэй холбоотой цаг үеийн асуудлаар өнөөдөр НОБГ-ын Гамшгаас урьдчилан сэргийлэх хэлтсийн дарга, хурандаа Г.Нэргүй, нийслэлийн Мэргэжлийн хяналтын газрын дэд дарга С.Даваасүрэн, Агаарын бохирдолтой тэмцэх газрын мэргэжилтэн Г.Даваажаргал нар мэдээлэл хийлээ.
//                       <br/><br/>  НОБГ-ын Гамшгаас урьдчилан сэргийлэх хэлтсийн дарга, хурандаа Г.Нэргүй “Угаарын хий мэдрэгчийг нэг удаа үнэ төлбөргүй олгох ажлын хүрээнд 2020 оны 1 дүгээр сарын 22 ны өдрийн байдлаар 42031 айл өрхөд угаарын хий мэдрэгчийг суурилуулж ажлын гүйцэтгэл 82.4 хувьтай байна. Яаралтай түргэн тусламжийн төвд угаарын хийн хөнгөн хэлбэрээр хордсон зургаан өрхийн дуудлагад эмнэлгийн тулсамж үйлчилгээ зөвлөмж зөвлөгөө авсан” гэлээ.
//                       <br/>
//                         <img src="http://www.ulaanbaatar.mn/Files2/82871980_178850460153456_6722801571287007232_n_20200123103225.jpg" style={{width:"100%",height:"auto"}}/>
//                         <br/>
//                         Нийслэлийн Мэргэжлийн хяналтын газрын дэд дарга С.Даваасүрэн “Нийслэлийн Мэргэжлийн хяналтын газраас сар бүр Тавантолгой түлш ХХК-аас гарч байгаа бүтээгдэхүүнд шинжилгээтэй хяналтыг хийж ажиллаж байна.Шинжилгээгээр түлшний хүхэр,  илчлэг, бат бөх байдлыг шинжилхэд стандартын шаардлага хангаж байна гэсэн хариу гарсан. Түүхий нүүрс түлж байгаа зөвшөөрөл бүхий аж ахуй нэгжүүдэд тогтмол хяналт тавьж байна.БЗД-т гурван аж ахуй нэгжийн үнс холигч ажиллахгүй байгаа зөрчил бүртгэгдсэн,  СБД-т мөн үнс холигч ажиллаагүй гэсэн хоёр  зөрчил илэрсэн.Харин СХД-д зөвшөөрөлгүй түүхий нүүрс түлж байсаныг тогтоож зөрчлийн хэрэг үүсгэн торгуулийн арга хэмжээ авч ажиллалаа. Мэдрэгч суурилуулсан айл өрхүүд галын авлагын дагуу ашиглах зайлшгүй шаардлагатай байна” гэсэн юм.
//                  </div> 
                
//                  <div style={{marginTop:"30px",borderTop:"1px solid #e6e6e6",paddingTop:"10px"}}>
//                         <Share />
//                 </div>
//                  <div style={{width:"840px",display:"flex",justifyContent:"center"}}>
//                       <Like width="500px"/>
//                  </div> 
                   
//                  <div style={{width:"100%",marginTop:"30px",marginBottom:"20px",paddingTop:"10px"}}>  
//                     <Carousel
//                         slideIndex={this.state.slideIndex}
//                         afterSlide={slideIndex => this.setState({ slideIndex })}
//                         renderCenterLeftControls={({ previousSlide }) => (
//                             <div className={classes.button} onClick={previousSlide}><MdNavigateBefore size={65} /></div>
//                         )}
//                         renderCenterRightControls={({ nextSlide }) => (
//                             <div className={classes.button} onClick={nextSlide}><MdNavigateNext size={65} /></div>
//                         )}>
//                             <img src="https://news.mn/wp-content/uploads/2018/12/1170x250.jpg" style={{ width: "100%", height: "120px", margin: "0" }} />
//                             <img src="https://news.mn/wp-content/uploads/2019/12/newsmn-banner.jpg" style={{ width: "100%", height: "120px", margin: "0" }} />
//                             <img src="http://www.mnb.mn/uploads/202001/news/thumb/52179c2fe7609a6935b06defeb6e0700_x3.jpg" style={{ width: "100%", height: "120px", margin: "0" }} />
//                         </Carousel>
//                    </div>   
//                    <div style={{ display: "flex", flexDirection: "column",marginBottom:"30px",marginTop:"10px"}}>
//                    <CategoryTitle title="САНАЛ БОЛГОХ" color="#FFA31B" />  
//                             <div className={classes.rowblock} >
//                                         <div className={classes.background} style={{ width: "206px", height: "176px"}}>
//                                             <img src="http://www.mnb.mn/uploads/202001/news/thumb/e8621e55aa22993520a5871c5052ec95_x2.jpg" style={{ width: "100%", height: "130px", margin: "0" }} />
//                                             <div style={{ padding: "5px" }}>Нэг грамм давс 400 мг натри агуулдаг</div>
//                                         </div>  
//                                         <div className={classes.background} style={{ width: "206px", marginLeft: "5px", height: "176px" }}>
//                                             <img src="http://www.mnb.mn/uploads/202001/news/thumb/3704259c6650cae4dd481352bf472462_x2.jpg" style={{ width: "100%", height: "130px", margin: "0" }} />
//                                             <div style={{ padding: "5px" }}>Зүүдэнд учрах ижий</div>
//                                         </div>
//                                         <div  className={classes.background} style={{ width: "206px", marginLeft: "6px", height: "176px"}}>
//                                             <img src="http://www.mnb.mn/uploads/202001/news/thumb/7442658f95f4715777640e7b1bdfc8b4_x2.jpg" style={{ width: "100%", height: "130px", margin: "0" }} />
//                                             <div style={{ padding: "5px" }}>"Гайхамшиг мөсөн гулгуур" үлгэр</div>
//                                         </div>
//                                         <div  className={classes.background} style={{ width: "206px", marginLeft: "5px", height: "176px" }}>
//                                             <img src="http://www.mnb.mn/uploads/202001/news/thumb/8c1e0b422f1e136e5a6441c50ca52cb3_x2.jpg" style={{ width: "100%", height: "130px", margin: "0" }} />
//                                             <div style={{ padding: "5px" }}>Миний дотны хүмүүс</div>
//                                         </div>
//                              </div>           
//                     </div>
//                    <div style={{width:"100%",backgroundColor:"#6C87B2",color:"white",textAlign:"justify",paddingTop:"10px",paddingBottom:"10px",marginBottom:"50px",borderRadius:"6px"}}>
//                       <div style={{fontSize:"16px",fontFamily:"Roboto Condensed",textAlign:"center"}}>СЭТГЭГДЭЛ БИЧИХ</div>
//                       <div style={{display: "flex",alignItems:"center"}}>
//                             <div style={{width:"60px",height:"50px",marginRight:"10px",marginLeft:"10px"}}>
//                                 <IoIosWarning size={40} />
//                             </div>    
//                             <div style={{fontSize:"15px",marginRight:"10px"}}>
//                                 АНХААРУУЛГА: Уншигчдын бичсэн сэтгэгдэлд MNB.mn хариуцлага хүлээхгүй болно. ТА сэтгэгдэл бичихдээ хууль зүйн болон ёс суртахууны хэм хэмжээг хүндэтгэнэ үү. Хэм хэмжээг зөрчсөн сэтгэгдэлийг админ устгах эрхтэй. Сэтгэгдэлтэй холбоотой санал гомдолыг  <MdPhone/>70127055 утсаар хүлээн авна.
//                             </div>     
//                        </div>
//                    </div>    
//                    <div style={{width:"100%"}}>
//                         <div style={{ height: "30px", fontSize: "16px", color: "#6C87B2", width: "840px", display: "flex", flexDirection: "row", alignItems: "center",marginBottom:"20px" }}>
//                         <GoCommentDiscussion size={30} style={{marginRight:"10px"}}/>СЭТГЭГДЭЛ
                                   
//                         </div>  
//                         <textarea style={{width:"100%",height:"100px",backgroundColor:"#F6F6F6"}} placeholder="Таны сэтгэгдэл" /> 
//                         <input style={{width:"100%",backgroundColor:"#F6F6F6"}} placeholder="Зочин" /> 
//                         <input style={{fontFamily:"Roboto Condensed",fontSize:"16px",color:"white",width:"100px",backgroundColor:"#6C87B2",height:"30px",marginTop:"10px",marginBottom:"10px"}} type="submit" value="Илгээх"/>
//                     </div>
//               </div>
                 
            
//             {/* Left */}
//               <div style={{marginTop:"33px",paddingLeft:"60px",borderLeft:"1px solid #e6e6e6",width:"300px"}}>
//                   <SideLeft/>
//               </div>    
//            </div>
//         )
//     }
// }
// export default News