/**
 * استوديو وَدَق للمقولات | محرك خط ثمانية الذكي للكشيدة والأحرف المرسلة
 * يدعم المعاينة الحية والتصدير الفائق الدقة (1080×1920 و 2160×3840)
 */

// 1. الشعار والمخطوطة الأصلية المفرغة من الصورة المعتمدة بدقة متناهية وبدون خلفية
let ASHEER_LOGO_B64 = (typeof window !== 'undefined' && window.ASHEER_UPLOADED_MASK_B64) ? window.ASHEER_UPLOADED_MASK_B64 : '';
let WADAQ_LOGO_B64 = ASHEER_LOGO_B64;
let T1_QR_BADGE_B64 = (typeof window !== 'undefined' && window.T1_QR_BADGE_B64) ? window.T1_QR_BADGE_B64 : '';
let T1_MAHABBA_MASK_B64 = (typeof window !== 'undefined' && window.T1_MAHABBA_MASK_B64) ? window.T1_MAHABBA_MASK_B64 : '';
let MOMIASHI_SIG_B64 = "data:image/png;base64,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";

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
    logo: "#157A4E"
  },
  "navy-slate": {
    bg: "#2F4159",
    topCard: "#2F4159",
    bottomCard: "#4A5D73",
    quoteText: "#F6F9FB",
    bodyText: "#F6F9FB",
    logo: "#F6F9FB"
  },
  "deep-olive": {
    bg: "#F4F2EC",
    topCard: "#1B2A1E",
    bottomCard: "#6B7766",
    quoteText: "#F4F2EC",
    bodyText: "#F4F2EC",
    logo: "#2D4C34"
  },
  "burgundy-sand": {
    bg: "#F6F1EB",
    topCard: "#3B141A",
    bottomCard: "#7A5458",
    quoteText: "#F6F1EB",
    bodyText: "#F6F1EB",
    logo: "#5C1D27"
  },
  "charcoal-stone": {
    bg: "#F3F1ED",
    topCard: "#181B1A",
    bottomCard: "#575E5B",
    quoteText: "#F3F1ED",
    bodyText: "#F3F1ED",
    logo: "#181B1A"
  },
  "night-emerald": {
    bg: "#071F16",
    topCard: "#0F3B29",
    bottomCard: "#F5F1E8",
    quoteText: "#F5F1E8",
    bodyText: "#082B1D",
    logo: "#F5F1E8"
  }
};

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
    t1ShowQr: true,

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
  if (state.activeTemplateId === "1") {
    return { W: 1080, H: 1350 };
  }
  return { W: 1080, H: 1920 };
}

