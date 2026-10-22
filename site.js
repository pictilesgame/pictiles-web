// PicTiles website: language (?lang=, remembered choice, then the browser's language) and the page texts.
(function () {
  "use strict";
  var LANGS = ["cs", "en", "de", "es", "pt", "ja"];
  var MAIL = '<a href="mailto:info@pictiles.site">info@pictiles.site</a>';
  var T = {
    cs: {
      pTitle: "PicTiles – hádanka od kamaráda", pEyebrow: "Hádanka od kamaráda", pH1: "Někdo ti poslal hádanku", pLead: "Je to nonogram z jeho fotky. Co je na obrázku, uvidíš, až ho vyřešíš.", pOpenSmall: "Vyřeš ji v", pCode: "Kód hádanky", pCopy: "Zkopírovat kód", pCopied: "Zkopírováno ✓", pHow: "V PicTiles otevři Hádanka z fotky, klepni na „Mám kód nebo odkaz od kamaráda“ a kód vlož.", pMissing: "V tomhle odkazu chybí kód hádanky. Popros kamaráda, ať ti ho pošle znovu.", pNoApp: "Ještě nemáš PicTiles?",
      title: "PicTiles – logická hra nonogram",
      desc: "PicTiles je logická hra nonogram: vybarvuj políčka podle čísel a odhal skrytý obrázek. 1 000 obrázků, barevné hádanky, denní výzva a hádanky z vlastních fotek.",
      eyebrow: "Logická hra nonogram",
      h1: "Odhal obrázek, <em>čtvereček po čtverečku</em>",
      lead: "Čísla u řádků a sloupců říkají, která políčka vybarvit. Stačí trocha logiky a z mřížky se vyloupne obrázek.",
      storeSmall: "Brzy na", storeBig: "Google Play",
      note: "Připravujeme vydání pro Android. Verze pro iPhone může přijít později.",
      featTitle: "Co tě čeká",
      f1t: "1 000 obrázků", f1d: "Ve čtyřech obtížnostech od lehké po extrémní, od 5 × 5 po 20 × 20 políček.",
      f2t: "Barevné hádanky", f2d: "Čísla mají barvy a obrázky jsou ještě pestřejší.",
      f3t: "Denní výzva", f3d: "Každý den nová hádanka: ve všední dny těžká, o víkendu extrémní.",
      f4t: "Hádanka z tvé fotky", f4d: "Udělej hádanku z vlastní fotky a pošli ji kamarádovi. Obrázek uvidí, až ji vyřeší.",
      f5t: "Album, cíle a trofeje", f5d: "Sbírej obrázky podle témat, plň denní cíle a odemykej trofeje.",
      f6t: "Hraj kdekoli", f6d: "Funguje i bez internetu, česky, anglicky, německy, španělsky, portugalsky a japonsky.",
      shotsTitle: "Jak to vypadá", s1: "Vyplňuj podle čísel", s2: "Odhal obrázek", s3: "1 000 levelů",
      faqTitle: "Časté otázky",
      q1: "Je hra zdarma?", a1: "Ano. Hru podporují reklamy a kdo chce, může si je vypnout jednorázovým nákupem.",
      q2: "Potřebuji internet?", a2: "Ne, hra funguje offline. Připojení je potřeba jen pro reklamy a nákupy.",
      q3: "Kdy hra vyjde?", a3: "Připravujeme vydání na Google Play. Verze pro iPhone může přijít později.",
      q4: "Jak vás kontaktovat?", a4: "Napiš nám na " + MAIL + ".",
      operator: "Provozovatel", ico: "IČO", country: "Česká republika", privacy: "Zásady ochrany osobních údajů",
      back: "← Zpět na úvod", privacyTitle: "Zásady ochrany osobních údajů – PicTiles"
    },
    en: {
      pTitle: "PicTiles – a puzzle from a friend", pEyebrow: "A puzzle from a friend", pH1: "Someone sent you a puzzle", pLead: "It's a nonogram made from their photo. You'll see what's in the picture once you solve it.", pOpenSmall: "Solve it in", pCode: "Puzzle code", pCopy: "Copy code", pCopied: "Copied ✓", pHow: "In PicTiles, open Photo puzzle, tap “I have a code or link from a friend” and paste the code.", pMissing: "The puzzle code is missing from this link. Ask your friend to send it again.", pNoApp: "Don't have PicTiles yet?",
      title: "PicTiles – nonogram puzzle game",
      desc: "PicTiles is a nonogram puzzle game: fill in squares by the numbers and reveal the hidden picture. 1,000 pictures, colour puzzles, a daily challenge and puzzles from your own photos.",
      eyebrow: "Nonogram puzzle game",
      h1: "Reveal the picture, <em>square by square</em>",
      lead: "The numbers next to each row and column tell you which squares to fill. A little logic, and a picture pops out of the grid.",
      storeSmall: "Coming soon on", storeBig: "Google Play",
      note: "We're preparing the Android release. An iPhone version may follow later.",
      featTitle: "What's inside",
      f1t: "1,000 pictures", f1d: "Four difficulties from easy to extreme, from 5 × 5 to 20 × 20 squares.",
      f2t: "Colour puzzles", f2d: "The numbers come in colours, and the pictures get even brighter.",
      f3t: "Daily challenge", f3d: "A new puzzle every day: hard on weekdays, extreme at weekends.",
      f4t: "A puzzle from your photo", f4d: "Turn your own photo into a puzzle and send it to a friend. They see the picture once they solve it.",
      f5t: "Album, goals and trophies", f5d: "Collect pictures by theme, complete daily goals and unlock trophies.",
      f6t: "Play anywhere", f6d: "Works offline, in English, Czech, German, Spanish, Portuguese and Japanese.",
      shotsTitle: "Have a look", s1: "Fill in by the numbers", s2: "Reveal the picture", s3: "1,000 levels",
      faqTitle: "FAQ",
      q1: "Is the game free?", a1: "Yes. It's supported by ads, and you can turn them off with a one-time purchase.",
      q2: "Do I need the internet?", a2: "No, the game works offline. A connection is only needed for ads and purchases.",
      q3: "When does it come out?", a3: "We're preparing the release on Google Play. An iPhone version may follow later.",
      q4: "How can I contact you?", a4: "Write to us at " + MAIL + ".",
      operator: "Operator", ico: "Company ID (IČO)", country: "Czech Republic", privacy: "Privacy policy",
      back: "← Back to the home page", privacyTitle: "Privacy policy – PicTiles"
    },
    de: {
      pTitle: "PicTiles – ein Rätsel von einem Freund", pEyebrow: "Rätsel von einem Freund", pH1: "Jemand hat dir ein Rätsel geschickt", pLead: "Es ist ein Nonogramm aus seinem Foto. Was darauf ist, siehst du, sobald du es gelöst hast.", pOpenSmall: "Löse es in", pCode: "Rätselcode", pCopy: "Code kopieren", pCopied: "Kopiert ✓", pHow: "Öffne in PicTiles „Rätsel aus Foto“, tippe auf „Ich habe einen Code oder Link“ und füge den Code ein.", pMissing: "In diesem Link fehlt der Rätselcode. Bitte deinen Freund, ihn noch einmal zu schicken.", pNoApp: "Du hast PicTiles noch nicht?",
      title: "PicTiles – Nonogramm-Rätselspiel",
      desc: "PicTiles ist ein Nonogramm-Rätselspiel: Felder nach Zahlen ausfüllen und das versteckte Bild aufdecken. 1.000 Bilder, Farbrätsel, ein Tagesrätsel und Rätsel aus eigenen Fotos.",
      eyebrow: "Nonogramm-Rätselspiel",
      h1: "Deck das Bild auf, <em>Feld für Feld</em>",
      lead: "Die Zahlen an jeder Zeile und Spalte verraten, welche Felder du ausfüllst. Ein bisschen Logik, und aus dem Raster taucht ein Bild auf.",
      storeSmall: "Bald bei", storeBig: "Google Play",
      note: "Wir bereiten die Android-Version vor. Eine iPhone-Version kann später folgen.",
      featTitle: "Was dich erwartet",
      f1t: "1.000 Bilder", f1d: "Vier Schwierigkeitsstufen von leicht bis extrem, von 5 × 5 bis 20 × 20 Feldern.",
      f2t: "Farbrätsel", f2d: "Die Zahlen haben Farben, und die Bilder werden noch bunter.",
      f3t: "Tagesrätsel", f3d: "Jeden Tag ein neues Rätsel: werktags schwer, am Wochenende extrem.",
      f4t: "Ein Rätsel aus deinem Foto", f4d: "Mach aus deinem Foto ein Rätsel und schick es einem Freund. Das Bild sieht er erst, wenn er es gelöst hat.",
      f5t: "Album, Ziele und Trophäen", f5d: "Sammle Bilder nach Themen, erfülle Tagesziele und schalte Trophäen frei.",
      f6t: "Spiel überall", f6d: "Funktioniert offline, auf Deutsch, Englisch, Tschechisch, Spanisch, Portugiesisch und Japanisch.",
      shotsTitle: "So sieht es aus", s1: "Nach Zahlen ausfüllen", s2: "Das Bild aufdecken", s3: "1.000 Level",
      faqTitle: "Häufige Fragen",
      q1: "Ist das Spiel kostenlos?", a1: "Ja. Es wird durch Werbung finanziert, die du mit einem einmaligen Kauf abschalten kannst.",
      q2: "Brauche ich Internet?", a2: "Nein, das Spiel funktioniert offline. Eine Verbindung braucht es nur für Werbung und Käufe.",
      q3: "Wann erscheint das Spiel?", a3: "Wir bereiten die Veröffentlichung bei Google Play vor. Eine iPhone-Version kann später folgen.",
      q4: "Wie erreiche ich euch?", a4: "Schreib uns an " + MAIL + ".",
      operator: "Betreiber", ico: "Unternehmens-ID (IČO)", country: "Tschechische Republik", privacy: "Datenschutzerklärung",
      back: "← Zurück zur Startseite", privacyTitle: "Datenschutzerklärung – PicTiles"
    },
    es: {
      pTitle: "PicTiles – un puzle de un amigo", pEyebrow: "Puzle de un amigo", pH1: "Alguien te ha enviado un puzle", pLead: "Es un nonograma hecho con su foto. Verás lo que hay en la imagen cuando lo resuelvas.", pOpenSmall: "Resuélvelo en", pCode: "Código del puzle", pCopy: "Copiar código", pCopied: "Copiado ✓", pHow: "En PicTiles, abre Puzle de foto, toca «Tengo un código o enlace de un amigo» y pega el código.", pMissing: "A este enlace le falta el código del puzle. Pide a tu amigo que te lo envíe de nuevo.", pNoApp: "¿Aún no tienes PicTiles?",
      title: "PicTiles – juego de nonogramas",
      desc: "PicTiles es un juego de nonogramas: rellena casillas siguiendo los números y descubre la imagen oculta. 1000 imágenes, puzles de colores, un reto diario y puzles con tus propias fotos.",
      eyebrow: "Juego de nonogramas",
      h1: "Descubre la imagen, <em>casilla a casilla</em>",
      lead: "Los números de cada fila y columna te dicen qué casillas rellenar. Un poco de lógica y del tablero surge una imagen.",
      storeSmall: "Muy pronto en", storeBig: "Google Play",
      note: "Estamos preparando la versión para Android. Más adelante puede llegar la de iPhone.",
      featTitle: "Qué te espera",
      f1t: "1000 imágenes", f1d: "Cuatro dificultades, de fácil a extremo, de 5 × 5 a 20 × 20 casillas.",
      f2t: "Puzles de colores", f2d: "Los números tienen colores y las imágenes son aún más vistosas.",
      f3t: "Reto diario", f3d: "Un puzle nuevo cada día: difícil entre semana, extremo el fin de semana.",
      f4t: "Un puzle con tu foto", f4d: "Convierte tu foto en un puzle y envíaselo a un amigo. Verá la imagen cuando lo resuelva.",
      f5t: "Álbum, objetivos y trofeos", f5d: "Colecciona imágenes por temas, cumple objetivos diarios y desbloquea trofeos.",
      f6t: "Juega donde quieras", f6d: "Funciona sin conexión, en español, inglés, checo, alemán, portugués y japonés.",
      shotsTitle: "Así se ve", s1: "Rellena según los números", s2: "Descubre la imagen", s3: "1000 niveles",
      faqTitle: "Preguntas frecuentes",
      q1: "¿El juego es gratis?", a1: "Sí. Se financia con anuncios, que puedes quitar con una compra única.",
      q2: "¿Necesito internet?", a2: "No, el juego funciona sin conexión. Solo hace falta para los anuncios y las compras.",
      q3: "¿Cuándo sale?", a3: "Estamos preparando el lanzamiento en Google Play. Más adelante puede llegar la versión para iPhone.",
      q4: "¿Cómo puedo contactaros?", a4: "Escríbenos a " + MAIL + ".",
      operator: "Responsable", ico: "N.º de empresa (IČO)", country: "República Checa", privacy: "Política de privacidad",
      back: "← Volver al inicio", privacyTitle: "Política de privacidad – PicTiles"
    },
    pt: {
      pTitle: "PicTiles – um quebra-cabeça de um amigo", pEyebrow: "Quebra-cabeça de um amigo", pH1: "Alguém te enviou um quebra-cabeça", pLead: "É um nonograma feito com a foto dessa pessoa. Você vai ver o que tem na imagem quando resolver.", pOpenSmall: "Resolva no", pCode: "Código do quebra-cabeça", pCopy: "Copiar código", pCopied: "Copiado ✓", pHow: "No PicTiles, abra Quebra-cabeça de foto, toque em “Tenho um código ou link de um amigo” e cole o código.", pMissing: "Este link está sem o código do quebra-cabeça. Peça ao seu amigo para enviar de novo.", pNoApp: "Ainda não tem o PicTiles?",
      title: "PicTiles – jogo de nonogramas",
      desc: "PicTiles é um jogo de nonogramas: preencha os quadrados seguindo os números e revele a imagem escondida. 1.000 imagens, quebra-cabeças coloridos, um desafio diário e quebra-cabeças com suas próprias fotos.",
      eyebrow: "Jogo de nonogramas",
      h1: "Revele a imagem, <em>quadrado por quadrado</em>",
      lead: "Os números de cada linha e coluna dizem quais quadrados preencher. Um pouco de lógica e uma imagem surge da grade.",
      storeSmall: "Em breve no", storeBig: "Google Play",
      note: "Estamos preparando a versão para Android. Uma versão para iPhone pode vir depois.",
      featTitle: "O que você vai encontrar",
      f1t: "1.000 imagens", f1d: "Quatro dificuldades, de fácil a extremo, de 5 × 5 a 20 × 20 quadrados.",
      f2t: "Quebra-cabeças coloridos", f2d: "Os números têm cores e as imagens ficam ainda mais vivas.",
      f3t: "Desafio diário", f3d: "Um quebra-cabeça novo todo dia: difícil durante a semana, extremo no fim de semana.",
      f4t: "Um quebra-cabeça da sua foto", f4d: "Transforme sua foto em um quebra-cabeça e envie para um amigo. Ele vê a imagem quando resolver.",
      f5t: "Álbum, metas e troféus", f5d: "Colecione imagens por tema, cumpra metas diárias e desbloqueie troféus.",
      f6t: "Jogue onde quiser", f6d: "Funciona offline, em português, inglês, tcheco, alemão, espanhol e japonês.",
      shotsTitle: "Veja como é", s1: "Preencha pelos números", s2: "Revele a imagem", s3: "1.000 níveis",
      faqTitle: "Perguntas frequentes",
      q1: "O jogo é grátis?", a1: "Sim. Ele é mantido por anúncios, que você pode remover com uma compra única.",
      q2: "Preciso de internet?", a2: "Não, o jogo funciona offline. A conexão só é necessária para anúncios e compras.",
      q3: "Quando o jogo sai?", a3: "Estamos preparando o lançamento no Google Play. Uma versão para iPhone pode vir depois.",
      q4: "Como falo com vocês?", a4: "Escreva para " + MAIL + ".",
      operator: "Responsável", ico: "ID da empresa (IČO)", country: "República Tcheca", privacy: "Política de privacidade",
      back: "← Voltar ao início", privacyTitle: "Política de privacidade – PicTiles"
    },
    ja: {
      pTitle: "PicTiles – 友だちからのパズル", pEyebrow: "友だちからのパズル", pH1: "パズルが届きました", pLead: "友だちの写真から作ったお絵かきロジックです。何の絵かは、解いたときにわかります。", pOpenSmall: "解くなら", pCode: "パズルのコード", pCopy: "コードをコピー", pCopied: "コピーしました ✓", pHow: "PicTilesで「写真パズル」を開き、「友だちのコードやリンクがある」をタップしてコードを貼り付けてください。", pMissing: "このリンクにはパズルのコードがありません。友だちにもう一度送ってもらってください。", pNoApp: "まだPicTilesを持っていませんか？",
      title: "PicTiles – ノノグラム（お絵かきロジック）パズル",
      desc: "PicTilesはノノグラムパズルゲームです。数字をヒントにマスを塗って、隠れた絵を完成させましょう。1000枚の絵、カラーパズル、デイリーチャレンジ、自分の写真からつくるパズル。",
      eyebrow: "ノノグラム パズルゲーム",
      h1: "数字をヒントに、<em>絵を完成させよう</em>",
      lead: "行と列の数字が、どのマスを塗るかを教えてくれます。ちょっとしたロジックで、マス目から絵が浮かび上がります。",
      storeSmall: "Google Play", storeBig: "近日公開",
      note: "Android版のリリースを準備中です。iPhone版は後日公開されるかもしれません。",
      featTitle: "ゲームの特徴",
      f1t: "1000枚の絵", f1d: "かんたんから超むずかしいまで4段階。5 × 5から20 × 20マスまで。",
      f2t: "カラーパズル", f2d: "数字に色がついていて、絵がもっとカラフルに。",
      f3t: "デイリーチャレンジ", f3d: "毎日新しいパズル。平日はむずかしい、週末は超むずかしい。",
      f4t: "写真からパズル", f4d: "自分の写真をパズルにして友だちに送れます。解くまで絵は見えません。",
      f5t: "アルバム・目標・トロフィー", f5d: "テーマごとに絵を集めて、デイリー目標を達成し、トロフィーを手に入れよう。",
      f6t: "どこでも遊べる", f6d: "オフラインでもOK。日本語、英語、チェコ語、ドイツ語、スペイン語、ポルトガル語に対応。",
      shotsTitle: "ゲーム画面", s1: "数字にそって塗る", s2: "絵が完成", s3: "1000レベル",
      faqTitle: "よくある質問",
      q1: "無料で遊べますか？", a1: "はい。広告で運営しています。広告は1回の購入で消せます。",
      q2: "インターネットは必要ですか？", a2: "いいえ、オフラインで遊べます。広告と購入のときだけ接続が必要です。",
      q3: "いつリリースされますか？", a3: "Google Playでのリリースを準備中です。iPhone版は後日公開されるかもしれません。",
      q4: "お問い合わせ", a4: MAIL + " までご連絡ください。",
      operator: "運営者", ico: "事業者番号（IČO）", country: "チェコ共和国", privacy: "プライバシーポリシー",
      back: "← トップページへ", privacyTitle: "プライバシーポリシー – PicTiles"
    }
  };

  function pick() {
    var q = (location.search.match(/[?&]lang=([a-z]{2})/) || [])[1];
    if (q && LANGS.indexOf(q) >= 0) return q;
    try { var s = localStorage.getItem("pictiles.lang"); if (s && LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var list = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"]);
    for (var i = 0; i < list.length; i++) {
      var l = String(list[i]).toLowerCase().slice(0, 2);
      if (l === "sk") return "cs";
      if (LANGS.indexOf(l) >= 0) return l;
    }
    return "en";
  }

  function apply(lang) {
    var t = T[lang] || T.en, doc = document.documentElement;
    doc.lang = lang;
    var page = doc.getAttribute("data-page") || "home";
    document.title = page === "privacy" ? t.privacyTitle : page === "puzzle" ? t.pTitle : t.title;
    var md = document.querySelector('meta[name="description"]');
    if (md && page === "home") md.setAttribute("content", t.desc);
    document.querySelectorAll("[data-t]").forEach(function (el) { var k = el.getAttribute("data-t"); if (t[k] != null) el.textContent = t[k]; });
    document.querySelectorAll("[data-html]").forEach(function (el) { var k = el.getAttribute("data-html"); if (t[k] != null) el.innerHTML = t[k]; });
    document.querySelectorAll("img[data-shot]").forEach(function (img) {
      img.src = "img/" + img.getAttribute("data-shot") + "-" + lang + ".webp";
      var a = img.getAttribute("data-alt");
      if (a && t[a]) img.alt = t[a];
    });
    // the privacy page holds one article per language
    var arts = document.querySelectorAll("article[lang]");
    if (arts.length) arts.forEach(function (a) { a.hidden = a.getAttribute("lang") !== lang; });
    document.querySelectorAll("a[data-keep-lang]").forEach(function (a) {
      var base = a.getAttribute("href").split("?")[0];
      a.setAttribute("href", base + "?lang=" + lang);
    });
    var cp = document.getElementById("copy");
    if (cp) { cp.setAttribute("data-done", t.pCopied); if (cp.classList.contains("done")) cp.textContent = t.pCopied; }
    var sel = document.getElementById("langSel");
    if (sel) sel.value = lang;
    doc.classList.remove("pending");
  }

  var lang = pick();
  apply(lang);
  var sel = document.getElementById("langSel");
  if (sel) sel.addEventListener("change", function () {
    lang = sel.value;
    try { localStorage.setItem("pictiles.lang", lang); } catch (e) {}
    if (history.replaceState) history.replaceState(null, "", location.pathname + "?lang=" + lang + location.hash);
    apply(lang);
  });
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
