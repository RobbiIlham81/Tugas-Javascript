class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th class="bg-primary text-white text-center">${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
        <tr class="table-info">
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table = "<table class='table table-striped table-hover'>" + this.createHeader(this.init.columns) + this.createBody(this.init.data) + "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["Name", "Email", "Alamat"],
  data: [
    ["Robbi", "robbi@gmail.com", "Aceh"],
    ["Amanda", "andika@gmail.com", "Yogyakarta"],
    ["Ilham", "ilham@gmail.com", "Medan"],
    ["Andika", "andika@gmail.com", "Tangerang"],
    ["Bima", "bima@gmail.com", "Palembang"],
  ],
});
const app = document.getElementById("app");
table.render(app);
