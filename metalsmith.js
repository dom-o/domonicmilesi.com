const Metalsmith = require('metalsmith'),
  metadata = require('@metalsmith/metadata'),
  markdown = require('@metalsmith/markdown'),
  rootpath = require('metalsmith-rootpath'),
  layouts = require('@metalsmith/layouts'),
  feed = require('./plugins/feed'),
  debug = require('metalsmith-debug');

Metalsmith(__dirname)
  .metadata({
    site: {
      url: "https://domonicmilesi.com/",
      author: "Domonic Milesi",
      title:'domonicmilesi.com',
      description: "Domonic Milesi's personal site."
    },
  })
  .use(metadata({
    'pages': 'src/pagelist.yaml',
    'projs': 'src/projlist.yaml',
  }))
  .use(markdown())
  .use(rootpath())
  .use(layouts({
    engineOptions: {
      filters: {
        UTCdate: string => (new Date(string)),
        blogDate: string => (new Date(string).toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" })),
        match: (list, prop, val) => list.find(a => a[prop]==val),
        filter: (list, prop, val) => list.filter(a => a[prop] == val),
      }
    }
  }))
  .use(feed({collection: 'pages'}))
  .use(debug())

  .build(function(err, files) {

    if(err) { throw err; }
  });
