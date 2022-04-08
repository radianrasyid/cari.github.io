class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card">
    <img src="${this.image}" alt="${this.manufacture}" class="card-img-top" style="height:400px; object-fit: cover;">
      <div class="card-body w-100">
        <p class="card-title" style="font-weight: 400;">${this.model}</p>
        <p style="font-weight:700;">Rp ${this.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} / hari</p>
        <p>${this.description.slice(0, 38)}</p>
        <p><img src="./images/fi_users.svg" width="16px"> ${this.capacity} orang</p>
        <p><img src="./images/fi_settings.svg" width="16px"> ${this.transmission}</p>
        <p><img src="./images/fi_calendar.svg" width="16px"> Tahun ${this.year}</p>
        <p>${this.availableAt}</p>
        <button id="cari" type="button" class="btn btn-success text-light w-100">Pilih Mobil</button>
      </div>
    </div>
    `;
  }
}
