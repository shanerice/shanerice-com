---
title: "3 Simple SEO tips for every SaaS product"
slug: "/simple-seo-tips-for-every-saas-product"
date: "2018-04-19T16:55:10.000Z"
featured: false
draft: false
featuredImage: stacked-rocks.jpg
tags: ["Getting Started","SEO"]
---

Search engine optimization is a big job, and if you're on a small team, there's a temptation to ignore SEO as a waste of time. SEO is a mix of signals search engines measure to provide results when people search for an answer. Search engines don't want to share specifics on how to improve your ranking because they want to discourage people from gaming their results.

Learning SEO as a beginner can be daunting. It's not like learning a well-documented programming language. Experienced SEO practitioners have a variety of opinions, and they aren't shy about sharing them all. 

Instead of pulling your hair out trying to figure out what you need to do, I want to share three things I've seen help multiple products first-hand. Make these choices up front, and you'll spend a tiny bit of extra time to avoid weeks long projects in the future.

## Set your blog up in a subfolder
You can set up your blog on a subdomain in five minutes with a theme and a CNAME update. 

Evidence shows [over](https://iwantmyname.com/blog/2015/01/seo-penalties-of-moving-our-blog-to-a-subdomain.html) and [over](http://www.bloggingflail.com/subdomains-vs-subdirectories-seo/) again that subfolders outperform subdomains for blogs trying to capture search traffic.

There's still some debate on this topic in the SEO community, but since you're focusing on building your app, you should focus on that and not worrying about figuring out which side to take in this debate. 

Trust the data, set up your blog in a subfolder, and get back to making more critical decisions.

## Set up canonical redirects
A canonical URL is the official version of a URL for search engines. There's a metadata tag you can use to set this which is helpful on e-commerce sites. 

If you're building a SaaS app, the canonical metadata tag isn't as important as setting a canonical version of your URLs with redirect rules. Over the years I've seen sites set up with a URL structure like this...

`https://domain.com`
`https://domain.com/`
`https://domain.com/default.hmtl`
`https://www.domain.com`
`https://www.domain.com/`
`https://www.domain.com/default.hmtl`

I have found this issue over and over again during my short time working in SEO for SaaS apps. **Everytime** we fix it our search rankings and traffic from search go up. Don't sleep on this one. You should be consistent with your URL structure across your site when possible, but you have no control over how people link to your site. Search crawlers will hit your sites from these pages, and they see multiple versions of the same page.

The simple way to avoid this is setup your htaccess to redirect your URLs to a uniform structure. Here's a [handy resource with htaccess snippets you can use from a Github repository](https://github.com/phanan/htaccess).

## Use metadata as microcopy to attract interest
Metadata feels like a pain in the ass. You've spent all this time writing a blog post or guide and it's easy to put it off when you're done. Your page title and meta description are what a searcher uses to decide where they click on search result page. 

![Metadata populates all of this text](https://shanerice.com/content/images/2018/04/Image-2018-04-19-at-11.38.58-AM.png)

You're leaving a lot to chance if you aren't setting your meta description. Spend a couple of extra minutes filling in your metadata today, so you don't have hundreds of pages missing this data in a few years. I've worked on site migrations where this has happened, and it's a big task.

## There's always more you can do
SEO is a deep well. Don't write it off today because you aren't sure where to start. These little things will set you up for success as you grow and have more time to focus on growth.