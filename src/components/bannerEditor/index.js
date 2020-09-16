import React, { Component } from 'react';
import classes from "./index.module.css"
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { FileUpload } from 'primereact/fileupload';
import { ScrollPanel } from 'primereact/scrollpanel';
import { IconContext } from "react-icons";
import { AiOutlineColumnHeight ,AiOutlineColumnWidth, AiFillFacebook ,AiFillYoutube,AiFillVideoCamera} from 'react-icons/ai';
import {  MdReceipt} from 'react-icons/md';
import {Dropdown} from 'primereact/dropdown';
import { Growl } from 'primereact/growl';
import { InputText } from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';





const categorySelectItems = [
    [

    ],
    [
    
    { label: 'A1 - НҮҮР & ОНЦЛОХ МЭДЭЭНИЙ ДООР(950X115)', value: 1 },
    { label: 'C1 - НҮҮР & ХӨТӨЛБӨРИЙН ДЭЭР(240X240)', value: 2 },
    { label: 'D1 - АНГИЛАЛ & МЭДЭЭНИЙ ЖАГСААЛТАН ДЭЭР(800X120)', value: 3 },
    { label: 'F1 - ДЭЛГЭРЭНГҮЙ-МЭДЭЭНИЙ ДООР БАЙРЛАХ(840X120)', value: 4 }
],
[
    { label: 'A11 - НҮҮР & ОНЦЛОХ МЭДЭЭНИЙ ДООР(950X115)', value: 1 },
    { label: 'C1 - НҮҮР & ХӨТӨЛБӨРИЙН ДЭЭР(240X240)', value: 2 },
    { label: 'D1 - АНГИЛАЛ & МЭДЭЭНИЙ ЖАГСААЛТАН ДЭЭР(800X120)', value: 3 },
    { label: 'F1 - ДЭЛГЭРЭНГҮЙ-МЭДЭЭНИЙ ДООР БАЙРЛАХ(840X120)', value: 4 }
],
[
    { label: 'A111 - НҮҮР & ОНЦЛОХ МЭДЭЭНИЙ ДООР(950X115)', value: 1 },
    { label: 'C1 - НҮҮР & ХӨТӨЛБӨРИЙН ДЭЭР(240X240)', value: 2 },
    { label: 'D1 - АНГИЛАЛ & МЭДЭЭНИЙ ЖАГСААЛТАН ДЭЭР(800X120)', value: 3 },
    { label: 'F1 - ДЭЛГЭРЭНГҮЙ-МЭДЭЭНИЙ ДООР БАЙРЛАХ(840X120)', value: 4 }
]];

