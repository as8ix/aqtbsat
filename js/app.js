/**
 * استوديو وَدَق للمقولات | محرك خط ثمانية الذكي للكشيدة والأحرف المرسلة
 * يدعم المعاينة الحية والتصدير الفائق الدقة (1080×1920 و 2160×3840)
 */

// 1. الشعار والمخطوطة الأصلية المفرغة من الصورة المعتمدة بدقة متناهية وبدون خلفية
let ASHEER_LOGO_B64 = (typeof window !== 'undefined' && window.ASHEER_UPLOADED_MASK_B64) ? window.ASHEER_UPLOADED_MASK_B64 : '';
let WADAQ_LOGO_B64 = ASHEER_LOGO_B64;
let T1_QR_BADGE_B64 = (typeof window !== 'undefined' && window.T1_QR_BADGE_B64) ? window.T1_QR_BADGE_B64 : '';
let T1_MAHABBA_MASK_B64 = (typeof window !== 'undefined' && window.T1_MAHABBA_MASK_B64) ? window.T1_MAHABBA_MASK_B64 : '';
let BOOK_DAA_WA_DAWAA_B64 = (typeof window !== 'undefined' && window.BOOK_DAA_WA_DAWAA_B64) ? window.BOOK_DAA_WA_DAWAA_B64 : '';
let BOOK_DAA_TITLE_ONLY_B64 = (typeof window !== 'undefined' && window.BOOK_DAA_TITLE_ONLY_B64) ? window.BOOK_DAA_TITLE_ONLY_B64 : '';
let T6_BALAGHA_LEFT_B64 = (typeof window !== 'undefined' && window.T6_BALAGHA_LEFT_B64) ? window.T6_BALAGHA_LEFT_B64 : '';
let T6_SHAWQI_RIGHT_B64 = (typeof window !== 'undefined' && window.T6_SHAWQI_RIGHT_B64) ? window.T6_SHAWQI_RIGHT_B64 : '';
let T6_FULL_FOOTER_B64 = (typeof window !== 'undefined' && window.T6_FULL_FOOTER_B64) ? window.T6_FULL_FOOTER_B64 : '';
let T8_HEADER_MASK_B64 = (typeof window !== 'undefined' && window.T8_HEADER_MASK_B64) ? window.T8_HEADER_MASK_B64 : '';
let T8_FOOTER_MASK_B64 = (typeof window !== 'undefined' && window.T8_FOOTER_MASK_B64) ? window.T8_FOOTER_MASK_B64 : '';
let MOMIASHI_SIG_B64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAAA9CAYAAADRYJdvAAAOn0lEQVR4nO2d+1Nb1xHHVyDE+2kFMOaROHZeblwnbR7t9Jf2H++002mTtkmTSRzbiUNiMGAbsIx4CASSOif9fDM7t5gIIZAuOt+ZO7q2kHTvOfvd3bO7Z2+mVqtZhI2a2ayZjZhZxcxemNmqme3EsYloBNmGPnW5kDezO2Z208xeMbMeM3tuZt+b2T0z+67VFxiRPnQ6sXJmdsvM3jOzN83smpn1m1nRzObMbAwLttjqC41IFzqdWLewVDNmNmVmV+1/buGhmQ3xNxtm9giCRUTUhS7rXPzGzN6FTGEctiDRLu5gINoCRyBeRETd6FSL9SHECu6eEaj4keDFdY4hjrAGmzSz5RZfc0SK0InEWmBNddvMeiHUNwQrMmb2jpn9ljVXcP+6WXdFRNSNTiTWHKH1K7h9T83sC2eRviXcvoUFC+5hqcXXHJEyZDs0Elgh8reBxfJuXghc/BkyhXVWwcwet/B6I1KITiRWgfB5eH32kjzVkZn9jQhhIFi5BdcZkWJkOrDyYhxLlINcMSgR0XR0IrHaDd2s5QyiR1wCdKIr2E7oJ5CSx93cZM0XkXJEYrUWs+TMpljXrUCu7RZfV8QZEYnVOgxR9DtHZUeF+QgRyEislCMSq7Vu4ChuYLBYCvXnSVZHpBiRWK0d+z4zG3DBixFX/BuRYkRitRYZCn57KQTu5zwi5ejk6vZW44CARdURTCSLSDkisVpLrBLrqhpzkeUIRItIMSKxWodQALzvyqV63BGSxhEpRlxjNT5uoTp+EBJUIErxlJXwwWoZZApBjGFee3ATI1KKSKzT1xmGpO40O4/zkMsg1WNC5V/VuZX/CLevj2jgMK9hnRW3qqQYkVgno4+j3+WbFiDXLMndcaxWqPO7CynCHq+1OsZf66ssvzHIaygQjjhfDHJUmLsQRGoaLiOxvHvWzeEDApXEIOb4TA/nvbxm3ed7yDEFYs3Tzem6q/PrhkxlGs/Uu+O47CxbN7+rI+J8MMLu8DlHLG0fCnPXFFwWYoUBehXBv4KVySCsXRwVXC8vzIYQy0r0QaIslqSGVanw/jhlSHnOxx0JBt0mynrduEOu5zBxPeE6Wo0cymMa9/SIndUrKd5qM2lmH5nZ+9zbCAGkH5Cb7ma1uks7sXoYoNddN6VJBCHnop4VAgUHCLFcsGT+SKTK8DcHbNHf5jvC+wYZSqyrsgjdM6zWM3Ym14Ny4qgxua3OZV1BAN9jbMcYi+Defm1m/2Id2UxkIbGqUHb4Pa90zoJh7umPNBN6EwW2g0Ku0ah1xQWVOpJYN7BS8wQSprAgk9Tg9UKQGoJfcuTyFstbNbl+hibb4SgT9Svx/wqTF/lNuYDfse2jXmGQtTpKuKitDLcH5fGxmf3JzP5gZm8h7OH+HzKuBc6bFWCZ4HdeZx6zKLMl1q3NsCJ3aBL0IYeUZFDCewSdxojKdiSx+hikW6xxRhmkLib/Ga/9CGjGuYBy6zyxKs7t07rKEJpgrZ6gxQq81+d2IecRujLa9f4p+2PIela5RrmGrWwFEITud5AqnCfd7e8Qxp4mEesVWtFpTueZux2E/RptEoKlbBR36CH5DgQWqbwMeEVqnUisXzHxt3BZDhH+JfYyHbkghLdAHrJk5qxPlf/T58oM8ipk2eRzAxBL4fZwbrh/i3VGAwURvZpY0wUNetHoQsB/j2YP45tEFTLtoLzOilkz+8Cte97FHRTexgMZYE4/b8D9u0mru1soBs2XUMT6PoTIh80mVj8muZcBDAJnCFOVyW5kn9AAWmcCgS1hVYLA1hrQbm8wAbewHqto0Xv0B9xgcLoSbp6ifb6yocJ97WH+a1xvv7vn5Hb55xBt0bmfPQja6ilbUcsNNHet1qDFGmU+905pSXII8w0E8A7rVuXnPO4jgM1ouT0PkT+GXO/hinlMsyZSqVc/rmEIonj0oWRlSfV/46y95WL2MU+BcMY8hrXiX83sE1rfvQxdEHPIya0iz5Kj5xD1Z2KNMrAzLgQpP1MRMvm8J/14EkGjv4ZmkqYouuhZsDSnwQjfOc1AhZta56ZWmfSzol5rsQu5VJWejO7Vg7JLEve46vbTNAjtc25xDmuyTKTrJKui9ehVXueRgat8p4TGXI7uH2b2T87Pgl4E/ibHjWNIJQzjkta4rjzr2A2UXz+kmkQ+sk6pDrvoreF1lJ0cBgv1Jff17zqs+VsYCB9lzmCECk7Jb4pYs9zgAjdYcxZLxCowIFtEv07CsEuizrgkqqJpuQYX6N7CZdok91M9g1vk13YDTJhaWgdi/BImnZVZYAxKCJ4syxOuT4W+I8zHDAKpdWIebay8TtEFbR5DptDY9LMmLO5zLkGrVt4nIc99Gn87zX0dMHYjyO2QsyDmvBMFoDZcOuQJxLpbh7GYwYq/5SyfiKX5f+o8l5+IleOPZ48hVpX3a1z0CwTgZbgGQZU4HeHz+1g89fLbkMk8JfTggnW+S1GcayxM97EiSVehnSErJ+UwzSR+kRDgIYgkYRlhvm7jGl9He5ewWG/w+gzB8pZRmyvl9koDbzol4ZuaLjOuDxqctyR2+J4ic7p1zNoniTmuqZd5X+F7RC65+T5XuYPsigQHzr1fwwOrx20WcccTZWwKOu0yJ9v8Tb/8VpXt6DwZKau5yNtJQYWPWHBOMQBH3MQjBuJHbmi9wXXEJhN8D0Fb4IZe4zrnXBRvkTVBuxezlrhGuYLXIIqqAbLc3+suiXnonohy01USyAuYQstu4PfvObdToX0vbNuuMek+57t8foM5a0awQqhhkfO4VsP835RT3MozeswgzKqm0f0dcH1+zazUiO5vDyK/aMDiVt1v7LlcZ9Lrkgvak3WDWYQEh4lomUxrgeO4cOQ87sivmehB186rwCDeRVDOKuhfO41xwG9rrfCuc13usx74e5O07HlBAt2FgMn67mL5B7BGC7yvqOER46DqDz/JeuSrnpai/N0u81dAwIrMkeapgPXQ++f5TLA13EoFiVa4l6yTwTHmdcFFBie4NhmAHddrX+TZSYTPz5oW0PppkO9VoMjnPDWOP+1wyPKj+lDJTZ4mvOKSoY+PiZL1c+N5bnybm3zmBPyrOtcM9SAM1F+cRjIINet89aeuV986E9iuSOatrqKcDp3ln0J5dCWsiwS/zLxI4cjqKAh15JTnhisSXncVIyLXRWLFCe3VROCsF6X5PgIcXFtzFruAK/fQWS4pDslFs/CU39lDpoed++nd5mXu5VDBiwd8aAkXo+pyFdrlKpfFYwg3ZYLJ/cGFvB9xnMcDBY6wRGU01yTEkusw7cil0Gq7QiQ4SLg8e8yFSKeH4mmN+YL3FAhQdbwET1UcVbdgL0KkNY6NNui+u3dCfioEC4y5nWeuS1z7XTySBxf0EPZFFMGg61Gisrku5m9DUeWs82eXOOrFlOuJN4DGe8AFNMs6/RI+g0Sv8jrsokBSChcx6GdBEW27gRtoTht2uUX+c2dp1txa4dBV4PdxrvVJ1iWfRax66xjbAfeZ2w9QACMId1Den7bAE5FLfa6VF/O4LLJWa4QvL7JFcg2L+COuhIIxCnIsp0CQNp1Lo2idtyy6j0U8gNNUdlwGPOGeH2MpvoFQ7ezeN0wsbfy7RqRKUaRW9NDQJsNHLgiwQW7iQQq2OGzh1lzBuo7iHq5CpocEfZqynSGFqKBkvuX88wZKm1JDrBzrqzFXcp9xkcXz8tu1taOH35/ABZTleoqP+wR39F5Knnb/KWR6iMWq4vqtoTDCmqoTMeaeqvkl7u+XaXhwRKPEqrqQ6CA3P+oaonzSgIbNQhxffZ7j+yawkKMuY9/jcgl6oEABcolkaUEYz/9wDGF1fQeny44hQu2DyJA2nGrT5zqKcvklDwq8NMQqoVELTL4KeH0t3z20rcpIzOXEkpsMdSgfo+0ZinSpDGcCLaaw8q4Luy6j8YMLlWa0e7ClWRh3lQyvMLfjzLUqSIpYbZVotTqCee7EkoV45IofB922+BznCyzOVVJTc5lzhSlriYaV2kErUmkLiBb2qi8rk9Mp4votXgJSXXaMOvdOHognlDySbuZVpXBLaSLVWaOCiwi7b96ibdUDDFzGbevWdnhtP+9KbJ2oJnbxilA1Z51UzVFzOZ3HuAfxAdztgf5EtynVI6rj1QDzOuxcPVUAFZnXI+ZWuynS5NafmVg1yotUtV6ATP0MzB5k6XU9HEQmJXJV7JvsQ2Gu7mvf1X9Jg8kFPM9AScQvY8o1GfVJ6nHnbeQSNX9qlWDMuSrPVYigfX+qUWzncrRzfwaxatnyic1myk4rcalB1q7ZQ1d5oBKdittZq2rkF25NFx/K1npk2EOlvoqDjlgjzmVXyU+yuFdFsapsL+CJbDHPaYjkXtjDvaWphlxURxrMuwYiliqPfaHkviOWmrZsp6BC/aKgdIM5j6AVyFNudP0Y69R3DKl2XQtuTyLVJ/5cCnRZ0MyeFxo8Dw3ySIJYqj0sMbCxnfL/Q8XNMyzw1Xo64+rSllhfXrRQikC+ql7u3Bb/1hYVRfdErOeOUJd23s+7mYysThjIiPpxk204t52LrSBRGeFcorwnw6bIi4QeAqF0SzaxLaXoFK3fwtExSGOXpsuOIdysD+mzcIM8j/qE7JBe6GbtqRRHs7dKnIQikTp1CNb/ya0rWYcjEqv9INdZh9asltiUusXr9gWTyiDOIzyRHlx7uYARkVhtiX23n20Ud2rQhaY3ee8h1S2h0LgVCNYqkiklFqubxbrC9upme+Aa8qcuWXhKbLF22ifpHRLs2uldcPmdlZQ1zekoNDPcfla8zfbrOddURInlbcqVHrDFIghVJ2DU9XbQxs2IFCDbRqS6zes8i3WtKw5d0nD9JR1aLyuUQI1IGbraRCvniW6pCFNJ0CPXhSdWXkSkBu1gsbpdC6zn5GXUekuFtk9YsH/fgVvTI1KIdiCW+l7rgV9PXXWGOpaucsTSpohUoF2CF2OU7ehZV3raiXrOtcVFRkRYnfgvoP7DemjSCHsAAAAASUVORK5CYII=";

// الحروف العربية التي تتصل بما بعدها (تقبل وضع كشيدة بعدها)
const DUAL_JOINING = new Set([
  "ب", "ت", "ث", "ج", "ح", "خ", "س", "ش", "ص", "ض",
  "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن",
  "ه", "ي", "ئ", "پ", "چ", "ڤ", "گ"
]);

// الحروف التي تتصل بما قبلها فقط (نهاية مقطع متصل داخل الكلمة)
const RIGHT_ONLY_JOINING = new Set([
  "ا", "أ", "إ", "آ", "ٱ", "د", "ذ", "ر", "ز", "و", "ؤ", "ة", "ى", "ء"
]);

// الحروف التي تقبل الكشيدة قبلها إذا جاءت في نهاية الكلمة أو نهاية مقطع
const ACCEPTS_PREV_JOIN = new Set([
  ...DUAL_JOINING,
  ...RIGHT_ONLY_JOINING
]);

// الحروف التي تدعم "الحرف المرسل / الكاف المبسوطة" (ss01) في خط ثمانية
const SWASH_ENDINGS = new Set([
  "ئ", "ب", "ت", "ث", "س", "ش", "ص", "ض", "ف", "ق", "ك", "م", "ن", "ى", "ي", "ل"
]);

// علامات التشكيل العربية
const HARAKAT_REGEX = /[\u064B-\u065F\u0670]/g;
function isHaraka(ch) {
  if (!ch) return false;
  const code = ch.charCodeAt(0);
  return (code >= 0x064b && code <= 0x065f) || code === 0x0670;
}

