
// ==========================================
// IMAGINE CITY : คืนสุดท้ายก่อนสีจะหายไป
// ==========================================

const MAJORS = {
    DGA: {
        name: "Digital Arts",
        ending: "นักรังสรรค์จินตนาการ",
        story: "ภาพวาดของเธอคือสีแรกที่ย้อมเมืองให้กลับมามีชีวิต ทุกคนเงยหน้ามองแล้วพูดตรงกันว่า \"นี่แหละโลกที่เราเคยฝันถึง\"",
        careers: [
            "Illustrator", "Concept Artist", "Character Designer",
            "Webtoon / Comic Artist", "Storyboard Artist",
            "Background Artist", "Art Toy Designer",
            "Sticker / LINE Creator", "Children's Book Illustrator",
            "Visual Development Artist"
        ],
        school: "Digital Arts"
    },
    DGD: {
        name: "Digital Graphic Design",
        ending: "นักสร้างอัตลักษณ์แห่งธานี",
        story: "ภาพลักษณ์ใหม่ที่เธอออกแบบทำให้ทั้งเมืองมีหน้าตาเป็นของตัวเอง ไม่มีใครสับสนอีกแล้วว่าที่นี่คือที่ไหน",
        careers: [
            "Graphic Designer", "Brand Identity Designer",
            "Art Director", "UI Designer", "Packaging Designer",
            "Editorial Designer", "Social Media Designer",
            "Motion Graphic Designer", "Poster / Key Visual Designer",
            "Creative Director"
        ],
        school: "Digital Graphic Design"
    },
    IGD: {
        name: "Interactive and Game Design",
        ending: "นักสร้างเป้าหมายแห่งเกม",
        story: "ทั้งเมืองกลายเป็นสนามเล่นของเธอ ทุกคนหัวเราะ ตื่นเต้น และไม่มีใครอยากให้เกมจบ",
        careers: [
            "Game Designer", "Level Designer", "Game Artist",
            "UI/UX Designer for Games", "VR / AR Designer",
            "Game Producer", "Narrative Designer", "Technical Artist",
            "Playtest Designer", "Esports Content Producer"
        ],
        school: "Interactive and Game Design"
    },
    AFX: {
        name: "Computer Animation and Visual Effects",
        ending: "ผู้มอบชีวิตแด่ภาพ",
        story: "ภาพเคลื่อนไหวของเธอทำให้ท้องฟ้าสว่างวาบ ไม่มีใครเชื่อว่าทั้งหมดนี้เป็นฝีมือคนคนเดียว",
        careers: [
            "3D Animator", "3D Modeler", "VFX Artist", "Compositor",
            "Rigging Artist", "Lighting Artist", "Texture Artist",
            "Motion Capture Artist", "Layout / Previs Artist",
            "Visual Effects Supervisor"
        ],
        school: "Computer Animation and Visual Effects"
    },
    DEN: {
        name: "Digital Entertainment",
        ending: "ผู้รวมใจให้เป็นหนึ่ง",
        story: "เธอไม่ได้ขึ้นเวทีคนเดียว เธอทำให้ทั้งเมืองได้ขึ้นเวทีไปพร้อมกัน",
        careers: [
            "Content Creator", "Event / Show Producer",
            "Streaming Producer", "VTuber / Virtual Talent Producer",
            "Entertainment Marketer", "Social Media Manager",
            "Video Producer", "Community Manager",
            "Scriptwriter", "Brand Experience Designer"
        ],
        school: "Digital Entertainment"
    }
};

const MAJOR_ORDER = ["DGA", "DGD", "IGD", "AFX", "DEN"];

const MIXED_ENDINGS = {
    "DGA-DGD": "นักออกแบบที่เล่าเรื่องด้วยภาพวาด",
    "AFX-DGD": "นักออกแบบที่ทำให้ภาพขยับ",
    "DGD-IGD": "นักออกแบบประสบการณ์",
    "DGD-DEN": "นักออกแบบที่เล่าเรื่องเก่ง",
    "AFX-DGA": "นักวาดที่ทำให้ภาพมีชีวิต",
    "DGA-IGD": "นักวาดโลกของเกม",
    "DGA-DEN": "ครีเอเตอร์สายวาด",
    "AFX-IGD": "นักสร้างโลกเสมือนจริง",
    "AFX-DEN": "นักเล่าเรื่องด้วยภาพยนตร์",
    "DEN-IGD": "นักสร้างสนามเล่นให้คนมารวมกัน"
};

