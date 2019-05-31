console.log("MVCNAME1Controller")
function MVCNAME1Controller(el, view, model) {
  this.$el = $(el);
  this.view = view;
  this.model = model;

  this.init = function() {
    this.bindEvents();
    this.view.render(this.$el);
  };

  this.bindEvents = function() {
    // this.$el.on('click', '#remove-selected-cars-btn', this.deleteSelectedCars.bind(this));
    // EventManager.on('add.car.to.db', this.addCar.bind(this));
  };

}
