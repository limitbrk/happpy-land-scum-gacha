import { GameConfig } from '../types';

import openingSound from '../assets/sounds/roll.mp3';
import winSound from '../assets/sounds/win.mp3';

export const gameConfig: GameConfig = {
  rarity_weights: {
    N: 60,
    R: 24,
    SR: 10,
    SSR: 5,
    SSSR: 1
  },
  sounds: {
    opening: openingSound,
    win: winSound,
  },
  prizes: [
    {
      name: "10,000,000 Cash",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "2,500,000 Cash",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
        {
      name: "500,000 Cash",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
        {
      name: "250,000 Cash",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "100,000 Cash",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "50,000 Cash",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "10,000 Cash",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "1,000 Cash",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/66/Cash.png"
    },
    {
      name: "Kinglet Mariner 1 ลำ",
      rarity: "SSR",
      image: "https://images.steamusercontent.com/ugc/1773878663505683892/E4D5EAB18AD915147F7861BD7FD5259ABE91C2A1/"
    },
        {
      name: "Kinglet Duster 1 ลำ",
      rarity: "SSR",
      image: "https://images.steamusercontent.com/ugc/1773878663507008617/022BE3A2468B57D765F00679A2592AF3F76EE6B3/"
    },
        {
      name: "Rager 1 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/74/Pickup.png"
    },
        {
      name: "Wolfswagen 1 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/5/5f/Wolfswagen.png"
    },
        {
      name: "Laika 1 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/6d/Laika.png"
    },
        {
      name: "RIS 1 คัน",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/a/ae/Quad_A.png"
    },
        {
      name: "Tractor 1 คัน",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/7a/Tractor.png"
    },
        {
      name: "เครื่องปันไฟใหญ่ 2 เครื่อง",
      rarity: "N",
      image: "https://clan.fastly.steamstatic.com/images//27012442/798434db1520d9e824f841e6ff1f79091fc8113a.jpg"
    },
        {
      name: "Fame Point 100",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/75/Fame_Points_ICO.png"
    },
        {
      name: "Horse 3 ตัว",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ed/Horse_Head.png"
    },
        {
      name: "เกลือกระปุก 1 กล่องเหล็ก",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/77/Salt.png"
    },
        {
      name: "AK47 Engraved 5 กระบอก",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/f8/AK-47.png"
    },
        {
      name: "Fishing Gear ครบชุด 1 ชุด",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ec/ALL_Spincast_Rod.gif"
    },
        {
      name: "Phoenix Tears 5 หลอด",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/0d/PT-29_Rapid_Recovery_Serum.png"
    },
        {
      name: "Fame Point 10000",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/75/Fame_Points_ICO.png"
    },
        {
      name: "ชุดซ่อมปืน 20 อัน",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/f9/Weapon_Cleaning_Kit.png"
    },
        {
      name: "ชุดกันซอมบี้ 1 ตัว",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/a/af/Cursed_Puppet_Suit.png"
    },
        {
      name: "โมดูลเทา 10 อัน",
      rarity: "N",
      image: "https://clan.fastly.steamstatic.com/images//27012442/a117b87dfb1e5fb5a1b1ebdde31a1db186fa44c3.jpg"
    },
        {
      name: "Base Expansion Kit Lv.2 1 อัน",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/dc/Base_Expansion_Kit_Lvl2.png"
    },
        {
      name: "กระสุนยูเรเนี่ยมชนิดใดก็ได้จำนวน 5 กอง",
      rarity: "SR",
      image: "https://st2.depositphotos.com/1039721/7008/v/950/depositphotos_70085493-stock-illustration-rifle-bullets-over-white-background.jpg"
    },
        {
      name: "City Bike 1 คัน",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/08/City_Bike.png"
    },
        {
      name: "C4 Keypad Circuit Board 5 ชิ้น",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/b/b1/C4_Keypad_Circuit_Board.png"
    },
    {
      name: "Cheeseburger MRE 5 ห่อ",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/71/Cheeseburger_MRE.png"
    },
    {
      name: "Gold M1911 5 กระบอก",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/8/82/M1911_Gold.png"
    },
    {
      name: "Boar Head 3 หัว",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/dc/Boar_Head.png"
    },
    {
      name: "โมดูลทอง 10 อัน",
      rarity: "SSR",
      image: "https://clan.fastly.steamstatic.com/images//27012442/a117b87dfb1e5fb5a1b1ebdde31a1db186fa44c3.jpg"
    },
    {
      name: "ชุดซ่อมผ้า 20 อัน",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/9f/Sewing_Kit.png"
    },
    {
      name: "Small Phoenix Tears 5 หลอด (1/1)",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/0d/PT-29_Rapid_Recovery_Serum.png"
    },
    {
      name: "Fame Point 5000",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/75/Fame_Points_ICO.png"
    },
    {
      name: "Base Expansion Kit Lv.1 1 อัน",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/d2/Base_Expansion_Kit_Lvl1.png"
    },
    {
      name: "โมดูลม่วง 10 อัน",
      rarity: "SR",
      image: "https://clan.fastly.steamstatic.com/images//27012442/a117b87dfb1e5fb5a1b1ebdde31a1db186fa44c3.jpg"
    },
    {
      name: "Donkey Head 3 หัว",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/a/a1/Donkey_Head.png"
    },
    {
      name: "โมดูลฟ้า 10 อัน",
      rarity: "R",
      image: "https://clan.fastly.steamstatic.com/images//27012442/a117b87dfb1e5fb5a1b1ebdde31a1db186fa44c3.jpg"
    },
    {
      name: "Lucky Star Cigarettes 10 ซอง",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/0b/Lucky_Star_Cigarettes.png"
    },
    {
      name: "Fame Point 1500",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/7/75/Fame_Points_ICO.png"
    },
    {
      name: "Soap 50 ก้อน",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/65/Soap.png"
    },
    {
      name: "Buck Head 3 หัว",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/64/Buck_Head.png"
    },
    {
      name: "Red Ghoul Energy Drink 10 กระป๋อง",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/5/5a/Red_Ghoul_Energy_Drink.png"
    },
    {
      name: "ลูกตาซอมบี้ 1 ลัง",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/fa/Puppet_Eye.png"
    },
    {
      name: "RPG7 2 กระบอก + กระสุน 50 ลูก",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/c/c6/RPG7.png"
    },
    {
      name: "Gold DEagle 50 5 กระบอก",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/64/DEagle_50_2.png"
    },
    {
      name: "Metal Pipe 5 อัน",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/5/54/Metal_Pipe.png"
    },
    {
      name: "Advanced Lockpick 30 อัน",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/1/11/Advanced_Lockpick.png"
    },
    {
      name: "เหล็ก 1 ลัง",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/8/83/Improvised_Metal_Chest.png"
    },
    {
      name: "C4 Bomb 1 ลูก",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/93/C4_Bomb.png"
    },
    {
      name: "Metal Wheelbarrow 1 คัน",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/da/Metal_Wheelbarrow.png"
    },
    {
      name: "Anti-Personnel Mine 1 ลูก",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/3/30/Anti-Personnel_Mine.png"
    },
    {
      name: "Compound Bow 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/9e/Compound_Bow.png"
    },
    {
      name: "Compound Bow Desert 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/9e/Compound_Bow.png"
    },
        {
      name: "Compound Bow Digital 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/9e/Compound_Bow.png"
    },
        {
      name: "Compound Bow Snow 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/9e/Compound_Bow.png"
    },
        {
      name: "Compound Bow US Scorpion 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/9e/Compound_Bow.png"
    },
        {
      name: "Compound Bow Woodland 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/9e/Compound_Bow.png"
    },
        {
      name: "Blackhawk Crossbow 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/06/BlackHawk_Crossbow.png"
    },
        {
      name: "7.62x39mm AP Box 10 กล่อง",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/67/7.62x39mm_Armor_Piercing_Ammunition_Box.png"
    },
        {
      name: "5.56x45mm AP Box 10 กล่อง",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/e7/5.56x45mm_Armor_Piercing_Ammunition_Box.png"
    },
        {
      name: ".50 BMG AP Box 10 กล่อง",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/9/97/.50_BMG_Armor_Piercing_Ammunition_Box.png"
    },
        {
      name: "Screwdriver 10 อัน",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/1/1d/Screwdriver.png"
    },
        {
      name: "Beef Stew MRE 5 ห่อ",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/63/Stew_MRE.png"
    },
    {
      name: "Tuna Salad MRE 5 ห่อ",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ed/Tuna_Salad_MRE.png"
    },
    {
      name: "Bear 3 ตัว",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/d8/Bear_Head.png"
    },
    {
      name: "Scorpion 40# 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ea/Recurve_Bow.png"
    },
    {
      name: "Cobra 50# 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ea/Recurve_Bow.png"
    },
    {
      name: "Kodiak 60# 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ea/Recurve_Bow.png"
    },
    {
      name: "Predator 70# 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ea/Recurve_Bow.png"
    },
    {
      name: "Mohawk 80# 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ea/Recurve_Bow.png"
    },
    {
      name: "Blackhawk 90# 5 คัน",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/ea/Recurve_Bow.png"
    },
    {
      name: "Vhendya's Katana 5 เล่ม",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/f9/Vhendya%27s_Katana.png"
    },
    {
      name: "Katana 5 เล่ม",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/e/e9/Katana.png"
    },
    {
      name: "M82A1 5 กระบอก",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/2/27/M82A1.png"
    },
    {
      name: "Cruiser 1 คัน",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/1/1b/ALL_cruiser.gif"
    },
    {
      name: "Dirt Bike 1 คัน",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/6/6b/Dirt_Bike.png"
    },
    {
      name: "Mountain Bike 1 คัน",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/1/13/Mountain_Bike_Cinematic_1.jpg"
    },
    {
      name: "Wooden Motorboat 1 ลำ",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/00/Wooden_Motorboat.png"
    },
    {
      name: "Goat Head 3 หัว",
      rarity: "R",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/3/3a/Goat_Head.png"
    },
    {
      name: "C4 Packed 5 ชิ้น",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/da/Packed_C4.png"
    },
    {
      name: "C4 Timer Circuit Board 5 ชิ้น",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/d/d1/C4_Timer_Circuit_Board.png"
    },
    {
      name: "C4 Detonator 5 ชิ้น",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/5/5e/C4_Detonator.png"
    },
    {
      name: "Claymore 1 ลูก",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/0/0c/Claymore.png"
    },
    {
      name: "PROM-1 Mine 1 ลูก",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/b/b8/Prom.png"
    },
    {
      name: "Small Anti-Personnel Mine 1 ลูก",
      rarity: "SSR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/a/a9/Small_Anti-Personnel_Mine.png"
    },
    {
      name: "Grenade 10 ลูก",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/f/fb/Grenade.png"
    },
    {
      name: "Doe Head 3 หัว",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/8/80/Doe_Head.png"
    },
    {
      name: "Wolf Head 3 หัว",
      rarity: "N",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/3/3c/Wolf_Head.png"
    },
    {
      name: "TNT 5 ลูก",
      rarity: "SR",
      image: "https://static.wikia.nocookie.net/scum_gamepedia_en/images/1/1e/TNT.png"
    },
    {
      name: "ให้ยศคลาสได้ 1 ขั้น : 1 คลาส",
      rarity: "SSSR",
      image: "https://cdn-icons-png.flaticon.com/512/5585/5585376.png"
    },
       {
           name: "Kitchen Board (เขียง) 5 อัน",
      rarity: "R",
      image: "https://scum.fandom.com/wiki/Kitchen_Board?file=Kitchen_Board.png"
    },
       {
           name: "Pen (ปากกา) 5 ด้าม",
      rarity: "R",
      image: "https://scum.fandom.com/wiki/Pen?file=Pen.png"
    },
       {
           name: "Candle (เทียน) 5 อัน",
      rarity: "R",
      image: "https://scum.fandom.com/wiki/Candle?file=Candle.png"
    },
       {
           name: "Deer Antlers (เขากวาง) 5 อัน",
      rarity: "SSR",
      image: "https://scum.fandom.com/wiki/Deer_Antlers?file=Deer_Antlers.png"
    },
       {
           name: "Bear Paws (ตีนหมี) 5 อัน",
      rarity: "SSR",
      image: "https://scum.fandom.com/wiki/Bear_Paws?file=Bear_Paws_Back.png"
    }
  ]
};
