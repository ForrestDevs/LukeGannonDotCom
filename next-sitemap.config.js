/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://forrestdevs.com",
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://forrestdevs.com"}/sitemap.xml`,
      `${process.env.SITE_URL || "https://forrestdevs.com"}/server-sitemap.xml`,
    ],
  },
};
