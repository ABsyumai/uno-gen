export type Color = NormalColor | Black;
export type Black = "black";
export type NormalColor = "yellow" | "blue" | "red" | "green";
export const COLORS = ["yellow" , "blue" , "red" , "green", "black"];
export const NORMAL_COLORS = ["yellow" , "blue" , "red" , "green"];
export type Card = {
    ty: CardType;
    color: Color;
    id: number;
}
export const COLOR_MAP: {[P in Color]: number} = {
    "yellow": 0,
    "blue": 1,
    "red": 2,
    "green": 3,
    "black": 4,
}
export const CardTypeMap = {
    0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,
    "Reverse": 10,
    "Skip": 11,
    "+2": 12,
    "Wild": 13,
    "+4": 14,
}

export function cardSorter(a: Card, b: Card): number {
    const ac = COLOR_MAP[a.color];
    const bc = COLOR_MAP[b.color]
    if(ac !== bc) {
        return ac < bc? -1 : 1;
    }
    const at = CardTypeMap[a.ty];
    const bt = CardTypeMap[b.ty];
    if (at<bt) {
        return -1;
    } else if (at>bt) {
        return 1;
    } else {
        return 0;
    }
}

export type CardType =
0 |
1 |
2 |
3 |
4 |
5 |
6 |
7 |
8 |
9 |
"Reverse" |
"Skip" |
"+2" |
"Wild" |
"+4";
export const cardProto: Array<Card> = [];
// add numbers
let id = 0;
for(const color of NORMAL_COLORS) {
    for(let ty=0; ty < 10; ty++) {
        const card = Object.freeze({
            ty,
            color
        } as Card);
        cardProto.push(Object.freeze({
            ty,
            color,
            id: id++
        } as Card));
        if(ty!==0){
            cardProto.push(Object.freeze({
                ty,
                color,
                id: id++
            } as Card));
        }
    }
    for(const ty of ["Skip", "Reverse", "+2"]) {
        for(let j=0; j<2; j++){
            cardProto.push(Object.freeze({
                ty, color,
                id: id++
            } as Card));
        }
    }
}
for(const ty of ["Wild", "+4"]) {
    const card = Object.freeze({
        ty, color: "black"
    } as Card);
    for(let i=0; i<4; i++) {
        cardProto.push(Object.freeze({
            ty, color: "black", id: id++
        } as Card)
        )
    }
}
export function newDeck(): Card[] {
    console.log("new deck")
    return Array.from(cardProto).sort(()=>Math.random() - 0.5)
}