// لوحات الألوان الجاهزة
const COLOR_PALETTES = {
  "emerald-sage": {
    bg: "#F5F1E8",
    topCard: "#023222",
    bottomCard: "#5C7265",
    quoteText: "#F5F1E8",
    bodyText: "#F5F1E8",
    logo: "#157A4E",
    highlight: "#D4AF37"
  },
  "athar-cream": {
    bg: "#FAF8F4",
    topCard: "#FAF8F4",
    bottomCard: "#F2EFE9",
    quoteText: "#01322A",
    bodyText: "#01322A",
    logo: "#01322A",
    highlight: "#D59B3E"
  },
  "navy-slate": {
    bg: "#2F4159",
    topCard: "#2F4159",
    bottomCard: "#4A5D73",
    quoteText: "#F6F9FB",
    bodyText: "#F6F9FB",
    logo: "#F6F9FB",
    highlight: "#E5A93C"
  },
  "deep-olive": {
    bg: "#F4F2EC",
    topCard: "#1B2A1E",
    bottomCard: "#6B7766",
    quoteText: "#F4F2EC",
    bodyText: "#F4F2EC",
    logo: "#2D4C34",
    highlight: "#D8A243"
  },
  "burgundy-sand": {
    bg: "#F6F1EB",
    topCard: "#3B141A",
    bottomCard: "#7A5458",
    quoteText: "#F6F1EB",
    bodyText: "#F6F1EB",
    logo: "#5C1D27",
    highlight: "#EAA55D"
  },
  "charcoal-stone": {
    bg: "#F3F1ED",
    topCard: "#181B1A",
    bottomCard: "#575E5B",
    quoteText: "#F3F1ED",
    bodyText: "#F3F1ED",
    logo: "#181B1A",
    highlight: "#22C57E"
  },
  "night-emerald": {
    bg: "#071F16",
    topCard: "#0F3B29",
    bottomCard: "#F5F1E8",
    quoteText: "#F5F1E8",
    bodyText: "#082B1D",
    logo: "#F5F1E8",
    highlight: "#38EF7D"
  },
  "paper-ink": {
    bg: "#FFFFFF",
    topCard: "#FFFFFF",
    bottomCard: "#F7F4EE",
    quoteText: "#0F0F0F",
    bodyText: "#0F0F0F",
    logo: "#0F0F0F",
    highlight: "#991B1B"
  },
  "parchment-balagha": {
    bg: "#F6F3EE",
    topCard: "#F6F3EE",
    bottomCard: "#EDE8DF",
    quoteText: "#233452",
    bodyText: "#233452",
    logo: "#233452",
    highlight: "#882226"
  },
  "parchment-shawqi": {
    bg: "#F5EEDB",
    topCard: "#F5EEDB",
    bottomCard: "#EBE2CD",
    quoteText: "#1E1F24",
    bodyText: "#1E1F24",
    logo: "#1E1F24",
    highlight: "#9B2226"
  }
};

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(212, 175, 55, ${alpha})`;
  const clean = hex.replace("#", "").trim();
  const r = parseInt(clean.substring(0, 2), 16) || 0;
  const g = parseInt(clean.substring(2, 4), 16) || 0;
  const b = parseInt(clean.substring(4, 6), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// الحالة الافتراضية المطابقة تماماً للصورة الرابعة ("وكيف أغفى بليل تسمرين به")
function getInitialState() {
  return {
    activeTemplateId: "4",
    quoteText: "وكيفَ أَغفى\nبليلٍ تسمَرينَ بهِ",
    // إعدادات الكلمات الفردية في العنوان: مفتاح الكلمة حسب (سطر_كلمة)
    quoteWordStyles: {
      "0_0": { swash: true, kashida: 0 },  // وكيفَ -> كاف مبسوطة (ss01)
      "0_1": { swash: true, kashida: 2 },  // أَغفى -> ياء مرسلة (ss01) + كشيدة مائلة
      "1_0": { swash: false, kashida: 0 }, // بليلٍ
      "1_1": { swash: true, kashida: 1 },  // تسمَرينَ -> كشيدة مائلة عند (مـر) + نون مرسلة (ss01)
      "1_2": { swash: false, kashida: 0 }  // بهِ
    },
    poet: "-ابن خفاجة",
    poetLineLength: 340,
    bodyText:
      "الاحتواءُ في هذا البيت ليس قولًا، بل حالٌ يسكن المعنى قبل اللفظ فأن لا يُغمِضَ عينه ما دامت تسهر، وأن لا يستسيغَ شرابًا لا يرويك، هو أن يُنزِلَ حاجته منزلةَ حاجتك ، ويجعل راحتك ميزان راحته هو احتواءٌ يرفض الاكتفاء بالنفس، ويؤمن أن الشبعَ ناقصٌ إن لم يتقاسمه قلبان، وأن السكينة لا تُؤخذ فرادى ، بل تُستعار من طمأنينة من نحب. في هذا البيت يتجلّى الزواجُ شركةَ شعور، لا يطيب فيها ليلٌ وفيه قلقٌ ، ولا تُطلب لذّةٌ إذا غاب عنها الآخر.",
    sigMode: "mask",
    signatureText: "-مومياشي-",
    copyrightText: "COPYRIGHT © M.75T",

    // عناصر القالب الأول (الكرت الكحلي المصمت: «ليس لشيء»)
    t1ShowDiamonds: true,
    t1DiamondSize: 22,
    t1ShowEnglish: true,
    t1EnglishText:
      ",For no reason, but if I were to enter Paradise\nI would love to see you there, so do not leave\nthis path that takes us to God. To see you\nin His gardens—that is my joy, O you whom I love",
    t1EnglishSize: 20,
    t1RightTagMode: "mask",
    t1FooterRight: "محبة",
    t1FooterCenter: "Lover",
    t1FooterLeftAr: "لأجلك",
    t1ShowQr: false,

    // عناصر القالب الخامس (مقتبسات الكتب: «الداء والدواء»)
    t5BookId: "daa-wa-dawaa",
    t5StampMode: "full",
    t5BookTitle: "الدَّاءُ وَالدَّوَاءُ",
    t5BookSubtitle: "تأليف",
    t5BookAuthor: "الإمَامِ أَبِي عَبْدِ اللهِ محَمَّدِ بْنِ أَبِي بَكْرِ بْنِ أَيُّوبَ ابْنِ قَيِّمِ الجَوْزِيَّةِ",
    t5BookYears: "( ٦٩١ - ٧٥١ )",
    t5CustomStampDataUrl: null,
    t5AutoCleanBg: true,
    t5StampScale: 100,
    t5StampX: 0,
    t5StampY: 0,
    t5FirstLineIndent: true,

    // عناصر القالب السادس (قصيدة البلاغة العمودية: «والمرء لا تشقيه إلا نفسه»)
    t6HighlightColor: "#882226",
    t6JustifyLines: true,
    t6PaperTexture: true,
    t6PoemOffsetY: 0,
    t6FooterMode: "balagha-shawqi",
    t6FooterRight: "شوقي",
    t6FooterLeft: "بَلَاغَة",
    t6CustomStampDataUrl: null,
    t6FooterScale: 100,
    t6FooterOffsetY: 0,

    // عناصر القالب السابع (قالب النص البسيط في المنتصف)
    t7AspectRatio: "square",
    t7TextAlign: "center",
    t7LogoPos: "bottom-center",
    t7OffsetY: 0,
    t7ShowFrame: false,

    // عناصر القالب الثامن (لوحة القصيدة العمودية الكلاسيكية: صدر وعجز — «دع ما يضرك»)
    t8HeaderMode: "custom-text",
    t8HeaderText: "دَعْ مَا يَضُرُّكَ وَالتَمِسْ مَا يَنْفَعُ",
    t8HeaderFont: "A Suls",
    t8HeaderSize: 68,
    t8HeaderOffsetY: 0,
    t8ColGap: 140,
    t8ColWidth: 400,
    t8LineSpacing: 78,
    t8JustifyLines: true,
    t8CenterDivider: "none",
    t8PaperTexture: true,
    t8FooterMode: "custom-text",
    t8FooterRight: "مِنْ شِعْرِ أَحْمَد شَوْقِي وَخَطِّ مُحَمَّد مَطَر",
    t8FooterDate: "١٤٤٠ هـ",
    t8FooterScale: 100,
    t8FooterOffsetY: 0,
    t8AspectRatio: "parchment",

    // إعدادات محرك خط ثمانية للكشيدة
    autoKashida: true,
    bodySmartSwash: true,
    extendedFatha: true,
    kashidaIntensity: 85,
    maxKashidaPerWord: 3,
    bodyLastLineAlign: "justify",

    // الخطوط والأحجام
    quoteFont: "Thmanyah Serif Display",
    quoteWeight: "500",
    quoteSize: 100,
    quoteLineHeight: 1.42,
    poetSize: 38,
    quoteWidth: 720,

    bodyFont: "Thmanyah Sans",
    bodyWeight: "300",
    bodySize: 37,
    bodyLineHeight: 2.08,
    bodyWidth: 742,

    // الألوان
    bgColor: "#F5F1E8",
    topCardColor: "#023222",
    bottomCardColor: "#5C7265",
    quoteTextColor: "#F5F1E8",
    bodyTextColor: "#F5F1E8",
    logoColor: "#157A4E",

    // أبعاد البطاقتين وصورة الخلفية للبطاقة الخضراء
    topCardStyle: "card",
    topCardBgDataUrl: null,
    topCardOverlay: 42,
    topCardOverlayGradient: false,
    topCardImgZoom: 100,
    topCardImgX: 0,
    topCardImgY: 0,
    topCardImgBrightness: 100,
    topCardImgContrast: 100,
    topCardImgSaturation: 100,
    topCardImgBlur: 0,
    topCardImgWarmth: 0,
    topCardHeight: 585,
    cardRadius: 64,
    shadowStrength: 45,
    bodyOffsetY: 0,

    // الشعار والزخارف (مع دعم تعدد الشعارات والخط الفاصل بينها)
    logoMode: "wadaq-mask",
    logoScale: 100,
    logoText: "أشير",
    customLogoDataUrl: null,
    extraLogos: [],
    logoDividerLength: 52,
    logoDividerThickness: 2.5,
    logoDividerGap: 26,
    logoDividerColor: "#157A4E",
    logoBgEnabled: false,
    logoBgColor: "#023222",
    logoBgPadding: 22,
    logoBgRadius: 50,
    logoBgOpacity: 100,
    logoShadowTarget: "none",
    logoShadowColor: "#000000",
    logoShadowStrength: 38,
    logoShadowBlur: 18,
    logoShadowOffsetY: 8,
    showTopOrnament: true,
    showBottomOrnament: true
  };
}

let state = getInitialState();
let selectedWordKey = "0_0";
let currentZoom = 0.42;

function getArtboardDimensions() {
  if (state.activeTemplateId === "8") {
    const ar = state.t8AspectRatio || "parchment";
    if (ar === "square") return { W: 1080, H: 1080 };
    if (ar === "portrait") return { W: 1080, H: 1350 };
    if (ar === "story") return { W: 1080, H: 1920 };
    return { W: 1080, H: 1560 };
  }
  if (state.activeTemplateId === "7") {
    const ar = state.t7AspectRatio || "square";
    if (ar === "portrait") return { W: 1080, H: 1350 };
    if (ar === "story") return { W: 1080, H: 1920 };
    return { W: 1080, H: 1080 };
  }
  if (state.activeTemplateId === "1" || state.activeTemplateId === "6") {
    return { W: 1080, H: 1350 };
  }
  if (state.activeTemplateId === "5") {
    return { W: 1080, H: 1080 };
  }
  return { W: 1080, H: 1920 };
}

// صور محمّلة مسبقاً للرسم على الـ Canvas
const loadedImages = {
  wadaqMask: null,
  momiashiMask: null,
  t1QrBadge: null,
  t1MahabbaMask: null,
  bookDaaFullMask: null,
  bookDaaTitleMask: null,
  t6BalaghaLeftMask: null,
  t6ShawqiRightMask: null,
  t6FullFooterImg: null,
  t8HeaderMask: null,
  t8FooterMask: null,
  t6CustomStamp: null,
  t6CustomStampMask: null,
  t5CustomStamp: null,
  customLogo: null,
  topCardBg: null,
  extraLogos: {}
};

// لوحة قياس خلفية (Offscreen Canvas) لقياس الكلمات والأسطر مع تفعيل OpenType
const measureCanvas = document.createElement("canvas");
measureCanvas.width = 2000;
measureCanvas.height = 400;
measureCanvas.dir = "rtl";
measureCanvas.style.position = "fixed";
measureCanvas.style.left = "-9999px";
measureCanvas.style.top = "-9999px";
measureCanvas.style.visibility = "hidden";
document.body.appendChild(measureCanvas);
const measureCtx = measureCanvas.getContext("2d");

/* ==========================================================================
   محرك خط ثمانية الذكي للكشيدة المائلة والأحرف المرسلة
   ========================================================================== */

/**
 * تقسيم الكلمة العربية إلى وحدات (حرف أساسي + التشكيل التابع له)
 */
function splitIntoGraphemes(word) {
  const units = [];
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (isHaraka(ch) && units.length > 0) {
      units[units.length - 1].marks += ch;
    } else {
      units.push({ base: ch, marks: "" });
    }
  }
  return units;
}

/**
 * إيجاد أفضل موضع لإدراج الكشيدة المائلة في الكلمة وفق دليل جماليات خط ثمانية:
 * ١. الأولوية بين الحرف الأخير وما يسبقه (إذا كانا متصلين ولا يشكلان لَام-ألف).
 * ٢. أو قبل حرف منتهٍ داخل الكلمة (مثل: مـر في تسمَرينَ، أو حـال، أو مـيزان).
 */
function findBestKashidaIndex(units) {
  // استثناء علامات الترقيم في آخر الكلمة
  let lastLetterIdx = units.length - 1;
  while (lastLetterIdx >= 0 && /[،؛.؟!:"'«»()\-]/.test(units[lastLetterIdx].base)) {
    lastLetterIdx--;
  }
  if (lastLetterIdx < 1) return -1;

  // ١. فحص ما قبل الحرف الأخير مباشرة (القاعدة الذهبية في دليل خط ثمانية ص8)
  const prevUnit = units[lastLetterIdx - 1];
  const lastUnit = units[lastLetterIdx];
  if (
    DUAL_JOINING.has(prevUnit.base) &&
    ACCEPTS_PREV_JOIN.has(lastUnit.base) &&
    !(prevUnit.base === "ل" && ["ا", "أ", "إ", "آ"].includes(lastUnit.base))
  ) {
    return lastLetterIdx - 1;
  }

  // ٢. فحص المقاطع المتصلة الداخلية (مثل: تسمَـرينَ أو مـيزان) من آخر الكلمة نحو أولها
  for (let i = lastLetterIdx - 1; i >= 0; i--) {
    const u1 = units[i];
    const u2 = units[i + 1];
    if (
      DUAL_JOINING.has(u1.base) &&
      ACCEPTS_PREV_JOIN.has(u2.base) &&
      !(u1.base === "ل" && ["ا", "أ", "إ", "آ"].includes(u2.base))
    ) {
      return i;
    }
  }

  return -1;
}

/**
 * إدراج عدد (count) من الكشيدة المائلة في الموضع الأصيل للكلمة،
 * مع التحقق مما إذا كان الحرف الممدود يحمل فتحة لتفعيل الفتحة الممتدة (ss03..ss07)
 */
function applyKashidaToWord(rawWord, count) {
  if (!count || count <= 0) {
    return { text: rawWord, hasExtendedFatha: false, kashidaCount: 0 };
  }
  // إزالة أي تطويل سابق إذا كنا نعيد التوليد
  const cleanWord = rawWord;
  const units = splitIntoGraphemes(cleanWord);
  const idx = findBestKashidaIndex(units);
  if (idx === -1) {
    return { text: rawWord, hasExtendedFatha: false, kashidaCount: 0 };
  }

  const tatweel = "ـ".repeat(count);
  const targetUnit = units[idx];
  const hasFatha = targetUnit.marks.includes("\u064E");

  let result = "";
  for (let i = 0; i < units.length; i++) {
    result += units[i].base + units[i].marks;
    if (i === idx) {
      result += tatweel;
    }
  }

  return {
    text: result,
    hasExtendedFatha: hasFatha,
    kashidaCount: count
  };
}

/**
 * هل الكلمة مرشحة لتفعيل "الحرف المرسل / الكاف المبسوطة" (ss01)؟
 */
function isWordSwashCandidate(word) {
  const clean = word.replace(HARAKAT_REGEX, "").replace(/[،؛.؟!:"'«»()\-ـ]/g, "");
  if (clean.length < 2) return false;
  const lastChar = clean[clean.length - 1];
  const hasInitMedialKaf = clean.slice(0, -1).includes("ك");
  return SWASH_ENDINGS.has(lastChar) || hasInitMedialKaf;
}

/**
 * بناء سلسلة font-feature-settings للكلمة بناءً على خصائص خط ثمانية
 */
function buildFontFeatureSettings(swash, kashidaCount, hasExtendedFatha, enableExtendedFathaGlobal) {
  const features = ['"liga" 1', '"calt" 1', '"rlig" 1'];
  if (swash) {
    features.push('"ss01" 1', '"salt" 1', '"swsh" 1');
  } else {
    features.push('"ss01" 0', '"salt" 0', '"swsh" 0');
  }

  if (enableExtendedFathaGlobal && hasExtendedFatha && kashidaCount > 0) {
    // ss03 للكشيدة الواحدة، ss04 لاثنتين، ss05 لثلاث، ss06 لأربع، ss07 لخمس
    const setNum = Math.min(7, Math.max(3, kashidaCount + 2));
    features.push(`"ss0${setNum}" 1`);
  }
  return features.join(", ");
}

/**
 * قياس عرض كلمة بدقة على Canvas مع تفعيل خصائص OpenType الخاصة بها
 */
const SINGLE_WEIGHT_FONTS = new Set([
  "Katibeh",
  "Rakkas",
  "Gulzar",
  "Basmalah",
  "Masmak",
  "Tharwat Emara Ruqaa",
  "SF Ruqah Loop",
  "A Suls",
  "Lyon Arabic Display",
  "29LT Zarid Display",
  "Samarqand",
  "Ali Moshref Thulth",
  "Ali Moshref Naskh"
]);

const DUAL_WEIGHT_FONTS = new Set([
  "Amiri",
  "Aref Ruqaa",
  "Scheherazade New"
]);

function getEffectiveFontWeight(fontFamily, requestedWeight) {
  const wNum = Number(requestedWeight) || 400;
  if (SINGLE_WEIGHT_FONTS.has(fontFamily)) {
    return "400";
  }
  if (DUAL_WEIGHT_FONTS.has(fontFamily)) {
    return wNum >= 600 ? "700" : "400";
  }
  return String(requestedWeight || "400");
}

let fontToggleBit = 0;
function applyContextFontWithFeatures(ctx, canvasEl, weight, sizePx, fontFamily, featureSettings) {
  if (canvasEl.style.fontFeatureSettings !== featureSettings) {
    canvasEl.style.fontFeatureSettings = featureSettings;
  }
  const effWeight = getEffectiveFontWeight(fontFamily, weight);
  // تبديل مسافة غير مرئية في نص الخط لإجبار المتصفح على إعادة قراءة font-feature-settings فوراً
  fontToggleBit = 1 - fontToggleBit;
  const pad = fontToggleBit ? " " : "  ";
  ctx.font = `${effWeight}${pad}${sizePx}px "${fontFamily}", serif`;
}

// حاوية خفية لتنشيط جميع الخطوط في الـ DOM وإجبار المتصفح على فك ضغطها فوراً للـ Canvas
const fontPreloadContainer = document.createElement("div");
fontPreloadContainer.style.cssText =
  "position:fixed; left:-9999px; top:-9999px; visibility:hidden; pointer-events:none; opacity:0;";
document.body.appendChild(fontPreloadContainer);

// خريطة الخطوط الثقافية والنادرة لتحميلها وتوحيد اسم عائلتها برمجياً
const RARE_CDN_FONTS = {
  "The year of the camel": "https://cdn.jsdelivr.net/gh/mokhtarbsaid/rare-arabic-fonts/theyearofthecamel/all.min.css",
  "The year of handicrafts": "https://cdn.jsdelivr.net/gh/mokhtarbsaid/rare-arabic-fonts/theyearofhandicrafts/all.min.css",
  "Ali Moshref Thulth": "https://cdn.jsdelivr.net/gh/mokhtarbsaid/rare-arabic-fonts/amoshref-thulth/all.min.css",
  "Ali Moshref Naskh": "https://cdn.jsdelivr.net/gh/mokhtarbsaid/rare-arabic-fonts/amoshref-naskh/all.min.css"
};

const DIRECT_REMOTE_FONTS = {
  "29LT Zarid Display": "https://db.onlinewebfonts.com/t/fd5fc4060a6e4d402fc0c45fad1f852f.woff2",
  "Samarqand": "https://db.onlinewebfonts.com/t/2cf05d7ba7a63edde2035e9c9243f2d2.woff2"
};

const loadedRemoteFamilies = new Set();

async function loadAndNormalizeRareFont(familyName) {
  if (loadedRemoteFamilies.has(familyName)) return;

  // 1. إذا كان من خطوط onlinewebfonts المباشرة (مثل 29LT Zarid Display أو Samarqand)
  if (DIRECT_REMOTE_FONTS[familyName]) {
    loadedRemoteFamilies.add(familyName);
    try {
      const face = new FontFace(familyName, `url("${DIRECT_REMOTE_FONTS[familyName]}")`, {
        weight: "100 900",
        style: "normal"
      });
      await face.load();
      document.fonts.add(face);
    } catch (e) {
      console.warn("Could not load direct remote font:", familyName, e);
    }
    return;
  }

  // 2. إذا كان من حزمة rare-arabic-fonts (مثل خط عام الجمل، عام الحرف، المشرف ثلث، المشرف نسخ)
  const cssUrl = RARE_CDN_FONTS[familyName];
  if (!cssUrl) return;
  loadedRemoteFamilies.add(familyName);

  try {
    const baseUrl = cssUrl.substring(0, cssUrl.lastIndexOf("/") + 1);
    const res = await fetch(cssUrl);
    if (!res.ok) return;
    const cssText = await res.text();

    // استخراج جميع مسارات ملفات الخطوط داخل ملف الـ CSS وتحويلها لروابط كاملة
    const urlMatches = [...cssText.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)];
    const fontUrls = [];
    for (const m of urlMatches) {
      const rawUrl = m[1].trim();
      if (rawUrl.startsWith("data:")) continue;
      const fullUrl = rawUrl.startsWith("http") ? rawUrl : new URL(rawUrl, baseUrl).href;
      fontUrls.push(fullUrl);
    }

    // بناء قاعدة @font-face موحدة تغطي جميع الأوزان (100 إلى 900) بالاسم المطابق للقائمة تماماً
    if (fontUrls.length > 0) {
      const srcList = fontUrls
        .map((u) => {
          if (u.includes(".woff2")) return `url("${u}") format("woff2")`;
          if (u.includes(".woff")) return `url("${u}") format("woff")`;
          if (u.includes(".otf")) return `url("${u}") format("opentype")`;
          return `url("${u}") format("truetype")`;
        })
        .join(", ");

      const styleEl = document.createElement("style");
      styleEl.textContent = `
        @font-face {
          font-family: "${familyName}";
          src: ${srcList};
          font-weight: 100 900;
          font-style: normal;
          font-display: block;
        }
      `;
      document.head.appendChild(styleEl);

      // تحميل أول ملف خط صالح مباشرة في document.fonts لضمان الرسم الفوري على Canvas
      for (const u of fontUrls) {
        if (/\.(woff2?|ttf|otf)(\?|$)/i.test(u)) {
          try {
            const face = new FontFace(familyName, `url("${u}")`, {
              weight: "100 900",
              style: "normal"
            });
            await face.load();
            document.fonts.add(face);
            break;
          } catch {
            // جرب الرابط التالي في حال فشل الأول
          }
        }
      }
    }
  } catch (err) {
    console.warn("Failed normalizing rare font CSS:", familyName, err);
  }
}

async function ensureFontLoaded(fontFamily, weight = "400") {
  if (!fontFamily) return;

  // تحميل وتوحيد الخطوط النادرة والخارجية أولاً إن لزم
  await loadAndNormalizeRareFont(fontFamily);

  const effWeight = getEffectiveFontWeight(fontFamily, weight);

  // إضافة عنصر خفي بالخط المطلوب لإجبار المتصفح على تنشيط الـ @font-face
  const span = document.createElement("span");
  span.style.fontFamily = `"${fontFamily}"`;
  span.style.fontWeight = String(effWeight);
  span.textContent = "أبجد هوز حطي كلمن وكيف أغفى";
  fontPreloadContainer.appendChild(span);

  if (document.fonts && document.fonts.load) {
    try {
      await Promise.all([
        document.fonts.load(`${effWeight} 48px "${fontFamily}"`),
        document.fonts.load(`400 48px "${fontFamily}"`),
        document.fonts.load(`700 48px "${fontFamily}"`)
      ]);
    } catch {
      // تجاهل أي خطأ في حال كان الخط محلياً
    }
  }
}

const FOOTNOTE_MARKER_REGEX = /^([^\(]+)(\([٠-٩0-9]+\))(.*)$/;

function measureStyledWordWidth(wordText, weight, sizePx, fontFamily, featureSettings) {
  if (state.activeTemplateId === "5") {
    const fnMatch = wordText.match(FOOTNOTE_MARKER_REGEX);
    if (fnMatch) {
      applyContextFontWithFeatures(measureCtx, measureCanvas, weight, sizePx, fontFamily, featureSettings);
      const w1 = measureCtx.measureText(fnMatch[1]).width;
      const w3 = fnMatch[3] ? measureCtx.measureText(fnMatch[3]).width : 0;
      const supSize = Math.round(sizePx * 0.62);
      applyContextFontWithFeatures(measureCtx, measureCanvas, weight, supSize, fontFamily, featureSettings);
      const w2 = measureCtx.measureText(fnMatch[2]).width;
      return w1 + w2 + w3;
    }
  }
  applyContextFontWithFeatures(measureCtx, measureCanvas, weight, sizePx, fontFamily, featureSettings);
  return measureCtx.measureText(wordText).width;
}

function drawWordWithFootnoteSuperscript(ctx, targetCanvas, wordText, rightX, lineY, weight, sizePx, fontFamily, featureSettings) {
  const fnMatch = wordText.match(FOOTNOTE_MARKER_REGEX);
  if (!fnMatch) {
    applyContextFontWithFeatures(ctx, targetCanvas, weight, sizePx, fontFamily, featureSettings);
    ctx.fillText(wordText, rightX, lineY);
    return;
  }
  // ١. الكلمة الأساسية قبل رقم الحاشية
  applyContextFontWithFeatures(ctx, targetCanvas, weight, sizePx, fontFamily, featureSettings);
  ctx.fillText(fnMatch[1], rightX, lineY);
  const w1 = ctx.measureText(fnMatch[1]).width;

  // ٢. رقم الحاشية المرتفع (٢)
  const supSize = Math.round(sizePx * 0.62);
  applyContextFontWithFeatures(ctx, targetCanvas, weight, supSize, fontFamily, featureSettings);
  ctx.fillText(fnMatch[2], rightX - w1, lineY - sizePx * 0.34);
  const w2 = ctx.measureText(fnMatch[2]).width;

  // ٣. علامة الترقيم بعد رقم الحاشية (مثل : أو ،) إن وجدت
  if (fnMatch[3]) {
    applyContextFontWithFeatures(ctx, targetCanvas, weight, sizePx, fontFamily, featureSettings);
    ctx.fillText(fnMatch[3], rightX - w1 - w2, lineY);
  }
}

/**
 * تقسيم الفقرة إلى أسطر ثم موازنة كل سطر باستخدام:
 * ١. الأحرف المرسلة الذكية (ss01) في الكلمات غير المتجاورة
 * ٢. الكشيدة المائلة (ـ) قبل الحرف الأخير
 * ٣. توزيع المسافات المتبقية بدقة البكسل
 */
function layoutAndJustifyParagraph(paragraphText, maxWidthPx, options) {
  const {
    fontFamily,
    fontWeight,
    fontSize,
    autoKashida,
    smartSwash,
    extendedFatha,
    kashidaIntensity,
    maxKashidaPerWord,
    lastLineAlign,
    firstLineIndent = 0
  } = options;

  const baseFeatures = buildFontFeatureSettings(false, 0, false, false);
  const spaceWidth = measureStyledWordWidth(" ", fontWeight, fontSize, fontFamily, baseFeatures) || fontSize * 0.26;

  // تقسيم الفقرات والأسطر اليدوية
  const rawParagraphs = paragraphText.split("\n");
  const finalLines = [];

  for (const para of rawParagraphs) {
    const rawTokens = para.trim().split(/\s+/).filter(Boolean);
    if (rawTokens.length === 0) {
      finalLines.push({ words: [], isLastLine: true, spaceGap: spaceWidth, indentRight: 0, lineMaxWidth: maxWidthPx });
      continue;
    }

    // المرحلة ١: تقطيع الأسطر المبدئي (مع مراعاة المسافة البادئة للسطر الأول إن وجدت)
    const wrappedLines = [];
    let currentLine = [];
    let currentWidth = 0;

    for (const token of rawTokens) {
      const w = measureStyledWordWidth(token, fontWeight, fontSize, fontFamily, baseFeatures);
      const addedSpace = currentLine.length > 0 ? spaceWidth : 0;
      const activeMaxW = wrappedLines.length === 0 ? maxWidthPx - firstLineIndent : maxWidthPx;
      if (currentLine.length > 0 && currentWidth + addedSpace + w > activeMaxW) {
        wrappedLines.push(currentLine);
        currentLine = [{ raw: token, text: token, swash: false, kashida: 0, hasFatha: false, width: w, features: baseFeatures }];
        currentWidth = w;
      } else {
        currentLine.push({ raw: token, text: token, swash: false, kashida: 0, hasFatha: false, width: w, features: baseFeatures });
        currentWidth += addedSpace + w;
      }
    }
    if (currentLine.length > 0) {
      wrappedLines.push(currentLine);
    }

    // المرحلة ٢: موازنة كل سطر بالكشيدة المائلة والأحرف المرسلة
    wrappedLines.forEach((lineWords, lineIdx) => {
      const isLast = lineIdx === wrappedLines.length - 1;
      const shouldJustifyLine = !isLast || lastLineAlign === "justify";
      const indentRight = lineIdx === 0 ? firstLineIndent : 0;
      const lineMaxW = maxWidthPx - indentRight;

      if (!shouldJustifyLine || lineWords.length === 0) {
        finalLines.push({
          words: lineWords,
          isLastLine: isLast,
          align: isLast ? lastLineAlign : "justify",
          totalWordsWidth: lineWords.reduce((acc, item) => acc + item.width, 0),
          indentRight,
          lineMaxWidth: lineMaxW
        });
        return;
      }

      const calcLineTotal = () => {
        const wordsW = lineWords.reduce((s, item) => s + item.width, 0);
        const spacesW = Math.max(0, lineWords.length - 1) * spaceWidth;
        return wordsW + spacesW;
      };

      // حساب الفراغ المطلوب سده في السطر
      let deficit = lineMaxW - calcLineTotal();
      const targetFillDeficit = deficit * (kashidaIntensity / 100);

      // أ) تفعيل الأحرف المرسلة (ss01) على كلمة أو كلمتين غير متجاورتين في السطر
      if (smartSwash && kashidaIntensity > 15 && deficit > 12) {
        let lastSwashedIdx = -3;
        let swashCountInLine = 0;
        for (let i = 0; i < lineWords.length; i++) {
          if (swashCountInLine >= 2) break;
          if (i - lastSwashedIdx <= 1) continue; // قاعدة دليل ثمانية ص16: لا تستخدم في كلمتين متجاورتين

          const item = lineWords[i];
          if (isWordSwashCandidate(item.raw)) {
            const testFeat = buildFontFeatureSettings(true, item.kashida, item.hasFatha, extendedFatha);
            const newW = measureStyledWordWidth(item.text, fontWeight, fontSize, fontFamily, testFeat);
            const delta = newW - item.width;
            if (delta > 2 && calcLineTotal() + delta <= lineMaxW + 4) {
              item.swash = true;
              item.width = newW;
              item.features = testFeat;
              lastSwashedIdx = i;
              swashCountInLine++;
            }
          }
        }
      }

      // ب) إدراج الكشيدة المائلة قبل الحرف الأخير في الكلمات المناسبة لسد الفراغ المتبقي
      if (autoKashida && kashidaIntensity > 0) {
        // ترتيب الكلمات المرشحة للكشيدة (نفضل الكلمات الأطول أو المتوسطة غير المجاورة)
        const candidateIndices = [];
        for (let i = 0; i < lineWords.length; i++) {
          const clean = lineWords[i].raw.replace(HARAKAT_REGEX, "");
          if (clean.length >= 3 && !lineWords[i].raw.includes("ـ")) {
            const units = splitIntoGraphemes(lineWords[i].raw);
            if (findBestKashidaIndex(units) !== -1) {
              candidateIndices.push(i);
            }
          }
        }

        // الحد الأقصى لعدد الكلمات الممدودة في السطر الواحد (٢ إلى ٣ كلمات كحد أقصى حسب كثافة المستخدم)
        const maxWordsToStretch = kashidaIntensity > 70 ? 3 : kashidaIntensity > 35 ? 2 : 1;
        const chosenIndices = [];
        for (const idx of candidateIndices) {
          if (chosenIndices.length >= maxWordsToStretch) break;
          // تجنب مد كلمتين متلاصقتين قدر الإمكان
          if (chosenIndices.some((c) => Math.abs(c - idx) === 1) && candidateIndices.length > maxWordsToStretch) {
            continue;
          }
          chosenIndices.push(idx);
        }

        // زيادة الكشيدة بالتدريج (١ ثم ٢ ثم ٣) حتى يمتلئ السطر بنعومة
        let addedWidth = 0;
        for (let kStep = 1; kStep <= maxKashidaPerWord; kStep++) {
          for (const idx of chosenIndices) {
            const item = lineWords[idx];
            const res = applyKashidaToWord(item.raw, kStep);
            if (res.kashidaCount === 0) continue;

            const feat = buildFontFeatureSettings(item.swash, res.kashidaCount, res.hasExtendedFatha, extendedFatha);
            const newW = measureStyledWordWidth(res.text, fontWeight, fontSize, fontFamily, feat);
            const gain = newW - item.width;

            if (gain > 0 && calcLineTotal() + gain <= lineMaxW - 2 && addedWidth + gain <= targetFillDeficit + 35) {
              item.text = res.text;
              item.kashida = res.kashidaCount;
              item.hasFatha = res.hasExtendedFatha;
              item.width = newW;
              item.features = feat;
              addedWidth += gain;
            }
          }
        }
      }

      finalLines.push({
        words: lineWords,
        isLastLine: isLast,
        align: shouldJustifyLine ? "justify" : lastLineAlign,
        totalWordsWidth: lineWords.reduce((acc, item) => acc + item.width, 0),
        indentRight,
        lineMaxWidth: lineMaxW
      });
    });
  }

  return finalLines;
}

/* ==========================================================================
   الرسم على اللوحة (Canvas 2D High-Precision Renderer)
   ========================================================================== */

function drawRoundedRectPath(ctx, x, y, w, h, rTl, rTr, rBr, rBl) {
  ctx.beginPath();
  ctx.moveTo(x + rTl, y);
  ctx.lineTo(x + w - rTr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rTr);
  ctx.lineTo(x + w, y + h - rBr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rBr, y + h);
  ctx.lineTo(x + rBl, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rBl);
  ctx.lineTo(x, y + rTl);
  ctx.quadraticCurveTo(x, y, x + rTl, y);
  ctx.closePath();
}

/**
 * تلوين صورة قناع شفافة (Mask) بأي لون يختاره المستخدم (يدعم Image أو Canvas)
 */
function drawTintedMask(ctx, img, x, y, w, h, colorHex) {
  if (!img) return;
  const srcW = img.naturalWidth || img.width || 0;
  const srcH = img.naturalHeight || img.height || 0;
  if (srcW === 0 || srcH === 0) return;

  const off = document.createElement("canvas");
  off.width = Math.max(1, Math.round(w));
  off.height = Math.max(1, Math.round(h));
  const octx = off.getContext("2d");

  octx.drawImage(img, 0, 0, off.width, off.height);
  octx.globalCompositeOperation = "source-in";
  octx.fillStyle = colorHex;
  octx.fillRect(0, 0, off.width, off.height);

  ctx.drawImage(off, x, y, w, h);
}

/**
 * تفريغ الخلفية البيضاء/الفاتحة تلقائياً من صورة اسم الكتاب المرفوعة وقص الحواف الفارغة
 * حتى تعمل أي صورة مخطوطة يرفعها المستخدم (PNG أو JPG بخلفية بيضاء) كقناع حبر نقي
 */
function createCleanBookStampMask(img) {
  if (!img || !img.naturalWidth || !img.naturalHeight) return null;
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = w;
  tempCanvas.height = h;
  const tctx = tempCanvas.getContext("2d");
  tctx.drawImage(img, 0, 0, w, h);

  const imgData = tctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  // فحص ما إذا كانت الصورة تحتوي أصلاً على شفافية فعلية
  let hasTransparency = false;
  for (let i = 3; i < data.length; i += 16) {
    if (data[i] < 240) {
      hasTransparency = true;
      break;
    }
  }

  let minX = w;
  let minY = h;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      let outAlpha = a;
      if (!hasTransparency) {
        // تحويل السطوع في الصور ذات الخلفية البيضاء إلى شفافية ناعمة للحبر الداكن
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        if (lum >= 242) {
          outAlpha = 0;
        } else {
          const ink = Math.min(1, Math.max(0, (242 - lum) / 185));
          outAlpha = Math.round(Math.pow(ink, 0.9) * 255);
        }
      }

      data[idx] = 0;
      data[idx + 1] = 0;
      data[idx + 2] = 0;
      data[idx + 3] = outAlpha;

      if (outAlpha > 18) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  tctx.putImageData(imgData, 0, 0);

  if (maxX <= minX || maxY <= minY) {
    return tempCanvas;
  }

  const pad = 6;
  const cx = Math.max(0, minX - pad);
  const cy = Math.max(0, minY - pad);
  const cw = Math.min(w - cx, maxX - minX + pad * 2);
  const ch = Math.min(h - cy, maxY - minY + pad * 2);

  const cropped = document.createElement("canvas");
  cropped.width = cw;
  cropped.height = ch;
  cropped.getContext("2d").drawImage(tempCanvas, cx, cy, cw, ch, 0, 0, cw, ch);
  return cropped;
}

function loadT5BookStampFromDataUrl(dataUrl) {
  return new Promise((resolve) => {
    if (!dataUrl) {
      loadedImages.t5CustomStamp = null;
      loadedImages.t5CustomStampMask = null;
      resolve(null);
      return;
    }
    const img = new Image();
    img.onload = () => {
      loadedImages.t5CustomStamp = img;
      loadedImages.t5CustomStampMask = createCleanBookStampMask(img);
      resolve(img);
    };
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });
}

/**
 * رسم أيقونة المعين الهندسية العلوية (⊡)
 */
function drawTopSquareDiamondOrnament(ctx, centerX, centerY, size, colorFill, innerCutoutColor) {
  const half = size / 2;
  const r = size * 0.16;
  ctx.save();
  ctx.fillStyle = colorFill;
  // مربع مع معين مفرّغ فعلياً (evenodd) حتى تظهر الصورة/الخلفية من داخله
  drawRoundedRectPath(ctx, centerX - half, centerY - half, size, size, r, r, r, r);
  const d = half * 0.78;
  ctx.moveTo(centerX, centerY - d);
  ctx.lineTo(centerX - d, centerY);
  ctx.lineTo(centerX, centerY + d);
  ctx.lineTo(centerX + d, centerY);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.restore();
}

/**
 * رسم أيقونة المثلثين المتقابلين السفلية (⋈)
 */
function drawBottomBowtieOrnament(ctx, centerX, centerY, width, height, colorFill) {
  const hw = width / 2;
  const hh = height / 2;
  ctx.save();
  ctx.fillStyle = colorFill;

  // المثلث الأيمن
  ctx.beginPath();
  ctx.moveTo(centerX + hw, centerY - hh);
  ctx.lineTo(centerX + hw, centerY + hh);
  ctx.lineTo(centerX, centerY);
  ctx.closePath();
  ctx.fill();

  // المثلث الأيسر
  ctx.beginPath();
  ctx.moveTo(centerX - hw, centerY - hh);
  ctx.lineTo(centerX - hw, centerY + hh);
  ctx.lineTo(centerX, centerY);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

/**
 * رسم المعينات الهندسية الثلاثة (◆ ◆ ◆) الخاصة بالقالب الأول
 */
function drawThreeDiamondsOrnament(ctx, startLeftX, centerY, radius, gap, colorFill) {
  ctx.save();
  ctx.fillStyle = colorFill;
  for (let i = 0; i < 3; i++) {
    const cx = startLeftX + i * gap;
    ctx.beginPath();
    ctx.moveTo(cx, centerY - radius);
    ctx.lineTo(cx + radius, centerY);
    ctx.lineTo(cx, centerY + radius);
    ctx.lineTo(cx - radius, centerY);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

/**
 * رسم مجموعة الشعارات العلوية (الشعار الأساسي + الشعارات الإضافية + الفواصل + الإطار والظل)
 */
function drawTopRightLogoGroup(ctx, targetCanvas, scaleFactor, logoRightX, centerY) {
  const activeLogoEntries = [];
  if (state.logoMode !== "none") {
    activeLogoEntries.push({
      mode: state.logoMode,
      scale: Number(state.logoScale) || 100,
      text: state.logoText || "أشير",
      color: state.logoColor || "#157A4E",
      imgObj: loadedImages.customLogo
    });
  }
  if (Array.isArray(state.extraLogos)) {
    state.extraLogos.forEach((ex) => {
      if (ex && ex.mode && ex.mode !== "none") {
        activeLogoEntries.push({
          mode: ex.mode,
          scale: Number(ex.scale) || 100,
          text: ex.text || "شعار",
          color: ex.color || state.logoColor || "#157A4E",
          imgObj: loadedImages.extraLogos[ex.id] || null
        });
      }
    });
  }

  if (activeLogoEntries.length === 0) return;

  const shadowTarget = state.logoShadowTarget || "none";
  const applyLogoShadow = (targetType) => {
    if (shadowTarget === targetType || shadowTarget === "both") {
      const hex = (state.logoShadowColor || "#000000").replace("#", "");
      const rVal = parseInt(hex.substring(0, 2), 16) || 0;
      const gVal = parseInt(hex.substring(2, 4), 16) || 0;
      const bVal = parseInt(hex.substring(4, 6), 16) || 0;
      const alpha = (Number(state.logoShadowStrength ?? 38) / 100) * 0.85;
      ctx.shadowColor = `rgba(${rVal}, ${gVal}, ${bVal}, ${alpha.toFixed(2)})`;
      ctx.shadowBlur = Number(state.logoShadowBlur ?? 18) * scaleFactor;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = Number(state.logoShadowOffsetY ?? 8) * scaleFactor;
    } else {
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }
  };

  const measuredLogos = [];
  activeLogoEntries.forEach((entry) => {
    const sc = entry.scale / 100;
    if (entry.mode === "wadaq-mask" && loadedImages.wadaqMask) {
      const nw = loadedImages.wadaqMask.naturalWidth || 552;
      const nh = loadedImages.wadaqMask.naturalHeight || 291;
      const aspect = nh / nw;
      const w = 125 * sc;
      const h = w * aspect;
      measuredLogos.push({ ...entry, w, h });
    } else if (entry.mode === "athar-logo" && loadedImages.atharLogo) {
      const nw = loadedImages.atharLogo.naturalWidth || 560;
      const nh = loadedImages.atharLogo.naturalHeight || 416;
      const aspect = nh / nw;
      const w = 165 * sc;
      const h = w * aspect;
      measuredLogos.push({ ...entry, w, h });
    } else if (entry.mode === "custom-text" && entry.text.trim()) {
      const fontSize = Math.round(58 * sc);
      applyContextFontWithFeatures(
        ctx,
        targetCanvas,
        "700",
        fontSize,
        state.quoteFont,
        '"ss01" 1, "salt" 1'
      );
      const w = Math.max(20, ctx.measureText(entry.text.trim()).width);
      const h = fontSize * 0.82;
      measuredLogos.push({ ...entry, w, h, fontSize });
    } else if (entry.mode === "custom-image" && entry.imgObj) {
      const aspect = entry.imgObj.naturalHeight / entry.imgObj.naturalWidth;
      const w = 130 * sc;
      const h = w * aspect;
      measuredLogos.push({ ...entry, w, h });
    }
  });

  if (measuredLogos.length === 0) return;

  const divGap = Number(state.logoDividerGap ?? 26);
  const divThick = Number(state.logoDividerThickness ?? 2.5);
  const divLen = Number(state.logoDividerLength ?? 52);

  const totalLogosW = measuredLogos.reduce((s, item) => s + item.w, 0);
  const totalDividersW =
    measuredLogos.length > 1 ? (measuredLogos.length - 1) * (divGap * 2 + divThick) : 0;
  const groupTotalW = totalLogosW + totalDividersW;
  const maxLogoH = Math.max(
    ...measuredLogos.map((m) => m.h),
    measuredLogos.length > 1 ? divLen : 0
  );

  if (state.logoBgEnabled) {
    const pad = Number(state.logoBgPadding) || 0;
    const padX = pad * 1.25;
    const padY = pad * 0.85;
    const bx = logoRightX - groupTotalW - padX;
    const by = centerY - maxLogoH / 2 - padY;
    const bw = groupTotalW + padX * 2;
    const bh = maxLogoH + padY * 2;
    const maxR = Math.min(bw, bh) / 2;
    const r = (Number(state.logoBgRadius) / 100) * maxR;

    ctx.save();
    applyLogoShadow("frame");
    const bgHex = (state.logoBgColor || "#023222").replace("#", "");
    const br = parseInt(bgHex.substring(0, 2), 16) || 0;
    const bg = parseInt(bgHex.substring(2, 4), 16) || 0;
    const bb = parseInt(bgHex.substring(4, 6), 16) || 0;
    const bgAlpha = Math.min(1, Math.max(0.01, Number(state.logoBgOpacity ?? 100) / 100));
    ctx.fillStyle = `rgba(${br}, ${bg}, ${bb}, ${bgAlpha.toFixed(2)})`;
    drawRoundedRectPath(ctx, bx, by, bw, bh, r, r, r, r);
    ctx.fill();
    ctx.restore();
  }

  let currentRightX = logoRightX;
  measuredLogos.forEach((m, idx) => {
    const lx = currentRightX - m.w;
    const ly = centerY - m.h / 2;

    ctx.save();
    applyLogoShadow("logo");
    if (m.mode === "wadaq-mask" && loadedImages.wadaqMask) {
      drawTintedMask(ctx, loadedImages.wadaqMask, lx, ly, m.w, m.h, m.color);
    } else if (m.mode === "athar-logo" && loadedImages.atharLogo) {
      drawAtharLogoAdaptive(ctx, lx, ly, m.w, m.h);
    } else if (m.mode === "custom-text") {
      applyContextFontWithFeatures(
        ctx,
        targetCanvas,
        "700",
        m.fontSize,
        state.quoteFont,
        '"ss01" 1, "salt" 1'
      );
      ctx.fillStyle = m.color;
      ctx.textAlign = "right";
      ctx.fillText(m.text.trim(), currentRightX, ly + m.h * 0.86);
    } else if (m.mode === "custom-image" && m.imgObj) {
      ctx.drawImage(m.imgObj, lx, ly, m.w, m.h);
    }
    ctx.restore();

    currentRightX -= m.w;

    if (idx < measuredLogos.length - 1) {
      const lineX = currentRightX - divGap - divThick / 2;
      const lineTopY = centerY - divLen / 2;
      const lineBotY = centerY + divLen / 2;

      ctx.save();
      applyLogoShadow("logo");
      ctx.strokeStyle = state.logoDividerColor || state.logoColor || "#157A4E";
      ctx.lineWidth = divThick;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(lineX, lineTopY);
      ctx.lineTo(lineX, lineBotY);
      ctx.stroke();
      ctx.restore();

      currentRightX -= divGap * 2 + divThick;
    }
  });
}

/**
 * رسم شعار «أثر» مع الريشة الذهبية بذكاء يتكيف مع الخلفيات الفاتحة والداكنة
 */
function drawAtharLogoAdaptive(ctx, x, y, w, h) {
  if (!loadedImages.atharLogo) return;
  const bgHex = (state.topCardColor || "#FAF8F4").replace("#", "");
  const r = parseInt(bgHex.substring(0, 2), 16) || 0;
  const g = parseInt(bgHex.substring(2, 4), 16) || 0;
  const b = parseInt(bgHex.substring(4, 6), 16) || 0;
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (lum < 0.35 && loadedImages.atharWordMask && loadedImages.atharFeatherMask) {
    // على الخلفيات الداكنة: نرسم كلمة «أثر» بلون النص الفاتح مع الحفاظ على الريشة الذهبية الأصلية
    drawTintedMask(ctx, loadedImages.atharWordMask, x, y, w, h, state.quoteTextColor || "#F5F1E8");
    ctx.drawImage(loadedImages.atharFeatherMask, x, y, w, h);
  } else {
    // على الخلفيات الفاتحة: نرسم شعار «أثر» الأصلي الكامل بألوانه المعتمدة (الأخضر الزمردي الداكن + الريشة الذهبية)
    ctx.drawImage(loadedImages.atharLogo, x, y, w, h);
  }
}

/**
 * الدالة الرئيسية لرسم التصميم بالكامل على أي Canvas بأي معامل دقة (scale = 1 أو 2)
 */
function renderDesignToCanvas(targetCanvas, scaleFactor = 1) {
  const { W, H } = getArtboardDimensions();
  targetCanvas.width = W * scaleFactor;
  targetCanvas.height = H * scaleFactor;
  targetCanvas.dir = "rtl";

  const ctx = targetCanvas.getContext("2d");
  ctx.save();
  ctx.scale(scaleFactor, scaleFactor);
  ctx.direction = "rtl";
  ctx.textBaseline = "alphabetic";

  // دالة رسم الصورة داخل مساحة محددة (Cover + تكبير + تحريك + توزين الألوان) ثم طبقة التعتيم اللوني
  const drawTopImageArea = (clipPathFn, areaX, areaY, areaW, areaH) => {
    ctx.save();
    clipPathFn();
    ctx.clip();

    // اللون الأساسي خلف الصورة
    ctx.fillStyle = state.topCardColor;
    ctx.fillRect(areaX, areaY, areaW, areaH);

    const img = loadedImages.topCardBg;
    if (img && img.naturalWidth > 0) {
      const zoom = Math.max(1, Number(state.topCardImgZoom ?? 100) / 100);
      const coverScale = Math.max(areaW / img.naturalWidth, areaH / img.naturalHeight) * zoom;
      const dw = img.naturalWidth * coverScale;
      const dh = img.naturalHeight * coverScale;
      const overflowX = dw - areaW;
      const overflowY = dh - areaH;
      const offX = (Number(state.topCardImgX ?? 0) / 100) * (overflowX / 2);
      const offY = (Number(state.topCardImgY ?? 0) / 100) * (overflowY / 2);
      const dx = areaX - overflowX / 2 + offX;
      const dy = areaY - overflowY / 2 + offY;

      // توزين الصورة: السطوع، التباين، التشبع، التمويه، الدفء
      const filters = [
        `brightness(${Number(state.topCardImgBrightness ?? 100)}%)`,
        `contrast(${Number(state.topCardImgContrast ?? 100)}%)`,
        `saturate(${Number(state.topCardImgSaturation ?? 100)}%)`
      ];
      const blurPx = Number(state.topCardImgBlur ?? 0);
      if (blurPx > 0) filters.push(`blur(${blurPx * scaleFactor}px)`);
      const warmth = Number(state.topCardImgWarmth ?? 0);
      if (warmth > 0) filters.push(`sepia(${Math.min(100, warmth)}%)`);
      if (warmth < 0) filters.push(`hue-rotate(${warmth * 0.4}deg)`);
      ctx.filter = filters.join(" ");

      const bleed = blurPx > 0 ? blurPx * 2 : 0;
      ctx.drawImage(img, dx - bleed, dy - bleed, dw + bleed * 2, dh + bleed * 2);
      ctx.filter = "none";

      // طبقة التعتيم بلون البطاقة لضمان وضوح النص فوق الصورة
      const ov = Number(state.topCardOverlay ?? 42) / 100;
      if (ov > 0) {
        const hex = (state.topCardColor || "#023222").replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16) || 0;
        const g = parseInt(hex.substring(2, 4), 16) || 0;
        const b = parseInt(hex.substring(4, 6), 16) || 0;
        if (state.topCardOverlayGradient) {
          const grad = ctx.createLinearGradient(0, areaY, 0, areaY + areaH);
          grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${(ov * 0.35).toFixed(2)})`);
          grad.addColorStop(0.55, `rgba(${r}, ${g}, ${b}, ${(ov * 0.85).toFixed(2)})`);
          grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${Math.min(1, ov * 1.1).toFixed(2)})`);
          ctx.fillStyle = grad;
        } else {
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${ov.toFixed(2)})`;
        }
        ctx.fillRect(areaX, areaY, areaW, areaH);
      }
    }
    ctx.restore();
  };

  // =========================================================================
  // مسار الرسم الخاص بالقالب الأول («ليس لشيء» - الكرت الكحلي المصمت 1080×1350)
  // =========================================================================
  if (state.activeTemplateId === "1") {
    // ١. خلفية الكرت الكحلي الكاملة (أو مع صورة خلفية إن وجدت)
    drawTopImageArea(
      () => {
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
      },
      0,
      0,
      W,
      H
    );

    // ٢. رسم الشعار في أعلى اليمين
    drawTopRightLogoGroup(ctx, targetCanvas, scaleFactor, 976, 138);

    // ٣. رسم أيقونة المعين الهندسية العلوية (⊡) في أعلى اليسار
    if (state.showTopOrnament) {
      drawTopSquareDiamondOrnament(ctx, 146, 238, 28, state.quoteTextColor, state.topCardColor);
    }

    // ٤. رسم العنوان الرئيسي الضخم («ليس لشيء») في المنتصف مع هامش مريح من الأطراف
    const quoteLines = state.quoteText.split("\n");
    const qSize = Number(state.quoteSize);
    const qBlockWidth = Number(state.quoteWidth) || 780;
    const qLineHeightPx = qSize * Number(state.quoteLineHeight);
    const totalQuoteBlockH = (quoteLines.length - 1) * qLineHeightPx;
    const firstQuoteLineY = 462 - totalQuoteBlockH / 2;

    ctx.fillStyle = state.quoteTextColor;
    ctx.textAlign = "right";

    quoteLines.forEach((rawLine, lineIdx) => {
      const words = rawLine.trim().split(/\s+/).filter(Boolean);
      if (words.length === 0) return;
      const lineY = firstQuoteLineY + lineIdx * qLineHeightPx;

      const buildLineWords = (testSize) =>
        words.map((w, wordIdx) => {
          const key = `${lineIdx}_${wordIdx}`;
          const wStyle = state.quoteWordStyles[key] || { swash: false, kashida: 0, highlight: false };
          const kRes = applyKashidaToWord(w, wStyle.kashida);
          const feat = buildFontFeatureSettings(
            wStyle.swash,
            kRes.kashidaCount,
            kRes.hasExtendedFatha,
            state.extendedFatha
          );
          const width = measureStyledWordWidth(kRes.text, state.quoteWeight, testSize, state.quoteFont, feat);
          return { text: kRes.text, feat, width, highlight: Boolean(wStyle.highlight) };
        });

      let lineQSize = qSize;
      let styledWords = buildLineWords(lineQSize);
      let spaceBetween = lineQSize * 0.14;
      let totalWordsW = styledWords.reduce((s, item) => s + item.width, 0);
      let naturalLineW = totalWordsW + Math.max(0, styledWords.length - 1) * spaceBetween;

      // ضمان عدم تجاوز عرض الكتلة المحدد (ترك هامش مريح من الطرفين الأيمن والأيسر)
      if (naturalLineW > qBlockWidth) {
        lineQSize = Math.max(48, Math.floor(qSize * (qBlockWidth / naturalLineW)));
        styledWords = buildLineWords(lineQSize);
        spaceBetween = lineQSize * 0.14;
        totalWordsW = styledWords.reduce((s, item) => s + item.width, 0);
        naturalLineW = totalWordsW + Math.max(0, styledWords.length - 1) * spaceBetween;
      }

      // توسيط العنوان الرئيسي أفقياً بدقة مع هوامش متساوية من الطرفين
      let cursorRightX = (W + naturalLineW) / 2;
      styledWords.forEach((sw) => {
        applyContextFontWithFeatures(ctx, targetCanvas, state.quoteWeight, lineQSize, state.quoteFont, sw.feat);
        ctx.fillStyle = sw.highlight ? state.t6HighlightColor || "#882226" : state.quoteTextColor;
        ctx.fillText(sw.text, cursorRightX, lineY);
        cursorRightX -= sw.width + spaceBetween;
      });
    });

    // ٤-ب. اسم القائل/الشاعر (إن وُجد في القالب ١)
    if (state.poet && state.poet.trim()) {
      const poetY = firstQuoteLineY + totalQuoteBlockH + 92;
      const poetRightX = (W + Number(state.bodyWidth)) / 2;
      const poetFeat = buildFontFeatureSettings(true, 0, false, false);
      applyContextFontWithFeatures(ctx, targetCanvas, "400", Number(state.poetSize), state.quoteFont, poetFeat);
      ctx.fillStyle = state.quoteTextColor;
      ctx.textAlign = "right";
      ctx.fillText(state.poet.trim(), poetRightX, poetY);
    }

    // ٥. رسم السطر/الفقرة العربية الفرعية أسفل العنوان («ليس لشيء، لكنّي لو دخلتُ الجنّة...»)
    const bodyMaxW = Number(state.bodyWidth);
    const bodyRightX = (W + bodyMaxW) / 2;
    const bSize = Number(state.bodySize);
    const bLineHeightPx = bSize * Number(state.bodyLineHeight);

    const justifiedLines = layoutAndJustifyParagraph(state.bodyText, bodyMaxW, {
      fontFamily: state.bodyFont,
      fontWeight: state.bodyWeight,
      fontSize: bSize,
      autoKashida: state.autoKashida,
      smartSwash: state.bodySmartSwash,
      extendedFatha: state.extendedFatha,
      kashidaIntensity: Number(state.kashidaIntensity),
      maxKashidaPerWord: Number(state.maxKashidaPerWord),
      lastLineAlign: state.bodyLastLineAlign
    });

    const bodyStartY = 640 + Number(state.bodyOffsetY);
    ctx.fillStyle = state.bodyTextColor;
    ctx.textAlign = "right";

    justifiedLines.forEach((lineObj, idx) => {
      const lineY = bodyStartY + idx * bLineHeightPx;
      const words = lineObj.words;
      if (words.length === 0) return;

      if (words.length === 1 || lineObj.align === "right") {
        let curX = bodyRightX;
        const sp = bSize * 0.26;
        words.forEach((w) => {
          applyContextFontWithFeatures(ctx, targetCanvas, state.bodyWeight, bSize, state.bodyFont, w.features);
          ctx.fillText(w.text, curX, lineY);
          curX -= w.width + sp;
        });
      } else if (lineObj.align === "center") {
        const sp = bSize * 0.26;
        const totalLineW = lineObj.totalWordsWidth + (words.length - 1) * sp;
        let curX = (W + totalLineW) / 2;
        words.forEach((w) => {
          applyContextFontWithFeatures(ctx, targetCanvas, state.bodyWeight, bSize, state.bodyFont, w.features);
          ctx.fillText(w.text, curX, lineY);
          curX -= w.width + sp;
        });
      } else {
        const gap = (bodyMaxW - lineObj.totalWordsWidth) / (words.length - 1);
        let curX = bodyRightX;
        words.forEach((w) => {
          applyContextFontWithFeatures(ctx, targetCanvas, state.bodyWeight, bSize, state.bodyFont, w.features);
          ctx.fillText(w.text, curX, lineY);
          curX -= w.width + gap;
        });
      }
    });

    // ٦. رسم المعينات الهندسية الثلاثة (◆ ◆ ◆) على اليسار
    if (state.t1ShowDiamonds) {
      const dSize = Number(state.t1DiamondSize) || 22;
      drawThreeDiamondsOrnament(ctx, 166, 822, dSize, dSize * 4, state.quoteTextColor);
    }

    // ٧. رسم الفقرة الإنجليزية الموازية على اليسار
    if (state.t1ShowEnglish && state.t1EnglishText && state.t1EnglishText.trim()) {
      ctx.save();
      ctx.direction = "ltr";
      ctx.textAlign = "left";
      const engSize = Number(state.t1EnglishSize) || 20;
      const engLineH = engSize * 1.65;
      ctx.font = `300 ${engSize}px "Thmanyah Sans", sans-serif`;
      ctx.fillStyle = state.bodyTextColor;
      ctx.globalAlpha = 0.94;
      const engLines = state.t1EnglishText.split("\n");
      const engStartX = 144;
      const engStartY = 946;
      engLines.forEach((eline, eIdx) => {
        ctx.fillText(eline, engStartX, engStartY + eIdx * engLineH);
      });
      ctx.restore();
    }

    // ٨. رسم أيقونة المثلثين المتقابلين (⋈) فوق الختم الدائري على اليمين
    if (state.showBottomOrnament) {
      drawBottomBowtieOrnament(ctx, 908, 1082, 22, 19, state.bodyTextColor);
    }

    // ٩. رسم شريط الفوتر الرباعي السفلي (IG @ M.75T | لأجلك | Lover | محبة) بدون الباركود
    const footerY = 1200;

    // ٩-أ: أقصى اليسار (IG @ M.75T)
    if (state.copyrightText && state.copyrightText.trim()) {
      ctx.save();
      ctx.direction = "ltr";
      ctx.textAlign = "left";
      ctx.font = `400 18px "Thmanyah Sans", sans-serif`;
      ctx.fillStyle = state.bodyTextColor;
      ctx.letterSpacing = "0.6px";
      ctx.fillText(state.copyrightText.trim(), 144, footerY);
      ctx.restore();
    }

    // ٩-ب: الكلمة اليسرى العربية («لأجلك»)
    if (state.t1FooterLeftAr && state.t1FooterLeftAr.trim()) {
      ctx.save();
      ctx.direction = "rtl";
      ctx.textAlign = "center";
      applyContextFontWithFeatures(ctx, targetCanvas, "400", 21, state.bodyFont, '"liga" 1');
      ctx.fillStyle = state.bodyTextColor;
      ctx.fillText(state.t1FooterLeftAr.trim(), 398, footerY);
      ctx.restore();
    }

    // ٩-ج: الكلمة الوسطى («Lover»)
    if (state.t1FooterCenter && state.t1FooterCenter.trim()) {
      ctx.save();
      ctx.direction = "ltr";
      ctx.textAlign = "center";
      ctx.font = `400 19px "Thmanyah Sans", sans-serif`;
      ctx.fillStyle = state.bodyTextColor;
      ctx.fillText(state.t1FooterCenter.trim(), 654, footerY);
      ctx.restore();
    }

    // ٩-د: العبارة اليمنى في أقصى اليمين («محبة» بالمخطوطة الأصلية أو كنص) بمحاذاة الطرف الأيمن للتصميم
    if (state.t1RightTagMode === "mask" && loadedImages.t1MahabbaMask) {
      const mw = 60;
      const mh = 60 * (66 / 100);
      drawTintedMask(ctx, loadedImages.t1MahabbaMask, 913 - mw, footerY - mh * 0.72, mw, mh, state.bodyTextColor);
    } else if (state.t1RightTagMode === "text" && state.t1FooterRight && state.t1FooterRight.trim()) {
      ctx.save();
      ctx.direction = "rtl";
      ctx.textAlign = "right";
      applyContextFontWithFeatures(ctx, targetCanvas, "400", 26, "Aref Ruqaa", '"liga" 1');
      ctx.fillStyle = state.bodyTextColor;
      ctx.fillText(state.t1FooterRight.trim(), 913, footerY);
      ctx.restore();
    }

    ctx.restore();
    return;
  }

  // =========================================================================
  // مسار الرسم الخاص بالقالب الخامس (مقتبسات الكتب: «الداء والدواء» 1080×1080)
  // =========================================================================
  if (state.activeTemplateId === "5") {
    // ١. خلفية صفحة الكتاب البيضاء (أو مع صورة خلفية ورقية إن رُفعت)
    drawTopImageArea(
      () => {
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
      },
      0,
      0,
      W,
      H
    );

    // ٢. رسم الشعار في أعلى اليمين إذا اختار المستخدم إظهاره
    if (state.logoMode !== "none") {
      drawTopRightLogoGroup(ctx, targetCanvas, scaleFactor, 1004, 88);
    }

    // ٣. رسم الزخرفة العلوية إن فعلها المستخدم
    if (state.showTopOrnament) {
      drawTopSquareDiamondOrnament(ctx, 112, 120, 26, state.bodyTextColor, state.topCardColor);
    }

    // ٤. رسم فقرة المقتبس من الكتاب (مع المسافة البادئة للسطر الأول وأرقام الحواشي المرتفعة)
    const bodyMaxW = Number(state.bodyWidth) || 930;
    const bodyRightX = (W + bodyMaxW) / 2;
    const bSize = Number(state.bodySize) || 37;
    const bLineHeightPx = bSize * Number(state.bodyLineHeight || 1.62);
    const indentPx = state.t5FirstLineIndent ? 62 : 0;

    const justifiedLines = layoutAndJustifyParagraph(state.bodyText, bodyMaxW, {
      fontFamily: state.bodyFont,
      fontWeight: state.bodyWeight,
      fontSize: bSize,
      autoKashida: state.autoKashida,
      smartSwash: state.bodySmartSwash,
      extendedFatha: state.extendedFatha,
      kashidaIntensity: Number(state.kashidaIntensity),
      maxKashidaPerWord: Number(state.maxKashidaPerWord),
      lastLineAlign: state.bodyLastLineAlign,
      firstLineIndent: indentPx
    });

    const bodyStartY = 248 + Number(state.bodyOffsetY || 0);
    ctx.fillStyle = state.bodyTextColor;
    ctx.textAlign = "right";

    justifiedLines.forEach((lineObj, idx) => {
      const lineY = bodyStartY + idx * bLineHeightPx;
      const words = lineObj.words;
      if (words.length === 0) return;

      const lineRightStart = bodyRightX - (lineObj.indentRight || 0);
      const lineAvailW = lineObj.lineMaxWidth || bodyMaxW;

      if (words.length === 1 || lineObj.align === "right") {
        let curX = lineRightStart;
        const sp = bSize * 0.27;
        words.forEach((w) => {
          drawWordWithFootnoteSuperscript(
            ctx,
            targetCanvas,
            w.text,
            curX,
            lineY,
            state.bodyWeight,
            bSize,
            state.bodyFont,
            w.features
          );
          curX -= w.width + sp;
        });
      } else if (lineObj.align === "center") {
        const sp = bSize * 0.27;
        const totalLineW = lineObj.totalWordsWidth + (words.length - 1) * sp;
        let curX = (W + totalLineW) / 2;
        words.forEach((w) => {
          drawWordWithFootnoteSuperscript(
            ctx,
            targetCanvas,
            w.text,
            curX,
            lineY,
            state.bodyWeight,
            bSize,
            state.bodyFont,
            w.features
          );
          curX -= w.width + sp;
        });
      } else {
        const gap = (lineAvailW - lineObj.totalWordsWidth) / (words.length - 1);
        let curX = lineRightStart;
        words.forEach((w) => {
          drawWordWithFootnoteSuperscript(
            ctx,
            targetCanvas,
            w.text,
            curX,
            lineY,
            state.bodyWeight,
            bSize,
            state.bodyFont,
            w.features
          );
          curX -= w.width + gap;
        });
      }
    });

    // ٥. رسم مخطوطة عنوان الكتاب وبيانات المؤلف (مطابقة لموضع وأبعاد «الداء والدواء» في الأصل)
    const sc = (Number(state.t5StampScale) || 100) / 100;
    const stampCenterX = 357 + Number(state.t5StampX || 0);
    const stampTopY = 569 + Number(state.t5StampY || 0);
    const stampMode = state.t5StampMode || "full";

    const drawCustomAuthorLines = (startY) => {
      ctx.save();
      ctx.fillStyle = state.bodyTextColor;
      ctx.textAlign = "center";
      ctx.direction = "rtl";

      let curAuthorY = startY;
      if (state.t5BookSubtitle && state.t5BookSubtitle.trim()) {
        applyContextFontWithFeatures(ctx, targetCanvas, "400", Math.round(23 * sc), "Amiri", '"liga" 1');
        ctx.fillText(state.t5BookSubtitle.trim(), stampCenterX, curAuthorY);
        curAuthorY += Math.round(35 * sc);
      }
      if (state.t5BookAuthor && state.t5BookAuthor.trim()) {
        applyContextFontWithFeatures(ctx, targetCanvas, "700", Math.round(25 * sc), "Amiri", '"liga" 1');
        ctx.fillText(state.t5BookAuthor.trim(), stampCenterX, curAuthorY);
        curAuthorY += Math.round(35 * sc);
      }
      if (state.t5BookYears && state.t5BookYears.trim()) {
        applyContextFontWithFeatures(ctx, targetCanvas, "400", Math.round(21 * sc), "Amiri", '"liga" 1');
        ctx.fillText(state.t5BookYears.trim(), stampCenterX, curAuthorY);
      }
      ctx.restore();
    };

    const hasCustomBookImg =
      (state.t5BookId === "custom-image" || Boolean(state.t5CustomStampDataUrl)) && loadedImages.t5CustomStamp;
    const presetBookImg =
      !hasCustomBookImg &&
      loadedImages.presetBooks &&
      (state.t5BookId === "mukhtasar-minhaj" && (stampMode === "title-only" || stampMode === "custom-author")
        ? loadedImages.presetBooks["mukhtasar-minhaj-title"] || loadedImages.presetBooks["mukhtasar-minhaj"]
        : loadedImages.presetBooks[state.t5BookId]);

    if (state.t5BookId === "daa-wa-dawaa" && !hasCustomBookImg) {
      if (stampMode === "full" && loadedImages.bookDaaFullMask) {
        const sw = 490 * sc;
        const sh = 340 * sc;
        drawTintedMask(
          ctx,
          loadedImages.bookDaaFullMask,
          stampCenterX - sw / 2,
          stampTopY,
          sw,
          sh,
          state.bodyTextColor
        );
      } else if (loadedImages.bookDaaTitleMask) {
        const sw = 490 * sc;
        const sh = 188 * sc;
        drawTintedMask(
          ctx,
          loadedImages.bookDaaTitleMask,
          stampCenterX - sw / 2,
          stampTopY,
          sw,
          sh,
          state.bodyTextColor
        );
        if (stampMode === "custom-author") {
          drawCustomAuthorLines(stampTopY + sh + Math.round(40 * sc));
        }
      }
    } else if (presetBookImg) {
      const srcW = presetBookImg.naturalWidth || presetBookImg.width || 1;
      const srcH = presetBookImg.naturalHeight || presetBookImg.height || 1;
      const aspect = srcH / srcW;
      // موازنة عرض المخطوطة لتناسب المساحة السفلية بأناقة سواء كانت عريضة أو طولية
      const baseW = aspect > 1.15 ? 340 : 475;
      const sw = baseW * sc;
      const sh = sw * aspect;
      drawTintedMask(
        ctx,
        presetBookImg,
        stampCenterX - sw / 2,
        stampTopY,
        sw,
        sh,
        state.bodyTextColor
      );
      if (stampMode === "custom-author") {
        drawCustomAuthorLines(stampTopY + sh + Math.round(38 * sc));
      }
    } else if (hasCustomBookImg) {
      const useCleanMask = state.t5AutoCleanBg !== false && loadedImages.t5CustomStampMask;
      const srcEl = useCleanMask ? loadedImages.t5CustomStampMask : loadedImages.t5CustomStamp;
      const srcW = srcEl.naturalWidth || srcEl.width || 1;
      const srcH = srcEl.naturalHeight || srcEl.height || 1;
      const aspect = srcH / srcW;
      const sw = 480 * sc;
      const sh = sw * aspect;
      if (useCleanMask) {
        drawTintedMask(ctx, srcEl, stampCenterX - sw / 2, stampTopY, sw, sh, state.bodyTextColor);
      } else {
        ctx.drawImage(srcEl, stampCenterX - sw / 2, stampTopY, sw, sh);
      }
      if (stampMode === "custom-author") {
        drawCustomAuthorLines(stampTopY + sh + Math.round(38 * sc));
      }
    } else {
      // كتاب مخصص مكتوب بالخط (أو كتاب محفوظ نصي من قائمة الكتب المخصصة)
      ctx.save();
      ctx.fillStyle = state.bodyTextColor;
      ctx.textAlign = "center";
      ctx.direction = "rtl";
      const titleFontSize = Math.round(98 * sc);
      applyContextFontWithFeatures(
        ctx,
        targetCanvas,
        "700",
        titleFontSize,
        "Ali Moshref Thulth",
        '"ss01" 1, "liga" 1'
      );
      ctx.fillText((state.t5BookTitle || "الدَّاءُ وَالدَّوَاءُ").trim(), stampCenterX, stampTopY + Math.round(120 * sc));
      ctx.restore();

      if (stampMode !== "title-only") {
        drawCustomAuthorLines(stampTopY + Math.round(188 * sc));
      }
    }

    ctx.restore();
    return;
  }

  // =========================================================================
  // مسار الرسم الخاص بالقالب السادس (قصيدة البلاغة العمودية: «والمرء لا تشقيه» 1080×1350)
  // =========================================================================
  if (state.activeTemplateId === "6") {
    // ١. خلفية الورق العاجي المعتّق (أو صورة خلفية مرفوعة)
    drawTopImageArea(
      () => {
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
      },
      0,
      0,
      W,
      H
    );

    // ١-ب. ملمس الورق العاجي التراثي الناعم (Paper Texture & Soft Vignette)
    if (state.t6PaperTexture !== false && !loadedImages.topCardBg) {
      ctx.save();
      const radGrad = ctx.createRadialGradient(W * 0.5, H * 0.48, W * 0.15, W * 0.5, H * 0.5, W * 0.85);
      radGrad.addColorStop(0, "rgba(255, 253, 248, 0.22)");
      radGrad.addColorStop(0.7, "rgba(235, 229, 218, 0.08)");
      radGrad.addColorStop(1, "rgba(204, 195, 180, 0.24)");
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, W, H);

      if (!window._asheerParchmentPattern) {
        const pCan = document.createElement("canvas");
        pCan.width = 180;
        pCan.height = 180;
        const pCtx = pCan.getContext("2d");
        const imgData = pCtx.createImageData(180, 180);
        const d = imgData.data;
        let seed = 1337;
        for (let i = 0; i < d.length; i += 4) {
          seed = (seed * 16807) % 2147483647;
          const v = (seed & 255) > 128 ? 195 : 115;
          d[i] = v;
          d[i + 1] = v - 5;
          d[i + 2] = v - 12;
          d[i + 3] = 9;
        }
        pCtx.putImageData(imgData, 0, 0);
        window._asheerParchmentPattern = pCan;
      }
      const pat = ctx.createPattern(window._asheerParchmentPattern, "repeat");
      if (pat) {
        ctx.fillStyle = pat;
        ctx.fillRect(0, 0, W, H);
      }
      ctx.restore();
    }

    // ٢. رسم الشعار في أعلى اليمين فقط إذا اختار المستخدم إظهاره
    if (state.logoMode !== "none") {
      drawTopRightLogoGroup(ctx, targetCanvas, scaleFactor, 986, 108);
    }

    // ٣. رسم الزخرفة العلوية إن فعلها المستخدم
    if (state.showTopOrnament) {
      drawTopSquareDiamondOrnament(ctx, 136, 130, 26, state.quoteTextColor, state.topCardColor);
    }

    // ٤. رسم شطور القصيدة العمودية وسط اللوحة مع دعم تلوين الكلمات الفردية وموازنة عرض العمود
    const rawLines = state.quoteText.split("\n").map((l) => l.trim()).filter(Boolean);
    const qSize = Number(state.quoteSize) || 78;
    const qLineHeightPx = qSize * Number(state.quoteLineHeight || 1.92);
    const qBlockWidth = Number(state.quoteWidth) || 595;
    const highlightHex = state.t6HighlightColor || "#882226";

    const totalPoemBlockH = Math.max(0, rawLines.length - 1) * qLineHeightPx;
    const poemCenterY = 632 + Number(state.t6PoemOffsetY || 0);
    const firstLineY = poemCenterY - totalPoemBlockH / 2 + qSize * 0.34;

    ctx.textAlign = "right";
    ctx.direction = "rtl";

    rawLines.forEach((rawLine, lineIdx) => {
      const words = rawLine.split(/\s+/).filter(Boolean);
      if (words.length === 0) return;
      const lineY = firstLineY + lineIdx * qLineHeightPx;

      const buildLineWords = (testSize) =>
        words.map((w, wordIdx) => {
          const key = `${lineIdx}_${wordIdx}`;
          const wStyle = state.quoteWordStyles[key] || { swash: false, kashida: 0, highlight: false };
          const kRes = applyKashidaToWord(w, wStyle.kashida || 0);
          const feat = buildFontFeatureSettings(
            Boolean(wStyle.swash),
            kRes.kashidaCount,
            kRes.hasExtendedFatha,
            state.extendedFatha
          );
          const width = measureStyledWordWidth(kRes.text, state.quoteWeight, testSize, state.quoteFont, feat);
          return {
            text: kRes.text,
            feat,
            width,
            highlight: Boolean(wStyle.highlight)
          };
        });

      let lineQSize = qSize;
      let styledWords = buildLineWords(lineQSize);
      const minNaturalSpace = lineQSize * 0.22;
      let totalWordsW = styledWords.reduce((s, item) => s + item.width, 0);
      let minLineW = totalWordsW + Math.max(0, styledWords.length - 1) * minNaturalSpace;

      // إذا كان السطر أعرض من العمود المحدد، نصغر حجم خط السطر قليلاً ليتسع داخل العمود بدقة
      if (minLineW > qBlockWidth) {
        lineQSize = Math.max(38, Math.floor(qSize * (qBlockWidth / minLineW)));
        styledWords = buildLineWords(lineQSize);
        totalWordsW = styledWords.reduce((s, item) => s + item.width, 0);
        minLineW = totalWordsW + Math.max(0, styledWords.length - 1) * (lineQSize * 0.22);
      }

      let spaceBetween = lineQSize * 0.28;
      let actualLineW = totalWordsW + Math.max(0, styledWords.length - 1) * spaceBetween;

      if (state.t6JustifyLines !== false && styledWords.length > 1) {
        const targetGap = (qBlockWidth - totalWordsW) / (styledWords.length - 1);
        spaceBetween = Math.max(lineQSize * 0.16, Math.min(targetGap, lineQSize * 0.92));
        actualLineW = totalWordsW + (styledWords.length - 1) * spaceBetween;
      }

      let cursorRightX = (W + actualLineW) / 2;
      styledWords.forEach((sw) => {
        applyContextFontWithFeatures(ctx, targetCanvas, state.quoteWeight, lineQSize, state.quoteFont, sw.feat);
        ctx.fillStyle = sw.highlight ? highlightHex : state.quoteTextColor;
        ctx.fillText(sw.text, cursorRightX, lineY);
        cursorRightX -= sw.width + spaceBetween;
      });
    });

    // ٥. رسم التوقيع السفلي في أسفل اللوحة («ختم | بَلَاغَة»)
    const footerMode = state.t6FooterMode || "balagha-shawqi";
    if (footerMode !== "none") {
      const fScale = (Number(state.t6FooterScale) || 100) / 100;
      const footerCenterY = 1236 + Number(state.t6FooterOffsetY || 0);
      const centerX = W / 2 + 12; // موازنة بصرية للمنتصف
      const gapFromBar = 32 * fScale;

      // رسم الخط العمودي الفاصل (|) باللون الأحمر القرمزي المميز
      ctx.save();
      ctx.strokeStyle = highlightHex;
      ctx.lineWidth = Math.max(2, 3.6 * fScale);
      ctx.lineCap = "round";
      const barHalfH = 21 * fScale;
      ctx.beginPath();
      ctx.moveTo(centerX, footerCenterY - barHalfH);
      ctx.lineTo(centerX, footerCenterY + barHalfH);
      ctx.stroke();
      ctx.restore();

      // الجانب الأيسر (يسار الفاصل: مخطوطة «بَلَاغَة» أو نص مخصص)
      const leftText = (state.t6FooterLeft ?? "بَلَاغَة").trim();
      const useBalaghaMask =
        (footerMode === "balagha-shawqi" || footerMode === "asheer-balagha") &&
        (leftText === "" || leftText === "بَلَاغَة" || leftText === "بلاغة") &&
        loadedImages.t6BalaghaLeftMask;

      if (useBalaghaMask) {
        const srcW = loadedImages.t6BalaghaLeftMask.naturalWidth || 160;
        const srcH = loadedImages.t6BalaghaLeftMask.naturalHeight || 90;
        const bw = 114 * fScale;
        const bh = bw * (srcH / srcW);
        drawTintedMask(
          ctx,
          loadedImages.t6BalaghaLeftMask,
          centerX - gapFromBar - bw,
          footerCenterY - bh * 0.54,
          bw,
          bh,
          state.quoteTextColor
        );
      } else if (leftText) {
        ctx.save();
        ctx.direction = "rtl";
        ctx.textAlign = "right";
        ctx.fillStyle = state.quoteTextColor;
        applyContextFontWithFeatures(
          ctx,
          targetCanvas,
          "700",
          Math.round(44 * fScale),
          "Amiri",
          '"ss01" 1, "liga" 1'
        );
        ctx.fillText(leftText, centerX - gapFromBar, footerCenterY + 14 * fScale);
        ctx.restore();
      }

      // الجانب الأيمن (يمين الفاصل: ختم شوقي الأصلي / شعار أشير / ختم مرفوع / نص مخصص)
      if (footerMode === "balagha-shawqi" && loadedImages.t6ShawqiRightMask) {
        const srcW = loadedImages.t6ShawqiRightMask.naturalWidth || 110;
        const srcH = loadedImages.t6ShawqiRightMask.naturalHeight || 96;
        const rw = 82 * fScale;
        const rh = rw * (srcH / srcW);
        drawTintedMask(
          ctx,
          loadedImages.t6ShawqiRightMask,
          centerX + gapFromBar,
          footerCenterY - rh * 0.52,
          rw,
          rh,
          state.quoteTextColor
        );
      } else if (footerMode === "asheer-balagha" && loadedImages.wadaqMask) {
        const srcW = loadedImages.wadaqMask.naturalWidth || 200;
        const srcH = loadedImages.wadaqMask.naturalHeight || 110;
        const rw = 96 * fScale;
        const rh = rw * (srcH / srcW);
        drawTintedMask(
          ctx,
          loadedImages.wadaqMask,
          centerX + gapFromBar,
          footerCenterY - rh * 0.52,
          rw,
          rh,
          state.quoteTextColor
        );
      } else if (footerMode === "custom-stamp" && (loadedImages.t6CustomStampMask || loadedImages.t6CustomStamp)) {
        const stampEl = loadedImages.t6CustomStampMask || loadedImages.t6CustomStamp;
        const srcW = stampEl.naturalWidth || stampEl.width || 100;
        const srcH = stampEl.naturalHeight || stampEl.height || 100;
        const rw = 88 * fScale;
        const rh = rw * (srcH / srcW);
        drawTintedMask(
          ctx,
          stampEl,
          centerX + gapFromBar,
          footerCenterY - rh * 0.52,
          rw,
          rh,
          state.quoteTextColor
        );
      } else {
        const rightText = (state.t6FooterRight || "أَشِير").trim();
        if (rightText) {
          ctx.save();
          ctx.direction = "rtl";
          ctx.textAlign = "left";
          ctx.fillStyle = state.quoteTextColor;
          applyContextFontWithFeatures(
            ctx,
            targetCanvas,
            "700",
            Math.round(42 * fScale),
            "Aref Ruqaa",
            '"liga" 1'
          );
          ctx.fillText(rightText, centerX + gapFromBar, footerCenterY + 13 * fScale);
          ctx.restore();
        }
      }
    }

    ctx.restore();
    return;
  }

  // =========================================================================
  // مسار الرسم الخاص بالقالب السابع (قالب النص البسيط في المنتصف — مينيمل مباشر)
  // =========================================================================
  if (state.activeTemplateId === "7") {
    // ١. الخلفية المصمتة أو الصورة الخلفية بكامل مساحة اللوحة
    drawTopImageArea(
      () => {
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
      },
      0,
      0,
      W,
      H
    );

    // ٢. إطار داخلي ناعم اختياري حول اللوحة
    if (state.t7ShowFrame) {
      ctx.save();
      ctx.strokeStyle = state.quoteTextColor;
      ctx.globalAlpha = 0.16;
      ctx.lineWidth = 2;
      const fm = 48;
      drawRoundedRectPath(ctx, fm, fm, W - fm * 2, H - fm * 2, 22, 22, 22, 22);
      ctx.stroke();
      ctx.restore();
    }

    // ٣. تجهيز وتقسيم النص ليتمركز في منتصف الصورة تماماً (يدعم الأسطر المتعددة والالتفاف التلقائي)
    const qSize = Number(state.quoteSize) || 74;
    const qLineHeightPx = qSize * Number(state.quoteLineHeight || 1.58);
    const qBlockWidth = Number(state.quoteWidth) || 820;
    const highlightHex = state.t6HighlightColor || "#D4AF37";
    const alignMode = state.t7TextAlign || "center";
    const defaultSpaceW = qSize * 0.26;

    const rawParagraphs = state.quoteText.split("\n");
    const visualLines = [];

    rawParagraphs.forEach((rawLine, lineIdx) => {
      const words = rawLine.trim().split(/\s+/).filter(Boolean);
      if (words.length === 0) return;

      const styledWords = words.map((w, wordIdx) => {
        const key = `${lineIdx}_${wordIdx}`;
        const wStyle = state.quoteWordStyles[key] || { swash: false, kashida: 0, highlight: false };
        const kRes = applyKashidaToWord(w, wStyle.kashida || 0);
        const feat = buildFontFeatureSettings(
          Boolean(wStyle.swash),
          kRes.kashidaCount,
          kRes.hasExtendedFatha,
          state.extendedFatha
        );
        const width = measureStyledWordWidth(kRes.text, state.quoteWeight, qSize, state.quoteFont, feat);
        return {
          text: kRes.text,
          feat,
          width,
          highlight: Boolean(wStyle.highlight)
        };
      });

      // التفاف الكلمات تلقائياً إذا تجاوز السطر عرض الكتلة المحدد
      let currentLine = [];
      let currentW = 0;
      styledWords.forEach((sw) => {
        const nextW = currentLine.length === 0 ? sw.width : currentW + defaultSpaceW + sw.width;
        if (currentLine.length > 0 && nextW > qBlockWidth) {
          visualLines.push({ words: currentLine, isLastInPara: false });
          currentLine = [sw];
          currentW = sw.width;
        } else {
          currentLine.push(sw);
          currentW = nextW;
        }
      });
      if (currentLine.length > 0) {
        visualLines.push({ words: currentLine, isLastInPara: true });
      }
    });

    const hasPoet = Boolean(state.poet && state.poet.trim());
    const poetSize = Number(state.poetSize) || 34;
    const poetGap = hasPoet ? qSize * 0.85 + poetSize * 0.6 : 0;

    const totalQuotesH = Math.max(0, visualLines.length - 1) * qLineHeightPx;
    const logoPos = state.t7LogoPos || "bottom-center";
    const autoLogoLift = logoPos === "bottom-center" && state.logoMode !== "none" ? -28 : 0;
    const centerY = H / 2 + autoLogoLift + Number(state.t7OffsetY || 0);
    const firstLineY = centerY - (totalQuotesH + poetGap) / 2 + qSize * 0.34;

    ctx.textAlign = "right";
    ctx.direction = "rtl";

    visualLines.forEach((vLine, vIdx) => {
      const lineWords = vLine.words;
      const lineY = firstLineY + vIdx * qLineHeightPx;
      const totalWordsW = lineWords.reduce((s, item) => s + item.width, 0);
      let spaceW = defaultSpaceW;
      let lineStartRightX = (W + qBlockWidth) / 2;

      if (alignMode === "justify" && lineWords.length > 1 && (!vLine.isLastInPara || visualLines.length > 1)) {
        const targetGap = (qBlockWidth - totalWordsW) / (lineWords.length - 1);
        spaceW = Math.max(qSize * 0.16, Math.min(targetGap, qSize * 0.72));
        const actualW = totalWordsW + (lineWords.length - 1) * spaceW;
        lineStartRightX = (W + actualW) / 2;
      } else if (alignMode === "center") {
        const naturalW = totalWordsW + Math.max(0, lineWords.length - 1) * spaceW;
        lineStartRightX = (W + naturalW) / 2;
      }

      let curX = lineStartRightX;
      lineWords.forEach((sw) => {
        applyContextFontWithFeatures(ctx, targetCanvas, state.quoteWeight, qSize, state.quoteFont, sw.feat);
        ctx.fillStyle = sw.highlight ? highlightHex : state.quoteTextColor;
        ctx.fillText(sw.text, curX, lineY);
        curX -= sw.width + spaceW;
      });
    });

    // ٤. رسم اسم القائل / المصدر تحت النص في المنتصف (إن وُجد)
    if (hasPoet) {
      const poetY = firstLineY + totalQuotesH + poetGap;
      ctx.save();
      ctx.direction = "rtl";
      ctx.fillStyle = state.quoteTextColor;
      ctx.globalAlpha = 0.78;
      const poetFeat = buildFontFeatureSettings(true, 0, false, false);
      applyContextFontWithFeatures(ctx, targetCanvas, "400", poetSize, state.quoteFont, poetFeat);
      if (alignMode === "right") {
        ctx.textAlign = "right";
        ctx.fillText(state.poet.trim(), (W + qBlockWidth) / 2, poetY);
      } else {
        ctx.textAlign = "center";
        ctx.fillText(state.poet.trim(), W / 2, poetY);
      }
      ctx.restore();
    }

    // ٥. رسم الشعار (شعار «أثر» المعتمد بحجم واضح وموزون، أسفل الوسط أو أعلى اليمين)
    if (logoPos === "top-right" && state.logoMode !== "none") {
      drawTopRightLogoGroup(ctx, targetCanvas, scaleFactor, W - 76, 118);
    } else if (logoPos === "bottom-center" && state.logoMode !== "none") {
      const lScale = (Number(state.logoScale) || 100) / 100;
      const bottomY = H - 124;
      if (state.logoMode === "athar-logo" && loadedImages.atharLogo) {
        const srcW = loadedImages.atharLogo.naturalWidth || 560;
        const srcH = loadedImages.atharLogo.naturalHeight || 416;
        const lw = 225 * lScale;
        const lh = lw * (srcH / srcW);
        drawAtharLogoAdaptive(ctx, (W - lw) / 2, bottomY - lh / 2, lw, lh);
      } else if (state.logoMode === "wadaq-mask" && loadedImages.wadaqMask) {
        const srcW = loadedImages.wadaqMask.naturalWidth || 200;
        const srcH = loadedImages.wadaqMask.naturalHeight || 110;
        const lw = 140 * lScale;
        const lh = lw * (srcH / srcW);
        ctx.save();
        ctx.globalAlpha = 0.88;
        drawTintedMask(ctx, loadedImages.wadaqMask, (W - lw) / 2, bottomY - lh / 2, lw, lh, state.logoColor || state.quoteTextColor);
        ctx.restore();
      } else if (state.logoMode === "custom-image" && loadedImages.customLogo) {
        const srcW = loadedImages.customLogo.naturalWidth || 100;
        const srcH = loadedImages.customLogo.naturalHeight || 100;
        const lw = 165 * lScale;
        const lh = lw * (srcH / srcW);
        ctx.drawImage(loadedImages.customLogo, (W - lw) / 2, bottomY - lh / 2, lw, lh);
      } else if (state.logoMode === "custom-text" && state.logoText.trim()) {
        ctx.save();
        ctx.direction = "rtl";
        ctx.textAlign = "center";
        ctx.fillStyle = state.logoColor || state.quoteTextColor;
        ctx.globalAlpha = 0.88;
        applyContextFontWithFeatures(ctx, targetCanvas, "700", Math.round(46 * lScale), state.quoteFont, '"liga" 1');
        ctx.fillText(state.logoText.trim(), W / 2, bottomY + 12);
        ctx.restore();
      }
    }

    ctx.restore();
    return;
  }

  // =========================================================================
  // مسار الرسم الخاص بالقالب الثامن (لوحة القصيدة العمودية الكلاسيكية: صدر وعجز)
  // =========================================================================
  if (state.activeTemplateId === "8") {
    // ١. خلفية اللوحة أو الصورة الخلفية بكامل أبعاد اللوحة
    drawTopImageArea(
      () => {
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
      },
      0,
      0,
      W,
      H
    );

    // ٢. محاكاة نسيج الورق المعتّق الأصلي للمخطوطة
    if (state.t8PaperTexture !== false && !loadedImages.topCardBg) {
      ctx.save();
      const radGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, W * 0.2, W * 0.5, H * 0.5, W * 0.9);
      radGrad.addColorStop(0, "rgba(255, 252, 244, 0.28)");
      radGrad.addColorStop(0.7, "rgba(235, 222, 198, 0.12)");
      radGrad.addColorStop(1, "rgba(195, 178, 145, 0.32)");
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, W, H);

      if (!window._asheerParchmentPattern) {
        const pCan = document.createElement("canvas");
        pCan.width = 180;
        pCan.height = 180;
        const pCtx = pCan.getContext("2d");
        const pImgData = pCtx.createImageData(180, 180);
        const d = pImgData.data;
        for (let i = 0; i < d.length; i += 4) {
          const noise = (Math.random() - 0.5) * 32;
          d[i] = 160 + noise;
          d[i + 1] = 145 + noise;
          d[i + 2] = 120 + noise;
          d[i + 3] = Math.abs(noise) > 10 ? 18 : 8;
        }
        pCtx.putImageData(pImgData, 0, 0);
        window._asheerParchmentPattern = ctx.createPattern(pCan, "repeat");
      }
      if (window._asheerParchmentPattern) {
        ctx.fillStyle = window._asheerParchmentPattern;
        ctx.globalAlpha = 0.55;
        ctx.fillRect(0, 0, W, H);
      }
      ctx.restore();
    }

    const highlightColor = state.t6HighlightColor || "#9B2226";
    const mainInkColor = state.quoteTextColor || "#1E1F24";

    // ٣. الترويسة العلوية (العنوان المخطوط أو النص المخصص)
    const headerMode = state.t8HeaderMode || "manuscript";
    let headerBottomY = 160;
    const headerOffsetY = Number(state.t8HeaderOffsetY || 0);

    if (headerMode === "manuscript" && loadedImages.t8HeaderMask) {
      ctx.save();
      const mImg = loadedImages.t8HeaderMask;
      const hScale = (Number(state.t8HeaderSize || 68) / 68) * 1.0;
      const maskW = Math.round(590 * hScale);
      const maskH = Math.round(maskW * (mImg.naturalHeight / mImg.naturalWidth));
      const maskX = Math.round((W - maskW) / 2);
      const maskY = Math.round(105 + headerOffsetY);

      const offC = document.createElement("canvas");
      offC.width = maskW;
      offC.height = maskH;
      const offCtx = offC.getContext("2d");
      offCtx.drawImage(mImg, 0, 0, maskW, maskH);
      offCtx.globalCompositeOperation = "source-in";
      offCtx.fillStyle = highlightColor;
      offCtx.fillRect(0, 0, maskW, maskH);

      ctx.drawImage(offC, maskX, maskY);
      ctx.restore();
      headerBottomY = maskY + maskH;
    } else if (headerMode === "custom-text" && state.t8HeaderText && state.t8HeaderText.trim()) {
      ctx.save();
      ctx.textAlign = "center";
      ctx.direction = "rtl";
      ctx.fillStyle = highlightColor;
      const hSize = Number(state.t8HeaderSize || 68);
      const hFont = state.t8HeaderFont || "A Suls";
      applyContextFontWithFeatures(ctx, targetCanvas, "700", hSize, hFont, '"liga" 1, "calt" 1');

      const titleLines = state.t8HeaderText.trim().split("\n").filter(Boolean);
      const titleLineH = hSize * 1.32;
      const totalTitleH = (titleLines.length - 1) * titleLineH;
      const titleBaseY = 155 + headerOffsetY;

      titleLines.forEach((tLine, tIdx) => {
        ctx.fillText(tLine.trim(), W / 2, titleBaseY + tIdx * titleLineH);
      });
      ctx.restore();
      headerBottomY = titleBaseY + totalTitleH + hSize * 0.4;
    }

    // ٤. تجهيز وتقسيم الأبيات إلى (صدر وعجز)
    const rawLines = state.quoteText.split("\n").map((l) => l.trim()).filter(Boolean);
    const sepRegex = /\s*(?:\.{2,}|\*|\||\t|—|–)\s*/;
    const hasSep = rawLines.some((l) => sepRegex.test(l));
    const verses = [];

    if (hasSep) {
      rawLines.forEach((line, lineIdx) => {
        const parts = line.split(sepRegex).filter(Boolean);
        verses.push({
          lineIdx,
          sadr: parts[0] || "",
          ajuz: parts.slice(1).join(" ") || ""
        });
      });
    } else {
      for (let i = 0; i < rawLines.length; i += 2) {
        verses.push({
          lineIdx: i,
          sadr: rawLines[i] || "",
          ajuz: rawLines[i + 1] || ""
        });
      }
    }

    // ٥. هندسة توزيع الشطرين (الصدر على اليمين والعجز على اليسار)
    const colW = Number(state.t8ColWidth || 400);
    const colGap = Number(state.t8ColGap || 140);
    const lineSpacing = Number(state.t8LineSpacing || 78);
    const vSize = Number(state.quoteSize || 46);
    const vFont = state.quoteFont || "Amiri";
    const vWeight = state.quoteWeight || "700";

    const sadrRightX = (W + colGap) / 2 + colW;
    const sadrLeftX = (W + colGap) / 2;
    const ajuzRightX = (W - colGap) / 2;
    const ajuzLeftX = (W - colGap) / 2 - colW;

    const totalPoemH = Math.max(0, verses.length - 1) * lineSpacing;
    const topLimit = Math.max(170, headerBottomY + 36);
    const bottomLimit = H - 170;
    const centerY = (topLimit + bottomLimit) / 2 + Number(state.t6PoemOffsetY || 0);
    const startY = centerY - totalPoemH / 2 + vSize * 0.32;

    // دالة مساعدة لرسم شطر واحد مع دعم التوزين والكلمات الملونة
    const drawHemistich = (text, leftX, rightX, y, lineIdx, isSadr) => {
      const words = text.trim().split(/\s+/).filter(Boolean);
      if (words.length === 0) return;

      const wordsWithMetrics = words.map((w, wIdx) => {
        const wordKey = hasSep
          ? (isSadr ? `${lineIdx}_${wIdx}` : `${lineIdx}_${wIdx + 20}`)
          : (isSadr ? `${lineIdx}_${wIdx}` : `${lineIdx + 1}_${wIdx}`);

        const wStyle =
          state.quoteWordStyles[wordKey] ||
          state.quoteWordStyles[`${lineIdx}_${wIdx}`] ||
          { swash: false, kashida: 0, highlight: false };

        const kRes = applyKashidaToWord(w, wStyle.kashida || 0);
        const feat = buildFontFeatureSettings(
          Boolean(wStyle.swash),
          kRes.kashidaCount,
          kRes.hasExtendedFatha,
          state.extendedFatha
        );

        applyContextFontWithFeatures(ctx, targetCanvas, vWeight, vSize, vFont, feat);
        const metrics = ctx.measureText(kRes.text);
        return {
          word: kRes.text,
          width: metrics.width,
          style: wStyle,
          feat
        };
      });

      const totalWordsW = wordsWithMetrics.reduce((s, it) => s + it.width, 0);
      const spanW = rightX - leftX;
      let spaceW = vSize * 0.28;

      if (state.t8JustifyLines && wordsWithMetrics.length > 1) {
        const gap = (spanW - totalWordsW) / (wordsWithMetrics.length - 1);
        spaceW = Math.max(vSize * 0.12, Math.min(gap, vSize * 0.95));
      }

      const actualW = totalWordsW + Math.max(0, wordsWithMetrics.length - 1) * spaceW;
      let curRight = isSadr ? rightX : leftX + actualW;

      ctx.direction = "rtl";
      ctx.textAlign = "right";

      wordsWithMetrics.forEach((item) => {
        applyContextFontWithFeatures(ctx, targetCanvas, vWeight, vSize, vFont, item.feat);
        ctx.fillStyle = item.style.highlight ? highlightColor : mainInkColor;
        ctx.fillText(item.word, curRight, y);
        curRight -= item.width + spaceW;
      });
    };

    // ٦. رسم جميع أبيات القصيدة (شطرين لكل بيت)
    verses.forEach((verse, vIdx) => {
      const lineY = startY + vIdx * lineSpacing;

      if (verse.sadr) {
        drawHemistich(verse.sadr, sadrLeftX, sadrRightX, lineY, verse.lineIdx, true);
      }
      if (verse.ajuz) {
        drawHemistich(verse.ajuz, ajuzLeftX, ajuzRightX, lineY, verse.lineIdx, false);
      }

      if (state.t8CenterDivider && state.t8CenterDivider !== "none") {
        ctx.save();
        ctx.textAlign = "center";
        ctx.fillStyle = highlightColor;
        ctx.globalAlpha = 0.72;
        applyContextFontWithFeatures(ctx, targetCanvas, "400", Math.round(vSize * 0.55), "Amiri", '"liga" 1');
        const divGlyph = state.t8CenterDivider === "star" ? "✦" : state.t8CenterDivider === "dot" ? "•" : "⁂";
        ctx.fillText(divGlyph, W / 2, lineY - vSize * 0.08);
        ctx.restore();
      }
    });

    // ٧. التذييل السفلي والتوقيع
    const footerMode = state.t8FooterMode || "manuscript";
    const footerOffsetY = Number(state.t8FooterOffsetY || 0);

    if (footerMode === "manuscript" && loadedImages.t8FooterMask) {
      ctx.save();
      const fImg = loadedImages.t8FooterMask;
      const fScale = (Number(state.t8FooterScale || 100) / 100) * 1.0;
      const fw = Math.round(330 * fScale);
      const fh = Math.round(fw * (fImg.naturalHeight / fImg.naturalWidth));
      const fx = Math.round((W - fw) / 2);
      const fy = Math.round(H - 110 - fh / 2 + footerOffsetY);

      const offFC = document.createElement("canvas");
      offFC.width = fw;
      offFC.height = fh;
      const offFCtx = offFC.getContext("2d");
      offFCtx.drawImage(fImg, 0, 0, fw, fh);
      offFCtx.globalCompositeOperation = "source-in";
      offFCtx.fillStyle = mainInkColor;
      offFCtx.fillRect(0, 0, fw, fh);

      ctx.drawImage(offFC, fx, fy);
      ctx.restore();
    } else if (footerMode === "custom-text") {
      ctx.save();
      ctx.textAlign = "center";
      ctx.direction = "rtl";
      const fScale = Number(state.t8FooterScale || 100) / 100;
      const fy = H - 105 + footerOffsetY;

      if (state.t8FooterRight && state.t8FooterRight.trim()) {
        ctx.fillStyle = mainInkColor;
        applyContextFontWithFeatures(ctx, targetCanvas, "400", Math.round(32 * fScale), "Amiri", '"liga" 1');
        ctx.fillText(state.t8FooterRight.trim(), W / 2, fy);
      }
      if (state.t8FooterDate && state.t8FooterDate.trim()) {
        ctx.fillStyle = highlightColor;
        applyContextFontWithFeatures(ctx, targetCanvas, "700", Math.round(28 * fScale), "Amiri", '"liga" 1');
        ctx.fillText(state.t8FooterDate.trim(), W / 2, fy + 36 * fScale);
      }
      ctx.restore();
    } else if (footerMode === "athar-logo") {
      drawAtharLogoAdaptive(ctx, W / 2, H - 95 + footerOffsetY, 185 * (Number(state.t8FooterScale || 100) / 100), mainInkColor);
    }

    ctx.restore();
    return;
  }

  // =========================================================================
  // مسار الرسم للقوالب ذات البطاقتين (القالب ٤ والقالبين ٢ و ٣ - 1080×1920)
  // =========================================================================

  // ١. خلفية التصميم الكريمية
  ctx.fillStyle = state.bgColor;
  ctx.fillRect(0, 0, W, H);

  // ٢. إحداثيات البطاقتين المتداخلتين (مطابقة لنسب الصورة الرابعة 100%)
  const cardX = 60;
  const cardW = 960; // 1080 - 120
  const topCardY = 240;
  const topCardH = Number(state.topCardHeight);
  const radius = Number(state.cardRadius);

  const isFullBleed = state.topCardStyle === "full-bleed";
  const bottomCardY = isFullBleed
    ? topCardY + topCardH + 10 // في النمط الممتد: البطاقة السفلية تبدأ تحت مساحة الصورة وتغطي حافتها
    : topCardY + topCardH - 120; // متداخلة تحت البطاقة العلوية
  const bottomCardBottom = 1785;
  const bottomCardH = bottomCardBottom - bottomCardY;

  if (isFullBleed) {
    // ٣-أ. النمط الممتد: الصورة تملأ كامل الجزء العلوي، ثم البطاقة السفلية فوقها
    const areaH = bottomCardY + radius + 40;
    drawTopImageArea(
      () => {
        ctx.beginPath();
        ctx.rect(0, 0, W, areaH);
      },
      0,
      0,
      W,
      areaH
    );

    ctx.save();
    const shadowAlphaB = (Number(state.shadowStrength) / 100) * 0.5;
    ctx.shadowColor = `rgba(0, 0, 0, ${shadowAlphaB.toFixed(2)})`;
    ctx.shadowBlur = 40 * scaleFactor;
    ctx.shadowOffsetY = -10 * scaleFactor;
    ctx.fillStyle = state.bottomCardColor;
    drawRoundedRectPath(ctx, cardX, bottomCardY, cardW, bottomCardH, radius, radius, radius, radius);
    ctx.fill();
    ctx.restore();
  } else {
    // ٣. رسم البطاقة السفلية أولاً (لأنها تقع خلف البطاقة العلوية وتستقبل ظلها)
    ctx.save();
    ctx.fillStyle = state.bottomCardColor;
    drawRoundedRectPath(ctx, cardX, bottomCardY, cardW, bottomCardH, radius, radius, radius, radius);
    ctx.fill();
    ctx.restore();

    // ٤. رسم البطاقة العلوية مع الظل الناعم الساقط على البطاقة السفلية
    ctx.save();
    const shadowAlpha = (Number(state.shadowStrength) / 100) * 0.65;
    ctx.shadowColor = `rgba(0, 0, 0, ${shadowAlpha.toFixed(2)})`;
    ctx.shadowBlur = 42 * scaleFactor;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 22 * scaleFactor;
    ctx.fillStyle = state.topCardColor;
    drawRoundedRectPath(ctx, cardX, topCardY, cardW, topCardH, radius, radius, radius, radius);
    ctx.fill();
    ctx.restore();

    // ٤-ب. الصورة داخل البطاقة الخضراء (مقصوصة على حوافها الدائرية) والنص يُرسم فوقها لاحقاً
    if (loadedImages.topCardBg) {
      drawTopImageArea(
        () => drawRoundedRectPath(ctx, cardX, topCardY, cardW, topCardH, radius, radius, radius, radius),
        cardX,
        topCardY,
        cardW,
        topCardH
      );
    }
  }

  // ٥. رسم الشعار الأساسي + الشعارات الإضافية بجانبه + الخط الفاصل القابل للتحكم بالطول والعرض
  drawTopRightLogoGroup(ctx, targetCanvas, scaleFactor, 968, 142);

  // ٦. رسم أيقونة المعين الهندسية العلوية (⊡) في البطاقة العلوية
  if (state.showTopOrnament) {
    drawTopSquareDiamondOrnament(ctx, 196, topCardY + 90, 32, state.quoteTextColor, state.topCardColor);
  }

  // ٧. رسم بيت الشعر / المقولة الرئيسية في البطاقة العلوية (كلمة بكلمة لدعم لمسات خط ثمانية)
  const quoteLines = state.quoteText.split("\n");
  const qSize = Number(state.quoteSize);
  const qLineHeightPx = qSize * Number(state.quoteLineHeight);
  const qBlockWidth = Number(state.quoteWidth);
  const qRightMargin = cardX + (cardW + qBlockWidth) / 2 - 10; // محاذاة متوازنة داخل البطاقة

  // حساب نقطة البداية العمودية لتوسيط الأبيات في البطاقة العلوية
  const totalQuoteBlockH = (quoteLines.length - 1) * qLineHeightPx;
  const firstQuoteLineY = topCardY + topCardH * 0.43 - totalQuoteBlockH / 2 + qSize * 0.32;

  ctx.fillStyle = state.quoteTextColor;
  ctx.textAlign = "right";

  quoteLines.forEach((rawLine, lineIdx) => {
    const words = rawLine.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return;

    const lineY = firstQuoteLineY + lineIdx * qLineHeightPx;

    // تجهيز كل كلمة مع خصائصها (حرف مرسل ss01 + كشيدة مائلة + تلوين الكلمة)
    const styledWords = words.map((w, wordIdx) => {
      const key = `${lineIdx}_${wordIdx}`;
      const wStyle = state.quoteWordStyles[key] || { swash: false, kashida: 0, highlight: false };
      const kRes = applyKashidaToWord(w, wStyle.kashida);
      const feat = buildFontFeatureSettings(
        wStyle.swash,
        kRes.kashidaCount,
        kRes.hasExtendedFatha,
        state.extendedFatha
      );
      const width = measureStyledWordWidth(kRes.text, state.quoteWeight, qSize, state.quoteFont, feat);
      return {
        text: kRes.text,
        feat,
        width,
        highlight: Boolean(wStyle.highlight)
      };
    });

    // إذا كان هناك أكثر من كلمة، نوزعها على عرض كتلة البيت (Justified) أو بمحاذاة متناسقة
    const totalWordsW = styledWords.reduce((s, item) => s + item.width, 0);
    const defaultSpaceW = qSize * 0.27;
    let spaceBetween = defaultSpaceW;

    if (styledWords.length > 1) {
      // موازنة عرض شطر البيت ليمتد بأناقة داخل البطاقة
      const naturalLineW = totalWordsW + (styledWords.length - 1) * defaultSpaceW;
      if (naturalLineW < qBlockWidth) {
        spaceBetween = (qBlockWidth - totalWordsW) / (styledWords.length - 1);
        // سقف للمسافة بين الكلمات في الشعر حتى لا تتباعد أكثر من اللازم
        spaceBetween = Math.min(spaceBetween, qSize * 0.62);
      }
    }

    let cursorRightX = qRightMargin;
    styledWords.forEach((sw) => {
      applyContextFontWithFeatures(ctx, targetCanvas, state.quoteWeight, qSize, state.quoteFont, sw.feat);
      ctx.fillStyle = sw.highlight ? state.t6HighlightColor || "#882226" : state.quoteTextColor;
      ctx.fillText(sw.text, cursorRightX, lineY);
      cursorRightX -= sw.width + spaceBetween;
    });
  });

  // ٨. رسم اسم الشاعر والخط الأفقي الممتد في أسفل البطاقة العلوية
  if (state.poet.trim()) {
    const poetY = topCardY + topCardH - 72;
    const poetRightX = qRightMargin;
    const poetFeat = buildFontFeatureSettings(true, 0, false, false);

    applyContextFontWithFeatures(ctx, targetCanvas, "400", Number(state.poetSize), state.quoteFont, poetFeat);
    ctx.fillStyle = state.quoteTextColor;
    ctx.textAlign = "right";
    ctx.fillText(state.poet.trim(), poetRightX, poetY);

    const poetTextW = ctx.measureText(state.poet.trim()).width;
    const lineLen = Number(state.poetLineLength);
    if (lineLen > 0) {
      const lineEndX = poetRightX - poetTextW - 22;
      const lineStartX = lineEndX - lineLen;
      ctx.save();
      ctx.strokeStyle = state.quoteTextColor;
      ctx.globalAlpha = 0.85;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(lineEndX, poetY - Number(state.poetSize) * 0.22);
      ctx.lineTo(lineStartX, poetY - Number(state.poetSize) * 0.22);
      ctx.stroke();
      ctx.restore();
    }
  }

  // ٩. رسم فقرة الشرح المضبوطة بالكشيدة في البطاقة السفلية
  const bodyMaxW = Number(state.bodyWidth);
  const bodyRightX = cardX + (cardW + bodyMaxW) / 2;
  const bSize = Number(state.bodySize);
  const bLineHeightPx = bSize * Number(state.bodyLineHeight);

  const justifiedLines = layoutAndJustifyParagraph(state.bodyText, bodyMaxW, {
    fontFamily: state.bodyFont,
    fontWeight: state.bodyWeight,
    fontSize: bSize,
    autoKashida: state.autoKashida,
    smartSwash: state.bodySmartSwash,
    extendedFatha: state.extendedFatha,
    kashidaIntensity: Number(state.kashidaIntensity),
    maxKashidaPerWord: Number(state.maxKashidaPerWord),
    lastLineAlign: state.bodyLastLineAlign
  });

  const bodyStartY = topCardY + topCardH + 135 + Number(state.bodyOffsetY);
  ctx.fillStyle = state.bodyTextColor;
  ctx.textAlign = "right";

  justifiedLines.forEach((lineObj, idx) => {
    const lineY = bodyStartY + idx * bLineHeightPx;
    const words = lineObj.words;
    if (words.length === 0) return;

    if (words.length === 1 || lineObj.align === "right") {
      let curX = bodyRightX;
      const sp = bSize * 0.26;
      words.forEach((w) => {
        applyContextFontWithFeatures(ctx, targetCanvas, state.bodyWeight, bSize, state.bodyFont, w.features);
        ctx.fillText(w.text, curX, lineY);
        curX -= w.width + sp;
      });
    } else if (lineObj.align === "center") {
      const sp = bSize * 0.26;
      const totalLineW = lineObj.totalWordsWidth + (words.length - 1) * sp;
      let curX = cardX + (cardW + totalLineW) / 2;
      words.forEach((w) => {
        applyContextFontWithFeatures(ctx, targetCanvas, state.bodyWeight, bSize, state.bodyFont, w.features);
        ctx.fillText(w.text, curX, lineY);
        curX -= w.width + sp;
      });
    } else {
      // محاذاة متساوية الأطراف تماماً (Justify) من الهامش الأيمن إلى الهامش الأيسر
      const gap = (bodyMaxW - lineObj.totalWordsWidth) / (words.length - 1);
      let curX = bodyRightX;
      words.forEach((w) => {
        applyContextFontWithFeatures(ctx, targetCanvas, state.bodyWeight, bSize, state.bodyFont, w.features);
        ctx.fillText(w.text, curX, lineY);
        curX -= w.width + gap;
      });
    }
  });

  // ١٠. رسم التوقيع السفلي ("-مومياشي-") في منتصف أسفل البطاقة السفلية
  const sigY = bottomCardBottom - 140;
  if (state.sigMode === "mask" && loadedImages.momiashiMask) {
    const sw = 185;
    const sh = 185 * (61 / 214);
    drawTintedMask(ctx, loadedImages.momiashiMask, (W - sw) / 2, sigY - sh * 0.72, sw, sh, state.bodyTextColor);
  } else if (state.sigMode === "text" && state.signatureText.trim()) {
    ctx.save();
    applyContextFontWithFeatures(ctx, targetCanvas, "400", 31, "Aref Ruqaa", '"liga" 1');
    ctx.fillStyle = state.bodyTextColor;
    ctx.globalAlpha = 0.92;
    ctx.textAlign = "center";
    ctx.fillText(state.signatureText.trim(), W / 2, sigY);
    ctx.restore();
  }

  // ١١. رسم أيقونة المثلثين المتقابلين (⋈) في أسفل يمين البطاقة السفلية
  if (state.showBottomOrnament) {
    drawBottomBowtieOrnament(ctx, 902, sigY - 5, 22, 20, state.bodyTextColor);
  }

  // ١٢. رسم حقوق الفوتر السفلية (COPYRIGHT © M.75T) في أسفل اليسار
  if (state.copyrightText.trim()) {
    ctx.save();
    ctx.direction = "ltr";
    ctx.font = `500 21px "Thmanyah Sans", sans-serif`;
    ctx.fillStyle = state.bottomCardColor;
    ctx.textAlign = "left";
    ctx.letterSpacing = "1.2px";
    ctx.fillText(state.copyrightText.trim(), 62, 1852);
    ctx.restore();
  }

  ctx.restore();
}

