{
  function createColumn(col: number): number[] {
    const source: number[] = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }

    const column: number[] = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(
        Math.floor(Math.random() * source.length),
        1
      )[0];
    }
    return column;
  }
  function createColumns() {
    const columns: any[][] = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = "free";
    return columns;
  }

  // const bingo:any[][] = []
  // for (let row = 0; row < 5; row++) {
  //   bingo[row] = []
  //   for (let col = 0; col < 5; col++) {
  //     bingo[row][col] = columns[col][row]
  //   }
  // }
  // console.table(bingo)

  function renderBingo(columns: any[][]) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < 5; col++) {
        const td = document.createElement("td");
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      (document.querySelector("tbody") as HTMLElement).appendChild(tr);
    }
  }

  const columns = createColumns();
  renderBingo(columns);
}
