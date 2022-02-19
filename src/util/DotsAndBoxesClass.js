export class DotsAndBoxesTile {
    constructor() {
        this.fill = null
        this.geometry = {
            north: null,
            south: null,
            east: null,
            west: null
        }
    }
    FillTile(colour) {
        if (this.geometry.north && this.geometry.south && this.geometry.east && this.geometry.west) {
            this.fill = colour
        }
    }
    DrawLine(direction, colour) {
        switch (direction) {
            case "N":
                this.geometry.north = colour
                this.FillTile(colour)
                break;
            case "E":
                this.geometry.east = colour
                this.FillTile(colour)
                break;
            case "S":
                this.geometry.south = colour
                this.FillTile(colour)
                break;
            case "W":
                this.geometry.west = colour
                this.FillTile(colour)
                break;
            default:
                return "error"
        }
    }

}

export class DotAndBoxesBoard {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.board = Array.from(
            { length: this.width }, v => Array.from(
                { length: this.height }, v => new DotsAndBoxesTile()
            )
        )
    }
    DrawLine([xValue, yValue], direction, colour) {
        let tile = this.board[xValue][yValue]
        let SecondaryTile
        let maxHeight = this.height - 1
        let maxWidth = this.width - 1
        //  Find the secondary tile, two tiles are affected when drawing a line so we have to mirror the action on the second tile
        switch (direction) {
            case "N":
                tile.DrawLine("N", colour)
                if (yValue === maxHeight) return
                SecondaryTile = this.board[xValue][yValue + 1]
                SecondaryTile.DrawLine("S", colour)
                break;
            case "E":
                tile.DrawLine("E", colour)
                if (xValue === maxWidth) return
                SecondaryTile = this.board[xValue + 1][yValue]
                SecondaryTile.DrawLine("W", colour)
                break;
            case "S":
                tile.DrawLine("S", colour)
                if (yValue === 0) return
                SecondaryTile = this.board[xValue][yValue - 1]
                SecondaryTile.DrawLine("N", colour)
                break;
            case "W":
                tile.DrawLine("W", colour)
                if (xValue === 0) return
                SecondaryTile = this.board[xValue - 1][yValue]
                SecondaryTile.DrawLine("E", colour)
                break;
            default:
                break;
        }
    }
}


