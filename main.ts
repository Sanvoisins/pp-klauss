import Pony from './class/PonyClass'
import DragonBall, { DBHeroe } from './class/DragonBallClass'

console.log("<-- STEP 1 -->");

const fisrtPony: Pony = new Pony();
const secondPony: Pony = new Pony();

const sangoku: DragonBall = new DragonBall(DBHeroe.SANGOKU);

fisrtPony.isMoved()
sangoku.isMoved()