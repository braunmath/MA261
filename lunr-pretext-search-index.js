var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to MA 261",
  "body": " Introduction to MA 261  Welcome to MA 261.  "
},
{
  "id": "123n",
  "level": "1",
  "url": "123n.html",
  "type": "Section",
  "number": "2.1",
  "title": "Sums of Integers",
  "body": " Sums of Integers    "
},
{
  "id": "prime-numbers",
  "level": "1",
  "url": "prime-numbers.html",
  "type": "Section",
  "number": "3.1",
  "title": "Prime Numbers",
  "body": " Prime Numbers    "
},
{
  "id": "divisionalgorithm",
  "level": "1",
  "url": "divisionalgorithm.html",
  "type": "Section",
  "number": "4.1",
  "title": "The Division Algorithm",
  "body": " The Division Algorithm    "
},
{
  "id": "equivalencerelations",
  "level": "1",
  "url": "equivalencerelations.html",
  "type": "Section",
  "number": "5.1",
  "title": "Equivalence Relations",
  "body": " Equivalence Relations    "
},
{
  "id": "continuedfractions",
  "level": "1",
  "url": "continuedfractions.html",
  "type": "Section",
  "number": "6.1",
  "title": "Continued Fractions",
  "body": " Continued Fractions    "
},
{
  "id": "pythagoreantheorem",
  "level": "1",
  "url": "pythagoreantheorem.html",
  "type": "Section",
  "number": "7.1",
  "title": "The Pythagorean Theorem",
  "body": " The Pythagorean Theorem    "
},
{
  "id": "problems",
  "level": "1",
  "url": "problems.html",
  "type": "Chapter",
  "number": "8",
  "title": "Problems and Essays",
  "body": " Problems and Essays    "
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
