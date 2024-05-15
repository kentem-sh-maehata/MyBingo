{
  function createColumn(col:number):number[]{
    const source:number[] = []
    for(let i=0;i < 15; i++){
      source[i] = i + 1 + 15 * col
    }

    const column:number[] = []
    for(let i = 0; i < 5; i++){
      column[i] = source.splice(Math.floor(Math.random()*source.length),1)[0]
    }
    return column
  } 

  const columns:any[][] = []
  columns[0] = createColumn(0)
  columns[1] = createColumn(1)
  columns[2] = createColumn(2)
  columns[3] = createColumn(3)
  columns[4] = createColumn(4)
  columns[2][2] = "free"
  // console.log(columns)

  const bingo:any[][] = []
  for (let row = 0; row < 5; row++) {
    bingo[row] = []
    for (let col = 0; col < 5; col++) {
      bingo[row][col] = columns[col][row]
    }
  }
  console.table(bingo)

  for (let row = 0; row < 5; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 5; col++) {
      const td = document.createElement('td');
      td.textContent = bingo[row][col];
      tr.appendChild(td);
    }
    (document.querySelector('tbody')as HTMLElement).appendChild(tr);
  }
}