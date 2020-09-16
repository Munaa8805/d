import React, { Component } from "react";

import classes from "./Editor.module.css";

import CKEditor from "@ckeditor/ckeditor5-react";
import { RadioButton } from "primereact/radiobutton";
// NOTE: Use the editor from source (not a build)!
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import { Calendar } from "primereact/calendar";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import { FileUpload } from "primereact/fileupload";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import { IconContext } from "react-icons";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import { Button } from "primereact/button";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import { FaTachometerAlt } from "react-icons/fa";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageTextAlternative from "@ckeditor/ckeditor5-image/src/imagetextalternative";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import { Growl } from "primereact/growl";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import { InputSwitch } from "primereact/inputswitch";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials";

//import './custom.css';
import { now } from "moment";

const customColorPalette = [
  {
    color: "hsl(4, 90%, 58%)",
    label: "Red",
  },
  {
    color: "hsl(340, 82%, 52%)",
    label: "Pink",
  },
  {
    color: "hsl(291, 64%, 42%)",
    label: "Purple",
  },
  {
    color: "hsl(262, 52%, 47%)",
    label: "Deep Purple",
  },
  {
    color: "hsl(231, 48%, 48%)",
    label: "Indigo",
  },
  {
    color: "hsl(207, 90%, 54%)",
    label: "Blue",
  },

  // ...
];
const categorySelectItems = [
  { label: "Улс төр", value: 1 },
  { label: "Нийгэм", value: 2 },
  { label: "Утга зохиол", value: 3 },
  { label: "Ярилцлага", value: 4 },
  { label: "Дэлхийд", value: 5 },
  { label: "Урлаг", value: 6 },
  { label: "Спорт", value: 7 },
  { label: "Фото мэдээ", value: 8 },
  { label: "Видео мэдээ", value: 9 },
];

