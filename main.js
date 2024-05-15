{
    function createColumn(col) {
        var source = [];
        for (var i = 0; i < 15; i++) {
            source[i] = i + 1 + 15 * col;
        }
        var column = [];
        for (var i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }
        return column;
    }
    var columns = [];
    columns[0] = createColumn(0);
    columns[1] = createColumn(1);
    columns[2] = createColumn(2);
    columns[3] = createColumn(3);
    columns[4] = createColumn(4);
    columns[2][2] = "free";
    // console.log(columns)
    var bingo = [];
    for (var row = 0; row < 5; row++) {
        bingo[row] = [];
        for (var col = 0; col < 5; col++) {
            bingo[row][col] = columns[col][row];
        }
    }
    console.log(bingo);
}
