import React, { Component } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { IoMdHome } from "react-icons/io";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { TiNews } from "react-icons/ti";

class navigationItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          label: "МЭДЭЭ",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "МЭДЭЭ ОРУУЛАХ",
              icon: "pi pi-fw pi-align-left",
              command: () => {
                window.location = "/admin/editor/new";
              },
              to: "/editor",
            },
            {
              label: "МЭДЭЭНИЙ ЖАГСААЛТ",
              icon: "pi pi-fw pi-align-left",
              command: () => {
                window.location = "/admin/list";
              },
              to: "/list",
            },
          ],
        },

        {
          label: "ВИДЕО",
          icon: "pi pi-fw pi-video",
          items: [
            {
              label: "ВИДЕО ОРУУЛОХ",
              icon: "pi pi-fw pi-align-right",
              command: () => {
                window.location = "/admin/video/new";
              },
              to: "/list",
            },
            {
              label: "ВИДЕО ЖАГСААЛТ",
              icon: "pi pi-fw pi-align-right",
              command: () => {
                window.location = "/admin/listVideo";
              },
              to: "/listVideo",
            },
          ],
        },
        {
          label: "БАННЕР",
          icon: "pi pi-fw pi-video",
          items: [
            {
              label: "БАННЕР ОРУУЛАХ",
              icon: "pi pi-fw pi-align-left",
              command: () => {
                window.location = "/admin/banner/new";
              },
              to: "/editor",
            },
            {
              label: "БАННЕРЫН ЖАГСААЛТ",
              icon: "pi pi-fw pi-align-right",
              command: () => {
                window.location = "/admin/listBanner";
              },
              to: "/listVideo",
            },
          ],
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "БАННЕР ОРУУЛОХ",
              icon: "pi pi-fw pi-align-left",
              command: () => {
                window.location = "/admin/banner/new";
              },
              to: "/editor",
            },

            {
              label: "МЭДЭЭНИЙ ЖАГСААЛТ",
              icon: "pi pi-fw pi-align-right",
              command: () => {
                window.location = "/admin/list";
              },
              to: "/list",
            },
            {
              label: "Видео жагсаалт",
              icon: "pi pi-fw pi-align-right",
              command: () => {
                window.location = "/admin/listVideo";
              },
              to: "/listVideo",
            },
            {
              label: "Center",
              icon: "pi pi-fw pi-align-center",
            },
            {
              label: "Justify",
              icon: "pi pi-fw pi-align-justify",
            },
          ],
        },
        {
          label: "Users",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-user-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-user-minus",
            },
            {
              label: "Search",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                    {
                      label: "Print",
                      icon: "pi pi-fw pi-print",
                    },
                  ],
                },
                {
                  icon: "pi pi-fw pi-bars",
                  label: "List",
                },
              ],
            },
          ],
        },
        {
          label: "Events",
          icon: "pi pi-fw pi-calendar",
          items: [
            {
              label: "Edit",
              icon: "pi pi-fw pi-pencil",
              items: [
                {
                  label: "Save",
                  icon: "pi pi-fw pi-calendar-plus",
                },
                {
                  label: "Delete",
                  icon: "pi pi-fw pi-calendar-minus",
                },
              ],
            },
            {
              label: "Archieve",
              icon: "pi pi-fw pi-calendar-times",
              items: [
                {
                  label: "Remove",
                  icon: "pi pi-fw pi-calendar-minus",
                },
              ],
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.NavigationItems}>
          <div className={classes.account}>
            <div
              style={{
                marginRight: "25px",
                fontSize: "18px",
                color: "white",
                marginLeft: "100px",
              }}
            >
              Admin
            </div>
          </div>
          <div className={classes.avatar}></div>

          <div className="content-section implementation">
            <PanelMenu
              model={this.state.items}
              style={{ width: "100%", marginTop: "20px" }}
            />
          </div>
          {/* <ul>
                <li>
                    <a href="/about">НҮҮР</a>
                </li>
                <li>
                    <a href="#">БИДНИЙ ТУХАЙ</a>
                    <ul>
                        <li><a href="/about/mendchilgee">Захирлын мэндчилгээ</a></li>
                        <li><a href="/about/uz">Үндэсний Зөвлөл</a></li>
                        <li><a href="/about/management">Захирлуудын Зөвлөл</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">СУВГУУДЫН ТАНИЛЦУУЛГА</a>
                    <ul>
                        <li><a href="/about/mnbradio">Монголын Радио</a></li>
                        <li><a href="/about/mnbtv">МҮОНТ</a></li>
                        <li><a href="/about/mnbmedee">Монголын Мэдээ</a></li>
                        <li><a href="/about/mnbsport">MNB Спорт</a></li>
                        <li><a href="/about/mnbworld">MNB World</a></li>
                        <li><a href="/about/mnbp3">P3 Радио</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/about/mnbmedeedetail">МЭДЭЭ</a>
                </li>
                <li>
                    <a href="/about/project">ТӨСӨЛ ХӨТӨЛБӨР</a>
                </li>
                <li>
                    <a href="/about/tender">ТЕНДЕР</a>
                </li>
                <li>
                    <a href="/about/job">АЖЛЫН БАЙР</a>
                </li>
                <li>
                    <a href="/about/report">ҮЙЛ АЖИЛЛАГААНЫ ТАЙЛАН</a>
                </li>
            </ul> */}

          {/* <div style={{ padding: "0px", margin: "0", paddingRight: "3px", paddingTop: "2px" }}> <a href="/about"><IoMdHome size={20} style={{ color: "white" }} /></a></div>
        <div className={classes.borders}><NavigationItem link="/about/management">ЗАХИРЛУУДЫН ЗӨВЛӨЛ</NavigationItem></div>
        <div className={classes.borders}><NavigationItem link="/about">НҮҮР</NavigationItem></div>
        <div className={classes.borders}><NavigationItem link="/about" active>БИДНИЙ ТУХАЙ</NavigationItem></div>
        <div className={classes.borders}><NavigationItem link="/about/mendchilgee">СУВГУУД</NavigationItem></div>
        <div className={classes.borders}><NavigationItem link="/about">МЭДЭЭ</NavigationItem></div>
        <div className={classes.borders}><NavigationItem link="/about/project">ТӨСӨЛ ХӨТӨЛБӨР</NavigationItem></div>
        <div className={classes.borders}><NavigationItem link="/about/tender">ТЕНДЕР</NavigationItem></div>
        <div className={classes.borders}><NavigationItem link="/about/job">АЖЛЫН БАЙР</NavigationItem></div>
        <div className={classes.borders}><NavigationItem link="/about">ҮЙЛ АЖИЛЛАГААНЫ ТАЙЛАН</NavigationItem></div> */}
        </div>
      </div>
    );
  }
}

export default navigationItems;
