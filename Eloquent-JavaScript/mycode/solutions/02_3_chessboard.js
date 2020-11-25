const chessboard = (size) => {
    for (let n = 1; n <= size; n++) {
        if (n % 2 == 0) {
            for (let i = 1; i <= size; i++) {
                if (i % 2 == 0) {
                    process.stdout.write(" ")
                } else {
                    process.stdout.write("#");
                }
            }
        } else {

            for (let i = 1; i <= size; i++) {
                if (i % 2 == 0) {
                    process.stdout.write("#")
                } else {
                    process.stdout.write(" ");
                }
            }
        }
        console.log("");
    }
}

chessboard(8);