const express = require("express");
const app = express();
var http = require("http");
const port = process.env.PORT || 80;
const path = require("path");
const fs = require("fs");
var build = require("webpack-build");
const fetch = require("node-fetch");
const axios = require("axios");
var server = http.Server(app);
build.hmr.addToServer(server);

app.use(express.static("src/components/assets/"));
app.get("/", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "DELHII.MN - Дэлхийн монгол сайт");
    data = data.replace(/\$OG_DESCRIPTION/g, "DELHII.MN - Дэлхийн монгол сайт");
    result = data.replace(/\$OG_IMAGE/g, "");
    response.send(result);
  });
});

app.get("/detail/:id", function (req, res) {
  console.log("detail", req.params.id);
  if (req.params.id > 0) {
    fetch(`http://103.119.92.97:3050/news/${req.params.id}`)
      .then((res) => {
        return (a = res.json());
      })
      .then((a) => {
        console.log("adasd", a.data.news[0]);
        const filePath = path.resolve(__dirname, "./build", "index.html");
        fs.readFile(filePath, "utf8", function (err, data) {
          if (err) throw err;

          data = data.replace(/\$OG_TITLE/g, a.data.news[0].title);
          data = data.replace(/\$OG_DESCRIPTION/g, a.data.news[0].title);
          result = data.replace(
            /\$OG_IMAGE/g,
            `http://www.delhii.mn/${a.data.news[0].image}-large.jpg`
          );
          res.send(result);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  }
});

app.get("/list", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Category - Дэлхийн монгол сайт");
    data = data.replace(/\$OG_DESCRIPTION/g, "Category - Дэлхийн монгол сайт");
    result = data.replace(/\$OG_IMAGE/g, "");
    response.send(result);
  });
});

app.get("/admin", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Category - Дэлхийн монгол сайт");
    data = data.replace(/\$OG_DESCRIPTION/g, "Category - Дэлхийн монгол сайт");
    result = data.replace(/\$OG_IMAGE/g, "");
    response.send(result);
  });
});

app.get("/admin/editor/new", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Category - Дэлхийн монгол сайт");
    data = data.replace(/\$OG_DESCRIPTION/g, "Category - Дэлхийн монгол сайт");
    result = data.replace(/\$OG_IMAGE/g, "");
    response.send(result);
  });
});

app.get("/admin/list", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Category - Дэлхийн монгол сайт");
    data = data.replace(/\$OG_DESCRIPTION/g, "Category - Дэлхийн монгол сайт");
    result = data.replace(/\$OG_IMAGE/g, "");
    response.send(result);
  });
});

app.get("/admin/video/new", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Category - Дэлхийн монгол сайт");
    data = data.replace(/\$OG_DESCRIPTION/g, "Category - Дэлхийн монгол сайт");
    result = data.replace(/\$OG_IMAGE/g, "");
    response.send(result);
  });
});

app.get("/admin/listVideo", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Category - Дэлхийн монгол сайт");
    data = data.replace(/\$OG_DESCRIPTION/g, "Category - Дэлхийн монгол сайт");
    result = data.replace(/\$OG_IMAGE/g, "");
    response.send(result);
  });
});

app.get("/admin/banner/new", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Category - Дэлхийн монгол сайт");
    data = data.replace(/\$OG_DESCRIPTION/g, "Category - Дэлхийн монгол сайт");
    result = data.replace(/\$OG_IMAGE/g, "");
    response.send(result);
  });
});

app.get("/admin/listBanner", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Category - Дэлхийн монгол сайт");
    data = data.replace(/\$OG_DESCRIPTION/g, "Category - Дэлхийн монгол сайт");
    result = data.replace(/\$OG_IMAGE/g, "");
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(port, () => console.log(`Listening on port ${port}`));
