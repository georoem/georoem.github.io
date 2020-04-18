window.onload = function() {
    this.renderHello();
}

function renderHello() {
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, experience);
    document.getElementById('target').innerHTML = rendered;
    document.getElementById('page-2').reload(true);
    console.log('Se ejecuto lo inevitable')
  }