/* ==========================================================================
   تحديث المعاينة الحية ومشكّل كلمات العنوان التفاعلي
   ========================================================================== */

let renderRequested = false;
function requestRender() {
  if (renderRequested) return;
  renderRequested = true;
  requestAnimationFrame(() => {
    renderRequested = false;
    const canvas = document.getElementById("quoteCanvas");
    if (canvas) {
      renderDesignToCanvas(canvas, 1);
    }
  });
}

/**
 * بناء أزرار كلمات العنوان التفاعلية (Word Chips) للتحكم بالحرف المرسل والكشيدة المائلة لكل كلمة
 */
function renderQuoteWordChips() {
  const container = document.getElementById("quoteWordChips");
  const warningBox = document.getElementById("thmanyahRuleWarning");
  if (!container) return;

  container.innerHTML = "";
  const lines = state.quoteText.split("\n");
  let firstAvailableKey = null;
  let adjacentSwashWarning = false;

  lines.forEach((line, lineIdx) => {
    const words = line.trim().split(/\s+/).filter(Boolean);
    let prevSwash = false;

    words.forEach((word, wordIdx) => {
      const key = `${lineIdx}_${wordIdx}`;
      if (!firstAvailableKey) firstAvailableKey = key;

      if (!state.quoteWordStyles[key]) {
        state.quoteWordStyles[key] = { swash: false, kashida: 0, highlight: false };
      }
      const st = state.quoteWordStyles[key];
      if (prevSwash && st.swash) {
        adjacentSwashWarning = true;
      }
      prevSwash = st.swash;

      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "word-chip" + (selectedWordKey === key ? " selected" : "");
      const hlColor = state.t6HighlightColor || "#D4AF37";
      if (st.highlight) {
        chip.style.borderColor = hlColor;
        chip.style.background = hexToRgba(hlColor, 0.22);
      }

      const kRes = applyKashidaToWord(word, st.kashida);
      const wordSpan = document.createElement("span");
      wordSpan.textContent = kRes.text;
      wordSpan.style.fontFamily = `"${state.quoteFont}", "Thmanyah Serif Display", serif`;
      wordSpan.style.fontWeight = String(state.quoteWeight);
      if (st.highlight) {
        wordSpan.style.color = hlColor;
      }
      wordSpan.style.fontFeatureSettings = buildFontFeatureSettings(
        st.swash,
        kRes.kashidaCount,
        kRes.hasExtendedFatha,
        state.extendedFatha
      );
      chip.appendChild(wordSpan);

      // شارات توضيحية صغيرة على الكلمة
      if (st.highlight || st.swash || st.kashida > 0) {
        const badges = document.createElement("span");
        badges.className = "chip-badges";
        if (st.highlight) {
          const bH = document.createElement("span");
          bH.className = "chip-tag";
          bH.style.background = hexToRgba(hlColor, 0.35);
          bH.style.color = hlColor;
          bH.textContent = "ملوّن";
          badges.appendChild(bH);
        }
        if (st.swash) {
          const b1 = document.createElement("span");
          b1.className = "chip-tag";
          b1.textContent = "مرسل";
          badges.appendChild(b1);
        }
        if (st.kashida > 0) {
          const b2 = document.createElement("span");
          b2.className = "chip-tag";
          b2.textContent = `مد×${st.kashida}`;
          badges.appendChild(b2);
        }
        chip.appendChild(badges);
      }

      chip.addEventListener("click", (ev) => {
        selectedWordKey = key;
        if (ev.shiftKey) {
          st.highlight = !st.highlight;
          requestRender();
        }
        renderQuoteWordChips();
        updateWordInspectorPanel();
      });

      chip.addEventListener("dblclick", () => {
        selectedWordKey = key;
        st.highlight = !st.highlight;
        renderQuoteWordChips();
        updateWordInspectorPanel();
        requestRender();
      });

      container.appendChild(chip);
    });
  });

  if (!selectedWordKey || !findWordByKey(selectedWordKey)) {
    selectedWordKey = firstAvailableKey;
  }

  // تنبيه ودي مستوحى من دليل جماليات خط ثمانية (صفحة 16)
  if (warningBox) {
    if (adjacentSwashWarning) {
      warningBox.textContent =
        "💡 ملاحظة من دليل خط ثمانية: يُفضّل عدم تفعيل (الحرف المرسل) في كلمتين متجاورتين في السطر نفسه ليبقى التوازن البصري أجمل.";
      warningBox.classList.remove("hidden");
    } else {
      warningBox.classList.add("hidden");
    }
  }

  updateWordInspectorPanel();
}

