/* =====================================================
   GAME PENDIDIKAN PANCASILA
   Mencocokkan Perilaku dengan Sila Pancasila
   ===================================================== */

// ============ BANK SOAL ============
const SILA = {
  1: "Ketuhanan Yang Maha Esa",
  2: "Kemanusiaan yang Adil dan Beradab",
  3: "Persatuan Indonesia",
  4: "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan",
  5: "Keadilan Sosial bagi Seluruh Rakyat Indonesia",
};

// Soal Mudah (5)
const SOAL_MUDAH = [
  { perilaku: "Berdoa sebelum dan sesudah belajar.", emoji: "🙏", jawaban: 1, penjelasan: "Berdoa adalah bentuk ibadah kepada Tuhan. Ini mencerminkan Sila ke-1: Ketuhanan Yang Maha Esa." },
  { perilaku: "Menolong teman yang jatuh saat bermain.", emoji: "🤝", jawaban: 2, penjelasan: "Menolong sesama adalah wujud kasih sayang kepada manusia. Ini sesuai Sila ke-2: Kemanusiaan yang Adil dan Beradab." },
  { perilaku: "Memakai produk buatan Indonesia dengan bangga.", emoji: "🇮🇩", jawaban: 3, penjelasan: "Mencintai produk dalam negeri memperkuat persatuan bangsa. Ini sesuai Sila ke-3: Persatuan Indonesia." },
  { perilaku: "Bermusyawarah memilih ketua kelas.", emoji: "🗳️", jawaban: 4, penjelasan: "Musyawarah untuk mengambil keputusan bersama sesuai Sila ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan." },
  { perilaku: "Berbagi bekal makanan dengan teman yang tidak membawa.", emoji: "🍱", jawaban: 5, penjelasan: "Berbagi dengan sesama mencerminkan keadilan sosial. Ini sesuai Sila ke-5: Keadilan Sosial bagi Seluruh Rakyat Indonesia." },
];

// Soal Sedang (10)
const SOAL_SEDANG = [
  { perilaku: "Menghormati teman yang berbeda agama.", emoji: "🕌", jawaban: 1, penjelasan: "Menghargai perbedaan agama adalah wujud toleransi beragama. Sesuai Sila ke-1: Ketuhanan Yang Maha Esa." },
  { perilaku: "Menjenguk teman yang sedang sakit.", emoji: "🏥", jawaban: 2, penjelasan: "Menjenguk teman yang sakit menunjukkan rasa peduli terhadap sesama manusia. Sesuai Sila ke-2." },
  { perilaku: "Mengikuti upacara bendera dengan khidmat.", emoji: "🇮🇩", jawaban: 3, penjelasan: "Upacara bendera menumbuhkan rasa cinta tanah air dan persatuan. Sesuai Sila ke-3: Persatuan Indonesia." },
  { perilaku: "Menghormati guru yang sedang mengajar.", emoji: "👩‍🏫", jawaban: 2, penjelasan: "Menghormati guru adalah bentuk sikap adil dan beradab kepada sesama. Sesuai Sila ke-2: Kemanusiaan yang Adil dan Beradab." },
  { perilaku: "Ikut kerja bakti membersihkan kelas.", emoji: "🧹", jawaban: 3, penjelasan: "Kerja bakti bersama mempererat persatuan dan gotong royong. Sesuai Sila ke-3: Persatuan Indonesia." },
  { perilaku: "Menerima hasil keputusan musyawarah kelas dengan lapang dada.", emoji: "🤗", jawaban: 4, penjelasan: "Menerima hasil musyawarah menghormati keputusan bersama. Sesuai Sila ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan." },
  { perilaku: "Membagi tugas kelompok secara adil dan merata.", emoji: "⚖️", jawaban: 5, penjelasan: "Membagi tugas secara adil mencerminkan keadilan sosial. Sesuai Sila ke-5: Keadilan Sosial bagi Seluruh Rakyat Indonesia." },
  { perilaku: "Tidak memaksakan pendapat kepada teman.", emoji: "🗣️", jawaban: 4, penjelasan: "Tidak memaksakan pendapat adalah sikap bijaksana dalam bermusyawarah. Sesuai Sila ke-4." },
  { perilaku: "Merayakan hari besar keagamaan dengan tenang dan menghormati.", emoji: "🎉", jawaban: 1, penjelasan: "Menghormati hari besar agama lain mencerminkan sikap Ketuhanan yang toleran. Sesuai Sila ke-1." },
  { perilaku: "Menghargai pendapat teman saat diskusi kelompok.", emoji: "💬", jawaban: 4, penjelasan: "Menghargai pendapat orang lain adalah inti dari musyawarah. Sesuai Sila ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan." },
];

