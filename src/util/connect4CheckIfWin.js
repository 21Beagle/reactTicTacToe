export function connect4CheckIfWin(board) {
    var horizontalLen = board.length
    var verticalLen = board[0].length
    // vertical
    for (var i = 0; i < horizontalLen; i++) {
        for (var j = 0; j < verticalLen - 3; j++) {
            var oneVertical = board[i][j]
            var twoVertical = board[i][j + 1]
            var threeVertical = board[i][j + 2]
            var fourVertical = board[i][j + 3]
            var checkArrVertical = [oneVertical, twoVertical, threeVertical, fourVertical]
            if (checkAllSame(checkArrVertical)) {
                return { winner: board[i][j] }
            }
        }
    }
    // horizontal
    for (var i = 0; i < horizontalLen - 3; i++) {
        for (var j = 0; j < verticalLen; j++) {
            var oneHorizontal = board[i][j]
            var twoHorizontal = board[i + 1][j]
            var threeHorizontal = board[i + 2][j]
            var fourHorizontal = board[i + 3][j]
            var checkArrHorizontal = [oneHorizontal, twoHorizontal, threeHorizontal, fourHorizontal]
            if (checkAllSame(checkArrHorizontal)) {
                return { winner: board[i][j] }
            }
        }
    }
    // diagonal
    for (var i = 0; i < horizontalLen - 3; i++) {
        for (var j = 0; j < verticalLen - 3; j++) {
            var oneDiagonalUp = board[i][j]
            var twoDiagonalUp = board[i + 1][j + 1]
            var threeDiagonalUp = board[i + 2][j + 2]
            var fourDiagonalUp = board[i + 3][j + 3]
            var checkArrDiagonalUp = [oneDiagonalUp, twoDiagonalUp, threeDiagonalUp, fourDiagonalUp]
            if (checkAllSame(checkArrDiagonalUp)) {
                return { winner: board[i][j] }
            }
            var oneDiagonalDown = board[i][j + 3]
            var twoDiagonalDown = board[i + 1][j + 2]
            var threeDiagonalDown = board[i + 2][j + 1]
            var fourDiagonalDown = board[i + 3][j]
            var checkArrDiagonalDown = [oneDiagonalDown, twoDiagonalDown, threeDiagonalDown, fourDiagonalDown]
            if (checkAllSame(checkArrDiagonalDown)) {
                return { winner: board[i][j + 3] }
            }
        }
    }
    return { winner: false }
}


function checkAllSame(checkArr) {
    if (checkArr.every(v => v !== "") && checkArr.every(v => v === checkArr[0])) return true
    return false
}