const editorConfiguration = {
  plugins: [
    Essentials,
    UploadAdapter,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,
    BlockQuote,
    EasyImage,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    ImageResize,
    Font,
    Highlight,
    Indent,
    IndentBlock,
    Link,
    List,
    Paragraph,
    SimpleUploadAdapter,
    MediaEmbed,
    Alignment,
    ImageTextAlternative,
    HorizontalLine,
    PasteFromOffice,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    RemoveFormat,
    SpecialCharacters,
    SpecialCharactersEssentials,
  ],
  toolbar: [
    "alignment",
    "heading",
    "insertTable",
    "specialCharacters",
    "|",
    "horizontalLine",
    "blockQuote",
    "|",
    "outdent",
    "indent",
    "|",
    "removeFormat",
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "code",
    "subscript",
    "superscript",
    "|",
    "fontFamily",
    "fontSize",
    "fontColor",
    "fontBackgroundColor",
    "highlight",
    "|",
    "link",
    "bulletedList",
    "numberedList",
    "imageUpload",
    "imageStyle",
    "mediaEmbed",
    "undo",
    "redo",
  ],
  mediaEmbed: {
    previewsInData: true,
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
    ],

    // Set the palettes for tables.
    tableProperties: {
      borderColors: customColorPalette,
      backgroundColors: customColorPalette,
    },

    // Set the palettes for table cells.
    tableCellProperties: {
      borderColors: customColorPalette,
      backgroundColors: customColorPalette,
    },
  },
  indentBlock: {
    offset: 1,
    unit: "em",
  },
  image: {
    toolbar: [
      "imageTextAlternative",
      "|",
      "imageStyle:alignLeft",
      "imageStyle:alignCenter",
      "imageStyle:alignRight",
      "imageStyle:full",
      "imageStyle:side",
    ],
    styles: ["full", "alignLeft", "alignCenter", "alignRight", "side"],
  },
  simpleUpload: {
    // Feature configuration.
    uploadUrl: "http://103.119.92.97:3050/news/image",
    headers: {
      "X-CSRF-TOKEN": "CSFR-Token",
      Authorization: "Bearer btr",
    },
  },
  fontFamily: {
    options: [
      "default",
      "Ubuntu",
      "Arial",
      "sans-serif",
      "Ubuntu Mono",
      "Courier New",
      "Courier",
      "monospace",
    ],
  },
};

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      checked1: false,
      date: new Date(),
      data: "",
      imgUrl: "",
      type: 1,
      id: "",
    };
    this.showSuccess = this.showSuccess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileHandler = this.fileHandler.bind(this);
  }
  componentDidMount() {
    var str = window.location.pathname;
    str = str.split("/")[3];
    if (str != "new") {
      fetch(`http://103.119.92.97:3050/news/${str}`)
        .then((res) => res.json())
        .then((json) => {
          console.log("json", json);
          this.setState({
            title: json.data.news[0].title,
            category: json.data.news[0].categoryid,
            image: json.data.news[0].image,
            // text:a,
            che: json.data.news[0].che,
            id: json.data.news[0].id,
          });

          // this.setState({
          //     title:json.news.title,
          //     category:json.news.category_id,
          //     checked1: json.news.is_special,
          //     date: new Date(),
          //     data:json.news.body,
          //     imgUrl:json.news.image_original,
          //     id:0,

          // })
        });
    }
  }

  showSuccess() {
    this.growl.show({
      severity: "success",
      summary: "Хадгалагдлаа",
      detail: "Order submitted",
    });
  }
  showFail() {
    this.growl.show({
      severity: "Error",
      summary: "Алдаа гарлаа дахин оролдон уу ? ",
      detail: "Order submitted",
    });
  }
  fileHandler(e) {
    // const {url} = e.xhr
    const a = JSON.parse(e.xhr.response);
    this.setState({ imgUrl: a.url });
  }
  handleSubmit(e) {
    e.preventDefault();
    var str = window.location.pathname;
    str = str.split("/")[3];
    if (str != "new") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ news: this.state }),
      };

      fetch("http://103.119.92.97:3050/news/update", requestOptions)
        .then((res) => res.json())
        .then((json) => {
          if ((json.data = "success")) {
            this.showSuccess();
            this.setState({
              title: "",
              category: "",
              checked1: false,
              date: new Date(),
              data: "",
              imgUrl: "",
              type: 1,
              id: 0,
            });
          } else {
            this.showFail();
          }
        });
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ news: this.state }),
      };
      fetch("http://103.119.92.97:3050/news/insert", requestOptions)
        .then((res) => res.json())
        .then((json) => {
          if ((json.data = "success")) {
            this.showSuccess();
            this.setState({
              title: "",
              category: "",
              checked1: false,
              date: new Date(),
              data: "",
              imgUrl: "",
              type: 1,
              id: 0,
            });
          } else {
            this.showFail();
          }
        });
    }
  }
  // data => this.setState({ postId: data.id })

  render() {
    console.log(
      this.state.imgUrl,
      this.state.date,
      this.state.title,
      this.state.checked1,
      this.state.checked2,
      this.state.checked3,
      this.state.city,
      this.state.data
    );
    return (
      <div className="App" style={{ width: "100%" }}>
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconContext.Provider value={{ size: "28px" }}>
            {" "}
            <FaTachometerAlt />
          </IconContext.Provider>
          <div style={{ marginLeft: "10px", fontSize: "18px" }}>
            МЭДЭЭ ОРУУЛАХ
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <span className="p-float-label" style={{ marginBottom: "30px" }}>
            <InputText
              id="float-input"
              type="text"
              size="30"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <label htmlFor="float-input">ГАРЧИГ</label>
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ fontSize: "16px", marginRight: "10px" }}>ОНЦЛОХ</div>
            <InputSwitch
              checked={this.state.checked1}
              onChange={(e) => this.setState({ checked1: e.value })}
            />
          </div>

          <Dropdown
            value={this.state.category}
            options={categorySelectItems}
            onChange={(e) => {
              this.setState({ category: e.value });
            }}
            placeholder="МЭДЭЭНИЙ АНГИЛАЛ"
          />

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <RadioButton
              inputId="rb1"
              name="city"
              value={1}
              onChange={(e) => this.setState({ type: e.value })}
              checked={this.state.type === 1}
            />
            <label
              htmlFor="rb1"
              className="p-radiobutton-label"
              style={{ marginRight: "15px", marginLeft: "5px" }}
            >
              МЭДЭЭ
            </label>
          </div>

          <div
            className="p-fileupload"
            style={{ display: "flex", marginTop: "30px", alignItems: "center" }}
          >
            <div className={classes.file}>
              <FileUpload
                name="demo[]"
                url="http://103.119.92.97:3050/single"
                onUpload={this.fileHandler}
                multiple={false}
                accept="image/*"
                maxFileSize={1000000}
                chooseLabel="НҮҮРНИЙ ЗУРАГ"
              />
            </div>
            {(file) => this.setState({ imgUrl: file.files[0].objectURL })}
          </div>

          <div style={{ width: "800px", marginTop: "30px" }}>
            <CKEditor
              editor={ClassicEditor}
              config={editorConfiguration}
              data={this.state.data}
              onInit={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ data: data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>

          <div
            style={{ display: "flex", marginTop: "30px", alignItems: "center" }}
          >
            <div style={{ paddingRight: "10px", fontSize: "16px" }}>
              НИЙТЛЭХ ОГНОО
            </div>
            <Calendar
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.value })}
              showTime={true}
              showSeconds={true}
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <Growl ref={(el) => (this.growl = el)}></Growl>
            <Button
              onSubmit={this.handleSubmit}
              icon="pi pi-save"
              iconPos="left"
              label="ХАДГАЛАХ"
              className=" p-button-raised p-button-rounded p-button-info"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Editor;