function findWordByKey(key) {
  if (!key) return null;
  const [lIdx, wIdx] = key.split("_").map(Number);
  const lines = state.quoteText.split("\n");
  if (!lines[lIdx]) return null;
  const words = lines[lIdx].trim().split(/\s+/).filter(Boolean);
  return words[wIdx] || null;
}

function updateWordInspectorPanel() {
  const panel = document.getElementById("wordInspectorPanel");
  const lbl = document.getElementById("inspectorWordLabel");
  const chkHighlight = document.getElementById("chkWordHighlight");
  const chkSwash = document.getElementById("chkWordSwash");
  const lblCount = document.getElementById("lblWordKashidaCount");

  const word = findWordByKey(selectedWordKey);
  if (!word || !panel) {
    if (panel) panel.classList.add("hidden");
    return;
  }

  panel.classList.remove("hidden");
  const st = state.quoteWordStyles[selectedWordKey] || { swash: false, kashida: 0, highlight: false };
  const kRes = applyKashidaToWord(word, st.kashida);
  const hlColor = state.t6HighlightColor || "#D4AF37";

  lbl.textContent = kRes.text;
  lbl.style.fontFamily = `"${state.quoteFont}", "Thmanyah Serif Display", serif`;
  lbl.style.fontWeight = String(state.quoteWeight);
  lbl.style.color = st.highlight ? hlColor : "var(--accent-bright)";
  lbl.style.fontFeatureSettings = buildFontFeatureSettings(
    st.swash,
    kRes.kashidaCount,
    kRes.hasExtendedFatha,
    state.extendedFatha
  );
  if (chkHighlight) chkHighlight.checked = Boolean(st.highlight);
  const colorInp = document.getElementById("colorInspectorHighlight");
  const hexInp = document.getElementById("hexInspectorHighlight");
  if (colorInp) colorInp.value = hlColor;
  if (hexInp) hexInp.value = hlColor;
  chkSwash.checked = Boolean(st.swash);
  lblCount.textContent = String(st.kashida || 0);
}

