console.log("MVCNAME2View")
function MVCNAME2View(el) {
  this.$el = $(el);

  this.render = function ($el) {
    let section = `<div>MVCNAME2 View<div>`
    $el.append(section);
  }
}