export class About {
  constructor(name, logo, shortIntro) {
    this.name = name;
    this.logo = logo;
    this.shortIntro = shortIntro;
  }
}

export class Project {
  constructor(title, imgURL, intro, link) {
    this.title = title;
    this.imgURL = imgURL;
    this.intro = intro;
    this.link = link;
  }
}

export class Job {
  constructor(
    title,
    undsenChigUureg,
    shaardlaguud,
    nemeltMedeelel,
    contactInfo,
    anketTemplateUrl
  ) {
    this.title = title;
    this.undsenChigUureg = undsenChigUureg;
    this.shaardlaguud = shaardlaguud;
    this.nemeltMedeelel = nemeltMedeelel;
    this.contactInfo = contactInfo;
    this.anketTemplateUrl = anketTemplateUrl;
  }
}

export class Tender {
  constructor(
    title,
    tenderName,
    zarlasanOgnoo,
    duusahOgnoo,
    tenderDescription,
    contactInfo,
    materialuud
  ) {
    this.title = title;
    this.tenderName = tenderName;
    this.zarlasanOgnoo = zarlasanOgnoo;
    this.duusahOgnoo = duusahOgnoo;
    this.tenderDescription = tenderDescription;
    this.contactInfo = contactInfo;
    this.materialuud = materialuud;
  }
}
