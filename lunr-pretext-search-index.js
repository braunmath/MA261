var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "introduction",
  "level": "1",
  "url": "introduction.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