// صور محمّلة مسبقاً للرسم على الـ Canvas
const loadedImages = {
  wadaqMask: null,
  momiashiMask: null,
  t1QrBadge: null,
  t1MahabbaMask: null,
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

function measureStyledWordWidth(wordText, weight, sizePx, fontFamily, featureSettings) {
  applyContextFontWithFeatures(measureCtx, measureCanvas, weight, sizePx, fontFamily, featureSettings);
  return measureCtx.measureText(wordText).width;
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
    lastLineAlign
  } = options;

  const baseFeatures = buildFontFeatureSettings(false, 0, false, false);
  const spaceWidth = measureStyledWordWidth(" ", fontWeight, fontSize, fontFamily, baseFeatures) || fontSize * 0.26;

  // تقسيم الفقرات والأسطر اليدوية
  const rawParagraphs = paragraphText.split("\n");
  const finalLines = [];

  for (const para of rawParagraphs) {
    const rawTokens = para.trim().split(/\s+/).filter(Boolean);
    if (rawTokens.length === 0) {
      finalLines.push({ words: [], isLastLine: true, spaceGap: spaceWidth });
      continue;
    }

    // المرحلة ١: تقطيع الأسطر المبدئي
    const wrappedLines = [];
    let currentLine = [];
    let currentWidth = 0;

    for (const token of rawTokens) {
      const w = measureStyledWordWidth(token, fontWeight, fontSize, fontFamily, baseFeatures);
      const addedSpace = currentLine.length > 0 ? spaceWidth : 0;
      if (currentLine.length > 0 && currentWidth + addedSpace + w > maxWidthPx) {
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

      if (!shouldJustifyLine || lineWords.length === 0) {
        finalLines.push({
          words: lineWords,
          isLastLine: isLast,
          align: isLast ? lastLineAlign : "justify",
          totalWordsWidth: lineWords.reduce((acc, item) => acc + item.width, 0)
        });
        return;
      }

      const calcLineTotal = () => {
        const wordsW = lineWords.reduce((s, item) => s + item.width, 0);
        const spacesW = Math.max(0, lineWords.length - 1) * spaceWidth;
        return wordsW + spacesW;
      };

      // حساب الفراغ المطلوب سده في السطر
      let deficit = maxWidthPx - calcLineTotal();
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
            if (delta > 2 && calcLineTotal() + delta <= maxWidthPx + 4) {
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

            if (gain > 0 && calcLineTotal() + gain <= maxWidthPx - 2 && addedWidth + gain <= targetFillDeficit + 35) {
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
        totalWordsWidth: lineWords.reduce((acc, item) => acc + item.width, 0)
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
 * تلوين صورة قناع شفافة (Mask) بأي لون يختاره المستخدم
 */
function drawTintedMask(ctx, img, x, y, w, h, colorHex) {
  if (!img || !img.complete || img.naturalWidth === 0) return;
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
          const wStyle = state.quoteWordStyles[key] || { swash: false, kashida: 0 };
          const kRes = applyKashidaToWord(w, wStyle.kashida);
          const feat = buildFontFeatureSettings(
            wStyle.swash,
            kRes.kashidaCount,
            kRes.hasExtendedFatha,
            state.extendedFatha
          );
          const width = measureStyledWordWidth(kRes.text, state.quoteWeight, testSize, state.quoteFont, feat);
          return { text: kRes.text, feat, width };
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

    // ٩. رسم شريط الفوتر الخماسي السفلي (IG @ M.75T | لأجلك | Lover | محبة | QR Seal)
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
      ctx.fillText(state.t1FooterLeftAr.trim(), 348, footerY);
      ctx.restore();
    }

    // ٩-ج: الكلمة الوسطى («Lover»)
    if (state.t1FooterCenter && state.t1FooterCenter.trim()) {
      ctx.save();
      ctx.direction = "ltr";
      ctx.textAlign = "center";
      ctx.font = `400 19px "Thmanyah Sans", sans-serif`;
      ctx.fillStyle = state.bodyTextColor;
      ctx.fillText(state.t1FooterCenter.trim(), 560, footerY);
      ctx.restore();
    }

    // ٩-د: العبارة اليمنى («محبة» بالمخطوطة الأصلية أو كنص)
    if (state.t1RightTagMode === "mask" && loadedImages.t1MahabbaMask) {
      const mw = 60;
      const mh = 60 * (66 / 100);
      drawTintedMask(ctx, loadedImages.t1MahabbaMask, 768 - mw / 2, footerY - mh * 0.72, mw, mh, state.bodyTextColor);
    } else if (state.t1RightTagMode === "text" && state.t1FooterRight && state.t1FooterRight.trim()) {
      ctx.save();
      ctx.direction = "rtl";
      ctx.textAlign = "center";
      applyContextFontWithFeatures(ctx, targetCanvas, "400", 26, "Aref Ruqaa", '"liga" 1');
      ctx.fillStyle = state.bodyTextColor;
      ctx.fillText(state.t1FooterRight.trim(), 768, footerY);
      ctx.restore();
    }

    // ٩-هـ: ختم الباركود الدائري في أقصى اليمين (QR Seal)
    if (state.t1ShowQr && loadedImages.t1QrBadge) {
      const qrSize = 72;
      drawTintedMask(
        ctx,
        loadedImages.t1QrBadge,
        948 - qrSize / 2,
        footerY - 8 - qrSize / 2,
        qrSize,
        qrSize,
        state.bodyTextColor
      );
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

    // تجهيز كل كلمة مع خصائصها (حرف مرسل ss01 + كشيدة مائلة)
    const styledWords = words.map((w, wordIdx) => {
      const key = `${lineIdx}_${wordIdx}`;
      const wStyle = state.quoteWordStyles[key] || { swash: false, kashida: 0 };
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
        width
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
        state.quoteWordStyles[key] = { swash: false, kashida: 0 };
      }
      const st = state.quoteWordStyles[key];
      if (prevSwash && st.swash) {
        adjacentSwashWarning = true;
      }
      prevSwash = st.swash;

      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "word-chip" + (selectedWordKey === key ? " selected" : "");

      const kRes = applyKashidaToWord(word, st.kashida);
      const wordSpan = document.createElement("span");
      wordSpan.textContent = kRes.text;
      wordSpan.style.fontFamily = `"${state.quoteFont}", "Thmanyah Serif Display", serif`;
      wordSpan.style.fontWeight = String(state.quoteWeight);
      wordSpan.style.fontFeatureSettings = buildFontFeatureSettings(
        st.swash,
        kRes.kashidaCount,
        kRes.hasExtendedFatha,
        state.extendedFatha
      );
      chip.appendChild(wordSpan);

      // شارات توضيحية صغيرة على الكلمة
      if (st.swash || st.kashida > 0) {
        const badges = document.createElement("span");
        badges.className = "chip-badges";
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

      chip.addEventListener("click", () => {
        selectedWordKey = key;
        renderQuoteWordChips();
        updateWordInspectorPanel();
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
  const chkSwash = document.getElementById("chkWordSwash");
  const lblCount = document.getElementById("lblWordKashidaCount");

  const word = findWordByKey(selectedWordKey);
  if (!word || !panel) {
    if (panel) panel.classList.add("hidden");
    return;
  }

  panel.classList.remove("hidden");
  const st = state.quoteWordStyles[selectedWordKey] || { swash: false, kashida: 0 };
  const kRes = applyKashidaToWord(word, st.kashida);

  lbl.textContent = kRes.text;
  lbl.style.fontFamily = `"${state.quoteFont}", "Thmanyah Serif Display", serif`;
  lbl.style.fontWeight = String(state.quoteWeight);
  lbl.style.fontFeatureSettings = buildFontFeatureSettings(
    st.swash,
    kRes.kashidaCount,
    kRes.hasExtendedFatha,
    state.extendedFatha
  );
  chkSwash.checked = Boolean(st.swash);
  lblCount.textContent = String(st.kashida || 0);
}

/* ==========================================================================
   إدارة التكبير/التصغير (Zoom & Fit to Screen)
   ========================================================================== */

function updateArtboardZoom(newZoom) {
  currentZoom = Math.min(1.2, Math.max(0.18, newZoom));
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
  const availW = viewport.clientWidth - 48;
  const availH = viewport.clientHeight - 48;
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
      // استرجاع صورة خلفية البطاقة الخضراء المحفوظة مع القالب
      await loadTopCardImageFromDataUrl(state.topCardBgDataUrl || null);
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
    if (state.activeTemplateId === "1") {
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

  setVal("selectTemplatePreset", state.activeTemplateId || "4");

  const t1Card = document.getElementById("template1ControlsCard");
  if (t1Card) {
    t1Card.classList.toggle("hidden", state.activeTemplateId !== "1");
  }
  setChk("chkT1ShowDiamonds", state.t1ShowDiamonds ?? true);
  setVal("rangeT1DiamondSize", state.t1DiamondSize ?? 22);
  setTxt("valT1DiamondSize", state.t1DiamondSize ?? 22);
  setChk("chkT1ShowEnglish", state.t1ShowEnglish ?? true);
  setVal("inputT1EnglishText", state.t1EnglishText || "");
  setVal("rangeT1EnglishSize", state.t1EnglishSize ?? 20);
  setTxt("valT1EnglishSize", state.t1EnglishSize ?? 20);
  setVal("selectT1RightTagMode", state.t1RightTagMode || "mask");
  setVal("inputT1FooterRight", state.t1FooterRight || "محبة");
  setVal("inputT1FooterCenter", state.t1FooterCenter || "Lover");
  setVal("inputT1FooterLeftAr", state.t1FooterLeftAr || "لأجلك");
  setChk("chkT1ShowQr", state.t1ShowQr ?? true);

  const t1RightTextGrp = document.getElementById("t1RightTagTextGroup");
  if (t1RightTextGrp) {
    t1RightTextGrp.classList.toggle("hidden", (state.t1RightTagMode || "mask") !== "text");
  }

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
}

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
        <select class="ex-logo-mode">
          <option value="custom-text" ${item.mode === "custom-text" ? "selected" : ""}>نص مكتوب بالخط</option>
          <option value="custom-image" ${item.mode === "custom-image" ? "selected" : ""}>صورة شعار (PNG/SVG)</option>
          <option value="wadaq-mask" ${item.mode === "wadaq-mask" ? "selected" : ""}>شعار "ودق" الأصلي</option>
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
  document.getElementById("chkWordSwash").addEventListener("change", (e) => {
    if (!selectedWordKey) return;
    if (!state.quoteWordStyles[selectedWordKey]) {
      state.quoteWordStyles[selectedWordKey] = { swash: false, kashida: 0 };
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
    ["inputT1FooterLeftAr", "t1FooterLeftAr"]
  ];
  textBindings.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        state[key] = el.value;
        requestRender();
      });
    }
  });

  // مبدل القوالب الأربعة السريع في الشريط العلوي
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
    ["selectT1RightTagMode", "t1RightTagMode"]
  ];
  selectBindings.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", async () => {
        state[key] = el.value;
        if (id === "selectLogoMode" || id === "selectLogoShadowTarget") toggleLogoSubfields();
        if (id === "selectT1RightTagMode") {
          const t1RightTextGrp = document.getElementById("t1RightTagTextGroup");
          if (t1RightTextGrp) {
            t1RightTextGrp.classList.toggle("hidden", state.t1RightTagMode !== "text");
          }
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
    ["rangeT1EnglishSize", "t1EnglishSize", "valT1EnglishSize"]
  ];
  rangeBindings.forEach(([id, key, lblId]) => {
    const el = document.getElementById(id);
    const lbl = document.getElementById(lblId);
    if (el) {
      el.addEventListener("input", () => {
        state[key] = el.value;
        if (lbl) lbl.textContent = el.value;
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
    ["chkT1ShowQr", "t1ShowQr"]
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
    ["colorLogoShadow", "hexLogoShadow", "logoShadowColor"]
  ];
  colorPairs.forEach(([pickerId, hexId, stateKey]) => {
    const picker = document.getElementById(pickerId);
    const hex = document.getElementById(hexId);
    if (picker && hex) {
      picker.addEventListener("input", () => {
        state[stateKey] = picker.value.toUpperCase();
        hex.value = state[stateKey];
        requestRender();
      });
      hex.addEventListener("input", () => {
        if (/^#[0-9A-Fa-f]{6}$/.test(hex.value.trim())) {
          state[stateKey] = hex.value.trim().toUpperCase();
          picker.value = state[stateKey];
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
      state.bodyTextColor = pal.bodyText;
      state.logoColor = pal.logo;

      syncInputsFromState();
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

    liveCanvas.toBlob((blob) => {
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
    }, "image/png");
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

async function initApp() {
  // تحميل صور الأقنعة (شعار أشير + مخطوطة مومياشي)
  const loadImg = (src) =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });

  const [wadaqImg, sigImg, qrImg, mahabbaImg] = await Promise.all([
    loadImg(WADAQ_LOGO_B64),
    loadImg(MOMIASHI_SIG_B64),
    loadImg(T1_QR_BADGE_B64),
    loadImg(T1_MAHABBA_MASK_B64)
  ]);
  loadedImages.wadaqMask = wadaqImg;
  loadedImages.momiashiMask = sigImg;
  loadedImages.t1QrBadge = qrImg;
  loadedImages.t1MahabbaMask = mahabbaImg;

  syncInputsFromState();
  bindEvents();
  bindTopCardImageEvents();
  renderSavedTemplatesList();
  fitArtboardToViewport();
  renderQuoteWordChips();
  requestRender();

  // انتظار جاهزية جميع الخطوط (وخاصة خطوط ثمانية) ثم إعادة الرسم لضمان دقة القياسات
  await Promise.all([
    ensureFontLoaded(state.quoteFont, state.quoteWeight),
    ensureFontLoaded(state.bodyFont, state.bodyWeight),
    ensureFontLoaded("Aref Ruqaa", "400")
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

  // فحص ما إذا كان هناك قالب محدد في الرابط (e.g. ?template=1 أو 2 أو 3 أو 4)
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
    state.t1ShowQr = true;
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
  } else {
    // القالب الرابع: البطاقتين المتداخلتين («وكيف أغفى»)
    state.activeTemplateId = "4";
  }

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
