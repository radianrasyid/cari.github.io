class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.penumpang = document.getElementById("penumpang");
    this.tanggal = document.getElementById("tanggal");
    this.waktu = document.getElementById("waktu");
    this.jadi = tanggal.value+ "T" + this.waktu.value+"Z";
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.loadFilter();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    const node = document.createElement("div");
    node.className = "row";
    this.carContainerElement.className = "container";
    const baru = document.createElement("div");
    baru.className = "container";
    node.appendChild(baru);
    
    const baris = document.createElement("div");
    baris.className = "row";
    this.carContainerElement.appendChild(baris);
    Car.list.forEach((car) => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-12 col-sm-12"
      col.innerHTML = car.render();
      baris.appendChild(col);
    });
  };

  async loadFilter(penumpang, jadi) {
    this.date = document.getElementById("tanggal").value;
    this.time = document.getElementById("waktu").value;
    const newdate = new Date(`${this.date}`);
    const newtime = (`${this.time.substr(0, 4)}`);
    let datetime = new Date(`${this.date} ${this.time}`)
    const beforeEpochTime = datetime.getTime();
    console.log('penumpang', penumpang);
    console.log(beforeEpochTime);
    console.log(datetime);
    console.log(this.time);
    // this.clearButton.onclick = this.clear;
    const cars = await Binar.listCars((item)=>{
      const capacity_filter = item.capacity >= Number(penumpang);
      const itemDate = new Date(item.availableAt);
      const dateFilter = itemDate < beforeEpochTime;
      return capacity_filter && dateFilter;
    });
    Car.init(cars);
  }

  // driver(){
  //   let driver = document.getElementById("driver");
  //   let btn = document.getElementById("load-btn");
  //   let driver_value = driver.options[driver.selectedIndex].value;
  //   btn.addEventListener('click',  function(){
  //     if(driver_value == "1"){
  //       return item.available === true;
  //     }
  //   })
  // }

  async load() {
    const cars = await Binar.listCars((item)=>{
      return item.available  === true;
    });
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
