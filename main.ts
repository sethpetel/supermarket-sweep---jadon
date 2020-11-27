// choco milk
let choco_milk = img`
    . . . 2 2 2 . . . . . . . . . . 
    . . . c c c 6 6 8 8 . . . . . . 
    . . 6 e e e e e e 6 8 . . . . . 
    . 6 e e e e e e 8 9 6 8 . . . . 
    6 e e e e e e 8 . 8 9 8 . . . . 
    6 e e e e e e 8 . 8 9 8 . . . . 
    8 e e e e e e 8 . 8 9 8 . . . . 
    8 9 e e e e e 8 8 9 9 8 . . . . 
    8 9 e e e e e e 9 9 9 8 . . . . 
    8 6 e e e e e e 9 9 9 8 . . . . 
    . 8 6 e e e e 9 9 9 6 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
let choco_milk_name = "Chocolate Milk"
let choco_milk_weight = 8
let choco_milk_price = 2

namespace SpriteKind {
    export const Grocery = SpriteKind.create()
    export const CartItem = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Grocery, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        addToCart(otherSprite)
    }
})
function createTextSprite () {
    subTotalSprite = textsprite.create("$0")
    subTotalSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    subTotalSprite.top = 0
    subTotalSprite.left = 0
}
function addToCart (grocery: Sprite) {
    item = sprites.create(grocery.image, SpriteKind.CartItem)
    item.follow(player)
    item.x = player.x
    item.y = player.y
    itemCost = sprites.readDataNumber(item, "cost")
    itemWeight = sprites.readDataNumber(item, "weight")
    itemName = sprites.readDataSprite(item, "name")
    subtotal = subtotal + itemCost
    subTotalSprite.setText("$" + subtotal)
}
function createProduct (img2: Image, cost: number, weight: number, name: string) {
    p = sprites.create(img2, SpriteKind.Grocery)
    sprites.setDataNumber(p, "cost", cost)
    sprites.setDataNumber(p, "weight", weight)
    sprites.setDataString(p, "name", name)
    tiles.placeOnRandomTile(p, myTiles.tile1)
}
function createAllProducts () {
    for (let index = 0; index < groceryCosts.length; index++) {
        createProduct(groceryImages[index], groceryCosts[index], groceryWeights[index], groceryNames[index])
    }
}
let p: Sprite = null
let subtotal = 0
let itemName: Sprite = null
let itemWeight = 0
let itemCost = 0
let item: Sprite = null
let subTotalSprite: TextSprite = null
let player: Sprite = null
let groceryCosts: number[] = []
let groceryWeights: number[] = []
let groceryNames: string[] = []
let groceryImages: Image[] = []
groceryImages = [
choco_milk,
img`
    . . . 2 2 2 . . . . . . . . . . 
    . . . c c c 6 6 8 8 . . . . . . 
    . . 6 1 1 1 1 1 9 6 8 . . . . . 
    . 6 1 1 1 1 1 1 8 9 6 8 . . . . 
    6 1 1 1 1 1 1 8 . 8 9 8 . . . . 
    6 1 1 1 1 1 1 8 . 8 9 8 . . . . 
    8 9 1 1 1 1 1 8 . 8 9 8 . . . . 
    8 9 1 1 1 1 1 8 8 9 9 8 . . . . 
    8 9 9 9 9 9 9 9 9 9 9 8 . . . . 
    8 6 9 9 9 9 9 9 9 9 9 8 . . . . 
    . 8 6 9 9 9 9 9 9 9 6 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . 6 6 6 . . . . . . 
    . . . . . . . c b c . . . . . . 
    . . . . . c c c b c c c . . . . 
    . . . . c b b b b b b b c . . . 
    . . . . c 1 b b b b b 1 c . . . 
    . . . . c 1 1 7 1 7 1 1 c . . . 
    . . . . c 1 1 1 7 1 1 1 c . . . 
    . . . . c 1 1 a c a 1 1 c . . . 
    . . . . c 1 a c a c a 1 c . . . 
    . . . . c 1 c a c a c 1 c . . . 
    . . . . c 1 a c a c a 1 c . . . 
    . . . . c 1 c a c a 1 1 c . . . 
    . . . . c 1 a c a 1 1 1 c . . . 
    . . . . c b 1 a 1 1 1 b c . . . 
    . . . . c b b b b b b b c . . . 
    . . . . . c c c c c c c . . . . 
    `,
img`
    . c c c c c c c c c c c c c . . 
    c b b b b b b b b b b b b b c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    c d d 1 1 1 1 1 1 1 1 1 d d c . 
    c d c c c 1 c c c 1 c c c d c . 
    c d c 1 c 1 c 1 c 1 1 c d d c . 
    c d c 1 c 1 c c c 1 1 c d d c . 
    c d c c c 1 c 1 c 1 1 c d d c . 
    c d d 1 1 1 1 1 1 1 1 1 d d c . 
    c d d 1 1 1 2 2 2 1 1 1 d d c . 
    c d d 1 1 2 8 8 8 2 1 1 d d c . 
    c d d 1 1 2 8 d 8 2 1 1 d d c . 
    c d d 1 1 2 8 6 8 2 1 1 d d c . 
    . c d 1 1 1 2 2 2 1 1 1 d c . . 
    . . c c c c c c c c c c c . . . 
    `,
img`
    . . . c c c c . . . . . . . . . 
    . . c e e e e c c c . . . . . . 
    . c e e e e e e e e c . . . . . 
    . c e e e e e e e e e c . . . . 
    f e e e e c c c e e e c . b b . 
    f e e e c e e e c c c c c d d b 
    f c e e f e e e e e e e c d d b 
    f c c c f e e e f f f f c b b b 
    f c c c c f f f c c c f . c c . 
    . f c c c c c c c c c f . . . . 
    . f c c c c c c c c f . . . . . 
    . . f f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . 6 6 9 9 9 9 . . . . . . . . 
    . 6 9 9 1 1 1 1 9 . . . . . . . 
    6 9 6 9 9 9 1 9 1 9 . . . . . . 
    6 9 9 6 6 6 6 1 1 9 . . . . . . 
    6 9 9 6 9 9 6 1 1 9 . . . . . . 
    . 6 9 6 9 9 6 1 9 . . . . . . . 
    . . 6 9 6 6 1 9 . . . . . . . . 
    . . . 6 9 9 9 . . . . . . . . . 
    . . . . 6 6 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . c d d d d d d d c . . . . 
    . . c d d d d d b b d d c . . . 
    . . b c d d d d d d d c b . . . 
    . . b 2 c c c c c c c 2 b . . . 
    . . b 2 2 2 2 2 2 2 2 2 b . . . 
    . . b 2 2 2 2 2 2 2 2 2 b . . . 
    . . b 2 2 2 b b b 2 2 2 b . . . 
    . . b 2 2 b 2 2 2 b 2 2 b . . . 
    . . d 1 2 b 2 2 2 b 2 1 d . . . 
    . . d 1 1 b 2 2 2 b 1 1 d . . . 
    . . d 1 1 b 2 2 2 b 1 1 d . . . 
    . . d 1 1 1 b b b 1 1 1 d . . . 
    . . . d 1 1 1 1 1 1 1 d . . . . 
    . . . . d d d d d d d . . . . . 
    `,
img`
    . . c c c c c c c c c c . . . . 
    . c d d d d d d d c b b c . . . 
    c d d d d d d d c b d b b c . . 
    c c d d d d d d d c b b c c . . 
    c b c c c c c c c c c c b c . . 
    c b 8 9 8 b 8 9 9 9 8 b b c . . 
    c b b 8 9 6 9 6 9 6 9 8 b c . . 
    c b b 8 9 6 9 6 9 6 9 8 b c . . 
    c b 8 9 8 b 8 9 9 9 8 b b c . . 
    . c c c c c c c c c c c c . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . b 1 1 1 1 1 1 1 1 1 . . . 
    . . b 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 8 8 . . 
    . . b 1 1 1 1 1 1 1 8 8 8 8 . . 
    . . b 1 1 1 5 5 5 5 8 8 8 8 . . 
    . . b 1 1 5 5 5 5 5 5 8 8 8 . . 
    . . b 1 8 5 5 5 5 5 5 8 8 8 . . 
    . . c 8 8 5 5 5 5 5 5 8 1 1 . . 
    . . c 8 8 5 5 5 5 5 5 1 1 1 . . 
    . . c 8 8 8 5 5 5 5 1 1 1 1 . . 
    . . c 8 8 8 1 1 1 1 1 1 1 1 . . 
    . . c 2 2 2 1 1 1 1 6 6 6 1 . . 
    . . b 1 2 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . b b b b b b b b b b . . . 
    `,
img`
    . . . . . . . 6 . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . 6 6 6 6 7 6 7 6 6 6 6 . . . 
    . 6 6 7 6 6 7 6 7 6 6 7 7 6 . . 
    . 6 6 7 6 7 6 6 7 6 6 7 6 6 . . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 7 6 7 6 7 6 . 
    6 7 6 7 6 7 6 6 7 6 6 7 6 7 6 . 
    6 6 6 7 6 7 6 6 7 6 6 7 6 6 6 . 
    . 6 6 7 6 7 6 6 7 6 6 7 6 6 . . 
    . 6 6 7 6 7 7 6 7 6 6 7 6 6 . . 
    . . 6 6 6 6 7 6 7 6 6 6 6 . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    `
]
groceryNames = [
    choco_milk_name,
"Milk",
"Grape Soda",
"Oatmeal",
"Turkey",
"Fancy glass",
"Chicken soup",
"Sardines",
"Flour",
"Watermelon"
]
groceryWeights = [
    choco_milk_weight,
8,
2,
1,
12,
0.5,
0.5,
0.5,
5,
10
]
groceryCosts = [
    choco_milk_price,
2,
3,
4,
20,
10,
2,
1,
5,
3
]
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level`)
player = sprites.create(img`
    fffffff......................
    f.fffcd......................
    ..ffddc......................
    ..fdddf......................
    ..fdddd......................
    ...55........................
    ..55dddbbbbbbbbbbbb..........
    ..555....b..b..b..b..........
    .5555....bbbbbbbbbb..........
    .5555....b..b..b..b..........
    .5555....bbbbbbbbbb..........
    .6666.....b.b..b.bb..........
    .6.66......bbbbbbb...........
    .d.d.......d.................
    .d..d......ddddddd...........
    .d..dd......c....c...........
    `, SpriteKind.Player)

controller.moveSprite(player)
tiles.placeOnTile(player, tiles.getTileLocation(1, 3))
scene.cameraFollowSprite(player)
createAllProducts()
createTextSprite()