// Soal Sulit (15)
const SOAL_SULIT = [
  { perilaku: "Mengajak teman beribadah sesuai agamanya masing-masing tanpa memaksa.", emoji: "🕊️", jawaban: 1, penjelasan: "Menghormati kebebasan beribadah sesuai agama masing-masing sesuai Sila ke-1: Ketuhanan Yang Maha Esa." },
  { perilaku: "Membantu korban bencana alam dengan menyumbang pakaian layak pakai.", emoji: "🎁", jawaban: 2, penjelasan: "Membantu korban bencana adalah wujud kemanusiaan yang adil dan beradab. Sesuai Sila ke-2." },
  { perilaku: "Menggunakan bahasa Indonesia yang baik saat berbicara di sekolah.", emoji: "🗨️", jawaban: 3, penjelasan: "Menggunakan bahasa persatuan memperkuat rasa persatuan Indonesia. Sesuai Sila ke-3." },
  { perilaku: "Ikut serta dalam pemilihan ketua OSIS dengan jujur.", emoji: "📝", jawaban: 4, penjelasan: "Pemilihan secara jujur adalah wujud demokrasi dan musyawarah. Sesuai Sila ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan." },
  { perilaku: "Memberikan kesempatan yang sama kepada semua teman untuk berpendapat.", emoji: "🎤", jawaban: 5, penjelasan: "Memberikan kesempatan yang sama adalah wujud keadilan sosial. Sesuai Sila ke-5: Keadilan Sosial bagi Seluruh Rakyat Indonesia." },
  { perilaku: "Tidak membeda-bedakan teman berdasarkan suku dan ras.", emoji: "🌈", jawaban: 3, penjelasan: "Tidak membeda-bedakan suku dan ras mempererat persatuan Indonesia. Sesuai Sila ke-3: Persatuan Indonesia." },
  { perilaku: "Menghormati hak orang lain untuk beribadah sesuai keyakinannya.", emoji: "🛐", jawaban: 1, penjelasan: "Menghormati hak beribadah orang lain mencerminkan Ketuhanan yang toleran. Sesuai Sila ke-1." },
  { perilaku: "Menolong teman yang berbeda agama saat kesulitan tanpa membeda-bedakan.", emoji: "🤲", jawaban: 2, penjelasan: "Menolong tanpa membedakan agama adalah wujud kemanusiaan yang adil. Sesuai Sila ke-2." },
  { perilaku: "Turut serta dalam kegiatan gotong royong di lingkungan sekolah.", emoji: "🏫", jawaban: 3, penjelasan: "Gotong royong memperkuat persatuan dan kesatuan. Sesuai Sila ke-3: Persatuan Indonesia." },
  { perilaku: "Mendengarkan pendapat teman sebelum mengambil keputusan bersama.", emoji: "👂", jawaban: 4, penjelasan: "Mendengarkan pendapat sebelum memutuskan adalah sikap bijaksana. Sesuai Sila ke-4." },
  { perilaku: "Berbagi tugas kelompok secara adil tanpa ada yang merasa dirugikan.", emoji: "🤝", jawaban: 5, penjelasan: "Berbagi tugas secara adil mencerminkan keadilan sosial. Sesuai Sila ke-5." },
  { perilaku: "Menjaga kerukunan antar umat beragama di lingkungan sekitar.", emoji: "🕊️", jawaban: 1, penjelasan: "Menjaga kerukunan antar umat beragama adalah wujud Ketuhanan Yang Maha Esa. Sesuai Sila ke-1." },
  { perilaku: "Memberi bantuan kepada teman yang membutuhkan tanpa mengharap imbalan.", emoji: "💝", jawaban: 2, penjelasan: "Membantu dengan tulus adalah wujud kemanusiaan yang beradab. Sesuai Sila ke-2." },
  { perilaku: "Mengikuti kegiatan pramuka untuk melatih rasa cinta tanah air.", emoji: "⛺", jawaban: 3, penjelasan: "Kegiatan pramuka menumbuhkan rasa cinta tanah air dan persatuan. Sesuai Sila ke-3: Persatuan Indonesia." },
  { perilaku: "Menghargai hasil keputusan rapat kelas meskipun berbeda dengan pendapat pribadi.", emoji: "🏛️", jawaban: 4, penjelasan: "Menghargai hasil rapat adalah sikap bijaksana dalam musyawarah. Sesuai Sila ke-4." },
];

