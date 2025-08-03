// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://liceria-xi.vercel.app/', // Replace with your actual domain
  generateRobotsTxt: true, // Generates robots.txt as well
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
};
