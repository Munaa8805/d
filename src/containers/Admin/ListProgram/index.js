import React, { Component } from "react";
import classes from "./index.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Growl } from "primereact/growl";
import { Dropdown } from "primereact/dropdown";
import moment from "moment";

class ListNews extends Component {
  constructor() {
    super();
    this.state = {
      program: "",
      image: [
        "http://www.mnb.mn/images/mini/tv.png",
        "http://www.mnb.mn/images/mini/mnews.png",
        "http://www.mnb.mn/images/mini/mradio.png",
        "http://www.mnb.mn/images/mini/sport.png",
        "http://www.mnb.mn/images/mini/MNB_world.png",
      ],
      cars: [
        { label: "МҮОНТ", value: "1" },
        { label: "МОНГОЛЫН МЭДЭЭ", value: "2" },
        { label: "МҮОНР", value: "3" },
        { label: "MNB СПОРТ HD", value: "4" },
        { label: "MNB WORLD", value: "5" },
      ],
      start_date: [],
      end_date: [],
      text: [],
      days: ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"],
    };
    this.onProgramChange = this.onProgramChange.bind(this);
    this.programTemplate = this.programTemplate.bind(this);
  }
  programTemplate(option) {
    if (!option.value) {
      return option.label;
    } else {
      var logoPath = option.value;
      console.log("logoPath", logoPath);
      return (
        <div className="p-clearfix">
          <img
            alt={option.label}
            src={this.state.image[1]}
            style={{ display: "inline-block", margin: "5px 0 0 5px" }}
            width="10"
          />
          <span style={{ float: "right", margin: ".5em .25em 0 0" }}>
            <div style={{ textAlign: "center" }}>{option.label}</div>
          </span>
        </div>
      );
    }
  }

  handleChange = (i, j, t) => {
    console.log(j, i, t.value);
    let items = [...this.state.rows];
    let item = t.value;
    items[i].j = item;
    console.log(items[i].j);
    this.setState({
      rows: items,
    });
  };
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
  handleDelete = (i, j) => {
    console.log(i, j);
    fetch(`http://103.119.92.85:5000/news/deleteProgram/${j}/${i}`)
      .then((res) => res.json())
      .then((json) => {
        if ((json.data = "success")) {
          // this.showSuccess()
        } else {
          // this.showFail();
        }
      });
  };
  onProgramChange(e) {
    this.setState({ program: e.value });
    fetch(`http://103.119.92.85:5000/news/allProgram/${e.value}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          rows: json,
          isRead: true,
        });

        if (this.state.isRead) {
          let items = [...this.state.rows];
          this.state.rows.map((item, i) => {
            console.log(item.begin_date);
            items[i].begin_date = new Date(item.end_date);
            items[i].end_date = new Date(item.end_date);
            items[i].name = item.name;
            if (this.state.rows.length - 1 == i) {
              this.setState({
                isLoading: true,
                rows: items,
              });
            }
          });
        }
      });
  }
  render() {
    let content = null;
    let button = null;
    if (this.state.isLoading) {
      content = this.state.rows.map((item, i) => (
        <tr key={i}>
          <td>
            {
              <Calendar
                value={this.state.rows[i].begin_date}
                onChange={this.handleChange.bind(this, i, "begin_date")}
                showTime={true}
                showSeconds={true}
                touchUI={true}
              />
            }
          </td>
          <td>
            {
              <Calendar
                value={this.state.rows[i].end_date}
                onChange={this.handleChange.bind(this, i, "end_date")}
                showTime={true}
                showSeconds={true}
                showTime={true}
                showSeconds={true}
                touchUI={true}
              />
            }
          </td>

          <td>
            <span className="p-float-label">
              <InputText
                id="float-input"
                type="text"
                size="30"
                value={this.state.rows[i].name}
                onChange={this.handleChange.bind(this, i, "name")}
              />
            </span>
          </td>
          <td>
            <Button
              label="Click"
              icon="pi pi-times"
              iconPos="left"
              onClick={this.handleDelete.bind(this, item.id, item.tv_id)}
            />
          </td>
          {console.log(this.state.rows[i].name)}
        </tr>
      ));
      button = (
        <div style={{ marginTop: "30px" }}>
          <Growl ref={(el) => (this.growl = el)}></Growl>
          <Button
            onClick={this.handleSubmit}
            icon="pi pi-save"
            iconPos="left"
            label="ХАДГАЛАХ"
            className=" p-button-raised p-button-rounded p-button-info"
          />
        </div>
      );
    }

    return (
      <div className="App" style={{ width: "100%", marginTop: "20px" }}>
        <Dropdown
          value={this.state.program}
          options={this.state.cars}
          onChange={this.onProgramChange.bind()}
          itemTemplate={this.carTemplate}
          style={{ width: "12em" }}
          filter={true}
          filterPlaceholder=""
          filterBy="label,value"
          showClear={true}
        />
        <div style={{ width: "100%", height: "600px", overflow: "auto" }}>
          <table style={{ width: "100%" }}>
            <tr>
              <th>Эхлэх цаг</th>
              <th>Дуусах цаг</th>
              <th>Гарах өдөр</th>
              <th>Нэвтрүүлэгийн нэр</th>
              <th> </th>
            </tr>

            {content}
          </table>
        </div>
      </div>
    );
  }
}

export default ListNews;
