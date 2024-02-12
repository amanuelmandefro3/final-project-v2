export function rotate(x, y, pos){
    x2 = x*Math.cos(pos) - y*Math.sin(pos)
    y2 = x*Math.sin(pos) + y*Math.cos(pos)
    return [x2, y2]
}