/* ==========================================================================
   إدارة التكبير/التصغير (Zoom & Fit to Screen)
   ========================================================================== */

function updateArtboardZoom(newZoom) {
  currentZoom = Math.min(1.2, Math.max(0.11, newZoom));
  const { W, H } = getArtboardDimensions();
  const wrapper = document.getElementById("artboardWrapper");
  const lbl = document.getElementById("lblZoomPercent");
  if (wrapper) {
    wrapper.style.width = `${Math.round(W * currentZoom)}px`;
    wrapper.style.height = `${Math.round(H * currentZoom)}px`;
  }
  if (lbl) {
    lbl.textContent = `${Math.round(currentZoom * 100)}%`;
  }
}

function fitArtboardToViewport() {
  const viewport = document.getElementById("canvasViewport");
  if (!viewport) return;
  const { W, H } = getArtboardDimensions();
  const pad = window.innerWidth <= 960 ? 20 : 48;
  const availW = Math.max(140, viewport.clientWidth - pad);
  const availH = Math.max(140, viewport.clientHeight - pad);
  const scaleX = availW / W;
  const scaleY = availH / H;
  updateArtboardZoom(Math.min(scaleX, scaleY));
}

/* ==========================================================================
   حفظ واسترجاع القوالب (Saved Templates - LocalStorage + JSON Export/Import)
   ========================================================================== */

const STORAGE_KEY = "wadaq_saved_templates_v1";

function getSavedTemplates() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultTemplatesList();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : getDefaultTemplatesList();
  } catch {
    return getDefaultTemplatesList();
  }
}

function getDefaultTemplatesList() {
  return [
    {
      id: "default-4",
      name: "قالب (وكيف أغفى) - الأخضر الأصلي",
      createdAt: "القالب الأساسي الرابع",
      state: getInitialState()
    }
  ];
}

function saveTemplatesList(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    alert(
      "مساحة الحفظ في المتصفح امتلأت (الصور الكبيرة تأخذ مساحة). احذف بعض القوالب القديمة أو صدّرها كملف JSON ثم احذفها."
    );
    return;
  }
  renderSavedTemplatesList();
}

function renderSavedTemplatesList() {
  const container = document.getElementById("savedTemplatesList");
  if (!container) return;
  const list = getSavedTemplates();
  container.innerHTML = "";

  list.forEach((item) => {
    const row = document.createElement("div");
    row.className = "saved-template-item";

    const info = document.createElement("div");
    info.className = "saved-template-info";
    info.innerHTML = `<strong>${item.name}</strong><small>${item.createdAt}</small>`;

    const actions = document.createElement("div");
    actions.className = "saved-template-actions";

    const btnLoad = document.createElement("button");
    btnLoad.type = "button";
    btnLoad.className = "mini-btn";
    btnLoad.textContent = "تطبيق";
    btnLoad.addEventListener("click", async () => {
      state = JSON.parse(JSON.stringify(item.state));
      if (state.customLogoDataUrl) {
        const img = new Image();
        await new Promise((res) => {
          img.onload = res;
          img.onerror = res;
          img.src = state.customLogoDataUrl;
        });
        loadedImages.customLogo = img;
      }
      if (Array.isArray(state.extraLogos)) {
        for (const ex of state.extraLogos) {
          if (ex && ex.imageDataUrl) {
            const exImg = new Image();
            await new Promise((res) => {
              exImg.onload = res;
              exImg.onerror = res;
              exImg.src = ex.imageDataUrl;
            });
            loadedImages.extraLogos[ex.id] = exImg;
          }
        }
      }
      // استرجاع صورة خلفية البطاقة الخضراء ومخطوطة الكتاب والختم المحفوظة مع القالب
      await loadTopCardImageFromDataUrl(state.topCardBgDataUrl || null);
      await loadT5BookStampFromDataUrl(state.t5CustomStampDataUrl || null);
      await loadT6CustomStampFromDataUrl(state.t6CustomStampDataUrl || null);
      await Promise.all([
        ensureFontLoaded(state.quoteFont, state.quoteWeight),
        ensureFontLoaded(state.bodyFont, state.bodyWeight)
      ]);
      syncInputsFromState();
      renderQuoteWordChips();
      requestRender();
    });

    actions.appendChild(btnLoad);

    if (item.id !== "default-4") {
      const btnDel = document.createElement("button");
      btnDel.type = "button";
      btnDel.className = "mini-btn";
      btnDel.style.color = "#f87171";
      btnDel.style.borderColor = "rgba(248,113,113,0.3)";
      btnDel.textContent = "حذف";
      btnDel.addEventListener("click", () => {
        const updated = getSavedTemplates().filter((t) => t.id !== item.id);
        saveTemplatesList(updated);
      });
      actions.appendChild(btnDel);
    }

    row.appendChild(info);
    row.appendChild(actions);
    container.appendChild(row);
  });
}

/* ==========================================================================
   ربط عناصر الواجهة بالحالة (Two-way Binding)
   ========================================================================== */

/* ==========================================================================
   صورة خلفية البطاقة الخضراء: الرفع، الحذف، التوزين، والسحب المباشر على المعاينة
   ========================================================================== */

// [معرف الشريط, مفتاح الحالة, معرف التسمية, القيمة الافتراضية]
const TOP_IMAGE_RANGE_DEFAULTS = [
  ["rangeTopCardImgZoom", "topCardImgZoom", "valTopCardImgZoom", 100],
  ["rangeTopCardImgX", "topCardImgX", "valTopCardImgX", 0],
  ["rangeTopCardImgY", "topCardImgY", "valTopCardImgY", 0],
  ["rangeTopCardImgBrightness", "topCardImgBrightness", "valTopCardImgBrightness", 100],
  ["rangeTopCardImgContrast", "topCardImgContrast", "valTopCardImgContrast", 100],
  ["rangeTopCardImgSaturation", "topCardImgSaturation", "valTopCardImgSaturation", 100],
  ["rangeTopCardImgWarmth", "topCardImgWarmth", "valTopCardImgWarmth", 0],
  ["rangeTopCardImgBlur", "topCardImgBlur", "valTopCardImgBlur", 0],
  ["rangeTopCardOverlay", "topCardOverlay", "valTopCardOverlay", 42]
];

function updateTopImageControlsVisibility() {
  const hasImg = Boolean(loadedImages.topCardBg);
  const controls = document.getElementById("topCardImageControls");
  const btnRemove = document.getElementById("btnRemoveTopCardBgImage");
  const canvas = document.getElementById("quoteCanvas");
  if (controls) controls.classList.toggle("hidden", !hasImg);
  if (btnRemove) btnRemove.classList.toggle("hidden", !hasImg);
  // على الجوال: نمنع تمرير الصفحة عند لمس المعاينة فقط إذا كانت هناك صورة قابلة للسحب
  if (canvas) canvas.style.touchAction = hasImg ? "none" : "auto";
}

function loadTopCardImageFromDataUrl(dataUrl) {
  return new Promise((resolve) => {
    if (!dataUrl) {
      loadedImages.topCardBg = null;
      resolve(null);
      return;
    }
    const img = new Image();
    img.onload = () => {
      loadedImages.topCardBg = img;
      resolve(img);
    };
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });
}

/**
 * تصغير الصورة المرفوعة لحجم مناسب (أقصى ضلع 2400px) حتى لا يثقل حفظ القوالب
 */
function downscaleImageFile(file, maxSide = 2400) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const ratio = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
        if (ratio >= 1) {
          resolve(reader.result);
          return;
        }
        const c = document.createElement("canvas");
        c.width = Math.round(img.naturalWidth * ratio);
        c.height = Math.round(img.naturalHeight * ratio);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL("image/jpeg", 0.9));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * سحب الصورة مباشرة على المعاينة بالماوس أو اللمس لتحريك موضعها داخل المساحة الخضراء
 */
function setupCanvasImageDrag() {
  const canvas = document.getElementById("quoteCanvas");
  if (!canvas) return;

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let startImgX = 0;
  let startImgY = 0;

  const getImageArea = () => {
    const { W, H } = getArtboardDimensions();
    if (
      state.activeTemplateId === "1" ||
      state.activeTemplateId === "5" ||
      state.activeTemplateId === "6" ||
      state.activeTemplateId === "7"
    ) {
      return { x: 0, y: 0, w: W, h: H };
    }
    const topCardY = 240;
    const topCardH = Number(state.topCardHeight);
    if (state.topCardStyle === "full-bleed") {
      const bottomCardY = topCardY + topCardH + 10;
      return { x: 0, y: 0, w: W, h: bottomCardY + Number(state.cardRadius) + 40 };
    }
    return { x: 60, y: topCardY, w: 960, h: topCardH };
  };

  const toDesignCoords = (clientX, clientY) => {
    const { W, H } = getArtboardDimensions();
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((clientX - rect.left) / rect.width) * W,
      y: ((clientY - rect.top) / rect.height) * H
    };
  };

  canvas.addEventListener("pointerdown", (e) => {
    if (!loadedImages.topCardBg) return;
    const p = toDesignCoords(e.clientX, e.clientY);
    const a = getImageArea();
    if (p.x < a.x || p.x > a.x + a.w || p.y < a.y || p.y > a.y + a.h) return;
    dragging = true;
    startX = p.x;
    startY = p.y;
    startImgX = Number(state.topCardImgX) || 0;
    startImgY = Number(state.topCardImgY) || 0;
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = "grabbing";
    e.preventDefault();
  });

  canvas.addEventListener("pointermove", (e) => {
    const p = toDesignCoords(e.clientX, e.clientY);
    if (!dragging) {
      if (loadedImages.topCardBg) {
        const a = getImageArea();
        const inside = p.x >= a.x && p.x <= a.x + a.w && p.y >= a.y && p.y <= a.y + a.h;
        canvas.style.cursor = inside ? "grab" : "default";
      }
      return;
    }
    const img = loadedImages.topCardBg;
    const a = getImageArea();
    const zoom = Math.max(1, Number(state.topCardImgZoom) / 100);
    const coverScale = Math.max(a.w / img.naturalWidth, a.h / img.naturalHeight) * zoom;
    const overflowX = img.naturalWidth * coverScale - a.w;
    const overflowY = img.naturalHeight * coverScale - a.h;

    const dx = p.x - startX;
    const dy = p.y - startY;
    // تحويل إزاحة البكسل إلى نسبة مئوية من المساحة القابلة للتحريك
    const newX = overflowX > 1 ? startImgX + (dx / (overflowX / 2)) * 100 : 0;
    const newY = overflowY > 1 ? startImgY + (dy / (overflowY / 2)) * 100 : 0;
    state.topCardImgX = Math.round(Math.max(-100, Math.min(100, newX)));
    state.topCardImgY = Math.round(Math.max(-100, Math.min(100, newY)));

    const setPair = (id, lbl, v) => {
      const el = document.getElementById(id);
      const lb = document.getElementById(lbl);
      if (el) el.value = v;
      if (lb) lb.textContent = v;
    };
    setPair("rangeTopCardImgX", "valTopCardImgX", state.topCardImgX);
    setPair("rangeTopCardImgY", "valTopCardImgY", state.topCardImgY);
    requestRender();
  });

  const endDrag = (e) => {
    if (!dragging) return;
    dragging = false;
    canvas.style.cursor = "grab";
    try {
      canvas.releasePointerCapture(e.pointerId);
    } catch {
      // تجاهل
    }
  };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);

  // التكبير بعجلة الماوس فوق الصورة
  canvas.addEventListener(
    "wheel",
    (e) => {
      if (!loadedImages.topCardBg) return;
      const p = toDesignCoords(e.clientX, e.clientY);
      const a = getImageArea();
      if (p.x < a.x || p.x > a.x + a.w || p.y < a.y || p.y > a.y + a.h) return;
      e.preventDefault();
      const cur = Number(state.topCardImgZoom) || 100;
      const next = Math.max(100, Math.min(300, Math.round(cur - e.deltaY * 0.15)));
      state.topCardImgZoom = next;
      const el = document.getElementById("rangeTopCardImgZoom");
      const lb = document.getElementById("valTopCardImgZoom");
      if (el) el.value = next;
      if (lb) lb.textContent = next;
      requestRender();
    },
    { passive: false }
  );
}

function bindTopCardImageEvents() {
  const fileInput = document.getElementById("inputTopCardBgImage");
  if (fileInput) {
    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const dataUrl = await downscaleImageFile(file);
        state.topCardBgDataUrl = dataUrl;
        await loadTopCardImageFromDataUrl(dataUrl);
        // إعادة ضبط الموضع للصورة الجديدة
        state.topCardImgX = 0;
        state.topCardImgY = 0;
        state.topCardImgZoom = 100;
        syncInputsFromState();
        requestRender();

        // الانتقال لتبويب الألوان والبطاقات لعرض أدوات التوزين
        const styleTabBtn = document.querySelector('.tab-btn[data-tab="tab-style"]');
        if (styleTabBtn) styleTabBtn.click();
      } catch {
        alert("تعذر قراءة الصورة. جرّب صورة JPG أو PNG.");
      }
      fileInput.value = "";
    });
  }

  const btnRemove = document.getElementById("btnRemoveTopCardBgImage");
  if (btnRemove) {
    btnRemove.addEventListener("click", () => {
      state.topCardBgDataUrl = null;
      loadedImages.topCardBg = null;
      updateTopImageControlsVisibility();
      requestRender();
    });
  }

  const selStyle = document.getElementById("selectTopCardStyle");
  if (selStyle) {
    selStyle.addEventListener("change", () => {
      state.topCardStyle = selStyle.value;
      requestRender();
    });
  }

  TOP_IMAGE_RANGE_DEFAULTS.forEach(([id, key, lblId]) => {
    const el = document.getElementById(id);
    const lbl = document.getElementById(lblId);
    if (!el) return;
    el.addEventListener("input", () => {
      state[key] = Number(el.value);
      if (lbl) lbl.textContent = el.value;
      requestRender();
    });
  });

  const chkGrad = document.getElementById("chkTopCardOverlayGradient");
  if (chkGrad) {
    chkGrad.addEventListener("change", () => {
      state.topCardOverlayGradient = chkGrad.checked;
      requestRender();
    });
  }

  const btnResetAdj = document.getElementById("btnResetImageAdjust");
  if (btnResetAdj) {
    btnResetAdj.addEventListener("click", () => {
      TOP_IMAGE_RANGE_DEFAULTS.forEach(([, key, , def]) => {
        state[key] = def;
      });
      state.topCardOverlayGradient = false;
      syncInputsFromState();
      requestRender();
    });
  }

  setupCanvasImageDrag();
}