const DISTRICTS = {
    DGA: {
        name: "ย่านศิลป์: ตรอกจินตนาการ",
        description: "ศิลปินสูงวัยคนหนึ่งยื่นขวดสีวิเศษให้ แล้วถามว่า \"เธออยากเป็นคนแบบไหนในเมืองนี้\"",
        options: [
            { text: "คนที่สร้างตัวละครให้ทั้งโลกจำได้", career: "Character Designer" },
            { text: "คนที่วาดโลกและฉากหลังให้เรื่องเล่ามีชีวิต", career: "Concept Artist / Background Artist" },
            { text: "คนที่เล่าเรื่องด้วยภาพหลายช่อง", career: "Webtoon / Comic / Storyboard Artist" },
            { text: "คนที่ทำให้ภาพวาดกลายเป็นสินค้าหรือของสะสม", career: "Illustrator / Art Toy / Sticker Creator" }
        ]
    },
    DGD: {
        name: "ย่านดีไซน์: ถนนเอกลักษณ์",
        description: "นักออกแบบคนหนึ่งยืนอยู่หน้าร้านที่ป้ายยังว่างเปล่า แล้วถามว่า \"ถ้าได้ฝากลายเซ็นไว้ที่ไหนสักแห่งในเมืองนี้ เธออยากให้เป็นที่ไหน\"",
        options: [
            { text: "ป้ายและโลโก้ที่ทุกคนเห็นทุกวัน", career: "Brand Identity Designer" },
            { text: "หน้าจอแอปและเว็บไซต์ของเมือง", career: "UI Designer" },
            { text: "กล่องและแพ็กเกจที่ใคร ๆ ก็อยากเก็บไว้", career: "Packaging Designer" },
            { text: "โปสเตอร์ใหญ่กลางเมืองที่คนเดินผ่านแล้วต้องหันมอง", career: "Art Director / Key Visual Designer" }
        ]
    },
    IGD: {
        name: "ย่านเกม: สนามแห่งการเล่น",
        description: "หัวหน้าสนามเกมเดินมาหา แล้วถามว่า \"เกมของเธอจะเริ่มจากอะไร\"",
        options: [
            { text: "คิดกติกาและระบบให้คนเล่นแล้วติดใจ", career: "Game Designer / Level Designer" },
            { text: "ออกแบบฉากและตัวละครในเกม", career: "Game Artist" },
            { text: "สร้างโลกเสมือนที่เดินเข้าไปได้จริง", career: "VR / AR Designer" },
            { text: "ดูแลทีมให้เกมไปถึงมือผู้เล่นได้", career: "Game Producer" }
        ]
    },
    AFX: {
        name: "ย่านภาพยนตร์: กำแพงแห่งเรื่องราว",
        description: "ผู้กำกับลึกลับคนหนึ่งยื่นสคริปต์มาให้ แล้วถามว่า \"เธออยากคุมฉากไหนของหนังเรื่องนี้\"",
        options: [
            { text: "ตัวละครที่ขยับเหมือนมีชีวิตจริง", career: "3D Animator / Rigging Artist" },
            { text: "ของและตัวละครที่ปั้นขึ้นมาจากความว่างเปล่า", career: "3D Modeler / Texture Artist" },
            { text: "ฉากระเบิด ไฟ น้ำ ควัน ที่ทำให้คนดูตกใจ", career: "VFX Artist" },
            { text: "การรวมทุกชั้นภาพให้ดูเหมือนถ่ายจริงชิ้นเดียว", career: "Compositor" }
        ]
    },
    DEN: {
        name: "ย่านบันเทิง: เวทีแห่งตัวตน",
        description: "พิธีกรประจำเมืองยื่นไมค์มาให้ แล้วถามว่า \"บทบาทไหนทำให้เธอใจเต้นแรงที่สุด\"",
        options: [
            { text: "คนคิดรายการและคอนเทนต์ที่ทุกคนรอดูทุกสัปดาห์", career: "Content Creator / Scriptwriter" },
            { text: "คนจัดงานที่ทำให้คนนับพันได้ประสบการณ์เดียวกัน", career: "Event / Show Producer" },
            { text: "คนเบื้องหลังตัวตนเสมือนและสตรีมเมอร์", career: "Virtual Talent / Streaming Producer" },
            { text: "คนที่ทำให้ชุมชนแฟนคลับเติบโต", career: "Entertainment Marketer / Community Manager" }
        ]
    }
};