// ============ STATE ============
const state = {
  level: "easy",
  questions: [],
  index: 0,
  score: 0,
  correct: 0,
  wrong: 0,
  answered: false,
};

// ============ DOM ============
const $ = (id) => document.getElementById(id);
const screens = {
  menu: $("screen-menu"),
  difficulty: $("screen-difficulty"),
  game: $("screen-game"),
  result: $("screen-result"),
  instructions: $("screen-instructions"),
  about: $("screen-about"),
};

// ============ NAVIGATION ============
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============ GAME START ============
function startGame(level) {
  state.level = level;
  if (level === "easy") state.questions = [...SOAL_MUDAH];
  else if (level === "medium") state.questions = [...SOAL_SEDANG];
  else state.questions = [...SOAL_SULIT];

  // Acak urutan soal
  state.questions = shuffle(state.questions);
  state.index = 0;
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  state.answered = false;

  showScreen("game");
  renderQuestion();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ RENDER QUESTION ============
function renderQuestion() {
  const q = state.questions[state.index];
  state.answered = false;

  // Update header
  $("question-counter").textContent = `${state.index + 1} / ${state.questions.length}`;
  $("score-display").textContent = state.score;
  const pct = ((state.index) / state.questions.length) * 100;
  $("progress-fill").style.width = `${pct}%`;

  // Render kartu
  const card = $("question-card");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";

  $("question-emoji").textContent = q.emoji;
  $("question-text").textContent = q.perilaku;

  // Render jawaban
  const grid = $("answers-grid");
  grid.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.dataset.sila = i;
    btn.innerHTML = `
      <span class="answer-num">${i}</span>
      <span class="answer-text">Sila ke-${i}: ${SILA[i]}</span>
    `;
    btn.addEventListener("click", () => selectAnswer(i));
    grid.appendChild(btn);
  }

  // Reset feedback
  const fb = $("feedback");
  fb.classList.remove("show", "wrong");
  $("feedback-icon").textContent = "✅";
  $("feedback-title").textContent = "Benar!";
  $("feedback-text").textContent = "";
  $("feedback-title").style.color = "var(--hijau)";
}

// ============ SELECT ANSWER ============
function selectAnswer(selected) {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.index];
  const isCorrect = selected === q.jawaban;
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn) => {
    btn.disabled = true;
    const sila = parseInt(btn.dataset.sila, 10);
    if (sila === q.jawaban) btn.classList.add("correct");
    if (sila === selected && !isCorrect) btn.classList.add("wrong");
  });

  // Update skor
  if (isCorrect) {
    state.score += 10;
    state.correct++;
  } else {
    state.wrong++;
  }
  $("score-display").textContent = state.score;
  $("progress-fill").style.width = `${((state.index + 1) / state.questions.length) * 100}%`;

  // Feedback
  const fb = $("feedback");
  fb.classList.add("show");
  fb.classList.toggle("wrong", !isCorrect);

  $("feedback-icon").textContent = isCorrect ? "✅" : "❌";
  $("feedback-title").textContent = isCorrect ? "Benar! +10 poin" : "Belum tepat";
  $("feedback-title").style.color = isCorrect ? "var(--hijau)" : "var(--merah-terang)";

  const jawabanTeks = `Sila ke-${q.jawaban}: ${SILA[q.jawaban]}`;
  $("feedback-text").textContent = isCorrect
    ? q.penjelasan
    : `Jawaban yang tepat adalah ${jawabanTeks}. ${q.penjelasan}`;

  // Tombol lanjut
  const nextBtn = $("next-btn");
  const isLast = state.index === state.questions.length - 1;
  nextBtn.textContent = isLast ? "Lihat Hasil →" : "Lanjut →";
  nextBtn.onclick = () => {
    if (isLast) {
      finishGame();
    } else {
      state.index++;
      renderQuestion();
    }
  };
}

