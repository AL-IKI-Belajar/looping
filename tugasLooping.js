for (let i = 0; i < 7; i++) {
    let line = '';
    
    if (i % 3 === 0) {
        for (let j = 0; j < 9; j++) {
            line += '*';
        }
    } else {
        for (let j = 0; j < 9; j++) {
            if (j === 0 || j === 8) {
                line += '*';
            } else {
                line += ' ';
            }
        }
    }
    
    console.log(line);
}
