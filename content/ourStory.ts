// ourStory.ts — editable content for the "Our Story | حكايتنا" section.
// Arabic and English copy are approved. Scene captions are lines from the founder letter.
// Never add biographical details the founder hasn't supplied.

export type Lang = "ar" | "en";
export interface StoryScene { key: "wood" | "fabric" | "object" | "home"; image: string | null; ar: string; en: string; }
export interface OurStory {
  founderName: string | null;
  founderPortrait: string | null;
  photography: { travel: string[]; details: string[]; transformation: { before: string; after: string } | null };
  scenes: StoryScene[];
  ar: { title: string; sub: string; letter: [string, string][] };
  en: { title: string; sub: string; letter: [string, string][] };
}

export const OUR_STORY: OurStory = {
  founderName: null,            // optional — only when Dafi supplies it
  founderPortrait: "/images/story/founder.jpg", // supplied portrait
  photography: { travel: [], details: [], transformation: null }, // transformation: { before, after } — real pairs only
  scenes: [ // section animation assets: add image URLs to replace the demonstration visuals
    { key: "wood",   image: "/images/story/wood.jpg",   ar: "خشب مرّت عليه سنين.",        en: "The grain of weathered wood." },
    { key: "fabric", image: "/images/story/fabric.jpg", ar: "نقشة على قطعة قماش.",       en: "A pattern woven into fabric." },
    { key: "object", image: "/images/story/object.jpg", ar: "قطعة أثاث لم ينتبه أحد لجمالها.", en: "A forgotten chair with something beautiful still to offer." },
    { key: "home",   image: "/images/story/home.jpg", ar: "دافي… ويطيب المقام.",      en: "Dafi | The Art of Lingering." } ],
  ar: { title: "لكل قطعة حكاية.", sub: "Every Object Has a Story.",
    letter: [["open","ليست كل رحلة تنتهي حين نعود إلى البيت."],["","بعض الرحلات تبقى معنا في تفاصيل صغيرة: لون على باب قديم، نقشة على قطعة قماش، خشب مرّت عليه السنين، أو قطعة أثاث لم ينتبه أحد لجمالها."],
      ["","من رحلاتها، عادت مؤسسة دافي بأكثر من الذكريات. عادت بعين ترى في القديم بداية جديدة، وفي التفاصيل الصغيرة أفكاراً تستحق أن تصبح قطعاً نعيش معها."],
      ["","في دافي، قد يعود كرسي قديم بروح جديدة، أو تتحوّل زخرفة من تراثنا إلى تفصيل معاصر، أو تجتمع خامتان من عالمين مختلفين في قطعة واحدة."],
      ["turn","ليس الهدف أن نملأ المكان بالأشياء."],["turn","الهدف أن نختار الأشياء التي تمنح المكان روحاً، وتفتح الحديث، وتجعل الضيف ينسى الوقت."],["sign","دافي… ويطيب المقام."]] },
  en: { title: "Every Object Has a Story.", sub: "لكل قطعة حكاية.",
    letter: [["open","Not every journey ends when we return home."],["","Some places stay with us in the smallest details. The colour of an old doorway. A pattern woven into fabric. The grain of weathered wood. A forgotten chair with something beautiful still to offer."],
      ["","Through her travels, Dafi’s founder collected more than memories. She developed an eye for overlooked beauty and the possibilities hidden within familiar objects."],
      ["","At Dafi, an antique chair might begin another life. An ornamental detail from our heritage might find an unexpected contemporary expression. Materials from different places might meet in a single piece."],
      ["turn","The intention is never simply to fill a room."],["turn","It’s to bring together objects that give a space character, start conversations and make people forget to watch the time."],["sign","Dafi | The Art of Lingering."]] }
};
