const { writeFileSync } = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/projects", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.5 },
];

const stream = new SitemapStream({
  hostname: "https://sharmarahul.netlify.app",
});

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => writeFileSync("./public/sitemap.xml", data.toString()))
  .catch((err) => console.error(err));