function syncInputsFromState() {
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };
  const setChk = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.checked = Boolean(val);
  };
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  const toggleHidden = (id, hide) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("hidden", Boolean(hide));
  };

  const isT1 = state.activeTemplateId === "1";
  const isT5 = state.activeTemplateId === "5";
  const isT6 = state.activeTemplateId === "6";
  const isT7 = state.activeTemplateId === "7";
  const isT8 = state.activeTemplateId === "8";
  const isSingleSurface = isT1 || isT5 || isT6 || isT7 || isT8;
  setVal("selectTemplatePreset", state.activeTemplateId || "4");

  // إظهار/إخفاء العناصر الخاصة بالقوالب المصمتة (١: الكحلي، ٥: مقتبسات الكتب، ٦: قصيدة البلاغة، ٧: النص البسيط بالمنتصف، ٨: قصيدة الصدر والعجز) مقابل قوالب البطاقتين
  toggleHidden("template1ControlsCard", !isT1);
  toggleHidden("template5ControlsCard", !isT5);
  toggleHidden("template6ControlsCard", !isT6);
  toggleHidden("template7ControlsCard", !isT7);
  toggleHidden("template8ControlsCard", !isT8);
  toggleHidden("step1ControlCard", isT5);
  toggleHidden("step2ControlCard", isT6 || isT7 || isT8);
  toggleHidden("poetControlsRow", isT6 || isT8);
  toggleHidden("fontTitleControlCard", isT5);
  toggleHidden("fontBodyControlCard", isT6 || isT7 || isT8);
  toggleHidden("copyrightFieldGroup", isT5 || isT6 || isT7 || isT8);
  toggleHidden("poetLineGroup", isSingleSurface);
  toggleHidden("sigControlsRow", isSingleSurface);
  toggleHidden("twoCardsDimensionsCard", isSingleSurface);
  toggleHidden("colorBgField", isSingleSurface);
  toggleHidden("colorBottomCardField", isSingleSurface);
  toggleHidden("topCardStyleGroup", isSingleSurface);

  // تحديث النصوص والعناوين في لوحة التحكم لتتوافق مع القالب النشط
  setTxt("lblTabStyle", isSingleSurface ? "الألوان والخلفية" : "الألوان والبطاقات");
  setTxt(
    "hdrStep1Title",
    isT8
      ? "أبيات القصيدة (صدر وعجز)"
      : isT7
      ? "النص في المنتصف"
      : isT6
      ? "شطور القصيدة العمودية («والمرء لا تشقيه»)"
      : isT1
      ? "العنوان الرئيسي («ليس لشيء»)"
      : "البطاقة العلوية (بيت الشعر / العنوان)"
  );
  setTxt(
    "hdrStep1Desc",
    isT8
      ? "اكتب كل بيت في سطر وافصل بين الصدر والعجز بـ (...) أو (*) أو (|)، واضغط على أي كلمة بالأسفل لتلوينها أو مدّها"
      : isT7
      ? "اكتب النص وسيظهر في منتصف الصورة مباشرة مع التفاف تلقائي للأسطر"
      : isT6
      ? "كل سطر يمثل شطراً في القصيدة، واضغط على أي كلمة بالأسفل لتلوينها بالأحمر أو مدّها"
      : isT1
      ? "يتوسط التصميم بحجم بارز مع دعم الحرف المرسل والكشيدة لكل كلمة"
      : "كل سطر يظهر في سطر مستقل داخل البطاقة الداكنة"
  );
  setTxt("lblQuickUploadBg", isSingleSurface ? "🖼️ وضع صورة خلفية للتصميم" : "🖼️ وضع صورة بالخلفية الخضراء");
  setTxt(
    "hdrStep2Title",
    isT5
      ? "نص المقتبس من الكتاب"
      : isT1
      ? "النص العربي الفرعي (أسفل العنوان)"
      : "البطاقة السفلية (الشرح والتعليق)"
  );
  setTxt(
    "lblInputBody",
    isT5
      ? "فقرة المقتبس (تدعم أرقام الحواشي مثل (٢) تلقائياً)"
      : isT1
      ? "النص الفرعي"
      : "نص الشرح / المتن"
  );
  setTxt(
    "hdrFontTitleCard",
    isT7
      ? "خط وحجم النص الوسطي"
      : isT6
      ? "خط وأبعاد شطور القصيدة"
      : isT1
      ? "خط وأبعاد العنوان الرئيسي"
      : "خط وأبعاد العنوان (البطاقة العلوية)"
  );
  setTxt(
    "hdrFontBodyCard",
    isT5
      ? "خط وأبعاد نص المقتبس"
      : isT1
      ? "خط وأبعاد النص الفرعي"
      : "خط وأبعاد الشرح (البطاقة السفلية)"
  );
  setTxt("lblColorTopCard", isT5 || isT6 ? "لون ورق اللوحة" : isT1 || isT7 ? "لون خلفية الصورة" : "البطاقة العلوية");
  setTxt(
    "lblColorBodyText",
    isT5
      ? "لون حبر النص ومخطوطة الكتاب"
      : isT6
      ? "لون التذييل السفلي"
      : isT1
      ? "لون النصوص الفرعية والفوتر"
      : "لون نص الشرح"
  );
  setTxt(
    "hdrBgImageCardTitle",
    isT5 || isT6
      ? "خلفية ورقية للوحة (اختياري)"
      : isT1 || isT7
      ? "صورة خلفية القالب (اختياري)"
      : "صورة خلفية البطاقة الخضراء (العلوية)"
  );
  setTxt(
    "hdrBgImageCardDesc",
    isSingleSurface
      ? "أضف صورة خلفية لكامل التصميم مع تحكم بالتعتيم والألوان"
      : "ضع صورة داخل المساحة الخضراء ويظهر النص فوقها بوضوح"
  );
  setTxt("lblUploadTopCardBgImage", isSingleSurface ? "+ اختر صورة خلفية للتصميم" : "+ اختر صورة لخلفية البطاقة الخضراء");

  const stageStatusSpan = document.querySelector(".stage-status span:last-child");
  if (stageStatusSpan) {
    const { W, H } = getArtboardDimensions();
    stageStatusSpan.textContent = `معاينة حية مطابقة للتصدير (${W} × ${H} px)`;
  }

  setChk("chkT1ShowDiamonds", state.t1ShowDiamonds ?? true);
  setVal("rangeT1DiamondSize", state.t1DiamondSize ?? 20);
  setTxt("valT1DiamondSize", state.t1DiamondSize ?? 20);
  setChk("chkT1ShowEnglish", state.t1ShowEnglish ?? true);
  setVal("inputT1EnglishText", state.t1EnglishText || "");
  setVal("rangeT1EnglishSize", state.t1EnglishSize ?? 17);
  setTxt("valT1EnglishSize", state.t1EnglishSize ?? 17);
  setVal("selectT1RightTagMode", state.t1RightTagMode || "mask");
  setVal("inputT1FooterRight", state.t1FooterRight || "محبة");
  setVal("inputT1FooterCenter", state.t1FooterCenter || "Lover");
  setVal("inputT1FooterLeftAr", state.t1FooterLeftAr || "لأجلك");

  const t1RightTextGrp = document.getElementById("t1RightTagTextGroup");
  if (t1RightTextGrp) {
    t1RightTextGrp.classList.toggle("hidden", (state.t1RightTagMode || "mask") !== "text");
  }

  // عناصر القالب الخامس (مقتبسات الكتب)
  setVal("selectT5BookId", state.t5BookId || "daa-wa-dawaa");
  setVal("selectT5StampMode", state.t5StampMode || "full");
  setVal("inputT5BookTitle", state.t5BookTitle || "الدَّاءُ وَالدَّوَاءُ");
  setVal("inputT5BookSubtitle", state.t5BookSubtitle ?? "تأليف");
  setVal("inputT5BookAuthor", state.t5BookAuthor ?? "الإِمَامِ أَبِي عَبْدِ اللهِ مُحَمَّدِ بْنِ أَبِي بَكْرِ بْنِ أَيُّوبَ ابْنِ قَيِّمِ الجَوْزِيَّةِ");
  setVal("inputT5BookYears", state.t5BookYears ?? "( ٦٩١ - ٧٥١ )");
  setChk("chkT5AutoCleanBg", state.t5AutoCleanBg ?? true);
  setVal("rangeT5StampScale", state.t5StampScale ?? 100);
  setTxt("valT5StampScale", state.t5StampScale ?? 100);
  setVal("rangeT5StampX", state.t5StampX ?? 0);
  setTxt("valT5StampX", state.t5StampX ?? 0);
  setVal("rangeT5StampY", state.t5StampY ?? 0);
  setTxt("valT5StampY", state.t5StampY ?? 0);
  setChk("chkT5FirstLineIndent", state.t5FirstLineIndent ?? true);
  toggleT5Subfields();

  // عناصر القالب السادس (قصيدة البلاغة العمودية)
  const curHighlight = state.t6HighlightColor || "#D4AF37";
  setVal("colorT6Highlight", curHighlight);
  setVal("hexT6Highlight", curHighlight);
  setVal("colorHighlight", curHighlight);
  setVal("hexHighlight", curHighlight);
  setVal("colorInspectorHighlight", curHighlight);
  setVal("hexInspectorHighlight", curHighlight);
  setVal("rangeT6PoemOffsetY", state.t6PoemOffsetY ?? 0);
  setTxt("valT6PoemOffsetY", state.t6PoemOffsetY ?? 0);
  setChk("chkT6JustifyLines", state.t6JustifyLines ?? true);
  setChk("chkT6PaperTexture", state.t6PaperTexture ?? true);
  setVal("selectT6FooterMode", state.t6FooterMode || "balagha-shawqi");
  setVal("inputT6FooterRight", state.t6FooterRight ?? "شوقي");
  setVal("inputT6FooterLeft", state.t6FooterLeft ?? "بَلَاغَة");
  setVal("rangeT6FooterScale", state.t6FooterScale ?? 100);
  setTxt("valT6FooterScale", state.t6FooterScale ?? 100);
  setVal("rangeT6FooterOffsetY", state.t6FooterOffsetY ?? 0);
  setTxt("valT6FooterOffsetY", state.t6FooterOffsetY ?? 0);
  toggleT6Subfields();

  // عناصر القالب السابع (النص البسيط في المنتصف)
  setVal("selectT7AspectRatio", state.t7AspectRatio || "square");
  setVal("selectT7TextAlign", state.t7TextAlign || "center");
  setVal("selectT7LogoPos", state.t7LogoPos || "bottom-center");
  setVal("rangeT7LogoScale", state.logoScale ?? 100);
  setTxt("valT7LogoScale", state.logoScale ?? 100);
  setVal("rangeT7OffsetY", state.t7OffsetY ?? 0);
  setTxt("valT7OffsetY", state.t7OffsetY ?? 0);
  setChk("chkT7ShowFrame", state.t7ShowFrame ?? false);

  toggleHidden("t8HeaderMainGroup", !isT8);
  toggleHidden("t8FooterMainGroup", !isT8);

  // عناصر القالب الثامن (القصيدة الكلاسيكية: صدر وعجز)
  const t8HMode = state.t8HeaderMode || "custom-text";
  setVal("selectT8HeaderMode", t8HMode);
  setVal("selectT8HeaderMode_main", t8HMode);

  setVal("selectT8HeaderFont", state.t8HeaderFont || "A Suls");
  setVal("selectT8HeaderFont_main", state.t8HeaderFont || "A Suls");

  const t8HTxt = state.t8HeaderText ?? "دَعْ مَا يَضُرُّكَ وَالتَمِسْ مَا يَنْفَعُ";
  setVal("inputT8HeaderText", t8HTxt);
  setVal("inputT8HeaderText_main", t8HTxt);

  const t8HSize = state.t8HeaderSize ?? 68;
  setVal("rangeT8HeaderSize", t8HSize);
  setTxt("valT8HeaderSize", t8HSize);
  setVal("rangeT8HeaderSize_main", t8HSize);
  setTxt("valT8HeaderSize_main", t8HSize);

  const t8HOffsetY = state.t8HeaderOffsetY ?? 0;
  setVal("rangeT8HeaderOffsetY", t8HOffsetY);
  setTxt("valT8HeaderOffsetY", t8HOffsetY);
  setVal("rangeT8HeaderOffsetY_main", t8HOffsetY);
  setTxt("valT8HeaderOffsetY_main", t8HOffsetY);

  setVal("rangeT8ColGap", state.t8ColGap ?? 140);
  setTxt("valT8ColGap", state.t8ColGap ?? 140);
  setVal("rangeT8ColWidth", state.t8ColWidth ?? 400);
  setTxt("valT8ColWidth", state.t8ColWidth ?? 400);
  setVal("rangeT8LineSpacing", state.t8LineSpacing ?? 78);
  setTxt("valT8LineSpacing", state.t8LineSpacing ?? 78);
  setVal("selectT8CenterDivider", state.t8CenterDivider || "none");
  setChk("chkT8JustifyLines", state.t8JustifyLines ?? true);
  setChk("chkT8PaperTexture", state.t8PaperTexture ?? true);

  const t8FMode = state.t8FooterMode || "custom-text";
  setVal("selectT8FooterMode", t8FMode);
  setVal("selectT8FooterMode_main", t8FMode);

  const t8FRight = state.t8FooterRight ?? "مِنْ شِعْرِ أَحْمَد شَوْقِي وَخَطِّ مُحَمَّد مَطَر";
  setVal("inputT8FooterRight", t8FRight);
  setVal("inputT8FooterRight_main", t8FRight);

  const t8FDate = state.t8FooterDate ?? "١٤٤٠ هـ";
  setVal("inputT8FooterDate", t8FDate);
  setVal("inputT8FooterDate_main", t8FDate);

  const t8FScale = state.t8FooterScale ?? 100;
  setVal("rangeT8FooterScale", t8FScale);
  setTxt("valT8FooterScale", t8FScale);
  setVal("rangeT8FooterScale_main", t8FScale);
  setTxt("valT8FooterScale_main", t8FScale);

  const t8FOffsetY = state.t8FooterOffsetY ?? 0;
  setVal("rangeT8FooterOffsetY", t8FOffsetY);
  setTxt("valT8FooterOffsetY", t8FOffsetY);
  setVal("rangeT8FooterOffsetY_main", t8FOffsetY);
  setTxt("valT8FooterOffsetY_main", t8FOffsetY);

  setVal("selectT8AspectRatio", state.t8AspectRatio || "parchment");
  setVal("rangeT6PoemOffsetY_t8", state.t6PoemOffsetY ?? 0);
  setTxt("valT6PoemOffsetY_t8", state.t6PoemOffsetY ?? 0);

  toggleHidden("t8HeaderFontGroup", (state.t8HeaderMode || "custom-text") !== "custom-text");
  toggleHidden("t8HeaderTextGroup", (state.t8HeaderMode || "custom-text") !== "custom-text");
  toggleHidden("t8CustomFooterRow", (state.t8FooterMode || "custom-text") !== "custom-text");

  setVal("inputQuote", state.quoteText);
  setVal("inputPoet", state.poet);
  setVal("rangePoetLine", state.poetLineLength);
  setTxt("valPoetLine", state.poetLineLength);

  setVal("inputBody", state.bodyText);
  setVal("selectSigMode", state.sigMode);
  setVal("inputSignature", state.signatureText);
  setVal("inputCopyright", state.copyrightText);

  setChk("chkAutoKashida", state.autoKashida);
  setChk("chkBodySmartSwash", state.bodySmartSwash);
  setChk("chkExtendedFatha", state.extendedFatha);
  setVal("rangeKashidaIntensity", state.kashidaIntensity);
  setTxt("valKashidaIntensity", state.kashidaIntensity);
  setVal("selectMaxKashidaPerWord", state.maxKashidaPerWord);
  setVal("selectBodyAlign", state.bodyLastLineAlign);

  setVal("selectQuoteFont", state.quoteFont);
  setVal("selectQuoteWeight", state.quoteWeight);
  setVal("rangeQuoteSize", state.quoteSize);
  setTxt("valQuoteSize", state.quoteSize);
  setVal("rangeQuoteLineHeight", state.quoteLineHeight);
  setTxt("valQuoteLineHeight", state.quoteLineHeight);
  setVal("rangePoetSize", state.poetSize);
  setTxt("valPoetSize", state.poetSize);
  setVal("rangeQuoteWidth", state.quoteWidth);
  setTxt("valQuoteWidth", state.quoteWidth);

  setVal("selectBodyFont", state.bodyFont);
  setVal("selectBodyWeight", state.bodyWeight);
  setVal("rangeBodySize", state.bodySize);
  setTxt("valBodySize", state.bodySize);
  setVal("rangeBodyLineHeight", state.bodyLineHeight);
  setTxt("valBodyLineHeight", state.bodyLineHeight);
  setVal("rangeBodyWidth", state.bodyWidth);
  setTxt("valBodyWidth", state.bodyWidth);

  setVal("colorBg", state.bgColor);
  setVal("hexBg", state.bgColor);
  setVal("colorTopCard", state.topCardColor);
  setVal("hexTopCard", state.topCardColor);
  setVal("colorBottomCard", state.bottomCardColor);
  setVal("hexBottomCard", state.bottomCardColor);
  setVal("colorQuoteText", state.quoteTextColor);
  setVal("hexQuoteText", state.quoteTextColor);
  setVal("colorBodyText", state.bodyTextColor);
  setVal("hexBodyText", state.bodyTextColor);
  setVal("colorLogo", state.logoColor);
  setVal("hexLogo", state.logoColor);

  setVal("rangeTopCardHeight", state.topCardHeight);
  setTxt("valTopCardHeight", state.topCardHeight);
  setVal("rangeCardRadius", state.cardRadius);
  setTxt("valCardRadius", state.cardRadius);
  setVal("rangeShadowStrength", state.shadowStrength);
  setTxt("valShadowStrength", state.shadowStrength);
  setVal("rangeBodyOffsetY", state.bodyOffsetY);
  setTxt("valBodyOffsetY", state.bodyOffsetY);

  // صورة البطاقة الخضراء وتوزينها
  setVal("selectTopCardStyle", state.topCardStyle || "card");
  TOP_IMAGE_RANGE_DEFAULTS.forEach(([id, key, lblId, def]) => {
    const v = state[key] ?? def;
    setVal(id, v);
    setTxt(lblId, v);
  });
  setChk("chkTopCardOverlayGradient", state.topCardOverlayGradient);
  updateTopImageControlsVisibility();

  setVal("selectLogoMode", state.logoMode);
  setVal("rangeLogoScale", state.logoScale);
  setTxt("valLogoScale", state.logoScale);
  setVal("inputLogoText", state.logoText);
  setVal("rangeLogoDividerLength", state.logoDividerLength ?? 52);
  setTxt("valLogoDividerLength", state.logoDividerLength ?? 52);
  setVal("rangeLogoDividerThickness", state.logoDividerThickness ?? 2.5);
  setTxt("valLogoDividerThickness", state.logoDividerThickness ?? 2.5);
  setVal("rangeLogoDividerGap", state.logoDividerGap ?? 26);
  setTxt("valLogoDividerGap", state.logoDividerGap ?? 26);
  setVal("colorLogoDivider", state.logoDividerColor || state.logoColor || "#157A4E");
  setVal("hexLogoDivider", state.logoDividerColor || state.logoColor || "#157A4E");
  setChk("chkLogoBgEnabled", state.logoBgEnabled);
  setVal("colorLogoBg", state.logoBgColor || "#023222");
  setVal("hexLogoBg", state.logoBgColor || "#023222");
  setVal("rangeLogoBgPadding", state.logoBgPadding ?? 22);
  setTxt("valLogoBgPadding", state.logoBgPadding ?? 22);
  setVal("rangeLogoBgRadius", state.logoBgRadius ?? 50);
  setTxt("valLogoBgRadius", state.logoBgRadius ?? 50);
  setVal("rangeLogoBgOpacity", state.logoBgOpacity ?? 100);
  setTxt("valLogoBgOpacity", state.logoBgOpacity ?? 100);
  setVal("selectLogoShadowTarget", state.logoShadowTarget || "none");
  setVal("colorLogoShadow", state.logoShadowColor || "#000000");
  setVal("hexLogoShadow", state.logoShadowColor || "#000000");
  setVal("rangeLogoShadowStrength", state.logoShadowStrength ?? 38);
  setTxt("valLogoShadowStrength", state.logoShadowStrength ?? 38);
  setVal("rangeLogoShadowBlur", state.logoShadowBlur ?? 18);
  setTxt("valLogoShadowBlur", state.logoShadowBlur ?? 18);
  setVal("rangeLogoShadowOffsetY", state.logoShadowOffsetY ?? 8);
  setTxt("valLogoShadowOffsetY", state.logoShadowOffsetY ?? 8);
  setChk("chkShowTopOrnament", state.showTopOrnament);
  setChk("chkShowBottomOrnament", state.showBottomOrnament);

  renderExtraLogosUI();
  toggleLogoSubfields();
  refreshAllCustomDropboxes();
}

/**
 * نظام القوائم المنسدلة المخصص (Asheer Custom Dropbox UI)
 * يحول كل <select class="asheer-dropbox"> إلى قائمة تفاعلية بتصميم خاص
 * ويدعم التنقل الفوري بأسهم الكيبورد (فوق/تحت) أو أزرار الأسهم مع معاينة فورية للخطوط
 */
function stepSelectOption(selectEl, delta) {
  if (!selectEl) return;
  const opts = Array.from(selectEl.options).filter((o) => !o.disabled);
  if (opts.length === 0) return;
  const curIdx = opts.findIndex((o) => o.value === selectEl.value);
  let nextIdx = curIdx + delta;
  if (nextIdx < 0) nextIdx = opts.length - 1;
  if (nextIdx >= opts.length) nextIdx = 0;
  if (opts[nextIdx] && opts[nextIdx].value !== selectEl.value) {
    selectEl.value = opts[nextIdx].value;
    selectEl.dispatchEvent(new Event("change", { bubbles: true }));
    selectEl.dispatchEvent(new Event("input", { bubbles: true }));
    if (selectEl._refreshCustomDropbox) {
      selectEl._refreshCustomDropbox(true);
    }
  }
}

function enhanceAsheerDropboxes(root = document) {
  const selects = root.querySelectorAll("select.asheer-dropbox");
  selects.forEach((selectEl) => {
    if (selectEl.dataset.dropboxEnhanced === "1") {
      if (selectEl._refreshCustomDropbox) selectEl._refreshCustomDropbox(false);
      return;
    }
    selectEl.dataset.dropboxEnhanced = "1";
    selectEl.classList.add("asheer-native-select-hidden");

    const isFontSelect = selectEl.classList.contains("asheer-font-dropbox");
    const wrapper = document.createElement("div");
    wrapper.className = "asheer-dropbox-wrapper";

    const controlBar = document.createElement("div");
    controlBar.className = "asheer-dropbox-control";

    const triggerBtn = document.createElement("button");
    triggerBtn.type = "button";
    triggerBtn.className = "asheer-dropbox-trigger";
    triggerBtn.setAttribute("aria-haspopup", "listbox");
    triggerBtn.setAttribute("aria-expanded", "false");

    const labelSpan = document.createElement("span");
    labelSpan.className = "asheer-dropbox-label";

    const chevronSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chevronSvg.setAttribute("viewBox", "0 0 24 24");
    chevronSvg.setAttribute("fill", "none");
    chevronSvg.setAttribute("stroke", "currentColor");
    chevronSvg.setAttribute("stroke-width", "2.4");
    chevronSvg.setAttribute("class", "asheer-dropbox-chevron");
    chevronSvg.innerHTML = `<polyline points="6 9 12 15 18 9"></polyline>`;

    triggerBtn.appendChild(labelSpan);
    triggerBtn.appendChild(chevronSvg);

    // أزرار الأسهم فوق/تحت للتبديل السريع الفوري
    const steppersBox = document.createElement("div");
    steppersBox.className = "asheer-dropbox-steppers";

    const btnUp = document.createElement("button");
    btnUp.type = "button";
    btnUp.className = "asheer-step-arrow";
    btnUp.title = "الخيار السابق (سهم لأعلى)";
    btnUp.textContent = "▲";
    btnUp.addEventListener("click", (e) => {
      e.stopPropagation();
      stepSelectOption(selectEl, -1);
    });

    const btnDown = document.createElement("button");
    btnDown.type = "button";
    btnDown.className = "asheer-step-arrow";
    btnDown.title = "الخيار التالي (سهم لأسفل)";
    btnDown.textContent = "▼";
    btnDown.addEventListener("click", (e) => {
      e.stopPropagation();
      stepSelectOption(selectEl, 1);
    });

    steppersBox.appendChild(btnUp);
    steppersBox.appendChild(btnDown);

    controlBar.appendChild(triggerBtn);
    controlBar.appendChild(steppersBox);

    const menuEl = document.createElement("div");
    menuEl.className = "asheer-dropbox-menu";
    menuEl.setAttribute("role", "listbox");

    selectEl.parentNode.insertBefore(wrapper, selectEl);
    wrapper.appendChild(selectEl);
    wrapper.appendChild(controlBar);
    wrapper.appendChild(menuEl);

    const buildMenuItems = (scrollActiveIntoView = false) => {
      menuEl.innerHTML = "";
      const selectedOpt = selectEl.options[selectEl.selectedIndex] || selectEl.options[0];
      labelSpan.textContent = selectedOpt ? selectedOpt.textContent : "";
      if (isFontSelect && selectedOpt) {
        labelSpan.style.fontFamily = `"${selectedOpt.value}", var(--ui-font)`;
      }

      const appendOptionRow = (opt) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "asheer-dropbox-option" + (opt.value === selectEl.value ? " active" : "");
        itemDiv.dataset.value = opt.value;

        const txt = document.createElement("span");
        txt.textContent = opt.textContent;
        if (isFontSelect) {
          txt.style.fontFamily = `"${opt.value}", var(--ui-font)`;
          txt.style.fontSize = "14.5px";
        }

        const chk = document.createElement("span");
        chk.className = "opt-check";
        chk.textContent = "✓";

        itemDiv.appendChild(txt);
        itemDiv.appendChild(chk);

        itemDiv.addEventListener("click", (ev) => {
          ev.stopPropagation();
          if (selectEl.value !== opt.value) {
            selectEl.value = opt.value;
            selectEl.dispatchEvent(new Event("change", { bubbles: true }));
            selectEl.dispatchEvent(new Event("input", { bubbles: true }));
          }
          buildMenuItems(false);
          wrapper.classList.remove("open");
          triggerBtn.setAttribute("aria-expanded", "false");
          triggerBtn.focus();
        });

        menuEl.appendChild(itemDiv);
      };

      Array.from(selectEl.children).forEach((child) => {
        if (child.tagName === "OPTGROUP") {
          const opts = Array.from(child.children).filter((opt) => opt.tagName === "OPTION");
          if (opts.length === 0 || child.hidden) return;
          const grpLbl = document.createElement("div");
          grpLbl.className = "asheer-dropbox-group-label";
          grpLbl.textContent = child.label;
          menuEl.appendChild(grpLbl);
          opts.forEach((opt) => appendOptionRow(opt));
        } else if (child.tagName === "OPTION") {
          appendOptionRow(child);
        }
      });

      if (scrollActiveIntoView) {
        const activeRow = menuEl.querySelector(".asheer-dropbox-option.active");
        if (activeRow) {
          activeRow.scrollIntoView({ block: "nearest" });
        }
      }
    };

    selectEl._refreshCustomDropbox = buildMenuItems;
    buildMenuItems(false);

    triggerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const wasOpen = wrapper.classList.contains("open");
      document.querySelectorAll(".asheer-dropbox-wrapper.open").forEach((w) => {
        w.classList.remove("open");
        const b = w.querySelector(".asheer-dropbox-trigger");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        buildMenuItems(true);
        wrapper.classList.add("open");
        triggerBtn.setAttribute("aria-expanded", "true");
        const activeRow = menuEl.querySelector(".asheer-dropbox-option.active");
        if (activeRow) activeRow.scrollIntoView({ block: "nearest" });
      }
    });

    // دعم أسهم الكيبورد (فوق / تحت) لتغيير الخيارات والخطوط مباشرة مع ظهور التغيير فوراً
    triggerBtn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        e.stopPropagation();
        stepSelectOption(selectEl, 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        e.stopPropagation();
        stepSelectOption(selectEl, -1);
      } else if (e.key === "Escape") {
        wrapper.classList.remove("open");
        triggerBtn.setAttribute("aria-expanded", "false");
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        triggerBtn.click();
      }
    });

    selectEl.addEventListener("change", () => {
      buildMenuItems(true);
    });
  });
}

function refreshAllCustomDropboxes() {
  document.querySelectorAll("select.asheer-dropbox").forEach((sel) => {
    if (sel._refreshCustomDropbox) {
      sel._refreshCustomDropbox(false);
    }
  });
}