// ============ FINISH ============
function finishGame() {
  $("progress-fill").style.width = "100%";

  const total = state.questions.length;
  const maxScore = total * 10;
  const persen = (state.score / maxScore) * 100;

  let emoji = "🏆", title = "Luar Biasa!", msg = "";
  if (persen === 100) {
    emoji = "🏆"; title = "Sempurna!";
    msg = "Kamu menjawab semua soal dengan benar! Kamu benar-benar paham nilai-nilai Pancasila. Pertahankan ya!";
  } else if (persen >= 80) {
    emoji = "🌟"; title = "Hebat Sekali!";
    msg = "Kamu sudah sangat baik memahami Pancasila! Sedikit lagi menuju sempurna. Ayo coba lagi!";
  } else if (persen >= 60) {
    emoji = "😊"; title = "Bagus!";
    msg = "Kamu sudah cukup paham, tapi masih bisa lebih baik lagi. Yuk pelajari lagi nilai-nilai Pancasila!";
  } else if (persen >= 40) {
    emoji = "💪"; title = "Semangat!";
    msg = "Jangan menyerah! Pelajari kembali sila-sila Pancasila dan coba lagi. Kamu pasti bisa!";
  } else {
    emoji = "📚"; title = "Ayo Belajar Lagi!";
    msg = "Jangan sedih ya. Baca lagi petunjuk dan pelajari Pancasila, lalu coba lagi. Kamu pasti bisa lebih baik!";
  }

  $("result-emoji").textContent = emoji;
  $("result-title").textContent = title;
  $("result-message").textContent = msg;
  $("result-score").textContent = state.score;
  $("result-correct").textContent = state.correct;
  $("result-wrong").textContent = state.wrong;

  showScreen("result");
}

// ============ EVENT DELEGATION ============
document.addEventListener("click", (e) => {
  const actionEl = e.target.closest("[data-action]");
  if (actionEl) {
    const action = actionEl.dataset.action;
    if (action === "go-menu") showScreen("menu");
    else if (action === "go-difficulty") showScreen("difficulty");
    else if (action === "go-instructions") showScreen("instructions");
    else if (action === "go-about") showScreen("about");
    else if (action === "play-again") startGame(state.level);
    return;
  }

  const levelEl = e.target.closest("[data-level]");
  if (levelEl) {
    startGame(levelEl.dataset.level);
  }
});

// Tombol Kembali di dalam Game (Kembali ke Pilih Kesulitan)
document.getElementById("btn-game-back").addEventListener("click", () => {
  // Kembali ke menu pilih kesulitan
  showScreen("difficulty");
});

// ============ BACKSOUND & AUDIO ============
const backsound = document.getElementById("backsound");
const soundToggle = document.getElementById("sound-toggle");
const soundIcon = document.getElementById("sound-icon");
const soundLabel = document.getElementById("sound-label");

let audioStarted = false;

// Volume pelan — nyaman sebagai latar (0.0 – 1.0)
const VOLUME_NORMAL = 0.15;

if (backsound) {
  backsound.volume = VOLUME_NORMAL;
  backsound.muted = false;
}

// Fungsi mulai backsound (hanya sekali, dipicu interaksi user)
function playBacksound() {
  if (!backsound || audioStarted || backsound.muted) return;
  backsound.play()
    .then(() => { audioStarted = true; })
    .catch(() => { /* diblokir browser, abaikan */ });
}

// Fungsi memperbarui tampilan tombol suara
function updateSoundUI() {
  if (!backsound || !soundToggle) return;
  const isOn = !backsound.muted;
  soundIcon.textContent = isOn ? "🔊" : "🔇";
  soundLabel.textContent = isOn ? "Musik: ON" : "Musik: OFF";
  soundToggle.classList.toggle("off", !isOn);
  soundToggle.setAttribute(
    "aria-label",
    isOn ? "Matikan musik" : "Aktifkan musik"
  );
}

// Toggle suara saat tombol diklik
if (soundToggle && backsound) {
  soundToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    backsound.muted = !backsound.muted;
    updateSoundUI();

    // Jika baru di-unmute dan audio belum jalan, coba putar
    if (!backsound.muted && !audioStarted) {
      playBacksound();
    }
  });
}

// Mulai backsound pada interaksi pertama user di mana saja
["click", "touchstart", "keydown"].forEach((evt) => {
  document.addEventListener(evt, playBacksound, { once: true });
});

// Set tampilan awal tombol
updateSoundUI();

// ============ INIT ============
showScreen("menu");