// คำถามและตัวเลือกทั้ง 11 ฉากที่ใช้คิดคะแนน
const questions = [
    {
        chapter: "บทที่ 1 · ตื่นขึ้นในเมืองไร้สี",
        title: "ฉาก 1.1 ตื่นขึ้นมา",
        description: "ดวงไฟลอยมาใกล้ ๆ แล้วกระซิบว่า \"เหลือเวลาถึงคืนนี้เท่านั้นนะ ช่วยเมืองนี้ด้วย\" สิ่งแรกที่เธอทำคือ…",
        options: [
            { text: "หยิบชอล์กขึ้นมาแล้วลงสีบนกำแพง", major: "DGA" },
            { text: "เดินดูป้ายที่ตัวอักษรซีดจนอ่านไม่ออก แล้วลองจัดใหม่ให้อ่านง่ายขึ้น", major: "DGD" },
            { text: "ถามดวงไฟว่าเมืองนี้มีกติกาอะไร แล้วจะผ่านด่านไปได้ยังไง", major: "IGD" },
            { text: "ลองดันของรอบตัวเบา ๆ ว่าทำไมทุกอย่างถึงนิ่งสนิทแบบนี้", major: "AFX" },
            { text: "ตะโกนเรียกคนในเมืองให้มารวมกันที่จัตุรัส", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 1 · ตื่นขึ้นในเมืองไร้สี",
        title: "ฉาก 1.2 ของติดตัว",
        description: "ดวงไฟบอกว่าพกไปได้แค่ชิ้นเดียว เธอเลือกหยิบ…",
        options: [
            { text: "สมุดสเก็ตช์ที่วาดได้ไม่มีวันหมดหน้า", major: "DGA" },
            { text: "ชุดสีกับตัวอักษรวิเศษที่ทำให้อะไรก็ดูเข้าที่เข้าทาง", major: "DGD" },
            { text: "ตลับเกมเก่า ๆ ที่ยังไม่มีใครรู้วิธีเล่น", major: "IGD" },
            { text: "กล้องฟิล์มที่ถ่ายแล้วภาพเคลื่อนไหวได้", major: "AFX" },
            { text: "ไมโครโฟนที่เสียงดังไปทั่วทั้งเมือง", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 1 · ตื่นขึ้นในเมืองไร้สี",
        title: "ฉาก 1.3 ทางแยกห้าสาย",
        description: "ปลายจัตุรัสมีถนนห้าสาย แต่ละสายมีกลิ่นกับเสียงไม่เหมือนกัน เธอเดินเข้าสายไหนก่อน",
        options: [
            { text: "สายที่ผนังทั้งสองข้างเต็มไปด้วยภาพวาด", major: "DGA" },
            { text: "สายที่เต็มไปด้วยป้ายร้านและโลโก้", major: "DGD" },
            { text: "สายที่มีเสียงเกมกับแสงไฟหลากสี", major: "IGD" },
            { text: "สายที่มีเสียงเครื่องฉายหนังกับควันเอฟเฟกต์", major: "AFX" },
            { text: "สายที่มีเสียงเพลงและผู้คนมายืนรวมกัน", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 2 · ปัญหาของชาวเมือง",
        title: "ฉาก 2.1 สะพานที่พังครึ่งหนึ่ง",
        description: "สะพานข้ามแม่น้ำพังไปครึ่งทาง ฝั่งโน้นมีคนรออยู่ เธอจะข้ามไปยังไง",
        options: [
            { text: "วาดสะพานขึ้นมาใหม่ด้วยเส้นและสีในแบบของเธอ", major: "DGA" },
            { text: "ทำป้ายเตือนกับป้ายบอกทางอ้อม ให้ทุกคนเดินตามได้โดยไม่งง", major: "DGD" },
            { text: "ไขกลไกของสะพานให้กลับมาทำงานอีกครั้ง", major: "IGD" },
            { text: "ทำภาพสะพานที่ค่อย ๆ ประกอบตัวเองขึ้นมาให้ทุกคนเห็น", major: "AFX" },
            { text: "ชวนชาวเมืองมาช่วยกันซ่อม แล้วจัดเป็นงานฉลองเล็ก ๆ", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 2 · ปัญหาของชาวเมือง",
        title: "ฉาก 2.2 เด็กน้อยร้องไห้",
        description: "เด็กคนหนึ่งนั่งร้องไห้อยู่ข้างทาง เธอบอกว่าตัวการ์ตูนที่รักที่สุดหายไปจากเมืองแล้ว เธอช่วยหนูน้อยยังไง",
        options: [
            { text: "วาดตัวการ์ตูนตัวนั้นขึ้นมาใหม่ให้", major: "DGA" },
            { text: "ทำสติกเกอร์ โปสเตอร์ และของที่ระลึกให้เธอเก็บไว้", major: "DGD" },
            { text: "สร้างเกมเล็ก ๆ ให้เธอได้เล่นกับตัวการ์ตูนตัวนั้น", major: "IGD" },
            { text: "ทำให้ตัวการ์ตูนมีชีวิตขึ้นมา เดินและพูดกับเธอได้", major: "AFX" },
            { text: "ชวนเด็ก ๆ คนอื่นมานั่งล้อมวงฟังเรื่องของตัวการ์ตูนตัวนั้น", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 2 · ปัญหาของชาวเมือง",
        title: "ฉาก 2.3 ร้านเก่าแก่ที่ใกล้ปิด",
        description: "เจ้าของร้านเก่าแก่เล่าว่าไม่มีใครรู้จักร้านเขาแล้ว เธอตอบเขาว่า…",
        options: [
            { text: "\"หนูจะวาดภาพให้ร้านนี้มีเอกลักษณ์ไม่เหมือนใคร\"", major: "DGA" },
            { text: "\"หนูจะทำแบรนด์ใหม่ให้ ตั้งแต่โลโก้ไปจนถึงป้ายหน้าร้าน\"", major: "DGD" },
            { text: "\"หนูจะทำให้การเดินเข้าร้านเป็นเหมือนเล่นเกมสนุก ๆ\"", major: "IGD" },
            { text: "\"หนูจะทำคลิปแนะนำร้านที่ดูแล้วขนลุก\"", major: "AFX" },
            { text: "\"หนูจะจัดงานแล้วช่วยโปรโมต ให้คนแห่กันมา\"", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 3 · ย่านของเธอ",
        title: "ด่านทดสอบหน้าประตูหินผา",
        description: "ไม่ว่าเธอจะเดินมาจากย่านไหน ทุกคนต้องเจอประตูหินบานใหญ่ก่อนไปต่อ ประตูถามว่า \"เธอพร้อมฝึกอะไรทุกวัน\"",
        options: [
            { text: "วาดรูปและสังเกตโลกรอบตัวให้ละเอียดขึ้น", major: "DGA" },
            { text: "จัดองค์ประกอบ สี และตัวอักษรให้ลงตัว", major: "DGD" },
            { text: "คิดเป็นระบบ เป็นขั้นเป็นตอน", major: "IGD" },
            { text: "ทำให้ภาพเคลื่อนไหวและดูสมจริง", major: "AFX" },
            { text: "พูด เล่าเรื่อง และประสานคนให้ไปทางเดียวกัน", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 4 · เพื่อนร่วมทาง",
        title: "ฉาก 4.1 เจอเพื่อนสี่คน",
        description: "ที่ลานน้ำพุ เธอเจอนักเดินทางอีกสี่คน แต่ละคนมีของที่ตัวเองยังทำไม่ได้ เธอเลือกเป็นคนที่…",
        options: [
            { text: "ช่วยวาดภาพให้ทุกคนเห็นตรงกัน", major: "DGA" },
            { text: "ทำไกด์ให้ทุกอย่างดูลงตัวและเป็นระเบียบ", major: "DGD" },
            { text: "คิดวิธีให้ทุกคนทำงานด้วยกันแล้วสนุก", major: "IGD" },
            { text: "ทำตัวอย่างสั้น ๆ ให้เห็นว่าแผนจะออกมาหน้าตาเป็นยังไง", major: "AFX" },
            { text: "เป็นคนกลางที่ทำให้ทุกคนอยากเดินต่อไปด้วยกัน", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 4 · เพื่อนร่วมทาง",
        title: "ฉาก 4.2 เพื่อนเห็นไม่ตรงกัน",
        description: "กลางทางมีสองแยก ทีมเถียงกันว่าจะไปทางไหน เธอทำอะไร",
        options: [
            { text: "วาดแผนที่ให้เห็นภาพว่าแต่ละทางไปไหนบ้าง", major: "DGA" },
            { text: "ทำตารางเปรียบเทียบให้ตัดสินใจง่ายขึ้น", major: "DGD" },
            { text: "เสนอให้ลองไปทั้งสองทางแล้วดูผลลัพธ์", major: "IGD" },
            { text: "ทำภาพจำลองให้เห็นว่าปลายทางของแต่ละทางเป็นยังไง", major: "AFX" },
            { text: "ฟังทุกคนก่อน แล้วหาจุดที่ทุกคนรับได้", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 5 · คืนเทศกาล",
        title: "ฉาก 5.1 ขึ้นเวที",
        description: "เวทีว่างเปล่ากำลังรอเธออยู่ ไฮไลต์ที่เธออยากมอบให้ทั้งเมืองคือ…",
        options: [
            { text: "ภาพวาดขนาดยักษ์ที่คนทั้งเมืองเงยหน้ามอง", major: "DGA" },
            { text: "ภาพลักษณ์ใหม่ของเมือง ที่ทำให้ทุกมุมดูมีสไตล์เดียวกัน", major: "DGD" },
            { text: "เกมที่คนทั้งเมืองเข้ามาเล่นพร้อมกัน", major: "IGD" },
            { text: "โชว์ภาพเคลื่อนไหวกับเอฟเฟกต์ที่ทำให้ทั้งลานตะลึง", major: "AFX" },
            { text: "การแสดงสดที่ทุกคนมีส่วนร่วมได้", major: "DEN" }
        ]
    },
    {
        chapter: "บทที่ 5 · คืนเทศกาล",
        title: "ฉาก 5.2 สีกลับมาแล้ว",
        description: "เมื่อสีค่อย ๆ กลับมาทั่วเมือง ผู้คนหันมามองเธอ เธออยากให้พวกเขาจำเธอว่าเป็นใคร",
        options: [
            { text: "คนที่ให้กำเนิดตัวละครที่ทุกคนรัก", major: "DGA" },
            { text: "คนที่ทำให้เมืองนี้ดูดีและมีเอกลักษณ์", major: "DGD" },
            { text: "คนที่สร้างโลกให้ทุกคนได้เข้ามาเล่น", major: "IGD" },
            { text: "คนที่ทำให้สิ่งที่ดูเป็นไปไม่ได้กลายเป็นจริง", major: "AFX" },
            { text: "คนที่ทำให้ทุกคนมารวมกันได้", major: "DEN" }
        ]
    }
];

// ==========================================
// สถานะของเกม
// ==========================================

let currentQuestion = 0;
let scores = {};
let selectedAnswers = [];
let selectedDistricts = [];
let selectedCareers = [];
let registrationData = {};
let finalMajors = [];

function resetGame() {
    currentQuestion = 0;
    scores = { DGA: 0, DGD: 0, IGD: 0, AFX: 0, DEN: 0 };
    selectedAnswers = [];
    selectedDistricts = [];
    selectedCareers = [];
    registrationData = {};
    finalMajors = [];
}

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);
    if (target) target.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
    updateProgress();
}

function updateProgress() {
    const fill = document.getElementById("progress-fill");
    if (!fill) return;

    const percent = Math.min((selectedAnswers.length / 11) * 100, 100);
    fill.style.width = percent + "%";
}

// ==========================================
// เริ่มเกม
// ==========================================

document.getElementById("start-button")?.addEventListener("click", () => {
    showScreen("instruction-screen");
});

document.getElementById("begin-button")?.addEventListener("click", () => {
    resetGame();
    showQuestion();
});

// ==========================================
// ระบบคำถาม
// ==========================================

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function showQuestion() {
    const question = questions[currentQuestion];

    if (!question) return;

    showScreen("game-screen");

    document.getElementById("chapter-label").textContent = question.chapter;
    document.getElementById("question-title").textContent = question.title;
    document.getElementById("question-description").textContent = question.description;
    document.getElementById("question-counter").textContent =
        `คำถาม ${selectedAnswers.length + 1} / 11`;

    const answerList = document.getElementById("answer-list");
    answerList.innerHTML = "";

    const shuffledOptions = shuffleArray(question.options);

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-option";
        button.textContent = option.text;

        button.addEventListener("click", () => {
            selectAnswer(option);
        });

        answerList.appendChild(button);
    });

    updateProgress();
}

function selectAnswer(option) {
    scores[option.major] += 1;

    selectedAnswers.push({
        question: questions[currentQuestion].title,
        major: option.major,
        text: option.text
    });

    currentQuestion++;

    if (currentQuestion === 6) {
        showDistricts();
        return;
    }

    if (currentQuestion < questions.length) {
        showQuestion();
        return;
    }

    showRegistration();
}

// ==========================================
// เลือกย่านจากคะแนนหลังฉาก 2.3
// ==========================================

function getSortedMajors(scoreData = scores) {
    return MAJOR_ORDER
        .map(code => ({ code, score: scoreData[code] }))
        .sort((a, b) => b.score - a.score);
}


function showDistricts() {
    const ranking = getSortedMajors();
    const first = ranking[0];
    const second = ranking[1];

    selectedDistricts = [first.code];

    if (first.score - second.score <= 1) {
        selectedDistricts.push(second.code);
    }

    showScreen("district-screen");

    const description = document.getElementById("district-description");
    const list = document.getElementById("district-list");

    description.textContent = selectedDistricts.length === 1
        ? "ดวงไฟพาเธอเข้าสู่ย่านที่ใกล้ตัวเธอที่สุด"
        : "เธอมีความสนใจอยู่ระหว่างสองเส้นทาง ลองเลือกย่านที่อยากสำรวจมากที่สุด";

    list.innerHTML = "";

    selectedDistricts.forEach(code => {
        const district = DISTRICTS[code];

        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice-button";
        button.textContent = district.name;

        button.addEventListener("click", () => {
            // ให้เลือกเพียงหนึ่งย่านเท่านั้น
            selectedDistricts = [code];
            selectedCareers = [];

            showCareerChoices(code);
        });

        list.appendChild(button);
    });
}


// ==========================================
// เลือกอาชีพในย่าน
// ==========================================


function showCareerChoices(code) {
    const district = DISTRICTS[code];

    showScreen("career-screen");

    document.getElementById("career-description").textContent =
        district.description;

    const list = document.getElementById("career-list");
    list.innerHTML = "";

    district.options.forEach(option => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice-button";
        button.textContent = `${option.text} (${option.career})`;

        button.addEventListener("click", () => {
            // บันทึกอาชีพที่ผู้เล่นเลือกเพียงครั้งเดียว
            selectedCareers = [{
                major: code,
                career: option.career
            }];

            // ไปด่านทดสอบหน้าประตูหินผาทันที
            showQuestion();
        });

        list.appendChild(button);
    });
}

// ==========================================
// แบบฟอร์มบัตรผ่านนักเดินทาง 9 ข้อ
// ทุกข้อข้ามได้ และข้อ 6 เลือกได้ไม่เกิน 2 ข้อ
// ==========================================

function showRegistration() {
    showScreen("registration-screen");

    const form = document.getElementById("registration-form");

    form.innerHTML = `
        <h2>บัตรผ่านนักเดินทาง</h2>
        <p>กรอกเท่าที่สะดวกได้เลย ข้อไหนไม่อยากตอบก็ข้ามได้</p>

        <label>1. ชื่อเล่นของเธอ</label>
        <input name="nickname" placeholder="ชื่อเล่น">

        <label>2. ตอนนี้เรียนอยู่ชั้นไหน</label>
        <select name="education">
            <option value="">เลือกคำตอบ</option>
            <option>ม.4</option><option>ม.5</option><option>ม.6</option>
            <option>ปวช.</option><option>ปวส.</option><option>อื่น ๆ</option>
        </select>

        <label>3. เรียนสายอะไรอยู่</label>
        <select name="studyLine">
            <option value="">เลือกคำตอบ</option>
            <option>ศิลป์-คำนวณ</option><option>ศิลป์-ภาษา</option>
            <option>วิทย์-คณิต</option><option>สายอาชีพ</option><option>อื่น ๆ</option>
        </select>

        <label>4. อยู่จังหวัดอะไร</label>
        <input name="province" placeholder="จังหวัด">

        <label>5. รู้จักคณะนี้จากที่ไหน</label>
        <select name="source">
            <option value="">เลือกคำตอบ</option>
            <option>Facebook</option><option>Instagram</option>
            <option>TikTok</option><option>เพื่อนหรือรุ่นพี่</option>
            <option>ครูแนะแนว</option><option>งานกิจกรรม</option><option>อื่น ๆ</option>
        </select>

        <label>6. เลือกคณะโดยดูจากอะไรมากที่สุด (เลือกได้ 2 ข้อ)</label>
        <div class="registration-checkboxes">
            ${[
                "ค่าเทอม", "ทุนการศึกษา", "ชื่อเสียงมหาวิทยาลัย",
                "อาชีพหลังเรียนจบ", "ผลงานของรุ่นพี่", "การเดินทาง",
                "ความชอบของตัวเอง", "ผู้ปกครองสนับสนุน"
            ].map(item => `
                <label class="checkbox-label">
                    <input type="checkbox" name="reasons" value="${item}">
                    ${item}
                </label>
            `).join("")}
        </div>

        <label>7. ตอนนี้อยู่ขั้นไหนของการเลือกคณะ</label>
        <select name="decisionStage">
            <option value="">เลือกคำตอบ</option>
            <option>เพิ่งเริ่มหาข้อมูล</option>
            <option>กำลังเปรียบเทียบหลายที่</option>
            <option>ตั้งใจสมัครแล้ว</option>
            <option>รอผลสอบที่อื่นก่อน</option>
        </select>

        <label>8. เคยทำงานสร้างสรรค์อะไรมาบ้าง</label>
        <select name="experience">
            <option value="">เลือกคำตอบ</option>
            <option>วาดรูป</option><option>ออกแบบ</option>
            <option>ตัดต่อวิดีโอ</option><option>ทำเกม</option>
            <option>จัดกิจกรรม</option><option>ถ่ายคอนเทนต์</option>
            <option>ยังไม่เคยเลย</option>
        </select>

        <label>9. อยากรับข่าวสารของคณะทางไหน</label>
        <select name="contactChannel">
            <option value="">เลือกคำตอบ</option>
            <option>LINE</option><option>อีเมล</option>
            <option>Facebook</option><option>Instagram</option>
            <option>โทรศัพท์</option>
        </select>

        <button type="submit" class="primary-button">ส่งบัตรผ่าน →</button>
        <button type="button" id="skip-registration" class="choice-button">
            ข้ามไปก่อน
        </button>
    `;

    form.onsubmit = event => {
        event.preventDefault();

        const data = new FormData(form);
        const reasons = data.getAll("reasons");

        if (reasons.length > 2) {
            alert("เลือกข้อ 6 ได้ไม่เกิน 2 ข้อนะ");
            return;
        }

        registrationData = Object.fromEntries(data.entries());
        registrationData.reasons = reasons;

        showResult();
    };

    document.getElementById("skip-registration").onclick = () => {
        registrationData = {};
        showResult();
    };
}

// ==========================================
// คำนวณผลลัพธ์
// ==========================================

function getFinalRanking() {
    const ranking = getSortedMajors();

    const highestScore = ranking[0].score;
    const tied = ranking.filter(item => item.score === highestScore);

    // หากคะแนนสูงสุดเสมอกัน ใช้คำตอบฉาก 5.2 เป็นตัวตัดสิน
    if (tied.length > 1) {
        const lastAnswer = selectedAnswers[selectedAnswers.length - 1];
        const winner = tied.find(item => item.code === lastAnswer.major);

        if (winner) {
            const others = ranking.filter(item => item.code !== winner.code);
            return [winner, ...others];
        }
    }

    return ranking;
}

function getMixedTitle(first, second) {
    const key = [first, second].sort().join("-");
    return MIXED_ENDINGS[key] || "นักเดินทางผู้สร้างสีสันให้เมือง";
}

function showResult() {
    showScreen("result-screen");

    const ranking = getFinalRanking();
    const first = ranking[0];
    const second = ranking[1];

    const isMixed = first.score - second.score <= 1;
    finalMajors = isMixed ? [first.code, second.code] : [first.code];

    const title = document.getElementById("result-title");
    const description = document.getElementById("result-description");
    const careerList = document.getElementById("result-career-list");
    const school = document.getElementById("result-school");

    if (isMixed) {
        title.textContent = getMixedTitle(first.code, second.code);

        description.textContent =
            `${MAJORS[first.code].story} ${MAJORS[second.code].story}`;

        school.textContent =
            `${MAJORS[first.code].school} + ${MAJORS[second.code].school}`;
    } else {
        title.textContent = MAJORS[first.code].ending;
        description.textContent = MAJORS[first.code].story;
        school.textContent = MAJORS[first.code].school;
    }

    
careerList.innerHTML = "";

finalMajors.forEach(code => {
    const heading = document.createElement("h3");
    heading.textContent = MAJORS[code].name;
    heading.className = "career-major-heading";
    careerList.appendChild(heading);

    const selected = selectedCareers.find(item => item.major === code);
    const careers = [...MAJORS[code].careers];

    // อาชีพที่เลือกในบทที่ 3 แสดงเป็นอันดับแรก
    if (selected) {
        const index = careers.indexOf(selected.career);
        if (index !== -1) careers.splice(index, 1);
        careers.unshift(selected.career);
    }

    const tags = document.createElement("div");
    tags.className = "career-tags";

    careers.forEach((career, index) => {
        const tag = document.createElement("span");
        tag.className = "career-tag";

        if (selected && index === 0) {
            tag.classList.add("selected-career");
        }

        tag.textContent = career;
        tags.appendChild(tag);
    });

    careerList.appendChild(tags);
});

    const restart = document.getElementById("restart-button");
    if (restart) {
        restart.onclick = () => {
            resetGame();
            showScreen("start-screen");
        };
    }

    updateProgress();
}

// ==========================================
// ปุ่มเริ่มใหม่
// ==========================================

document.getElementById("restart-button")?.addEventListener("click", () => {
    resetGame();
    showScreen("start-screen");
});

// ==========================================
// ปุ่มเสียง (ปิด/เปิดเสียงประกอบในอนาคต)
// ==========================================

const soundButton = document.getElementById("sound-button");

if (soundButton) {
    soundButton.addEventListener("click", () => {
        soundButton.classList.toggle("muted");
    });
}

// เริ่มต้นที่หน้าแรกเสมอ
showScreen("start-screen");