// إغلاق القوائم المنسدلة عند الضغط خارجها ودعم أسهم الكيبورد للقائمة المفتوحة
document.addEventListener("click", () => {
  document.querySelectorAll(".asheer-dropbox-wrapper.open").forEach((w) => {
    w.classList.remove("open");
    const b = w.querySelector(".asheer-dropbox-trigger");
    if (b) b.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (e) => {
  const openWrapper = document.querySelector(".asheer-dropbox-wrapper.open");
  if (!openWrapper) return;
  const sel = openWrapper.querySelector("select.asheer-dropbox");
  if (!sel) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    stepSelectOption(sel, 1);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    stepSelectOption(sel, -1);
  } else if (e.key === "Escape") {
    openWrapper.classList.remove("open");
    const b = openWrapper.querySelector(".asheer-dropbox-trigger");
    if (b) b.setAttribute("aria-expanded", "false");
  }
});

function toggleLogoSubfields() {
  const logoTextGroup = document.getElementById("logoTextGroup");
  const logoUploadGroup = document.getElementById("logoUploadGroup");
  const logoBgControls = document.getElementById("logoBgControls");
  const logoShadowControls = document.getElementById("logoShadowControls");
  const logoDividerControls = document.getElementById("logoDividerControls");
  if (logoTextGroup) {
    logoTextGroup.classList.toggle("hidden", state.logoMode !== "custom-text");
  }
  if (logoUploadGroup) {
    logoUploadGroup.classList.toggle("hidden", state.logoMode !== "custom-image");
  }
  if (logoBgControls) {
    logoBgControls.classList.toggle("hidden", !state.logoBgEnabled);
  }
  if (logoShadowControls) {
    logoShadowControls.classList.toggle("hidden", !state.logoShadowTarget || state.logoShadowTarget === "none");
  }
  if (logoDividerControls) {
    const hasMultiple = Array.isArray(state.extraLogos) && state.extraLogos.length > 0;
    logoDividerControls.classList.toggle("hidden", !hasMultiple);
  }
}

const SAVED_BOOKS_STORAGE_KEY = "asheer_saved_books_v1";

function getSavedCustomBooks() {
  try {
    const raw = localStorage.getItem(SAVED_BOOKS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCustomBooksList(list) {
  try {
    localStorage.setItem(SAVED_BOOKS_STORAGE_KEY, JSON.stringify(list));
  } catch {
    alert("تعذر حفظ الكتاب في ذاكرة المتصفح.");
  }
  populateSavedBooksSelect();
}

function populateSavedBooksSelect() {
  const optgroup =
    document.getElementById("t5SavedBooksOptgroup") ||
    document.getElementById("t5BooksOptgroup");
  if (!optgroup) return;
  Array.from(optgroup.querySelectorAll('option[data-custom-book="1"]')).forEach((o) => o.remove());
  const books = getSavedCustomBooks();
  books.forEach((bk) => {
    const opt = document.createElement("option");
    opt.value = bk.id;
    opt.dataset.customBook = "1";
    opt.textContent = bk.label || bk.title;
    optgroup.appendChild(opt);
  });
  const sel = document.getElementById("selectT5BookId");
  if (sel && sel._refreshCustomDropbox) {
    sel._refreshCustomDropbox(false);
  }
}

const BUILTIN_PRESET_BOOK_IDS = new Set([
  "daa-wa-dawaa",
  "zad-al-maad",
  "madarij-al-salikin",
  "al-fawaid",
  "badai-al-fawaid",
  "uddat-al-sabirin",
  "tariq-al-hijratayn",
  "jala-al-afham",
  "rawdat-al-muhibbin",
  "hadi-al-arwah",
  "ighathat-al-lahfan",
  "ilam-al-muwaqqiin",
  "risalat-ibn-al-qayyim",
  "al-ikseer",
  "taysir-al-karim-al-rahman",
  "al-tafsir-al-muyassar",
  "sharh-hilyat-talib-al-ilm",
  "mukhtasar-minhaj",
  "sayd-al-khatir",
  "talbis-iblis",
  "al-bidaya",
  "al-kamil",
  "rijal-min-tarikh",
  "qisas-min-tarikh",
  "suwar-wa-khawatir",
  "rihlat-al-istiqama"
]);

function toggleT5Subfields() {
  const customBox = document.getElementById("t5CustomBookFields");
  const titleGrp = document.getElementById("t5BookTitleInputGroup");
  const authorGrp = document.getElementById("t5BookAuthorFieldsGroup");
  const btnSaveBook = document.getElementById("btnT5SaveBookToLibrary");
  const btnRemoveStamp = document.getElementById("btnRemoveT5BookStamp");
  const cleanBgWrap = document.getElementById("t5AutoCleanBgWrap");
  if (!customBox) return;

  const bookId = state.t5BookId || "daa-wa-dawaa";
  const stampMode = state.t5StampMode || "full";
  const hasUploadedStamp = Boolean(state.t5CustomStampDataUrl || loadedImages.t5CustomStamp);
  const isBuiltinBook = BUILTIN_PRESET_BOOK_IDS.has(bookId);

  if (btnRemoveStamp) {
    btnRemoveStamp.classList.toggle("hidden", !hasUploadedStamp);
  }
  if (cleanBgWrap) {
    cleanBgWrap.classList.toggle("hidden", !hasUploadedStamp && bookId !== "custom-image");
  }

  if (isBuiltinBook && !hasUploadedStamp) {
    const needCustomAuthor = stampMode === "custom-author";
    customBox.classList.toggle("hidden", !needCustomAuthor);
    if (titleGrp) titleGrp.classList.add("hidden");
    if (authorGrp) authorGrp.classList.toggle("hidden", !needCustomAuthor);
    if (btnSaveBook) btnSaveBook.classList.add("hidden");
  } else if (bookId === "custom-image" || hasUploadedStamp) {
    customBox.classList.remove("hidden");
    if (titleGrp) titleGrp.classList.remove("hidden");
    if (authorGrp) authorGrp.classList.toggle("hidden", stampMode !== "custom-author");
    if (btnSaveBook) btnSaveBook.classList.toggle("hidden", bookId.startsWith("saved-book-"));
  } else {
    // custom-text أو كتاب محفوظ نصي من القائمة
    customBox.classList.remove("hidden");
    if (titleGrp) titleGrp.classList.remove("hidden");
    if (authorGrp) authorGrp.classList.toggle("hidden", stampMode === "title-only");
    if (btnSaveBook) btnSaveBook.classList.toggle("hidden", bookId !== "custom-text");
  }
}

function toggleT6Subfields() {
  const mode = state.t6FooterMode || "balagha-shawqi";
  const textFields = document.getElementById("t6FooterTextFields");
  const uploadGrp = document.getElementById("t6FooterUploadGroup");
  const btnRemove = document.getElementById("btnRemoveT6Stamp");
  const hasStamp = Boolean(state.t6CustomStampDataUrl || loadedImages.t6CustomStamp);

  if (textFields) {
    textFields.classList.toggle("hidden", mode !== "custom-text" && mode !== "custom-stamp");
  }
  if (uploadGrp) {
    uploadGrp.classList.toggle("hidden", mode !== "custom-stamp");
  }
  if (btnRemove) {
    btnRemove.classList.toggle("hidden", !hasStamp);
  }
}

function loadT6CustomStampFromDataUrl(dataUrl) {
  return new Promise((resolve) => {
    if (!dataUrl) {
      loadedImages.t6CustomStamp = null;
      loadedImages.t6CustomStampMask = null;
      resolve(null);
      return;
    }
    const img = new Image();
    img.onload = () => {
      loadedImages.t6CustomStamp = img;
      loadedImages.t6CustomStampMask = createCleanBookStampMask(img);
      resolve(img);
    };
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });
}

/**
 * بناء عناصر التحكم بالشعارات الإضافية ديناميكياً
 */
function renderExtraLogosUI() {
  const container = document.getElementById("extraLogosContainer");
  if (!container) return;
  container.innerHTML = "";
  if (!Array.isArray(state.extraLogos)) {
    state.extraLogos = [];
  }

  state.extraLogos.forEach((item, index) => {
    const card = document.createElement("div");
    card.style.cssText =
      "background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 10px; display: flex; flex-direction: column; gap: 8px;";

    const header = document.createElement("div");
    header.className = "label-with-action";
    header.innerHTML = `<strong style="font-size:12.5px; color:var(--accent-bright);">الشعار الإضافي (${index + 2})</strong>`;

    const btnDel = document.createElement("button");
    btnDel.type = "button";
    btnDel.className = "mini-btn";
    btnDel.style.color = "#f87171";
    btnDel.style.borderColor = "rgba(248,113,113,0.3)";
    btnDel.textContent = "حذف ×";
    btnDel.addEventListener("click", () => {
      state.extraLogos.splice(index, 1);
      renderExtraLogosUI();
      toggleLogoSubfields();
      requestRender();
    });
    header.appendChild(btnDel);
    card.appendChild(header);

    // الصف الأول: نوع الشعار + حجمه
    const row1 = document.createElement("div");
    row1.className = "field-row";
    row1.innerHTML = `
      <div class="field-group flex-1">
        <label>نوع الشعار</label>
        <select class="asheer-dropbox ex-logo-mode">
          <option value="custom-text" ${item.mode === "custom-text" ? "selected" : ""}>نص مكتوب بالخط</option>
          <option value="custom-image" ${item.mode === "custom-image" ? "selected" : ""}>صورة شعار (PNG/SVG)</option>
          <option value="wadaq-mask" ${item.mode === "wadaq-mask" ? "selected" : ""}>شعار "أشير" الأصلي</option>
        </select>
      </div>
      <div class="field-group flex-1">
        <label>الحجم (<span class="ex-scale-val">${item.scale || 95}</span>%)</label>
        <input type="range" class="ex-logo-scale" min="40" max="180" value="${item.scale || 95}" />
      </div>
    `;
    card.appendChild(row1);

    // الصف الثاني: نص الشعار أو رفع الصورة + لون الشعار
    const row2 = document.createElement("div");
    row2.className = "field-row";

    const leftCol = document.createElement("div");
    leftCol.className = "field-group flex-1";
    if (item.mode === "custom-text") {
      leftCol.innerHTML = `
        <label>نص الشعار</label>
        <input type="text" class="ex-logo-text" value="${item.text || ""}" placeholder="مثال: سجايا" />
      `;
    } else if (item.mode === "custom-image") {
      const fileId = `exLogoFile_${item.id}`;
      leftCol.innerHTML = `
        <label for="${fileId}" class="btn btn-outline-full" style="padding:7px; font-size:12px;">+ اختر صورة الشعار</label>
        <input type="file" id="${fileId}" class="ex-logo-file" accept="image/*" hidden />
      `;
    } else {
      leftCol.innerHTML = `<small style="color:var(--text-muted);">يستخدم قناع شعار ودق الأصلي</small>`;
    }

    const rightCol = document.createElement("div");
    rightCol.className = "color-field flex-1";
    const cVal = item.color || state.logoColor || "#157A4E";
    rightCol.innerHTML = `
      <label>لون الشعار</label>
      <div class="color-input-wrap">
        <input type="color" class="ex-logo-color" value="${cVal}" />
        <input type="text" class="ex-logo-hex" value="${cVal}" dir="ltr" />
      </div>
    `;

    row2.appendChild(leftCol);
    row2.appendChild(rightCol);
    card.appendChild(row2);

    // ربط الأحداث لهذا الشعار الإضافي
    const selMode = card.querySelector(".ex-logo-mode");
    selMode.addEventListener("change", () => {
      item.mode = selMode.value;
      renderExtraLogosUI();
      requestRender();
    });

    const rngScale = card.querySelector(".ex-logo-scale");
    const lblScale = card.querySelector(".ex-scale-val");
    rngScale.addEventListener("input", () => {
      item.scale = Number(rngScale.value);
      lblScale.textContent = rngScale.value;
      requestRender();
    });

    const inpText = card.querySelector(".ex-logo-text");
    if (inpText) {
      inpText.addEventListener("input", () => {
        item.text = inpText.value;
        requestRender();
      });
    }

    const inpFile = card.querySelector(".ex-logo-file");
    if (inpFile) {
      inpFile.addEventListener("change", (ev) => {
        const file = ev.target.files && ev.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            loadedImages.extraLogos[item.id] = img;
            item.imageDataUrl = reader.result;
            requestRender();
          };
          img.src = reader.result;
        };
        reader.readAsDataURL(file);
      });
    }

    const inpColor = card.querySelector(".ex-logo-color");
    const inpHex = card.querySelector(".ex-logo-hex");
    inpColor.addEventListener("input", () => {
      item.color = inpColor.value.toUpperCase();
      inpHex.value = item.color;
      requestRender();
    });
    inpHex.addEventListener("input", () => {
      if (/^#[0-9A-Fa-f]{6}$/.test(inpHex.value.trim())) {
        item.color = inpHex.value.trim().toUpperCase();
        inpColor.value = item.color;
        requestRender();
      }
    });

    container.appendChild(card);
    enhanceAsheerDropboxes(card);
  });
}

function bindEvents() {
  // التبويبات
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add("active");
    });
  });

  // نص البيت/العنوان
  const inputQuote = document.getElementById("inputQuote");
  inputQuote.addEventListener("input", () => {
    state.quoteText = inputQuote.value;
    renderQuoteWordChips();
    requestRender();
  });

  // مفتش الكلمات التفاعلي للعنوان
  const chkWordHighlight = document.getElementById("chkWordHighlight");
  if (chkWordHighlight) {
    chkWordHighlight.addEventListener("change", (e) => {
      if (!selectedWordKey) return;
      if (!state.quoteWordStyles[selectedWordKey]) {
        state.quoteWordStyles[selectedWordKey] = { swash: false, kashida: 0, highlight: false };
      }
      state.quoteWordStyles[selectedWordKey].highlight = e.target.checked;
      renderQuoteWordChips();
      requestRender();
    });
  }

  document.getElementById("chkWordSwash").addEventListener("change", (e) => {
    if (!selectedWordKey) return;
    if (!state.quoteWordStyles[selectedWordKey]) {
      state.quoteWordStyles[selectedWordKey] = { swash: false, kashida: 0, highlight: false };
    }
    state.quoteWordStyles[selectedWordKey].swash = e.target.checked;
    renderQuoteWordChips();
    requestRender();
  });

  document.getElementById("btnKashidaMinus").addEventListener("click", () => {
    if (!selectedWordKey) return;
    const st = state.quoteWordStyles[selectedWordKey] || { swash: false, kashida: 0 };
    st.kashida = Math.max(0, (st.kashida || 0) - 1);
    state.quoteWordStyles[selectedWordKey] = st;
    renderQuoteWordChips();
    requestRender();
  });

  document.getElementById("btnKashidaPlus").addEventListener("click", () => {
    if (!selectedWordKey) return;
    const st = state.quoteWordStyles[selectedWordKey] || { swash: false, kashida: 0 };
    st.kashida = Math.min(5, (st.kashida || 0) + 1);
    state.quoteWordStyles[selectedWordKey] = st;
    renderQuoteWordChips();
    requestRender();
  });

  // إدراج كشيدة يدوية في نص المتن
  document.getElementById("btnInsertTatweelBody").addEventListener("click", () => {
    const ta = document.getElementById("inputBody");
    const start = ta.selectionStart || 0;
    const end = ta.selectionEnd || 0;
    const text = ta.value;
    ta.value = text.slice(0, start) + "ـ" + text.slice(end);
    state.bodyText = ta.value;
    ta.focus();
    ta.setSelectionRange(start + 1, start + 1);
    requestRender();
  });

  // ربط المدخلات النصية المباشرة
  const textBindings = [
    ["inputPoet", "poet"],
    ["inputBody", "bodyText"],
    ["inputSignature", "signatureText"],
    ["inputCopyright", "copyrightText"],
    ["inputLogoText", "logoText"],
    ["inputT1EnglishText", "t1EnglishText"],
    ["inputT1FooterRight", "t1FooterRight"],
    ["inputT1FooterCenter", "t1FooterCenter"],
    ["inputT1FooterLeftAr", "t1FooterLeftAr"],
    ["inputT5BookTitle", "t5BookTitle"],
    ["inputT5BookSubtitle", "t5BookSubtitle"],
    ["inputT5BookAuthor", "t5BookAuthor"],
    ["inputT5BookYears", "t5BookYears"],
    ["inputT6FooterRight", "t6FooterRight"],
    ["inputT6FooterLeft", "t6FooterLeft"],
    ["inputT8HeaderText", "t8HeaderText"],
    ["inputT8HeaderText_main", "t8HeaderText"],
    ["inputT8FooterRight", "t8FooterRight"],
    ["inputT8FooterRight_main", "t8FooterRight"],
    ["inputT8FooterDate", "t8FooterDate"],
    ["inputT8FooterDate_main", "t8FooterDate"]
  ];
  textBindings.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        state[key] = el.value;

        const twinId = id.endsWith("_main") ? id.replace("_main", "") : `${id}_main`;
        const twinEl = document.getElementById(twinId);
        if (twinEl && twinEl.value !== el.value) twinEl.value = el.value;

        if (key === "t8HeaderText" && state.t8HeaderMode === "manuscript") {
          state.t8HeaderMode = "custom-text";
          const s1 = document.getElementById("selectT8HeaderMode");
          const s2 = document.getElementById("selectT8HeaderMode_main");
          if (s1) s1.value = "custom-text";
          if (s2) s2.value = "custom-text";
          toggleHidden("t8HeaderFontGroup", false);
          toggleHidden("t8HeaderTextGroup", false);
        }
        if ((key === "t8FooterRight" || key === "t8FooterDate") && state.t8FooterMode === "manuscript") {
          state.t8FooterMode = "custom-text";
          const s1 = document.getElementById("selectT8FooterMode");
          const s2 = document.getElementById("selectT8FooterMode_main");
          if (s1) s1.value = "custom-text";
          if (s2) s2.value = "custom-text";
          toggleHidden("t8CustomFooterRow", false);
        }
        requestRender();
      });
    }
  });

  // مبدل القوالب السريع في الشريط العلوي
  const selectTemplatePreset = document.getElementById("selectTemplatePreset");
  if (selectTemplatePreset) {
    selectTemplatePreset.addEventListener("change", () => {
      applyPresetTemplateById(selectTemplatePreset.value);
    });
  }

  // ربط القوائم المنسدلة (Selects)
  const selectBindings = [
    ["selectSigMode", "sigMode"],
    ["selectMaxKashidaPerWord", "maxKashidaPerWord"],
    ["selectBodyAlign", "bodyLastLineAlign"],
    ["selectQuoteFont", "quoteFont"],
    ["selectQuoteWeight", "quoteWeight"],
    ["selectBodyFont", "bodyFont"],
    ["selectBodyWeight", "bodyWeight"],
    ["selectLogoMode", "logoMode"],
    ["selectLogoShadowTarget", "logoShadowTarget"],
    ["selectT1RightTagMode", "t1RightTagMode"],
    ["selectT5BookId", "t5BookId"],
    ["selectT5StampMode", "t5StampMode"],
    ["selectT6FooterMode", "t6FooterMode"],
    ["selectT7AspectRatio", "t7AspectRatio"],
    ["selectT7TextAlign", "t7TextAlign"],
    ["selectT7LogoPos", "t7LogoPos"],
    ["selectT8HeaderMode", "t8HeaderMode"],
    ["selectT8HeaderMode_main", "t8HeaderMode"],
    ["selectT8HeaderFont", "t8HeaderFont"],
    ["selectT8HeaderFont_main", "t8HeaderFont"],
    ["selectT8CenterDivider", "t8CenterDivider"],
    ["selectT8FooterMode", "t8FooterMode"],
    ["selectT8FooterMode_main", "t8FooterMode"],
    ["selectT8AspectRatio", "t8AspectRatio"]
  ];
  selectBindings.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", async () => {
        state[key] = el.value;

        const twinId = id.endsWith("_main") ? id.replace("_main", "") : `${id}_main`;
        const twinEl = document.getElementById(twinId);
        if (twinEl && twinEl.value !== el.value) twinEl.value = el.value;
        if (id === "selectLogoMode" || id === "selectLogoShadowTarget") toggleLogoSubfields();
        if (id === "selectT1RightTagMode") {
          const t1RightTextGrp = document.getElementById("t1RightTagTextGroup");
          if (t1RightTextGrp) {
            t1RightTextGrp.classList.toggle("hidden", state.t1RightTagMode !== "text");
          }
        }
        if (id === "selectT5BookId") {
          if (BUILTIN_PRESET_BOOK_IDS.has(state.t5BookId)) {
            state.t5CustomStampDataUrl = null;
            loadedImages.t5CustomStamp = null;
            loadedImages.t5CustomStampMask = null;
          } else if (state.t5BookId === "custom-text") {
            state.t5CustomStampDataUrl = null;
            loadedImages.t5CustomStamp = null;
            loadedImages.t5CustomStampMask = null;
          } else if (state.t5BookId && state.t5BookId.startsWith("saved-book-")) {
            const savedBook = getSavedCustomBooks().find((b) => b.id === state.t5BookId);
            if (savedBook) {
              state.t5BookTitle = savedBook.title || "";
              state.t5BookSubtitle = savedBook.subtitle || "تأليف";
              state.t5BookAuthor = savedBook.author || "";
              state.t5BookYears = savedBook.years || "";
              state.t5CustomStampDataUrl = savedBook.stampDataUrl || null;
              await loadT5BookStampFromDataUrl(state.t5CustomStampDataUrl);
            }
          }
          syncInputsFromState();
        }
        if (id === "selectT5StampMode") {
          toggleT5Subfields();
        }
        if (id === "selectT6FooterMode") {
          toggleT6Subfields();
        }
        if (id === "selectT7AspectRatio" || id === "selectT8AspectRatio") {
          const exportSel = document.getElementById("exportScaleSelect");
          if (exportSel) {
            const { W, H } = getArtboardDimensions();
            exportSel.options[0].textContent = `${W}×${H} (HD)`;
            exportSel.options[1].textContent = `${W * 2}×${H * 2} (Ultra 4K)`;
          }
          syncInputsFromState();
          fitArtboardToViewport();
        }
        if (id === "selectT8HeaderMode" || id === "selectT8FooterMode") {
          toggleHidden("t8HeaderFontGroup", (state.t8HeaderMode || "manuscript") !== "custom-text");
          toggleHidden("t8HeaderTextGroup", (state.t8HeaderMode || "manuscript") !== "custom-text");
          toggleHidden("t8CustomFooterRow", (state.t8FooterMode || "manuscript") !== "custom-text");
        }
        if (id === "selectT8HeaderFont") {
          await ensureFontLoaded(state.t8HeaderFont, "700");
        }
        if (id === "selectQuoteFont" || id === "selectQuoteWeight") {
          await ensureFontLoaded(state.quoteFont, state.quoteWeight);
          renderQuoteWordChips();
        }
        if (id === "selectBodyFont" || id === "selectBodyWeight") {
          await ensureFontLoaded(state.bodyFont, state.bodyWeight);
        }
        requestRender();
      });
    }
  });

  // رفع صورة اسم الكتاب / المخطوطة في القالب الخامس
  const t5StampUpload = document.getElementById("inputT5BookStampUpload");
  if (t5StampUpload) {
    t5StampUpload.addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const dataUrl = await downscaleImageFile(file, 1400);
        state.t5CustomStampDataUrl = dataUrl;
        await loadT5BookStampFromDataUrl(dataUrl);
        state.t5BookId = "custom-image";
        const cleanFileName = file.name.replace(/\.(png|jpe?g|webp|svg)$/i, "").trim();
        if (cleanFileName && (!state.t5BookTitle || state.t5BookTitle === "الدَّاءُ وَالدَّوَاءُ")) {
          state.t5BookTitle = cleanFileName;
        }
        syncInputsFromState();
        requestRender();
      } catch {
        alert("تعذر قراءة صورة اسم الكتاب. جرّب صورة PNG أو JPG.");
      }
      t5StampUpload.value = "";
    });
  }

  // حذف صورة اسم الكتاب المرفوعة والعودة للكتاب الأساسي
  const btnRemoveT5BookStamp = document.getElementById("btnRemoveT5BookStamp");
  if (btnRemoveT5BookStamp) {
    btnRemoveT5BookStamp.addEventListener("click", () => {
      state.t5CustomStampDataUrl = null;
      loadedImages.t5CustomStamp = null;
      loadedImages.t5CustomStampMask = null;
      state.t5BookId = "daa-wa-dawaa";
      syncInputsFromState();
      requestRender();
    });
  }

  // حفظ عنوان كتاب مخصص (نصي أو بصورة اسم الكتاب المرفوعة) في قائمة الكتب السريعة
  const btnT5SaveBook = document.getElementById("btnT5SaveBookToLibrary");
  if (btnT5SaveBook) {
    btnT5SaveBook.addEventListener("click", () => {
      const title = (state.t5BookTitle || "").trim();
      if (!title) {
        alert("اكتب اسم الكتاب أولاً لحفظه في القائمة.");
        return;
      }
      const shortAuthor = (state.t5BookAuthor || "").trim().slice(0, 32);
      const hasImg = Boolean(state.t5CustomStampDataUrl);
      const newBook = {
        id: "saved-book-" + Date.now(),
        label: (hasImg ? "🖼️ " : "") + (shortAuthor ? `${title} — ${shortAuthor}` : title),
        title,
        subtitle: state.t5BookSubtitle || "تأليف",
        author: state.t5BookAuthor || "",
        years: state.t5BookYears || "",
        stampDataUrl: state.t5CustomStampDataUrl || null
      };
      const list = getSavedCustomBooks();
      list.push(newBook);
      saveCustomBooksList(list);
      state.t5BookId = newBook.id;
      syncInputsFromState();
      requestRender();
    });
  }

  // رفع صورة ختم مخصص في القالب السادس
  const t6StampUpload = document.getElementById("inputT6StampUpload");
  if (t6StampUpload) {
    t6StampUpload.addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const dataUrl = await downscaleImageFile(file, 1000);
        state.t6CustomStampDataUrl = dataUrl;
        await loadT6CustomStampFromDataUrl(dataUrl);
        state.t6FooterMode = "custom-stamp";
        syncInputsFromState();
        requestRender();
      } catch {
        alert("تعذر قراءة صورة الختم.");
      }
      t6StampUpload.value = "";
    });
  }

  const btnRemoveT6Stamp = document.getElementById("btnRemoveT6Stamp");
  if (btnRemoveT6Stamp) {
    btnRemoveT6Stamp.addEventListener("click", () => {
      state.t6CustomStampDataUrl = null;
      loadedImages.t6CustomStamp = null;
      loadedImages.t6CustomStampMask = null;
      state.t6FooterMode = "balagha-shawqi";
      syncInputsFromState();
      requestRender();
    });
  }

  // ربط أشرطة التمرير (Sliders)
  const rangeBindings = [
    ["rangePoetLine", "poetLineLength", "valPoetLine"],
    ["rangeKashidaIntensity", "kashidaIntensity", "valKashidaIntensity"],
    ["rangeQuoteSize", "quoteSize", "valQuoteSize"],
    ["rangeQuoteLineHeight", "quoteLineHeight", "valQuoteLineHeight"],
    ["rangePoetSize", "poetSize", "valPoetSize"],
    ["rangeQuoteWidth", "quoteWidth", "valQuoteWidth"],
    ["rangeBodySize", "bodySize", "valBodySize"],
    ["rangeBodyLineHeight", "bodyLineHeight", "valBodyLineHeight"],
    ["rangeBodyWidth", "bodyWidth", "valBodyWidth"],
    ["rangeTopCardHeight", "topCardHeight", "valTopCardHeight"],
    ["rangeCardRadius", "cardRadius", "valCardRadius"],
    ["rangeShadowStrength", "shadowStrength", "valShadowStrength"],
    ["rangeBodyOffsetY", "bodyOffsetY", "valBodyOffsetY"],
    ["rangeLogoScale", "logoScale", "valLogoScale"],
    ["rangeLogoDividerLength", "logoDividerLength", "valLogoDividerLength"],
    ["rangeLogoDividerThickness", "logoDividerThickness", "valLogoDividerThickness"],
    ["rangeLogoDividerGap", "logoDividerGap", "valLogoDividerGap"],
    ["rangeLogoBgPadding", "logoBgPadding", "valLogoBgPadding"],
    ["rangeLogoBgRadius", "logoBgRadius", "valLogoBgRadius"],
    ["rangeLogoBgOpacity", "logoBgOpacity", "valLogoBgOpacity"],
    ["rangeLogoShadowStrength", "logoShadowStrength", "valLogoShadowStrength"],
    ["rangeLogoShadowBlur", "logoShadowBlur", "valLogoShadowBlur"],
    ["rangeLogoShadowOffsetY", "logoShadowOffsetY", "valLogoShadowOffsetY"],
    ["rangeT1DiamondSize", "t1DiamondSize", "valT1DiamondSize"],
    ["rangeT1EnglishSize", "t1EnglishSize", "valT1EnglishSize"],
    ["rangeT5StampScale", "t5StampScale", "valT5StampScale"],
    ["rangeT5StampX", "t5StampX", "valT5StampX"],
    ["rangeT5StampY", "t5StampY", "valT5StampY"],
    ["rangeT6PoemOffsetY", "t6PoemOffsetY", "valT6PoemOffsetY"],
    ["rangeT6FooterScale", "t6FooterScale", "valT6FooterScale"],
    ["rangeT6FooterOffsetY", "t6FooterOffsetY", "valT6FooterOffsetY"],
    ["rangeT7LogoScale", "logoScale", "valT7LogoScale"],
    ["rangeT7OffsetY", "t7OffsetY", "valT7OffsetY"],
    ["rangeT8HeaderSize", "t8HeaderSize", "valT8HeaderSize"],
    ["rangeT8HeaderSize_main", "t8HeaderSize", "valT8HeaderSize_main"],
    ["rangeT8HeaderOffsetY", "t8HeaderOffsetY", "valT8HeaderOffsetY"],
    ["rangeT8HeaderOffsetY_main", "t8HeaderOffsetY", "valT8HeaderOffsetY_main"],
    ["rangeT8ColGap", "t8ColGap", "valT8ColGap"],
    ["rangeT8ColWidth", "t8ColWidth", "valT8ColWidth"],
    ["rangeT8LineSpacing", "t8LineSpacing", "valT8LineSpacing"],
    ["rangeT8FooterScale", "t8FooterScale", "valT8FooterScale"],
    ["rangeT8FooterScale_main", "t8FooterScale", "valT8FooterScale_main"],
    ["rangeT8FooterOffsetY", "t8FooterOffsetY", "valT8FooterOffsetY"],
    ["rangeT8FooterOffsetY_main", "t8FooterOffsetY", "valT8FooterOffsetY_main"],
    ["rangeT6PoemOffsetY_t8", "t6PoemOffsetY", "valT6PoemOffsetY_t8"]
  ];
  rangeBindings.forEach(([id, key, lblId]) => {
    const el = document.getElementById(id);
    const lbl = document.getElementById(lblId);
    if (el) {
      el.addEventListener("input", () => {
        state[key] = el.value;
        if (lbl) lbl.textContent = el.value;

        const twinId = id.endsWith("_main") ? id.replace("_main", "") : `${id}_main`;
        const twinEl = document.getElementById(twinId);
        if (twinEl && twinEl.value !== el.value) twinEl.value = el.value;

        const twinLblId = lblId ? (lblId.endsWith("_main") ? lblId.replace("_main", "") : `${lblId}_main`) : null;
        const twinLbl = twinLblId ? document.getElementById(twinLblId) : null;
        if (twinLbl) twinLbl.textContent = el.value;
        if (key === "logoScale") {
          const otherRng = document.getElementById(id === "rangeLogoScale" ? "rangeT7LogoScale" : "rangeLogoScale");
          const otherLbl = document.getElementById(id === "rangeLogoScale" ? "valT7LogoScale" : "valLogoScale");
          if (otherRng) otherRng.value = el.value;
          if (otherLbl) otherLbl.textContent = el.value;
        }
        requestRender();
      });
    }
  });

  // زر إضافة شعار إضافي
  const btnAddExtraLogo = document.getElementById("btnAddExtraLogo");
  if (btnAddExtraLogo) {
    btnAddExtraLogo.addEventListener("click", () => {
      if (!Array.isArray(state.extraLogos)) state.extraLogos = [];
      state.extraLogos.push({
        id: "exlogo-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        mode: "custom-text",
        text: "سجايا",
        scale: 92,
        color: state.logoColor || "#157A4E",
        imageDataUrl: null
      });
      renderExtraLogosUI();
      toggleLogoSubfields();
      requestRender();
    });
  }

  // ربط مفاتيح التبديل (Checkboxes)
  const checkBindings = [
    ["chkAutoKashida", "autoKashida"],
    ["chkBodySmartSwash", "bodySmartSwash"],
    ["chkExtendedFatha", "extendedFatha"],
    ["chkLogoBgEnabled", "logoBgEnabled"],
    ["chkShowTopOrnament", "showTopOrnament"],
    ["chkShowBottomOrnament", "showBottomOrnament"],
    ["chkT1ShowDiamonds", "t1ShowDiamonds"],
    ["chkT1ShowEnglish", "t1ShowEnglish"],
    ["chkT5FirstLineIndent", "t5FirstLineIndent"],
    ["chkT5AutoCleanBg", "t5AutoCleanBg"],
    ["chkT6JustifyLines", "t6JustifyLines"],
    ["chkT6PaperTexture", "t6PaperTexture"],
    ["chkT7ShowFrame", "t7ShowFrame"],
    ["chkT8JustifyLines", "t8JustifyLines"],
    ["chkT8PaperTexture", "t8PaperTexture"]
  ];
  checkBindings.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", () => {
        state[key] = el.checked;
        if (id === "chkLogoBgEnabled") toggleLogoSubfields();
        renderQuoteWordChips();
        requestRender();
      });
    }
  });

  // ربط منتقيات الألوان
  const colorPairs = [
    ["colorBg", "hexBg", "bgColor"],
    ["colorTopCard", "hexTopCard", "topCardColor"],
    ["colorBottomCard", "hexBottomCard", "bottomCardColor"],
    ["colorQuoteText", "hexQuoteText", "quoteTextColor"],
    ["colorBodyText", "hexBodyText", "bodyTextColor"],
    ["colorLogo", "hexLogo", "logoColor"],
    ["colorLogoDivider", "hexLogoDivider", "logoDividerColor"],
    ["colorLogoBg", "hexLogoBg", "logoBgColor"],
    ["colorLogoShadow", "hexLogoShadow", "logoShadowColor"],
    ["colorT6Highlight", "hexT6Highlight", "t6HighlightColor"],
    ["colorHighlight", "hexHighlight", "t6HighlightColor"],
    ["colorInspectorHighlight", "hexInspectorHighlight", "t6HighlightColor"]
  ];
  colorPairs.forEach(([pickerId, hexId, stateKey]) => {
    const picker = document.getElementById(pickerId);
    const hex = document.getElementById(hexId);
    if (picker && hex) {
      picker.addEventListener("input", () => {
        const val = picker.value.toUpperCase();
        state[stateKey] = val;
        hex.value = val;
        if (stateKey === "t6HighlightColor") {
          ["colorT6Highlight", "colorHighlight", "colorInspectorHighlight"].forEach((id) => {
            const el = document.getElementById(id);
            if (el && el !== picker) el.value = val;
          });
          ["hexT6Highlight", "hexHighlight", "hexInspectorHighlight"].forEach((id) => {
            const el = document.getElementById(id);
            if (el && el !== hex) el.value = val;
          });
          if (pickerId === "colorInspectorHighlight" && selectedWordKey) {
            if (!state.quoteWordStyles[selectedWordKey]) {
              state.quoteWordStyles[selectedWordKey] = { swash: false, kashida: 0, highlight: false };
            }
            state.quoteWordStyles[selectedWordKey].highlight = true;
            const chkH = document.getElementById("chkWordHighlight");
            if (chkH) chkH.checked = true;
          }
          renderQuoteWordChips();
          updateWordInspectorPanel();
        }
        requestRender();
      });
      hex.addEventListener("input", () => {
        if (/^#[0-9A-Fa-f]{6}$/.test(hex.value.trim())) {
          const val = hex.value.trim().toUpperCase();
          state[stateKey] = val;
          picker.value = val;
          if (stateKey === "t6HighlightColor") {
            ["colorT6Highlight", "colorHighlight", "colorInspectorHighlight"].forEach((id) => {
              const el = document.getElementById(id);
              if (el && el !== picker) el.value = val;
            });
            ["hexT6Highlight", "hexHighlight", "hexInspectorHighlight"].forEach((id) => {
              const el = document.getElementById(id);
              if (el && el !== hex) el.value = val;
            });
            if (hexId === "hexInspectorHighlight" && selectedWordKey) {
              if (!state.quoteWordStyles[selectedWordKey]) {
                state.quoteWordStyles[selectedWordKey] = { swash: false, kashida: 0, highlight: false };
              }
              state.quoteWordStyles[selectedWordKey].highlight = true;
              const chkH = document.getElementById("chkWordHighlight");
              if (chkH) chkH.checked = true;
            }
            renderQuoteWordChips();
            updateWordInspectorPanel();
          }
          requestRender();
        }
      });
    }
  });

  // لوحات الألوان الجاهزة
  document.querySelectorAll(".palette-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const pal = COLOR_PALETTES[chip.dataset.palette];
      if (!pal) return;
      document.querySelectorAll(".palette-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      state.bgColor = pal.bg;
      state.topCardColor = pal.topCard;
      state.bottomCardColor = pal.bottomCard;
      state.quoteTextColor = pal.quoteText;
      state.bodyTextColor = state.activeTemplateId === "1" ? pal.quoteText : pal.bodyText;
      state.logoColor = state.activeTemplateId === "1" ? pal.quoteText : pal.logo;
      if (pal.highlight) {
        state.t6HighlightColor = pal.highlight;
      }

      syncInputsFromState();
      renderQuoteWordChips();
      updateWordInspectorPanel();
      requestRender();
    });
  });

  // رفع خط مخصص من جهاز المستخدم أو جواله
  const fontInput = document.getElementById("inputFontUpload");
  fontInput.addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const cleanName = file.name.replace(/\.(ttf|otf|woff2?)$/i, "");
      const buffer = await file.arrayBuffer();
      const customFont = new FontFace(cleanName, buffer);
      await customFont.load();
      document.fonts.add(customFont);

      // إضافة الخط المرفوع لقائمتي خطوط العنوان والمتن
      ["selectQuoteFont", "selectBodyFont"].forEach((selId) => {
        const sel = document.getElementById(selId);
        const opt = document.createElement("option");
        opt.value = cleanName;
        opt.textContent = `★ ${cleanName} (خط مرفوع)`;
        sel.prepend(opt);
      });

      state.quoteFont = cleanName;
      syncInputsFromState();
      requestRender();
    } catch (err) {
      alert("تعذر قراءة ملف الخط. تأكد أن الصيغة TTF أو OTF أو WOFF2.");
    }
  });

  // رفع صورة شعار مخصصة
  const logoUpload = document.getElementById("inputLogoUpload");
  logoUpload.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        loadedImages.customLogo = img;
        state.customLogoDataUrl = reader.result;
        state.logoMode = "custom-image";
        syncInputsFromState();
        requestRender();
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  // أزرار الشريط العلوي
  document.getElementById("btnResetDefault").addEventListener("click", () => {
    const currentTpl = state.activeTemplateId || "4";
    applyPresetTemplateById(currentTpl);
  });

  document.getElementById("btnSaveTemplate").addEventListener("click", () => {
    const firstLine = state.quoteText.split("\n")[0].slice(0, 28) || "قالب مخصص";
    const name = prompt("سمِّ هذا القالب لحفظه في قائمتك:", `قالب: ${firstLine}`);
    if (!name) return;
    const list = getSavedTemplates();
    list.unshift({
      id: "tpl-" + Date.now(),
      name: name.trim(),
      createdAt: new Date().toLocaleDateString("ar-SA"),
      state: JSON.parse(JSON.stringify(state))
    });
    saveTemplatesList(list);
  });

  // تصدير واستيراد ملف القوالب JSON
  document.getElementById("btnExportTemplatesJson").addEventListener("click", () => {
    const dataStr = JSON.stringify(getSavedTemplates(), null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wadaq-templates.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("inputImportTemplatesJson").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        if (Array.isArray(imported)) {
          saveTemplatesList(imported);
          alert("تم استيراد القوالب بنجاح!");
        }
      } catch {
        alert("ملف القوالب غير صالح.");
      }
    };
    reader.readAsText(file);
  });

  // تصدير الصورة النهائية PNG بدقة فائقة directly من نفس لوحة المعاينة الحية في الـ DOM لضمان التطابق 100%
  document.getElementById("btnExportPng").addEventListener("click", async () => {
    const scale = Number(document.getElementById("exportScaleSelect").value) || 2;
    const liveCanvas = document.getElementById("quoteCanvas");
    if (!liveCanvas) return;

    await Promise.all([
      ensureFontLoaded(state.quoteFont, state.quoteWeight),
      ensureFontLoaded(state.bodyFont, state.bodyWeight)
    ]);

    // نرسم على نفس عنصر quoteCanvas المربوط بالـ DOM حتى تتطابق جميع خصائص الـ OpenType والخطوط والظلال 100%
    renderDesignToCanvas(liveCanvas, scale);

    const handleBlobExport = (blob) => {
      // إعادة لوحة المعاينة لدقة العرض العادية فوراً بعد التصدير
      renderDesignToCanvas(liveCanvas, 1);
      if (!blob) return;
      const { W, H } = getArtboardDimensions();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const slug = state.quoteText.split(/\s+/).slice(0, 3).join("-") || "quote";
      a.href = url;
      a.download = `asheer-${slug}-${W * scale}x${H * scale}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    };

    try {
      liveCanvas.toBlob(handleBlobExport, "image/png");
    } catch {
      // في حال فتح الملف محلياً عبر file:// ومنع المتصفح تصدير صورة محلية، نستخدم النسخة المضمنة B64 للتصدير
      const origPreset = loadedImages.presetBooks;
      loadedImages.presetBooks = loadedImages.presetBooksB64Fallback || origPreset;
      renderDesignToCanvas(liveCanvas, scale);
      liveCanvas.toBlob((b) => {
        loadedImages.presetBooks = origPreset;
        handleBlobExport(b);
      }, "image/png");
    }
  });

  // أزرار التكبير والتصغير
  document.getElementById("btnZoomIn").addEventListener("click", () => updateArtboardZoom(currentZoom + 0.06));
  document.getElementById("btnZoomOut").addEventListener("click", () => updateArtboardZoom(currentZoom - 0.06));
  document.getElementById("btnZoomFit").addEventListener("click", fitArtboardToViewport);
  window.addEventListener("resize", fitArtboardToViewport);
}

/* ==========================================================================
   بدء تشغيل الاستوديو وتحميل الخطوط والأقنعة
   ========================================================================== */

const PRESET_BOOK_FILES = {
  "daa-wa-dawaa": "الداء والدواء - ابن قيم الجوزية.png",
  "zad-al-maad": "زاد المعاد في هدي خير العباد - ابن قيم الجوزية.png",
  "madarij-al-salikin": "مدارج السالكين - ابن قيم الجوزية.png",
  "al-fawaid": "الفوائد - ابن قيم الجوزية.png",
  "badai-al-fawaid": "بدائع الفوائد - ابن قيم الجوزية.png",
  "uddat-al-sabirin": "عدة الصابرين وذخيرة الشاكرين - ابن قيم الجوزية.png",
  "tariq-al-hijratayn": "طريق الهجرتين وباب السعادتين - ابن قيم الجوزية.png",
  "jala-al-afham": "جلاء الأفهام - ابن قيم الجوزية.png",
  "rawdat-al-muhibbin": "روضة المحبين ونزهة المشتاقين - ابن قيم الجوزية.png",
  "hadi-al-arwah": "حادي الأرواح إلى بلاد الأفراح - ابن قيم الجوزية.png",
  "ighathat-al-lahfan": "إغاثة اللهفان في مصايد الشيطان - ابن قيم الجوزية.png",
  "ilam-al-muwaqqiin": "إعلام الموقعين عن رب العالمين - ابن قيم الجوزية.png",
  "risalat-ibn-al-qayyim": "رسالة ابن القيم إلى أحد إخوانه - ابن قيم الجوزية.png",
  "al-ikseer": "الإكسير - خلاصة أعمال القلوب.png",
  "taysir-al-karim-al-rahman": "تيسير الكريم الرحمن في تفسير كلام المنان - السعدي.png",
  "al-tafsir-al-muyassar": "التفسير الميسر.png",
  "sharh-hilyat-talib-al-ilm": "شرح حلية طالب العلم - ابن عثيمين.png",
  "mukhtasar-minhaj": "مختصر منهاج القاصدين - ابن قدامة المقدسي.png",
  "mukhtasar-minhaj-title": "مختصر منهاج القاصدين (العنوان فقط).png",
  "sayd-al-khatir": "صيد الخاطر - ابن الجوزي.png",
  "talbis-iblis": "تلبيس إبليس - ابن الجوزي.png",
  "al-bidaya": "البداية والنهاية - ابن كثير.png",
  "al-kamil": "الكامل في التاريخ - ابن الأثير.png",
  "rijal-min-tarikh": "رجال من التاريخ - علي الطنطاوي.png",
  "qisas-min-tarikh": "قصص من التاريخ - علي الطنطاوي.png",
  "suwar-wa-khawatir": "صور وخواطر - علي الطنطاوي.png",
  "rihlat-al-istiqama": "رحلة الاستقامة - راكان المغربي.png"
};

async function initApp() {
  // تحميل صور الأقنعة (شعار أشير + مخطوطة مومياشي + مخطوطة الداء والدواء)
  const loadImg = (src) =>
    new Promise((resolve) => {
      if (!src) return resolve(null);
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });

  const [
    wadaqImg,
    sigImg,
    qrImg,
    mahabbaImg,
    bookDaaFullImg,
    bookDaaTitleImg,
    t6BalaghaImg,
    t6ShawqiImg,
    t6FullFooterImg,
    atharLogoImg,
    atharWordImg,
    atharFeatherImg,
    t8HeaderImg,
    t8FooterImg
  ] = await Promise.all([
    loadImg(WADAQ_LOGO_B64),
    loadImg(MOMIASHI_SIG_B64),
    loadImg(T1_QR_BADGE_B64),
    loadImg(T1_MAHABBA_MASK_B64),
    loadImg(BOOK_DAA_WA_DAWAA_B64),
    loadImg(BOOK_DAA_TITLE_ONLY_B64),
    loadImg(T6_BALAGHA_LEFT_B64),
    loadImg(T6_SHAWQI_RIGHT_B64),
    loadImg(T6_FULL_FOOTER_B64),
    loadImg(typeof ATHAR_LOGO_B64 !== "undefined" ? ATHAR_LOGO_B64 : "assets/images/athar-logo.png"),
    loadImg(typeof ATHAR_WORD_MASK_B64 !== "undefined" ? ATHAR_WORD_MASK_B64 : null),
    loadImg(typeof ATHAR_FEATHER_MASK_B64 !== "undefined" ? ATHAR_FEATHER_MASK_B64 : null),
    loadImg(typeof T8_HEADER_MASK_B64 !== "undefined" ? T8_HEADER_MASK_B64 : "assets/images/t8-header-mask.png"),
    loadImg(typeof T8_FOOTER_MASK_B64 !== "undefined" ? T8_FOOTER_MASK_B64 : "assets/images/t8-footer-mask.png")
  ]);
  loadedImages.wadaqMask = wadaqImg;
  loadedImages.momiashiMask = sigImg;
  loadedImages.t1QrBadge = qrImg;
  loadedImages.t1MahabbaMask = mahabbaImg;
  loadedImages.bookDaaFullMask = bookDaaFullImg;
  loadedImages.bookDaaTitleMask = bookDaaTitleImg;
  loadedImages.t6BalaghaLeftMask = t6BalaghaImg;
  loadedImages.t6ShawqiRightMask = t6ShawqiImg;
  loadedImages.t6FullFooterImg = t6FullFooterImg;
  loadedImages.atharLogo = atharLogoImg;
  loadedImages.atharWordMask = atharWordImg;
  loadedImages.atharFeatherMask = atharFeatherImg;
  loadedImages.t8HeaderMask = t8HeaderImg;
  loadedImages.t8FooterMask = t8FooterImg;
  loadedImages.presetBooks = {};
  loadedImages.presetBooksB64Fallback = {};

  // التحميل المباشر من مجلد (assets/images/شعارات الكتب/المنجزة/) مع كسر الكاش حتى يظهر أي تعديل على الملفات فوراً
  const cacheBust = Date.now();
  const bookKeys = Object.keys(PRESET_BOOK_FILES);
  await Promise.all(
    bookKeys.map(async (k) => {
      const fileUrl = encodeURI(`assets/images/شعارات الكتب/المنجزة/${PRESET_BOOK_FILES[k]}`) + `?v=${cacheBust}`;
      const b64Fallback = window.ASHEER_BOOKS_B64 && window.ASHEER_BOOKS_B64[k] ? window.ASHEER_BOOKS_B64[k] : null;
      if (b64Fallback) {
        loadedImages.presetBooksB64Fallback[k] = await loadImg(b64Fallback);
      }
      const diskImg = await loadImg(fileUrl);
      loadedImages.presetBooks[k] = diskImg || loadedImages.presetBooksB64Fallback[k] || null;
    })
  );
  if (loadedImages.presetBooks["daa-wa-dawaa"]) {
    loadedImages.bookDaaFullMask = loadedImages.presetBooks["daa-wa-dawaa"];
  }

  populateSavedBooksSelect();
  enhanceAsheerDropboxes();
  syncInputsFromState();
  bindEvents();
  bindTopCardImageEvents();
  renderSavedTemplatesList();
  fitArtboardToViewport();
  renderQuoteWordChips();
  requestRender();

  // انتظار جاهزية جميع الخطوط (وخاصة خطوط ثمانية وخط أميري لكتب التراث) ثم إعادة الرسم لضمان دقة القياسات
  await Promise.all([
    ensureFontLoaded(state.quoteFont, state.quoteWeight),
    ensureFontLoaded(state.bodyFont, state.bodyWeight),
    ensureFontLoaded("Aref Ruqaa", "400"),
    ensureFontLoaded("Amiri", "400"),
    ensureFontLoaded("Amiri", "700"),
    ensureFontLoaded("Ali Moshref Thulth", "700")
  ]);

  if (document.fonts) {
    document.fonts.addEventListener("loadingdone", () => {
      renderQuoteWordChips();
      requestRender();
    });
    if (document.fonts.ready) {
      await document.fonts.ready;
    }
  }

  // التحميل المسبق الخلفي لباقي الخطوط في القائمة ليكون التبديل بينها لحظياً
  const allFontOptions = new Set();
  document.querySelectorAll("#selectQuoteFont option, #selectBodyFont option").forEach((opt) => {
    if (opt.value) allFontOptions.add(opt.value);
  });
  allFontOptions.forEach((fam) => {
    ensureFontLoaded(fam, "400");
  });

  // فحص ما إذا كان هناك قالب محدد في الرابط (e.g. ?template=1 أو 2 أو 3 أو 4 أو 5)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedTemplate = urlParams.get("template");
  if (requestedTemplate) {
    applyPresetTemplateById(requestedTemplate);
  }

  renderQuoteWordChips();
  requestRender();
}

/**
 * تطبيق إعدادات القوالب الجاهزة عند فتحها من الصفحة الرئيسية أو من مبدل القوالب
 */
function applyPresetTemplateById(templateId) {
  const tpl = String(templateId || "4");
  state = getInitialState();
  loadedImages.topCardBg = null;
  loadedImages.t5CustomStamp = null;
  loadedImages.t5CustomStampMask = null;
  selectedWordKey = "0_0";

  if (tpl === "1") {
    // القالب الأول: الكرت الكحلي المصمت («ليس لشيء» — مطابق للصورة الأولى 100% بالبكسل)
    state.activeTemplateId = "1";
    state.bgColor = "#2F4159";
    state.topCardColor = "#2F4159";
    state.bottomCardColor = "#4A5D73";
    state.quoteTextColor = "#F6F9FB";
    state.bodyTextColor = "#F6F9FB";
    state.logoColor = "#F6F9FB";
    state.logoScale = 75;

    state.quoteFont = "Thmanyah Serif Display";
    state.quoteWeight = "500";
    state.quoteSize = 188;
    state.quoteLineHeight = 1.25;
    state.quoteWidth = 755;
    state.quoteText = "ليس لشيء";
    state.quoteWordStyles = {
      "0_0": { swash: false, kashida: 0 }, // ليس -> كأس سين مقوس عادي كما في الأصل تماماً
      "0_1": { swash: true, kashida: 0 }   // لشيء -> ياء مرسلة ممتدة (ss01)
    };
    state.poet = "";

    state.bodyFont = "Thmanyah Sans";
    state.bodyWeight = "300";
    state.bodySize = 33;
    state.bodyLineHeight = 1.85;
    state.bodyWidth = 762;
    state.bodyOffsetY = 0;
    state.bodyLastLineAlign = "justify";
    state.bodyText = "ليس لشيء، لكنّي لو دخلتُ الجنّة، أُحبّ أن أراك هنــــــــاك.";
    state.t6HighlightColor = "#E5A93C";

    state.copyrightText = "IG @ M.75T";
    state.t1ShowDiamonds = true;
    state.t1DiamondSize = 20;
    state.t1ShowEnglish = true;
    state.t1EnglishText =
      ",For no reason, but if I were to enter Paradise\nI would love to see you there, so do not leave\nthis path that takes us to God. To see you\nin His gardens—that is my joy, O you whom I love";
    state.t1EnglishSize = 17;
    state.t1RightTagMode = "mask";
    state.t1FooterRight = "محبة";
    state.t1FooterCenter = "Lover";
    state.t1FooterLeftAr = "لأجلك";
  } else if (tpl === "2") {
    // القالب الثاني: بطاقة الأبيات الشعرية والتصوير («من نعيم الدنيا»)
    state.activeTemplateId = "2";
    state.quoteText = "مِنْ نَعِيمِ الدُّنْيَا";
    state.poet = "";
    state.bodyText = "ومن نعيمِ المرءِ في دنياه راحةُ بالِه، وأنسٌ بمن يُحبّه ويصطفيه.";
  } else if (tpl === "3") {
    // القالب الثالث: قالب المقالات والافتتاحية («ما وراء الخَلق»)
    state.activeTemplateId = "3";
    state.quoteText = "مَا وَرَاءَ الخَلْقِ";
    state.poet = "";
    state.bodyText =
      "في تأمّل المعنى وسكون النفس أمام عظمة البدايات، يتجلّى للإنسان جوهر ما كان يبحث عنه طويلاً في غمرة الحياة.";
  } else if (tpl === "5") {
    // القالب الخامس: قالب مقتبسات الكتب («الداء والدواء» — ابن قيم الجوزية)
    state.activeTemplateId = "5";
    state.bgColor = "#FFFFFF";
    state.topCardColor = "#FFFFFF";
    state.bottomCardColor = "#F8F6F1";
    state.quoteTextColor = "#0F0F0F";
    state.bodyTextColor = "#0F0F0F";
    state.logoColor = "#0F0F0F";
    state.t6HighlightColor = "#991B1B";
    state.logoMode = "none";
    state.showTopOrnament = false;
    state.showBottomOrnament = false;

    state.quoteText = "الداء والدواء";
    state.poet = "";
    state.bodyFont = "Amiri";
    state.bodyWeight = "400";
    state.bodySize = 37;
    state.bodyLineHeight = 1.62;
    state.bodyWidth = 930;
    state.bodyOffsetY = 0;
    state.autoKashida = false;
    state.bodySmartSwash = false;
    state.extendedFatha = false;
    state.bodyLastLineAlign = "right";
    state.bodyText =
      "قال يحيى بن معاذ: القلوب كالقدور تغلي بما فيها، وألسنتها مغارفها. فانظر الرجل(٢) حين يتكلّم، فإنّ لسانه يغترف(٣) لك مما في قلبه(٤): حلو وحامض، وعذب وأجاج، وغير ذلك. ويبين لك طعم قلبه اغترافُ لسانه(٥) .";

    state.t5BookId = "daa-wa-dawaa";
    state.t5StampMode = "full";
    state.t5BookTitle = "الدَّاءُ وَالدَّوَاءُ";
    state.t5BookSubtitle = "تأليف";
    state.t5BookAuthor = "الإِمَامِ أَبِي عَبْدِ اللهِ مُحَمَّدِ بْنِ أَبِي بَكْرِ بْنِ أَيُّوبَ ابْنِ قَيِّمِ الجَوْزِيَّةِ";
    state.t5BookYears = "( ٦٩١ - ٧٥١ )";
    state.t5StampScale = 100;
    state.t5StampY = 0;
    state.t5FirstLineIndent = true;
  } else if (tpl === "6") {
    // القالب السادس: قصيدة البلاغة العمودية («والمرء لا تشقيه إلا نفسه» — 1080×1350)
    state.activeTemplateId = "6";
    state.bgColor = "#F6F3EE";
    state.topCardColor = "#F6F3EE";
    state.bottomCardColor = "#EDE8DF";
    state.quoteTextColor = "#233452";
    state.bodyTextColor = "#233452";
    state.logoColor = "#233452";
    state.t6HighlightColor = "#882226";
    state.logoMode = "none";
    state.showTopOrnament = false;
    state.showBottomOrnament = false;

    state.quoteFont = "Amiri";
    state.quoteWeight = "700";
    state.quoteSize = 74;
    state.quoteLineHeight = 2.02;
    state.quoteWidth = 595;
    state.poet = "";
    state.quoteText =
      "وَالْمَرْءُ لَا تُشْقِيهِ إِلَّا نَفْسُهُ\n" +
      "حَاشَى الْحَيَاةَ بِأَنَّهَا تُشْقِيهْ\n" +
      "مَا أَجْهَلَ الْإِنْسَانَ يُضْنِي بَعْضُهُ\n" +
      "بَعْضًا وَيَشْكُو كُلَّ مَا يُضْنِيهْ\n" +
      "وَيَظُنُّ أَنَّ عَدُوَّهُ فِي غَيْرِهِ\n" +
      "وَعَدُوُّهُ يُمْسِي وَيُضْحِي فِيهْ";

    state.quoteWordStyles = {
      "0_3": { swash: false, kashida: 0, highlight: true },  // إِلَّا (أحمر قرمزي)
      "0_4": { swash: true, kashida: 0, highlight: true },   // نَفْسُهُ (أحمر قرمزي + مرسل)
      "1_0": { swash: true, kashida: 0, highlight: false },  // حَاشَى
      "2_2": { swash: false, kashida: 0, highlight: true },  // الْإِنْسَانَ (أحمر قرمزي)
      "2_4": { swash: true, kashida: 0, highlight: false },  // بَعْضُهُ
      "4_2": { swash: false, kashida: 1, highlight: false }  // عَدُوَّهُ
    };

    state.t6JustifyLines = true;
    state.t6PaperTexture = true;
    state.t6PoemOffsetY = 0;
    state.t6FooterMode = "balagha-shawqi";
    state.t6FooterRight = "شوقي";
    state.t6FooterLeft = "بَلَاغَة";
    state.t6FooterScale = 100;
    state.t6FooterOffsetY = 0;
  } else if (tpl === "7") {
    // القالب السابع: قالب النص البسيط في المنتصف مع شعار «أثر» المعتمد بحجم موزون وواضح
    state.activeTemplateId = "7";
    state.bgColor = "#FAF8F4";
    state.topCardColor = "#FAF8F4";
    state.bottomCardColor = "#F2EFE9";
    state.quoteTextColor = "#01322A";
    state.bodyTextColor = "#01322A";
    state.logoColor = "#01322A";
    state.t6HighlightColor = "#D59B3E";
    state.logoMode = "athar-logo";
    state.logoScale = 100;
    state.showTopOrnament = false;
    state.showBottomOrnament = false;

    state.quoteFont = "Thmanyah Serif Display";
    state.quoteWeight = "500";
    state.quoteSize = 72;
    state.quoteLineHeight = 1.62;
    state.quoteWidth = 820;
    state.poet = "";
    state.poetSize = 34;
    state.quoteText = "خَيْرُ الكَلَامِ مَا قَلَّ وَدَلَّ\nوَلَمْ يَطُلْ فَيُمَلَّ";
    state.quoteWordStyles = {
      "0_0": { swash: false, kashida: 0, highlight: false },
      "1_2": { swash: true, kashida: 0, highlight: false }
    };

    state.t7AspectRatio = "square";
    state.t7TextAlign = "center";
    state.t7LogoPos = "bottom-center";
    state.t7OffsetY = 0;
    state.t7ShowFrame = false;
  } else if (tpl === "8") {
    // القالب الثامن: قصيدة الصدر والعجز الكلاسيكية («دَعْ مَا يَضُرُّكَ وَالتَمِسْ مَا يَنْفَعُ» — 1080×1560)
    state.activeTemplateId = "8";
    state.bgColor = "#F5EEDB";
    state.topCardColor = "#F5EEDB";
    state.bottomCardColor = "#EBE2CD";
    state.quoteTextColor = "#1E1F24";
    state.bodyTextColor = "#1E1F24";
    state.logoColor = "#1E1F24";
    state.t6HighlightColor = "#9B2226";
    state.logoMode = "none";
    state.showTopOrnament = false;
    state.showBottomOrnament = false;

    state.quoteFont = "Amiri";
    state.quoteWeight = "700";
    state.quoteSize = 46;
    state.quoteLineHeight = 1.8;
    state.poet = "";

    state.quoteText =
      "دَعْ مَا يَضُرُّكَ وَالْتَمِسْ مَا يَنْفَعُ ... وَاخْتَرْ لِنَفْسِكَ مَا يَزِينُ وَيَنْفَعُ\n" +
      "وَاسْمَعْ لِقَوْلِ الْعَقْلِ لَا قَوْلِ الْهَوَى ... إِنَّ الْهَوَى لَضَلَالَةٌ لَا تُتْبَعُ\n" +
      "وَاعْلَمْ فَفَتِّحْ مَا لِلْمَمَالِكِ فُتِّحَتْ ... بِالْعِلْمِ أَبْوَابُ السَّعَادَةِ أَجْمَعُ\n" +
      "إِنَّ الشُّعُوبَ إِذَا أَرَادُوا نَهْضَةً ... بِذَرَائِعِ الْعِلْمِ الصَّحِيحِ تَدَرَّعُوا\n" +
      "وَانْظُرْ بِعَيْنٍ فِي الْأُمُورِ جَلِيَّةٍ ... لَا تُثْبِتُ الْأَشْيَاءَ عَيْنٌ تَدْمَعُ\n" +
      "مِمَّا أَحَبَّ بِهِ الرِّجَالُ بِلَادَهُمْ ... أَنْ يُحْسِنَ الْإِنْسَانُ فِيمَا يَصْنَعُ\n" +
      "وَصُنِ الْيَدَيْنِ عَنِ الدِّمَاءِ فَإِنَّهَا ... فِي الْبَغْيِ أَوْخَمُ مَا يَكُونُ الْمَرْتَعُ\n" +
      "الْخَيْلُ مِنْ خَلْوِ الذِّئَابِ وَشِبْهِةٍ ... فِي الرَّأْسِ يَرْكَبُهَا الْجَبَانُ فَيُشْجَعُ\n" +
      "بَرِئَ الْعِبَادُ مِنَ الشَّرَائِعِ كُلِّهَا ... إِنْ كَانَ قَتْلُ النَّفْسِ مِمَّا يَنْفَعُ\n" +
      "وَاذْرِفْ عَلَى الْقَلْبِ الدُّمُوعَ فَكُلُّ ... كَمْ فِي آدَمَ أَهْلُ وَآدَمَ مَجْمَعُ";

    state.quoteWordStyles = {
      "9_4": { swash: false, kashida: 0, highlight: true },
      "9_5": { swash: false, kashida: 2, highlight: true },
      "9_20": { swash: false, kashida: 2, highlight: true }
    };

    state.t8HeaderMode = "custom-text";
    state.t8HeaderText = "دَعْ مَا يَضُرُّكَ وَالتَمِسْ مَا يَنْفَعُ";
    state.t8HeaderFont = "A Suls";
    state.t8HeaderSize = 68;
    state.t8HeaderOffsetY = 0;
    state.t8ColGap = 140;
    state.t8ColWidth = 400;
    state.t8LineSpacing = 78;
    state.t8JustifyLines = true;
    state.t8CenterDivider = "none";
    state.t8PaperTexture = true;
    state.t8FooterMode = "custom-text";
    state.t8FooterRight = "مِنْ شِعْرِ أَحْمَد شَوْقِي وَخَطِّ مُحَمَّد مَطَر";
    state.t8FooterDate = "١٤٤٠ هـ";
    state.t8FooterScale = 100;
    state.t8FooterOffsetY = 0;
    state.t8AspectRatio = "parchment";
  } else {
    // القالب الرابع: البطاقتين المتداخلتين («وكيف أغفى»)
    state.activeTemplateId = "4";
    state.t6HighlightColor = "#D4AF37";
  }

  // تحديث شريحة لوحة الألوان النشطة
  const targetPalette =
    tpl === "1"
      ? "navy-slate"
      : tpl === "5"
      ? "paper-ink"
      : tpl === "6"
      ? "parchment-balagha"
      : tpl === "7"
      ? "athar-cream"
      : tpl === "8"
      ? "parchment-shawqi"
      : "emerald-sage";
  document.querySelectorAll(".palette-chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.palette === targetPalette);
  });

  // تحديث خيارات دقة التصدير في القائمة لتعكس أبعاد القالب النشط
  const exportSel = document.getElementById("exportScaleSelect");
  if (exportSel) {
    const { W, H } = getArtboardDimensions();
    exportSel.options[0].textContent = `${W}×${H} (HD)`;
    exportSel.options[1].textContent = `${W * 2}×${H * 2} (Ultra 4K)`;
  }

  syncInputsFromState();
  fitArtboardToViewport();
  renderQuoteWordChips();
  requestRender();
}

document.addEventListener("DOMContentLoaded", initApp);
