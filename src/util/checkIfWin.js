export function checkIfWin(board) {
    var winCases = [
        // horizontal 
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // vertical 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // diagonal
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (var winCase in winCases) {
        var one = board[winCases[winCase][0]]
        var two = board[winCases[winCase][1]]
        var three = board[winCases[winCase][2]]
        if (one && two && three && one == two && one == three && two == three) {
            var winner = one
            var winningInformation = { winner: winner , winCase: winCases[winCase] }
            return winningInformation
        }
    }
}