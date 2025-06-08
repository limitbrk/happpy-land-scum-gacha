import { GameConfig } from '../types';

import openingSound from '../assets/sounds/roll.mp3';
import winSound from '../assets/sounds/win.mp3';

export const gameConfig: GameConfig = {
  rarity_weights: {
    N: 70,
    R: 25,
    SR: 4,
    SSR: 1
  },
  sounds: {
    opening: openingSound,
    win: winSound,
  },
  prizes: [
    {
      name: "10,000 FP",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/75/Fame_Points_ICO.png"
    },
    {
      name: "10,000,000 Cash",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "ชุดกันซอมบี้",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/a/af/Cursed_Puppet_Suit.png"
    },
    {
      name: "เครื่องบิน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/73/Kinglet_Mariner.png"
    },
    {
      name: "500,000 Cash",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "คาทอง x5",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/f9/Vhendya%27s_Katana.png"
    },
    {
      name: "บาเรท x5",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/2/27/M82A1.png"
    },
    {
      name: "ขอของทำเควสได้ 2 อย่าง อย่างละ 1 ชิ้น",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/65/Soap.png"
    },
    {
      name: "ไลก้า",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/6d/Laika.png"
    },
    {
      name: "โมดูล ม่วง + ฟ้า อย่างละ 10",
      rarity: "SR",
      image: await import(`../assets/images/modulelv2.png`).then(module => module.default)
    },
    {
      name: "250,000 Cash",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "1,500 FP",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/75/Fame_Points_ICO.png"
    },
    {
      name: "รถ ชอปเปอร์",
      rarity: "SR",
      image: await import(`../assets/images/Cruiser.png`).then(module => module.default)
    },
    {
      name: "รถ แดง",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/5/5f/Wolfswagen.png"
    },
    {
      name: "ลูกตา 1 ลัง",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/fa/Puppet_Eye.png"
    },
    {
      name: "100,000 Cash",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "rpg 2 กระบอก+กระสุน 50 ลูก",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/c/c6/RPG7.png"
    },
    {
      name: "Base Expansion Kit Lv.2",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/dc/Base_Expansion_Kit_Lvl2.png"
    },
    {
      name: "ม้า+ลา อย่างละ 3 ตัว",
      rarity: "SR",
      image: await import(`../assets/images/horse.png`).then(module => module.default)
    },
    {
      name: "รถ RIS",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/a/ae/Quad_A.png"
    },
    {
      name: "เหล็ก 1 ลัง",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/8/83/Improvised_Metal_Chest.png"
    },
    {
      name: "Base Expansion Kit Lv.1",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/d2/Base_Expansion_Kit_Lvl1.png"
    },
    {
      name: "50,000 Cash",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "รถวิบาก",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/6b/Dirt_Bike.png"
    },
    {
      name: "ชุดซ่อมปืน 20",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/f9/Weapon_Cleaning_Kit.png"
    },
    {
      name: "ไขควงดำ 10",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/1/1d/Screwdriver.png"
    },
    {
      name: "lockpick 30",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/1/11/Advanced_Lockpick.png"
    },
    {
      name: "10,000 Cash",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "จักรยานแม่บ้าน",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/08/City_Bike.png"
    },
    {
      name: "ชุดซ่อมผ้า 20",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/9f/Sewing_Kit.png"
    },
    {
      name: "เครื่องปันไฟ ใหญ่ 2",
      rarity: "N",
      image: await import(`../assets/images/modulelv2.png`).then(module => module.default)
    },
    {
      name: "1,000 Cash",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "เกลือ 1 ลัง",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/77/Salt.png"
    },
    {
      name: "รถเข็นเหล็ก",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/da/Metal_Wheelbarrow.png"
    }
  ]
};