const webSelectItems = [
    { label: 'MNB', value: 1 },
    { label: 'MNB ABOUT', value: 2 },
    { label: 'MNB Live', value: 3 },
];
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            link:"",
            start_date:new Date(),
            end_date:new Date(new Date().setDate(new Date().getDate() + 1)),
            imgUrl:"",
             banner:0,
             website:0,
             type:0,
             height:["0px","115px","240px","120px","120px"],
             width:["0px","950px","240px","800px","840px"],
             content:"",
             title:"",
             id:null
        }
        this.showSuccess = this.showSuccess.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
        this.handleSubmit = this. handleSubmit.bind(this);

    }
     showSuccess() {
        this.growl.show({ severity: 'success', summary: 'Баннер ', detail: 'Баннер байршуулалаа' });

    }
    showFail() {
        this.growl.show({ severity: 'Error', summary: 'Алдаа гарлаа дахин оролдон уу ? ', detail: ' АЛДАА ГАРЛАА' });
     }
    fileHandler(e) {
        // const {url} = e.xhr
        const a=JSON.parse(e.xhr.response);
        this.setState({ imgUrl: a.url })
        
    }
    componentDidMount(){
        var str = window.location.pathname;
        str = str.split("/")[3];
        if(str!='new'){
            fetch(`http://103.119.92.85:5000/news/banner/${str}`)
            .then(res=>res.json())
            .then(json=>{
                console.log("json",json)
                this.setState({ 
                  link:json[0].link,
                  start_date:new Date(json[0].begin_date),
                  end_date:new Date(json[0].end_date),
                  banner:json[0].bairlal_id,
                  content:json[0].content,
                  title:json[0].name,
                  imgUrl:json[0].image,
                  website:json[0].website_id,
                  id:json[0].id
                })
                
              })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var str = window.location.pathname;
        str = str.split("/")[3];
        if(str!='new'){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ news: this.state })
            };
          
            fetch('http://103.119.92.85:5000/news/updateBanner', requestOptions)
                .then(res => res.json())
                .then(json => {
                    if (json.data = "success") {
                        this.showSuccess();
                        this.setState({
                            isLoading:true,
                                link:"",
                                start_date:new Date(),
                                end_date:new Date(new Date().setDate(new Date().getDate() + 1)),
                                imgUrl:"",
                                banner:0,
                                website:0,
                                type:0,
                                height:["0px","115px","240px","120px","120px"],
                                width:["0px","950px","240px","800px","840px"],
                                content:"",
                                title:"",
                                id:""
                        });
                    }
                    else {
                        this.showFail();
                    }
    
                })
            

        }
        else{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ news: this.state })
        };
        fetch('http://103.119.92.85:5000/news/insertBanner', requestOptions)
            .then(res => res.json())
            .then(json => {
                if (json.data = "success") {
                    this.showSuccess();
                    this.setState({
                        isLoading:true,
                        link:"",
                        start_date:new Date(),
                        end_date:new Date(new Date().setDate(new Date().getDate() + 1)),
                        imgUrl:"",
                         banner:0,
                         website:0,
                         type:0,
                         height:["0px","115px","240px","120px","120px"],
                         width:["0px","950px","240px","800px","840px"],
                         content:"",
                         title:"",
                         id:""

                    });
                }
                else {
                    this.showFail();
                }

            })
        }
    }

    render() {
        const { news, isLoading } = this.state
        console.log("link",this.state.type)
        
        return (
            <div className="App" style={{ width: "100%" }}>
                <div style={{ paddingTop: "20px", paddingBottom: "30px", display: "flex", alignItems: "center" }}>
                    <IconContext.Provider value={{ size: "28px" }}> <MdReceipt /></IconContext.Provider>
                    <div style={{ marginLeft: "10px", fontSize: "22px" }}>Баннер оруулах</div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <span className="p-float-label" style={{ marginBottom: "30px" }}>
                        <InputText id="float-input" type="text" size="30" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                        <label htmlFor="float-input">БАННЕРЫН НЭР</label>
                    </span>
                    {/* <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                          <div style={{ fontSize: "16px", marginRight: "10px"}}>
                            АНГИЛАЛД ОНЦЛОХ
                        </div>
                        <InputSwitch checked={this.state.checked} onChange={(e) => this.setState({ checked: e.value })} />
                    </div>     */}
                    <div style={{marginTop:"20px",fontSize: "22px"}}>Нүүрэн дээрх байрлал</div>
                    <div style={{display:"flex" , alignItems:"center" ,alignContent:"center",marginTop: "20px"}}>
                  
                    <Dropdown value={this.state.website} style={{marginRight:"20px"}} options={webSelectItems} onChange={(e) => { this.setState({ website: e.value }) }} placeholder="САЙТУУД ЖАГСААЛТ" />
                    <Dropdown value={this.state.banner} options={categorySelectItems[this.state.website]} onChange={(e) => { this.setState({ banner: e.value }) }} placeholder="БАННЕРЫН АНГИЛАЛ" />
                    </div>
                    <div style={{marginTop:"20px",fontSize: "22px"}}>Нүүрэн дээрх зурагны харагдац</div>
                    <div className="p-fileupload" style={{ display: "flex", marginTop: "30px", alignItems: "center" }}>
                       <div className={classes.file}>
                        <FileUpload
                            name='demo[]'
                            url='http://103.119.92.85:5000/single'
                            onUpload={this.fileHandler}
                            multiple={false}
                            accept='image/*'
                            maxFileSize={1000000}
                            chooseLabel="НҮҮРНИЙ ЗУРАГ" />
                          </div>  
                          {/* {(file) => this.setState({ imgUrl: file.files[0].objectURL })} */}
                    </div>
                    <div style={{marginTop:"50px",position:"relative",width:this.state.width[this.state.banner],height:this.state.height[this.state.banner],border:"1px solid lightGray"}}>
                            <img src={this.state.imgUrl} style={{width:this.state.width[this.state.banner],height:this.state.height[this.state.banner]}}/>
                            <div style={{ top: "-30px", fontSize: "22px" ,position:"absolute" ,display:"flex" ,alignItems:"center"}}> {this.state.width[this.state.banner]}<IconContext.Provider value={{ size: "28px" }}> <AiOutlineColumnWidth/></IconContext.Provider></div>  
                             <div style={{  top: "-30px",left:"60px",fontSize: "22px" ,position:"absolute" ,display:"flex" ,alignItems:"center"}}><IconContext.Provider value={{ size: "28px" }}> <AiOutlineColumnHeight/></IconContext.Provider>{this.state.height[this.state.banner]}</div>
                    </div>
                    <span className="p-float-label" style={{ marginBottom: "30px",marginTop:"20px" }}>
                        <InputText id="float-input" type="text" size="30" value={this.state.link} onChange={(e) => this.setState({ link: e.target.value })} />
                        <label htmlFor="float-input">Линк</label>
                    </span>
                 <div style={{ display: "flex", marginTop: "30px", alignItems: "center" }}>
                        <div>
                            <div style={{ paddingRight: "10px", fontSize: "16px" }}>Эхлэх хугцаа</div>
                            <Calendar value={this.state.start_date} onChange={(e) => this.setState({ start_date: e.value })} showTime={true} showSeconds={true} />
                        </div>  
                        <div style={{ marginLeft:"20px"}}>
                            <div style={{ paddingRight: "10px", fontSize: "16px" }}>Дуусах хугацаа</div>
                            <Calendar value={this.state.end_date} onChange={(e) => this.setState({ end_date: e.value })} showTime={true} showSeconds={true} />
                        </div>  
                    </div>
                    <span className="p-float-label" style={{ marginBottom: "30px",marginTop:"20px" }}>
                    <div style={{ paddingRight: "10px", fontSize: "16px" }}>Агуулга</div>
                    <InputTextarea rows={5} cols={45} value={this.state.content} onChange={(e) => this.setState({content: e.target.value})} autoResize={true} />
                    </span>
              
                 
                    <div style={{ marginTop: "30px" ,marginBottom: "30px" }}>
                        <Growl ref={(el) => this.growl = el}></Growl>
                        <Button onSubmit={this.handleSubmit} icon="pi pi-save" iconPos="left" label="ХАДГАЛАХ" className=" p-button-raised p-button-rounded p-button-info" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Banner;
