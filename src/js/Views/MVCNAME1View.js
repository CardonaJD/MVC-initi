console.log("MVCNAME1View")

function MVCNAME1View(el) {
  this.$el = $(el);

  this.render = function ($el) {
    let section = `<div>MVCNAME1 View<div>`
    $el.append(section);
  }

}