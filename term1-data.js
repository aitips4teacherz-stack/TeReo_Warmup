// ═══════════════════════════════════════════════════════════════
// Te Reo Māori Warm-Up — TERM 1 lesson data
// Weeks 1–10 · All CURRICULUM and FRIDAY_QUIZ objects for Term 1
// Edit only this file to update Term 1 lesson content.
// ═══════════════════════════════════════════════════════════════

const CURRICULUM_W1 = {
  Monday: {
    topic:'Ngā mihi me ngā kupu hou',
    nzLink:'Te Aho Arataki Marau — AO 1.1: Greet, farewell and acknowledge people · AO 1.6: Politeness conventions',
    aos:[{code:'AO 1.1',label:'Greetings &amp; farewell'},{code:'AO 1.6',label:'Politeness conventions'}],
    iDo:{
      title:'Tāua Kōrero — Listen & discover',
      instruction:'Today we are going to learn our very first words in te reo Māori. I am going to say some words and phrases, and I want you to just listen and notice the sounds. There is nothing to write down — just watch and listen.',
      example:`<b>Kia ora</b> — Hello / Thank you<br><b>Tēnā koe</b> — Hello (formal, to one person)<br><b>Kei te pēhea koe?</b> — How are you?<br><b>Kei te pai au</b> — I am good<br><b>E noho rā</b> — Goodbye (to someone staying)<br><b>Hei konā rā</b> — Goodbye (casual)`,
      demo:`Notice the vowels. In te reo Māori, every vowel makes only ONE sound — always:\n\n<b>A</b> = "ah"  ·  <b>E</b> = "eh"  ·  <b>I</b> = "ee"  ·  <b>O</b> = "oh"  ·  <b>U</b> = "oo"\n\nSay "Kia ora" — KIA = "kee-ah", ORA = "oh-rah". Kia ora. Simple, consistent, beautiful.`,
      tip:'The vowel sounds never change. Once you know them, you can pronounce any Māori word. That\'s a superpower.',
    },
    weDo:{
      title:'Kia Tūhono — Build together',
      instruction:'Let\'s practise these greetings together. I will say the Māori — you say it back. Then we will figure out when you would use each one.',
      sentences:[
        '<b>Kia ora</b> — When would you say this? (casual hello or thank you)',
        '<b>Tēnā koe</b> — This is more formal. When might a student use it? (to a teacher, elder, or visitor)',
        '<b>Kei te pēhea koe?</b> — Break it apart: Kei te = right now, pēhea = how, koe = you. Put it together!',
        '<b>Kei te pai au</b> — kei te = right now, pai = good, au = I/me. Say it: "Right now good I."',
      ],
      prompt:'Which greeting would you use for your best friend? Which for the school principal? Why does te reo have different words for this?',
    },
    youDo:{
      title:'Māu Anō — Your turn',
      instruction:'Practise saying these out loud — alone or with a partner. Then try the written challenges.',
      tasks:[
        'Say <b>Kia ora</b> to three different people in the room right now.',
        'Your teacher walks in. Which greeting do you use? Say it aloud: <b>Tēnā koe</b>.',
        'Someone asks <b>Kei te pēhea koe?</b> — how do you reply? Write and say your answer.',
        '✦ Bonus: Teach the five vowel sounds to a partner. Can they say <b>Tēnā koe</b> perfectly?',
      ],
    },
  },
  Tuesday: {
    topic:'Ko wai koe? Ko wai au.',
    nzLink:'Te Aho Arataki Marau — AO 1.2: Introduce self and others · AO 1.4: Personal information (name)',
    aos:[{code:'AO 1.2',label:'Introductions'},{code:'AO 1.4',label:'Personal information'}],
    iDo:{
      title:'Tāua Kōrero — Watch & discover',
      instruction:'Yesterday we learned how to greet someone. Today we learn how to tell people who we are. In te reo Māori, there is a special word we use when we identify or name something. Watch how it works.',
      example:`<b>Ko</b> Aroha <b>tōku ingoa</b>.<br>= My name is Aroha.<br><br><b>Ko</b> wai <b>tōu ingoa?</b><br>= What is your name?<br><br><b>Ko</b> Wiremu <b>tōna ingoa</b>.<br>= His/her name is Wiremu.`,
      demo:`The word <b>Ko</b> is used whenever we are saying what something <b>IS</b> — its identity or name.\n\nThe pattern is simple:\n<b>Ko</b> + [name] + [whose] + <b>ingoa</b>\n\n"Ingoa" means "name". "Tōku" = my. "Tōu" = your. "Tōna" = his or her.\n\nNotice: te reo Māori does NOT have separate words for "he" and "she". Tōna covers both.`,
      tip:'Ko is like a pointer — it points at what something IS. Ko = "it is" or "my name is."',
    },
    weDo:{
      title:'Kia Tūhono — Build together',
      instruction:'Let\'s build Ko sentences together. I will give you the pieces — you put them in the right order.',
      sentences:[
        'How would you say "My name is [your name]"? What are the pieces? Ko + [your name] + tōku + ingoa',
        'How would you ask someone their name? Remember: "wai" means "who/what". Ko wai tōu ingoa?',
        'Your friend\'s name is Hana. How would you tell someone her name? Ko Hana tōna ingoa.',
        'Now put it all together — greet someone AND introduce yourself: <b>Kia ora. Ko [name] tōku ingoa.</b>',
      ],
      prompt:'Why do you think te reo Māori uses Ko rather than just saying "my name is"? What does it feel like to say your name this way?',
    },
    youDo:{
      title:'Māu Anō — Your turn',
      instruction:'Use the Ko structure to introduce yourself — written or spoken.',
      tasks:[
        'Write: <b>Ko [your name] tōku ingoa.</b> Say it aloud.',
        'Ask the person next to you their name using <b>Ko wai tōu ingoa?</b> Then introduce them to someone else.',
        'Write three Ko sentences: your name, a friend\'s name, your teacher\'s name.',
        '✦ Bonus: Add a greeting. Write a two-sentence introduction: hello + your name. Practise saying it smoothly.',
      ],
    },
  },
  Wednesday: {
    topic:'Kei te haere au — I am going',
    nzLink:'Te Aho Arataki Marau — AO 1.5: Communicate about location · AO 2.5: Physical characteristics and feelings',
    aos:[{code:'AO 1.5',label:'Location &amp; movement'},{code:'AO 2.5',label:'Feelings &amp; states'}],
    iDo:{
      title:'Tāua Kōrero — Watch & discover',
      instruction:'So far we have learned how to greet people and say our names. Now we are going to learn how to talk about what is happening RIGHT NOW. Watch how te reo Māori builds a present-tense sentence.',
      example:`<b>Kei te</b> haere <b>au</b>.<br>= I am going.<br><br><b>Kei te</b> kai <b>koe</b>.<br>= You are eating.<br><br><b>Kei te</b> moe <b>ia</b>.<br>= He/she is sleeping.`,
      demo:`The pattern for right-now actions is always:\n\n<b>Kei te</b> + [action word] + [person]\n\n"Kei te" is like "-ing" in English — it shows the action is happening NOW.\n\nAction words: <b>haere</b> = go/going · <b>kai</b> = eat/eating · <b>moe</b> = sleep/sleeping\n\nPeople: <b>au</b> = I/me · <b>koe</b> = you · <b>ia</b> = he/she`,
      tip:'In te reo Māori, the action comes FIRST, then the person. "Is-going I" not "I am going." The structure is always Time/Action → Action word → Person.',
    },
    weDo:{
      title:'Kia Tūhono — Build together',
      instruction:'Use the Kei te structure to build these sentences together. I will give you the pieces — you put them in order.',
      sentences:[
        'How do you say "I am eating"? Pieces: Kei te · kai · au → <b>Kei te kai au.</b>',
        'How do you say "She is sleeping"? Pieces: Kei te · moe · ia → <b>Kei te moe ia.</b>',
        'How do you say "You are going"? Pieces: Kei te · haere · koe → <b>Kei te haere koe.</b>',
        'Now say all three out loud one after another — notice how the structure never changes, only the action word and person swap.',
      ],
      prompt:'The structure Kei te + action + person never changes. How is that different from English, where we change "I go / she goes"? Which feels easier?',
    },
    youDo:{
      title:'Māu Anō — Your turn',
      instruction:'Build your own Kei te sentences using the words you have learned.',
      tasks:[
        'Write and say: <b>Kei te kai au.</b> Now swap to "you" — Kei te kai koe.',
        'Use <b>haere</b> (going) in three sentences — one for au, one for koe, one for ia.',
        'Look around the room. What are people doing? Write one Kei te sentence about what a classmate is doing.',
        '✦ Bonus: Can you invent a sentence using a new action? Try <b>kōrero</b> (speaking) or <b>noho</b> (sitting).',
      ],
    },
  },
  Thursday: {
    topic:'He aha tēnā? Kōrero!',
    nzLink:'Te Aho Arataki Marau — AO 1.1: Greetings · AO 1.2: Introductions · AO 1.6: Politeness conventions',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 1.2',label:'Introductions'},{code:'AO 1.6',label:'Politeness'}],
    iDo:{
      title:'Tāua Kōrero — Watch & discover',
      instruction:'Today we put everything together into a real conversation. Watch me roleplay a full exchange — from greeting to introducing to asking what someone is doing.',
      example:`<b>A:</b> Kia ora! Ko wai tōu ingoa?<br><b>B:</b> Ko Mere tōku ingoa. Ko wai tōu?<br><b>A:</b> Ko Tama tōku ingoa. Kei te pēhea koe?<br><b>B:</b> Kei te pai au, kia ora. Kei te aha koe?<br><b>A:</b> Kei te haere au ki te kura.<br><b>B:</b> Āe! Hei konā rā.<br><b>A:</b> Hei konā rā!`,
      demo:`New phrase: <b>Kei te aha koe?</b> — What are you doing?\n<b>Aha</b> = what. So "Kei te aha koe?" literally means "Right now what you?" → "What are you doing?"\n\nNew phrase: <b>ki te kura</b> — to school (<b>ki</b> = to, <b>kura</b> = school)\n\nNew word: <b>Āe</b> — Yes!\n\nYou now have everything you need for a genuine short conversation in te reo Māori.`,
      tip:'A real conversation has a rhythm: greet → introduce → ask → answer → farewell. Once you know the pattern, you just swap in the pieces.',
    },
    weDo:{
      title:'Kia Tūhono — Practise together',
      instruction:'Let\'s build the conversation step by step as a class. I will be Person A — you are Person B. We go slowly and swap roles.',
      sentences:[
        'I say: <b>Kia ora!</b> — You reply with a greeting and ask my name.',
        'I tell you my name is Rangi. You introduce yourself. Then ask: <b>Kei te pēhea koe?</b>',
        'I say: <b>Kei te pai au.</b> Now ask me what I am doing: <b>Kei te aha koe?</b>',
        'I say I am going to school. How do you say goodbye? Use <b>Hei konā rā</b> or <b>E noho rā</b>.',
      ],
      prompt:'Which part of the conversation felt most natural? Which part do you want more practice with? What other things might you want to say that we haven\'t learned yet?',
    },
    youDo:{
      title:'Māu Anō — Your turn',
      instruction:'With a partner, have a full conversation using only te reo Māori. Use every structure from this week.',
      tasks:[
        'With a partner: greet each other using <b>Kia ora</b> or <b>Tēnā koe</b>.',
        'Introduce yourselves using <b>Ko [name] tōku ingoa</b>. Ask each other\'s names.',
        'Ask <b>Kei te pēhea koe?</b> and answer <b>Kei te pai au</b>.',
        '✦ Bonus: Add <b>Kei te aha koe?</b> and answer with a Kei te sentence. Try to have a 6-line conversation entirely in te reo!',
      ],
    },
  },
}

const FRIDAY_QUIZ_W1 = [
  {day:'Monday',  q:'Kei te pēhea koe? — What does this mean?',options:['Where are you going?','How are you?','What is your name?','Are you good?'],correct:1},
  {day:'Monday',  q:'Which vowel rule is correct for te reo Māori?',options:['Vowels change depending on surrounding letters','Each vowel has only one fixed sound, always','Vowels are usually silent at the end of a word','Only "a" and "e" have consistent sounds'],correct:1},
  {day:'Tuesday', q:'"Ko Hana tōna ingoa." What does this mean?',options:['Ko is her greeting word','Her name is Hana','Hana\'s name is different','Hana says hello'],correct:1},
  {day:'Tuesday', q:'How do you say "What is your name?" in te reo Māori?',options:['Ko wai tōku ingoa?','Ko wai tōna ingoa?','Ko wai tōu ingoa?','Ko tōu wai ingoa?'],correct:2},
  {day:'Wednesday',q:'"Kei te moe ia." The word "ia" means:',options:['I / me','you','he or she','going'],correct:2},
  {day:'Wednesday',q:'What is the correct order for a present-tense sentence in te reo Māori?',options:['Person → Kei te → action','Action → Kei te → person','Kei te → person → action','Kei te → action → person'],correct:3},
  {day:'Thursday', q:'"Kei te aha koe?" — What does this question ask?',options:['How are you?','Where are you going?','What are you doing?','Who are you?'],correct:2},
  {day:'Thursday', q:'Which phrase means "Goodbye" to someone who is leaving?',options:['Kia ora','E noho rā','Hei konā rā','Tēnā koe'],correct:2},
]

const CURRICULUM_W2 = {
  Monday: {
    topic:'Ngā kupu hou — Kīnaki me ngā kai',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Communicate about number · AO 2.5: Physical characteristics and feelings (food/taste)',
    aos:[{code:'AO 1.3',label:'Number &amp; quantity'},{code:'AO 2.5',label:'Feelings &amp; taste'}],
    iDo:{
      title:'Tāua Kōrero — Commas in lists and new food vocabulary',
      instruction:'This week we are building our vocabulary for food and drink — kupu pai mō te kai me te inu. We are also going to learn how to say lists of things in te reo Māori. Listen carefully to how we join words together.',
      example:`<b>He āporo</b> — an apple<br><b>He panana</b> — a banana<br><b>He tōmate</b> — a tomato<br><b>He parāoa</b> — bread<br><b>He miraka</b> — milk<br><b>He wai</b> — water<br><b>He tī</b> — tea<br><b>He inu kōhua</b> — hot drink / coffee`,
      demo:`In te reo Māori, when we list things, we simply say them one after another — no word for "and" needed in a basic list:\n\n<b>He āporo, he panana, he tōmate.</b>\nAn apple, a banana, a tomato.\n\nBut when we want to say "and also" to add something extra, we use <b>me</b>:\n\n<b>He āporo me he panana.</b>\nAn apple and a banana.\n\nAnd to say "I want" something, we combine what you already know:\n<b>Kei te hiahia au ki te kai i te āporo.</b>\nI want to eat the apple.`,
      tip:'Me = and (joining two things). In a list of three or more, you can just list them — no joining word needed until the last item.',
    },
    weDo:{
      title:'Kia Tūhono — Build food lists together',
      instruction:'Let\'s practise the new food words and build some lists. I will show you the items — you say them in te reo.',
      sentences:[
        'Look at these three things: an apple, bread, water. How do you say them as a list? <b>He āporo, he parāoa, he wai.</b>',
        'Now say: "I want to drink the water." Use Kei te hiahia + ki te inu + i te wai → <b>Kei te hiahia au ki te inu i te wai.</b>',
        'Add me to join two things: "milk and tea" → <b>He miraka me he tī.</b>',
        'Now put it together: "I want bread and milk." → <b>Kei te hiahia au ki te kai i te parāoa me te miraka.</b>',
      ],
      prompt:'Which of these food words sound similar to the English word? Why do you think that is? What does this tell us about how languages borrow from each other?',
    },
    youDo:{
      title:'Māu Anō — Your turn with food words',
      instruction:'Use the new vocabulary to build your own sentences about food and drink.',
      tasks:[
        'Write a list of three foods you like using <b>He… me he… me he…</b>',
        'Say what you want to eat right now: <b>Kei te hiahia au ki te kai i te…</b>',
        'Ask a partner what they want to drink: <b>Kei te hiahia koe ki te inu i te aha?</b>',
        '✦ Bonus: Can you say five food words from memory without looking? Write them with their English meanings.',
      ],
    },
  },
  Tuesday: {
    topic:'He aha tēnei? He aha tērā? — This and that',
    nzLink:'Te Aho Arataki Marau — AO 1.2: Introduce self and others · AO 2.5: Physical descriptions — He structure with demonstratives',
    aos:[{code:'AO 1.2',label:'Introductions &amp; identity'},{code:'AO 2.5',label:'Descriptions — He structure'}],
    iDo:{
      title:'Tāua Kōrero — Demonstratives: tēnei, tēnā, tērā',
      instruction:'You already know He — "it is a…". Today we add pointer words so we can say THIS thing or THAT thing. Watch how they work.',
      example:`<b>tēnei</b> — this (near me)<br><b>tēnā</b> — that (near you)<br><b>tērā</b> — that (over there, away from both of us)<br><br><b>He aha tēnei?</b> — What is this?<br><b>He āporo tēnei.</b> — This is an apple.<br><b>He aha tēnā?</b> — What is that (near you)?<br><b>He parāoa tēnā.</b> — That is bread.<br><b>He aha tērā?</b> — What is that over there?<br><b>He kura tērā.</b> — That is a school.`,
      demo:`The three pointer words work just like "this" and "that" in English — they tell us HOW FAR AWAY the thing is.\n\n<b>tēnei</b> — near ME (the speaker)\n<b>tēnā</b> — near YOU (the listener)\n<b>tērā</b> — away from BOTH of us\n\nThey slot into your He sentence at the end, after the noun:\n<b>He [noun] tēnei/tēnā/tērā.</b>\n\nAnd the question is always: <b>He aha</b> + the pointer word.`,
      tip:'Think of tēnei/tēnā/tērā as three distances: HERE · THERE · WAY OVER THERE. They work the same way every time.',
    },
    weDo:{
      title:'Kia Tūhono — Point and describe together',
      instruction:'I will point at things in the room. You tell me what they are in te reo using tēnei, tēnā, or tērā.',
      sentences:[
        'I hold up a pencil near me. You ask: <b>He aha tēnā?</b> I answer: <b>He pene tēnā.</b> (pene = pencil)',
        'Something is on the far wall. How do you ask? → <b>He aha tērā?</b> How might you answer if it is a window (matapihi)? → <b>He matapihi tērā.</b>',
        'You hold something. I ask <b>He aha tēnā?</b> You answer with a food word from Monday. Try it!',
        'Now add an adjective: "This is a big apple." → <b>He āporo nui tēnei.</b> Remember — adjective comes AFTER the noun.',
      ],
      prompt:'What is the difference between tēnā and tērā? If you had to explain it to a younger student, how would you describe it?',
    },
    youDo:{
      title:'Māu Anō — Point and say',
      instruction:'Walk around the room (or look around) and describe what you see using tēnei, tēnā, tērā.',
      tasks:[
        'Write three sentences about things near you using <b>He [noun] tēnei.</b>',
        'Write two sentences about things near your partner using <b>He [noun] tēnā.</b>',
        'Ask a partner <b>He aha tēnā?</b> about something they are holding. They answer in te reo.',
        '✦ Bonus: Add an adjective to each of your sentences. E.g. <b>He pene hou tēnei.</b> (This is a new pencil.)',
      ],
    },
  },
  Wednesday: {
    topic:'Expanding with adjectives — He [noun] [adjective] tēnei',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Communicate about physical characteristics · Grammar Level 1–2: He + noun + adjective',
    aos:[{code:'AO 2.5',label:'Physical descriptions'},{code:'AO 1.6',label:'Politeness &amp; classroom language'}],
    iDo:{
      title:'Tāua Kōrero — Building richer descriptions',
      instruction:'You now have He, demonstratives, and adjectives. Today we combine them all into full, rich descriptions. Watch how a simple sentence grows.',
      example:`<b>He āporo.</b><br>An apple.<br><br><b>He āporo tēnei.</b><br>This is an apple.<br><br><b>He āporo whero tēnei.</b><br>This is a red apple.<br><br><b>He āporo whero nui tēnei.</b><br>This is a big red apple.<br><br><b>Kei te hiahia au ki te kai i tēnei āporo whero nui.</b><br>I want to eat this big red apple.`,
      demo:`Notice how we can stack adjectives after the noun:\n<b>He āporo [whero] [nui] tēnei.</b>\n\nColour words you now know:\n<b>whero</b> = red · <b>kōwhai</b> = yellow · <b>kākāriki</b> = green\n<b>kikorangi</b> = blue · <b>mā</b> = white · <b>mangu</b> = black\n\nAnd that final sentence shows something powerful — you can plug your whole He description into a Kei te hiahia sentence as the object. The building blocks connect.`,
      tip:'Noun first, then adjectives — always. You can have two or three adjectives, just keep stacking them after the noun.',
    },
    weDo:{
      title:'Kia Tūhono — Grow the sentence together',
      instruction:'Start with a bare noun and keep adding — I will prompt you for each piece.',
      sentences:[
        'Start: <b>He whare.</b> Add "big": <b>He whare nui.</b> Add "that over there": <b>He whare nui tērā.</b>',
        'Start: <b>He panana.</b> Add "yellow": <b>He panana kōwhai.</b> Add "this": <b>He panana kōwhai tēnei.</b>',
        'Now use Kei te with your full description: "I am eating this yellow banana." → <b>Kei te kai au i tēnei panana kōwhai.</b>',
        'Try a new combo: He + [noun from Monday] + [colour] + [size] + tēnā. Build it piece by piece.',
      ],
      prompt:'You now have three layers: He + noun + adjectives + demonstrative. How is building a sentence like stacking building blocks? What stays fixed and what changes?',
    },
    youDo:{
      title:'Māu Anō — Stack the building blocks',
      instruction:'Build the most complete description sentences you can using everything you know.',
      tasks:[
        'Write a two-layer sentence: <b>He [noun] [adjective] tēnei.</b>',
        'Write a three-layer sentence: <b>He [noun] [colour] [size] tēnā.</b>',
        'Write a full Kei te sentence using your description as the object: <b>Kei te kai/inu au i tēnei…</b>',
        '✦ Bonus: Describe a classmate\'s belongings in three sentences using tēnā (things near them). Read them aloud.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He aha ōu hiahia? What do you want?',
    nzLink:'Te Aho Arataki Marau — AO 1.1: Greetings · AO 1.6: Politeness conventions · AO 2.3: Communicate about likes and dislikes',
    aos:[{code:'AO 2.3',label:'Likes, dislikes &amp; wants'},{code:'AO 1.6',label:'Politeness conventions'}],
    iDo:{
      title:'Tāua Kōrero — A café conversation',
      instruction:'Today we put all of this week\'s learning into a real conversation. Imagine you are in a café in Tāmaki Makaurau. Listen to how the conversation builds using everything from Monday to Wednesday.',
      example:`<b>Kaimahi:</b> Tēnā koe! He aha ōu hiahia?<br><b>Manuhiri:</b> Tēnā koe. Kei te hiahia au ki te inu i tētahi tī māhana.<br><b>Kaimahi:</b> He aha tēnā? He tī māmā, he tī kaha rānei?<br><b>Manuhiri:</b> He tī māmā, tēnā koe.<br><b>Kaimahi:</b> He āporo, he panana rānei hei kai māu?<br><b>Manuhiri:</b> He āporo tēnā? Āe, tēnā koa.<br><b>Kaimahi:</b> Ka pai! E hia te utu? E rima tāra.<br><b>Manuhiri:</b> Tēnā koe. Hei konā rā!`,
      demo:`New words from this conversation:\n<b>Kaimahi</b> = worker / staff\n<b>Manuhiri</b> = visitor / customer\n<b>ōu hiahia</b> = your wants / what you would like\n<b>tētahi</b> = a (certain) one\n<b>māhana</b> = warm\n<b>māmā</b> = light / mild\n<b>kaha</b> = strong\n<b>rānei</b> = or\n<b>hei kai māu</b> = for you to eat\n<b>tēnā koa</b> = yes please (polite)\n\nNotice: <b>rānei</b> is used for "or" in questions — just like FANBOYS in English but for choices.`,
      tip:'tēnā koa = yes please. This is the polite, warm way to accept something offered to you. Use it generously!',
    },
    weDo:{
      title:'Kia Tūhono — Build the café conversation',
      instruction:'Let\'s build the conversation together, one line at a time. I will be the kaimahi — you are the manuhiri.',
      sentences:[
        'I greet you: Tēnā koe! You greet me back. Then I ask: <b>He aha ōu hiahia?</b> What do you say you want to drink?',
        'I offer you a choice: <b>He miraka, he wai rānei?</b> — milk or water? You answer using <b>He… tēnā koa.</b>',
        'I ask: <b>He aha ōu hiahia hei kai?</b> — What would you like to eat? You tell me using <b>Kei te hiahia au ki te kai i…</b>',
        'I tell you the price: <b>E whā tāra.</b> You say thank you and goodbye. Which goodbye word do YOU use — and which do I use? Why?',
      ],
      prompt:'Tēnā koa vs Āe — when might you use each one? What does the "koa" add? Think about how politeness works differently in different situations.',
    },
    youDo:{
      title:'Māu Anō — Your café roleplay',
      instruction:'With a partner, perform a full café conversation using this week\'s vocabulary and structures. Swap roles.',
      tasks:[
        'Partner A is the kaimahi — greet, ask what they want, offer a choice using rānei.',
        'Partner B is the manuhiri — respond politely, say what you want, use tēnā koa.',
        'Include at least one He description with an adjective: <b>He [food] [colour/size].</b>',
        '✦ Bonus: Extend the conversation to 10 lines. The kaimahi can describe the food: <b>He āporo whero nui tēnei — he pai!</b>',
      ],
    },
  },
}

const FRIDAY_QUIZ_W2 = [
  {day:'Monday',  q:'"He āporo me he panana." What does "me" mean here?',options:['but','or','and','with'],correct:2},
  {day:'Monday',  q:'How do you say "I want to drink the water" in te reo Māori?',options:['Kei te kai au i te wai','Kei te hiahia au ki te inu i te wai','Kei te inu au ki te wai','He wai hiahia au'],correct:1},
  {day:'Tuesday', q:'"He aha tērā?" — Which object is being asked about?',options:['Something next to the speaker','Something next to the listener','Something far from both speaker and listener','Something the speaker is holding'],correct:2},
  {day:'Tuesday', q:'How do you say "This is a big house" in te reo Māori?',options:['He nui whare tēnei','He whare tēnei nui','He whare nui tēnei','Tēnei he whare nui'],correct:2},
  {day:'Wednesday',q:'"He āporo whero nui tēnei." What is the correct order here?',options:['Demonstrative → adjectives → noun','Noun → demonstrative → adjectives','Noun → adjectives → demonstrative','Adjectives → noun → demonstrative'],correct:2},
  {day:'Wednesday',q:'What is the te reo Māori word for "yellow"?',options:['whero','kikorangi','kōwhai','kākāriki'],correct:2},
  {day:'Thursday', q:'A customer wants to say "yes please" politely when offered something. What do they say?',options:['Āe','Tēnā koa','Kia ora','Kāo'],correct:1},
  {day:'Thursday', q:'"He miraka, he wai rānei?" — What does rānei mean in this sentence?',options:['and','but','or','also'],correct:2},
]

const CURRICULUM_W3 = {
  Monday: {
    topic:'Ngā kupumahi hou — More action words',
    nzLink:'Te Aho Arataki Marau — AO 1.5: Communicate about location and movement · AO 2.5: Physical characteristics and feelings — expanding verb vocabulary',
    aos:[{code:'AO 1.5',label:'Location &amp; movement'},{code:'AO 2.5',label:'Actions &amp; feelings'}],
    iDo:{
      title:'Tāua Kōrero — Expanding your verb toolkit',
      instruction:'You already know haere (go), kai (eat), inu (drink), moe (sleep), kōrero (speak), and ako (learn). Today we are going to add a whole new set of action words — kupumahi — so you can describe much more of what happens around you. Listen carefully and notice the sounds.',
      example:`<b>haere</b> — go / travel<br><b>hoki</b> — return / come back<br><b>tū</b> — stand<br><b>noho</b> — sit / stay / live<br><b>tākaro</b> — play<br><b>mahi</b> — work / do<br><b>pānui</b> — read<br><b>tuhituhi</b> — write<br><b>whakarongo</b> — listen<br><b>titiro</b> — look / watch<br><b>omaoma</b> — run<br><b>kaukau</b> — swim`,
      demo:`You now have enough verbs to describe almost everything that happens in a school day.\n\nAll of these slot straight into your <b>Kei te</b> structure:\n<b>Kei te</b> + [verb] + [person]\n\n<b>Kei te tākaro ngā tamariki.</b>\nThe children are playing.\n\n<b>Kei te pānui ia.</b>\nShe is reading.\n\n<b>Kei te mahi au.</b>\nI am working.\n\nNew word: <b>ngā tamariki</b> = the children (ngā = the, plural)`,
      tip:'Every new verb you learn multiplies your sentences. One new verb = dozens of new sentences using structures you already know.',
    },
    weDo:{
      title:'Kia Tūhono — Build action sentences',
      instruction:'I will call out a verb and a person — you build the Kei te sentence. Fast and fluent.',
      sentences:[
        '"She is swimming" → <b>Kei te kaukau ia.</b> Now swap to "I am swimming" → <b>Kei te kaukau au.</b>',
        '"The children are playing" — new word: ngā tamariki = the children → <b>Kei te tākaro ngā tamariki.</b>',
        '"I am writing" → <b>Kei te tuhituhi au.</b> "You are listening" → <b>Kei te whakarongo koe.</b>',
        'Now try two in a row: "She is reading and I am writing." Say both sentences back to back — notice the structure never changes.',
      ],
      prompt:'You have now learned 12 action words. Which three do you think you will use most often in te reo? Why? What actions are missing that you would want to be able to say?',
    },
    youDo:{
      title:'Māu Anō — Action sentences',
      instruction:'Use the new verbs to describe what is happening around you right now.',
      tasks:[
        'Write three Kei te sentences about what three different people in the room are doing right now.',
        'Write a sentence using <b>ngā tamariki</b> (the children) as the person doing the action.',
        'Say five new verbs from memory — can you do it without looking at the list?',
        '✦ Bonus: Write a four-sentence sequence describing what YOU do each morning from waking up to arriving at school. Use Kei te for each.',
      ],
    },
  },
  Tuesday: {
    topic:'Ināianei — Kei te haere ngā tamariki ki hea?',
    nzLink:'Te Aho Arataki Marau — AO 1.5: Communicate about location · AO 1.3: Number and reference · Grammar Level 1–2: ki hea (where to), i hea (where from)',
    aos:[{code:'AO 1.5',label:'Location — ki hea &amp; i hea'},{code:'AO 1.3',label:'Reference &amp; direction'}],
    iDo:{
      title:'Tāua Kōrero — Asking and answering where',
      instruction:'You know ki already — it means "to". Today we build on that to ask and answer "where?" questions. Watch how two small words unlock a whole new layer of conversation.',
      example:`<b>Ki hea?</b> — Where (to)?<br><b>I hea?</b> — Where (from)? / Where (was it)?<br><b>Kei hea?</b> — Where (is it right now)?<br><br><b>Kei te haere koe ki hea?</b><br>Where are you going?<br><br><b>Kei te haere au ki te kura.</b><br>I am going to school.<br><br><b>Kei hea a Hana?</b><br>Where is Hana?<br><br><b>Kei te kura ia.</b><br>She is at school.<br><br><b>I hea koe inanahi?</b><br>Where were you yesterday?`,
      demo:`Three location question words, three different times:\n\n<b>Kei hea?</b> — WHERE IS IT right now? (present location)\n<b>Ki hea?</b> — WHERE TO? (direction of movement)\n<b>I hea?</b> — WHERE WAS IT? (past location)\n\nPlace words to use in answers:\n<b>te kura</b> = school · <b>te kāinga</b> = home\n<b>te toa</b> = shop · <b>te māra</b> = garden\n<b>te awa</b> = river · <b>te roto</b> = lake\n<b>te hōpua</b> = swimming pool\n\nNew word: <b>inanahi</b> = yesterday`,
      tip:'Kei hea = where IS it (now). Ki hea = where is it GOING. I hea = where WAS it. The first word tells you the time.',
    },
    weDo:{
      title:'Kia Tūhono — Where questions and answers',
      instruction:'I ask the question — you build the answer. Then we swap and you ask me.',
      sentences:[
        'I ask: <b>Kei te haere koe ki hea?</b> You answer that you are going home → <b>Kei te haere au ki te kāinga.</b>',
        'I ask: <b>Kei hea a Tama?</b> (Where is Tama?) You say he is at the shop → <b>Kei te toa ia.</b>',
        'Now you ask ME where I am going. Use <b>Kei te haere koe ki hea?</b> I answer with a place — you decide if it makes sense.',
        'Past tense: <b>I hea koe inanahi?</b> — Where were you yesterday? Try to answer using a place word: <b>I te kura au.</b>',
      ],
      prompt:'What is the difference between Kei hea and Ki hea? Can you make up a rule that helps you remember which one to use and when?',
    },
    youDo:{
      title:'Māu Anō — Location challenge',
      instruction:'Use ki hea, kei hea, and i hea in your own sentences and questions.',
      tasks:[
        'Write and ask a partner: <b>Kei te haere koe ki hea?</b> They answer with a real or imagined destination.',
        'Write two sentences about where two different people are right now: <b>Kei [place] ia.</b>',
        'Write one past-tense location sentence: <b>I [place] au inanahi.</b>',
        '✦ Bonus: Write a four-line dialogue — one person asks where the other is going, why, and when they will come back (hoki mai). Use <b>Āpōpō</b> (tomorrow) in the answer.',
      ],
    },
  },
  Wednesday: {
    topic:'Compound sentences — joining ideas with ā, engari, nō reira',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Communicate about likes, dislikes and reasons · Grammar Level 1–2: Conjunctions and compound sentences',
    aos:[{code:'AO 2.3',label:'Reasons &amp; conjunctions'},{code:'AO 1.5',label:'Extended communication'}],
    iDo:{
      title:'Tāua Kōrero — Joining sentences together',
      instruction:'So far every sentence has stood alone. Today we learn how to join two ideas together — making compound sentences just like you do in English with "and", "but", and "so". Watch how these three words work in te reo Māori.',
      example:`<b>ā</b> — and then / and (joining actions in sequence)<br><b>engari</b> — but / however<br><b>nō reira</b> — so / therefore<br><br><b>Kei te haere au ki te toa ā Kei te hoko au i te āporo.</b><br>I am going to the shop and (then) I am buying an apple.<br><br><b>Kei te hiahia au ki te tākaro engari kei te mahi au.</b><br>I want to play but I am working.<br><br><b>Kei te hiakai au nō reira kei te haere au ki te toa.</b><br>I am hungry so I am going to the shop.`,
      demo:`In English you might say "and", "but", "so". In te reo:\n\n<b>ā</b> — use this to chain two actions that happen in sequence or together\n<b>engari</b> — use this for contrast — something unexpected follows\n<b>nō reira</b> — use this for result or reason — "therefore / so"\n\nNew verb: <b>hoko</b> = buy\n\nThe trick: each joining word tells you the RELATIONSHIP between the two ideas.\nAdding? → ā\nContrasting? → engari\nShowing result? → nō reira`,
      tip:'Before you choose the joining word, ask yourself: am I ADDING, CONTRASTING, or showing a RESULT? That decides which word fits.',
    },
    weDo:{
      title:'Kia Tūhono — Join the sentences',
      instruction:'I give you two separate sentences — you decide which joining word fits and combine them.',
      sentences:[
        '"I am hungry." + "I am going to the shop." — What is the relationship? → <b>Kei te hiakai au nō reira kei te haere au ki te toa.</b>',
        '"She wants to swim." + "She is working." — Contrast! → <b>Kei te hiahia ia ki te kaukau engari kei te mahi ia.</b>',
        '"I am going to school." + "I am learning te reo." — Sequence → <b>Kei te haere au ki te kura ā kei te ako au i te reo Māori.</b>',
        'Now make your own: give me a sentence, I will give you a second idea, you join them with the right word.',
      ],
      prompt:'Which of the three joining words — ā, engari, nō reira — is most like the English word "but"? Which is most like "therefore"? Can you think of a sentence where you could use any of the three but the meaning would change?',
    },
    youDo:{
      title:'Māu Anō — Join your ideas',
      instruction:'Write compound sentences in te reo using ā, engari, and nō reira.',
      tasks:[
        'Write a sentence using <b>ā</b> — two actions in sequence.',
        'Write a sentence using <b>engari</b> — something unexpected.',
        'Write a sentence using <b>nō reira</b> — a cause and result.',
        '✦ Bonus: Write a four-sentence paragraph about your morning — use at least two joining words. Read it aloud to a partner.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō te kura',
    nzLink:'Te Aho Arataki Marau — AO 1.7: Simple classroom language · AO 2.3: Likes and dislikes with reasons · AO 1.5: Location',
    aos:[{code:'AO 1.7',label:'Classroom language'},{code:'AO 2.3',label:'Likes, dislikes &amp; reasons'}],
    iDo:{
      title:'Tāua Kōrero — Talking about school',
      instruction:'Today we bring together all three days of this week — new verbs, location words, and joining sentences — in a conversation about school life. This is a conversation two students might have on the way to class.',
      example:`<b>A:</b> Tēnā koe! Kei te haere koe ki hea?<br><b>B:</b> Kei te haere au ki te kura. Kei te ako au i te pāngarau ināianei.<br><b>A:</b> He pai ki a koe te pāngarau?<br><b>B:</b> Āe, he pai ki a au te pāngarau engari he uaua.<br><b>A:</b> He aha tōu akomanga?<br><b>B:</b> Ko te akomanga toru tōku. Kei hea tōu akomanga?<br><b>A:</b> Ko te akomanga whā tōku. Kei te haere tāua ki reira ā ka tīmata te akoranga!<br><b>B:</b> Āe! Kia tere!`,
      demo:`New words from this conversation:\n<b>pāngarau</b> = maths\n<b>ināianei</b> = right now / at this moment\n<b>He pai ki a koe?</b> = Do you like it? (literally: Is it good to you?)\n<b>he uaua</b> = it is difficult\n<b>tōu akomanga</b> = your classroom\n<b>akomanga toru/whā</b> = classroom 3/4 (number after noun)\n<b>tāua</b> = we two (including you) — from Week 2!\n<b>ki reira</b> = there / to there\n<b>ka tīmata</b> = it begins / is starting\n<b>Kia tere!</b> = Hurry up! / Be quick!`,
      tip:'He pai ki a koe? = Do you like it? He pai ki a au = I like it. This is one of the most useful patterns in te reo — learn it cold.',
    },
    weDo:{
      title:'Kia Tūhono — School conversation',
      instruction:'Build the school conversation step by step. I will start each exchange — you complete it.',
      sentences:[
        'I ask: <b>Kei te haere koe ki hea?</b> You say you are going to your classroom (use your actual room number if you know it in Māori).',
        'I ask: <b>He pai ki a koe te [subject]?</b> Choose a school subject. You answer with <b>Āe/Kāo, he pai/uaua ki a au.</b>',
        'Add a joining word: "I like reading but it is difficult." → <b>He pai ki a au te pānui engari he uaua.</b>',
        'Use tāua: "Let\'s go to class together." → <b>Kei te haere tāua ki te akomanga.</b>',
      ],
      prompt:'He pai ki a au = I like it. How does this differ from how you say "I like it" in English? What does "ki a au" literally mean — and what does that tell you about how te reo Māori thinks about liking things?',
    },
    youDo:{
      title:'Māu Anō — Your school kōrero',
      instruction:'With a partner, have a full conversation about your school day using everything from this week.',
      tasks:[
        'Ask and answer: <b>Kei te haere koe ki hea?</b> Use a real location from your school.',
        'Ask and answer: <b>He pai ki a koe te [subject]?</b> Give a reason using <b>nō reira</b> or <b>engari</b>.',
        'Use <b>tāua</b> to suggest doing something together — go to class, eat lunch, play outside.',
        '✦ Bonus: Write a 6-line dialogue between two students that uses: a location question, a likes/dislikes exchange with a reason, and at least one joining word.',
      ],
    },
  },
}

const FRIDAY_QUIZ_W3 = [
  {day:'Monday',  q:'What is the te reo Māori word for "write"?',options:['pānui','tuhituhi','whakarongo','titiro'],correct:1},
  {day:'Monday',  q:'"Kei te tākaro ngā tamariki." What does "ngā tamariki" mean?',options:['the teacher','the children','the school','the classroom'],correct:1},
  {day:'Tuesday', q:'"Kei te haere koe ki hea?" — What is this question asking?',options:['Where are you right now?','Where were you yesterday?','Where are you going?','Where is she?'],correct:2},
  {day:'Tuesday', q:'Which question word asks about where something IS right now (not where it is going)?',options:['Ki hea','I hea','Kei hea','Nō hea'],correct:2},
  {day:'Wednesday',q:'You want to say "I am hungry SO I am going to the shop." Which joining word do you use?',options:['ā','engari','nō reira','me'],correct:2},
  {day:'Wednesday',q:'"Kei te hiahia au ki te kaukau engari kei te mahi au." What does engari signal here?',options:['A result — swimming caused the work','A sequence — swimming then working','A contrast — wanting to swim but working instead','An addition — swimming and working'],correct:2},
  {day:'Thursday', q:'"He pai ki a koe te pāngarau?" — What is pāngarau?',options:['reading','writing','maths','science'],correct:2},
  {day:'Thursday', q:'How do you say "Let\'s go to class" using the inclusive we-two pronoun?',options:['Kei te haere māua ki te akomanga','Kei te haere tāua ki te akomanga','Kei te haere mātou ki te akomanga','Kei te haere kōrua ki te akomanga'],correct:1},
]

const CURRICULUM_W4 = {
  Monday: {
    topic:'Nōku, nāku — mine! Possessive pronouns',
    nzLink:'Te Aho Arataki Marau — AO 2.2: Communicate about possessions · Grammar Level 1–2: Possessive pronouns, ō/ā categories introduced',
    aos:[{code:'AO 2.2',label:'Possessions'},{code:'AO 1.4',label:'Personal information'}],
    iDo:{
      title:'Tāua Kōrero — Whose is it? Nō wai? Nā wai?',
      instruction:'Today we learn how to say who things belong to. In te reo Māori there are two ways to say "mine" or "yours" — and which one you use depends on what KIND of thing you are talking about. Listen carefully and you will start to feel the difference.',
      example:`<b>Nō wai tēnā?</b> — Whose is that? (things you don't control)<br><b>Nōku tēnā.</b> — That is mine.<br><b>Nōu tēnā.</b> — That is yours.<br><b>Nōna tēnā.</b> — That is his/hers.<br><br><b>Nā wai tēnā?</b> — Whose is that? (things you do control)<br><b>Nāku tēnā.</b> — That is mine.<br><b>Nāu tēnā.</b> — That is yours.<br><b>Nāna tēnā.</b> — That is his/hers.`,
      demo:`This is one of the most interesting things about te reo Māori — things you POSSESS are divided into two groups:\n\n<b>Ō-category (nō-)</b> — things you do NOT control or things that are senior to you:\nyour name, your parents, your feelings, your land, your canoe, your school\n\n<b>Ā-category (nā-)</b> — things you DO control or things junior/subordinate to you:\nyour food, your tools, your book, your pet, your children (in a nurturing sense)\n\nA quick feel for it:\n<b>Nōku tōku ingoa</b> — My name belongs to me (ō — you didn't choose it)\n<b>Nāku tāku pukapuka</b> — My book is mine (ā — you picked it up)\n\nDon't stress about getting it perfect yet — just start to notice the pattern.`,
      tip:'Ō = things that own YOU or came to you. Ā = things YOU own or control. Your name, land, canoe → ō. Your food, book, pen → ā.',
    },
    weDo:{
      title:'Kia Tūhono — Sort and say',
      instruction:'I will name an item. You decide: ō-category or ā-category? Then say who it belongs to.',
      sentences:[
        'A pencil (pene) — do you control it? Yes → ā-category. "It is mine" → <b>Nāku tēnā pene.</b>',
        'Your school (kura) — is it senior to you? Yes → ō-category. "This school is mine/ours" → <b>Nōku tēnei kura.</b>',
        'Your lunch (tina) — do you control it? Yes → ā. Someone asks Nā wai tēnā? You answer: <b>Nāku tēnā.</b>',
        'Your feelings (kei te pai au) — can you control your feelings? Mostly not → ō. "My feeling is good" — we use tōku: <b>He pai tōku ngākau.</b>',
      ],
      prompt:'Why do you think te reo Māori makes this distinction? What does it tell us about how Māori culture thinks about ownership and relationship? Can you think of something that might be tricky to categorise?',
    },
    youDo:{
      title:'Māu Anō — Mine, yours, his/hers',
      instruction:'Practise using nōku/nāku and nōu/nāu in real situations.',
      tasks:[
        'Point to three things on your desk. For each one, say whether it is ō or ā category and say <b>Nāku tēnei</b> or <b>Nōku tēnei.</b>',
        'Someone picks up your book. What do you say? Write and say it: <b>Nāku tēnā!</b>',
        'Ask a partner whose pencil case is: <b>Nā wai tēnā kete pene?</b> They answer using <b>Nāku/Nāu/Nāna.</b>',
        '✦ Bonus: Write four sentences — two using nō- words and two using nā- words. Make sure the category fits each item.',
      ],
    },
  },
  Tuesday: {
    topic:'Tōku, tāku — my (as part of a sentence)',
    nzLink:'Te Aho Arataki Marau — AO 2.2: Communicate about possessions · AO 1.4: Personal information · Grammar Level 1–2: tōku/tāku, tōu/tāu, tōna/tāna',
    aos:[{code:'AO 2.2',label:'Possessives in sentences'},{code:'AO 1.4',label:'Personal information'}],
    iDo:{
      title:'Tāua Kōrero — Tōku vs tāku inside a sentence',
      instruction:'Yesterday we used nōku and nāku to say "it is mine." Today we learn how to say "my [thing]" INSIDE a sentence — like "my book" or "my name". These are the words tōku and tāku. Watch how they work.',
      example:`<b>tōku</b> — my (ō-category)<br><b>tāku</b> — my (ā-category)<br><b>tōu</b> — your (ō-category)<br><b>tāu</b> — your (ā-category)<br><b>tōna</b> — his/her (ō-category)<br><b>tāna</b> — his/her (ā-category)<br><br><b>Ko [name] tōku ingoa.</b><br>My name is [name]. (ingoa = ō — you didn't choose your name)<br><br><b>Kei te pānui au i tāku pukapuka.</b><br>I am reading my book. (pukapuka = ā — you control it)<br><br><b>He pai tōna ngākau.</b><br>His/her heart/feeling is good.`,
      demo:`The pattern is the same as nō/nā — just a different form used INSIDE a sentence:\n\n<b>tō-</b> for ō-category things: tōku (my), tōu (your), tōna (his/her)\n<b>tā-</b> for ā-category things: tāku (my), tāu (your), tāna (his/her)\n\nYou already used tōku in Week 1 without knowing it:\n<b>Ko [name] tōku ingoa.</b>\n\nNow you know WHY it is tōku — ingoa (name) is ō-category.\n\nUseful pairs to learn cold:\n<b>tōku ingoa</b> — my name · <b>tāku kai</b> — my food\n<b>tōku kura</b> — my school · <b>tāku pene</b> — my pen`,
      tip:'Tōku before ō-things (name, feelings, land). Tāku before ā-things (food, book, pen). If you already know nō/nā, just swap the n for t.',
    },
    weDo:{
      title:'Kia Tūhono — My this, your that',
      instruction:'Build sentences using tōku, tāku, tōu, tāu. I give you the noun — you choose the right possessive and build the sentence.',
      sentences:[
        '"My name is…" — ingoa is ō → <b>Ko [name] tōku ingoa.</b> Everyone say their own name using this.',
        '"I am reading my book" — pukapuka is ā → <b>Kei te pānui au i tāku pukapuka.</b>',
        '"Your school is big" — kura is ō → <b>He nui tōu kura.</b>',
        '"She is eating her food" — kai is ā → <b>Kei te kai ia i tāna kai.</b>',
      ],
      prompt:'You now know tōku, tāku, tōu, tāu, tōna, tāna — six possessive words. How do they compare to English? In English we only have "my", "your", "his/her" — three words. Why does te reo Māori need six? What extra information do they carry?',
    },
    youDo:{
      title:'Māu Anō — Possessives in action',
      instruction:'Use tōku, tāku, tōu, tāu, tōna, tāna in full sentences.',
      tasks:[
        'Introduce yourself fully: Ko [name] tōku ingoa. Nō [place] au. Then add one more sentence using tāku.',
        'Write two sentences about a classmate using tōna/tāna — one ō and one ā item.',
        'Complete these: <b>Kei te kai ia i ___ kai.</b> / <b>Ko ___ tōna ingoa.</b>',
        '✦ Bonus: Write a four-sentence paragraph introducing yourself AND a friend. Use tōku, tāku, tōna, and tāna at least once each.',
      ],
    },
  },
  Wednesday: {
    topic:'Topic sentences — He kōrero matua',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Communicate about likes and dislikes · AO 1.7: Classroom language · Grammar Level 1–2: He and Ko for topic sentences',
    aos:[{code:'AO 2.3',label:'Expressing opinions &amp; topics'},{code:'AO 1.7',label:'Structured classroom language'}],
    iDo:{
      title:'Tāua Kōrero — Starting a paragraph in te reo',
      instruction:'In English, every paragraph starts with a topic sentence that tells the reader what the paragraph is about. Te reo Māori writing does the same thing. Today we learn how to write a strong opening sentence — a kōrero matua — using the structures you already know.',
      example:`A strong topic sentence in te reo Māori often uses <b>He</b> or <b>Ko</b>:<br><br><b>He nui ngā āhuatanga pai o te kura.</b><br>There are many good things about school.<br><br><b>Ko te kura tōku wāhi pai rawa atu.</b><br>School is my absolute favourite place.<br><br><b>He tino pai tāku kura nō te mea he nui ngā hoa ōku.</b><br>My school is very good because I have many friends.<br><br><b>Ko te pānui tāku mahi pai rawa atu.</b><br>Reading is my absolute favourite activity.`,
      demo:`A topic sentence in te reo Māori does three things:\n1. States the TOPIC clearly (what the paragraph is about)\n2. Makes a CLAIM about it (a point of view, not just a fact)\n3. Is strong enough to stand alone\n\nNew words:\n<b>ngā āhuatanga</b> = the things / aspects\n<b>wāhi</b> = place\n<b>pai rawa atu</b> = the very best / absolute favourite\n<b>ngā hoa</b> = friends\n<b>nō te mea</b> = because (more formal than nā te mea)\n\nNotice: <b>nō te mea</b> and <b>nā te mea</b> both mean "because" — nō te mea is slightly more formal and used in writing.`,
      tip:'A great topic sentence = TOPIC + CLAIM + (optional reason). He or Ko at the start signals "here is what this is about."',
    },
    weDo:{
      title:'Kia Tūhono — Build topic sentences together',
      instruction:'I give you a topic — you build a topic sentence using He or Ko. Then we improve it together.',
      sentences:[
        'Topic: your favourite food. Start with He: <b>He [food] tāku kai pai rawa atu.</b> Add a reason with nō te mea.',
        'Topic: your school. Start with Ko: <b>Ko tōku kura…</b> What claim can you make? He nui? He pai? He tino ātaahua?',
        'Topic: playing. Start with He: <b>He pai ki a au te tākaro nō te mea…</b> You finish it with your own reason.',
        'Now make it stronger — take your first attempt and add either an adjective, a reason, or a demonstrative to make it more specific.',
      ],
      prompt:'What makes a topic sentence strong? Compare these two: "Ko tōku kura he nui" vs "Ko tōku kura tōku wāhi pai rawa atu nō te mea he nui ōku hoa." Which is better and why?',
    },
    youDo:{
      title:'Māu Anō — Write your own topic sentences',
      instruction:'Write topic sentences in te reo for each of these topics.',
      tasks:[
        'Write a He topic sentence about your favourite sport or activity.',
        'Write a Ko topic sentence about your school.',
        'Write a topic sentence with a reason using <b>nō te mea</b>.',
        '✦ Bonus: Choose one of your topic sentences and write two more sentences to follow it — make a mini paragraph in te reo Māori.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — Whakaatu i a koe anō — Introducing yourself fully',
    nzLink:'Te Aho Arataki Marau — AO 1.2: Introduce self and others · AO 1.4: Personal information · AO 2.2: Possessions · AO 1.6: Politeness conventions',
    aos:[{code:'AO 1.2',label:'Introductions'},{code:'AO 1.4',label:'Personal information'},{code:'AO 2.2',label:'Possessions'}],
    iDo:{
      title:'Tāua Kōrero — A full self-introduction',
      instruction:'We have now learned Ko, nō, possessives, descriptions, and location. Today we bring them all together into a complete mihi — a self-introduction. This is one of the most important things you can do in te reo Māori. Listen to this full mihi and notice how each piece connects.',
      example:`<b>Tēnā koutou katoa.</b><br>Greetings to you all.<br><br><b>Ko [mountain] tōku maunga.</b><br>… is my mountain.<br><br><b>Ko [river] tōku awa.</b><br>… is my river.<br><br><b>Ko [iwi] tōku iwi.</b><br>… is my tribe.<br><br><b>Ko [school] tōku kura.</b><br>… is my school.<br><br><b>Ko [name] tōku ingoa.</b><br>My name is …<br><br><b>Nō [place] ahau.</b><br>I am from …<br><br><b>Tēnā koutou, tēnā koutou, tēnā koutou katoa.</b><br>Greetings, greetings, greetings to you all.`,
      demo:`This is the structure of a traditional pepeha — a way of introducing yourself by connecting to the land and people you belong to.\n\nKey new words:\n<b>maunga</b> = mountain\n<b>awa</b> = river\n<b>iwi</b> = tribe / people\n<b>katoa</b> = all / everyone\n<b>Tēnā koutou katoa</b> = greetings to you all (koutou = you all, 3+)\n<b>ahau</b> = I / me (more formal form of au)\n\nEvery Ko sentence here uses tōku — maunga, awa, iwi, kura, ingoa are all ō-category. They are senior to us. They connect us to something bigger than ourselves.\n\nYou don't need to know your iwi or maunga perfectly yet — you can use your town or a nearby landmark for now.`,
      tip:'Tēnā koutou katoa — said three times at the end of a mihi. Three times is a tradition of completeness and respect in te ao Māori.',
    },
    weDo:{
      title:'Kia Tūhono — Build your mihi together',
      instruction:'We will build a mihi line by line as a class. I will prompt each piece — you supply the content.',
      sentences:[
        'Start with the greeting — which one do we use for the whole class? <b>Tēnā koutou katoa.</b> Everyone say it together.',
        'Now add your school: <b>Ko ___ tōku kura.</b> Why is kura ō-category? (It is senior to you — it was here before you.)',
        'Add your name: <b>Ko ___ tōku ingoa.</b> Add where you are from: <b>Nō ___ ahau.</b>',
        'Close with the three-part farewell: <b>Tēnā koutou, tēnā koutou, tēnā koutou katoa.</b> Say it all the way through.',
      ],
      prompt:'Why do you think Māori introductions start with the land — mountains and rivers — before the person\'s name? What does this tell us about the relationship between people and place in te ao Māori?',
    },
    youDo:{
      title:'Māu Anō — Your own mihi',
      instruction:'Write and practise your own mihi using the full structure.',
      tasks:[
        'Write your mihi in full — all six Ko/Nō lines plus the opening and closing greetings.',
        'Practise saying it aloud until it feels smooth. Aim to say it without looking at the page.',
        'Say your mihi to a partner. They listen and then say theirs back to you.',
        '✦ Bonus: Add two extra lines to your mihi — one about your favourite place (wāhi pai) and one about what you love doing (mahi pai). Use tōku/tāku correctly.',
      ],
    },
  },
}

const FRIDAY_QUIZ_W4 = [
  {day:'Monday',  q:'"Nāku tēnā pene." What does this sentence tell us about the pencil?',options:['It belongs to someone else','It is yours (ā-category — you control it)','It is yours (ō-category — it is senior to you)','It is lost'],correct:1},
  {day:'Monday',  q:'Your school (kura) is ō-category. How do you say "That school is mine"?',options:['Nāku tērā kura','Nōku tērā kura','Tāku tērā kura','Tōku tērā kura'],correct:1},
  {day:'Tuesday', q:'"Ko [name] tōku ingoa." Why is tōku used here instead of tāku?',options:['Because ingoa is an ā-category word — you control your name','Because ingoa is an ō-category word — your name is senior to you and you did not choose it','Because tōku is always used with Ko sentences','Because tāku is only used with food'],correct:1},
  {day:'Tuesday', q:'How do you say "She is eating her food"?',options:['Kei te kai ia i tōna kai','Kei te kai ia i tāna kai','Kei te kai ia i nāna kai','Kei te kai tāna ia'],correct:1},
  {day:'Wednesday',q:'What does "pai rawa atu" mean?',options:['quite good','not good','the very best / absolute favourite','good enough'],correct:2},
  {day:'Wednesday',q:'Which sentence is the strongest topic sentence?',options:['He kura tōku kura','Ko tōku kura he pai','Ko tōku kura tōku wāhi pai rawa atu nō te mea he nui ōku hoa','He nui tōku kura'],correct:2},
  {day:'Thursday', q:'In a pepeha, why are maunga and awa mentioned before the person\'s name?',options:['Because mountains and rivers are more important than people','Because Māori introductions follow alphabetical order','Because connecting to land shows who you are and where you belong — land is senior to people','Because it is easier to say'],correct:2},
  {day:'Thursday', q:'How do you say "Greetings to you all" to a group of more than two people?',options:['Tēnā kōrua','Tēnā koe','Tēnā koutou katoa','Tēnā tātou'],correct:2},
]

const CURRICULUM_W5 = {
  Monday: {
    topic:'Ngā pātai katoa — The full set of question words',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Number · AO 1.4: Personal information · AO 1.5: Location · Grammar Level 1–2: He aha, Ko wai, Kei hea, E hia, Pēhea',
    aos:[{code:'AO 1.5',label:'Location questions'},{code:'AO 1.3',label:'Number &amp; quantity questions'}],
    iDo:{
      title:'Tāua Kōrero — Every question word you need',
      instruction:'You have been picking up question words gradually — Ko wai, He aha, Ki hea. Today we gather every key question word into one place and make sure you can use them all fluently. This is a big unlock — once you know all the question words, you can ask about anything.',
      example:`<b>Ko wai?</b> — Who?<br><b>He aha?</b> — What?<br><b>Kei hea?</b> — Where (is it now)?<br><b>Ki hea?</b> — Where (is it going)?<br><b>Nō hea?</b> — Where (is it from)?<br><b>Āhea?</b> — When (future)?<br><b>Nōnāhea?</b> — When (past)?<br><b>E hia?</b> — How many (things)?<br><b>Tokohia?</b> — How many (people)?<br><b>Pēhea?</b> — How? / What is it like?<br><b>He aha te take?</b> — Why? (What is the reason?)`,
      demo:`Each question word slips into a familiar sentence frame:\n\n<b>Ko wai tōu ingoa?</b> — Who are you? (What is your name?)\n<b>He aha tēnei?</b> — What is this?\n<b>Kei hea tō kura?</b> — Where is your school?\n<b>Āhea tāua haere ai?</b> — When are we going?\n<b>E hia ngā ākonga?</b> — How many students are there?\n<b>Tokohia ngā kaiako?</b> — How many teachers?\n<b>Kei te pēhea koe?</b> — How are you?\n<b>He aha te take i haere ai koe?</b> — Why did you go?\n\nKey distinction: <b>E hia</b> = how many THINGS. <b>Tokohia</b> = how many PEOPLE. Always.`,
      tip:'E hia for things, Tokohia for people — never mix them. And Pēhea always asks about quality or condition: "How is it? What is it like?"',
    },
    weDo:{
      title:'Kia Tūhono — Question word rapid fire',
      instruction:'I give you an answer — you give me the right question. Then we flip it.',
      sentences:[
        'Answer: "Ko Mere tōku ingoa." → What was the question? → <b>Ko wai tōu ingoa?</b>',
        'Answer: "E rua ngā pukapuka." (There are two books.) → Question about how many things → <b>E hia ngā pukapuka?</b>',
        'Answer: "Tokorima ngā ākonga." (There are five students.) → <b>Tokohia ngā ākonga?</b> — Why tokohia not e hia?',
        'Answer: "Kei te pai au." → What question prompted this? → <b>Kei te pēhea koe?</b>',
      ],
      prompt:'E hia vs Tokohia — this distinction treats people differently from things. What does this tell you about how te reo Māori values people? Can you think of other languages that make a similar distinction?',
    },
    youDo:{
      title:'Māu Anō — Questions only',
      instruction:'Your challenge today: only write questions. No statements allowed.',
      tasks:[
        'Write one question using each of: <b>Ko wai, He aha, Kei hea, E hia, Tokohia.</b>',
        'Write a question using <b>Pēhea</b> that you would genuinely want to ask someone.',
        'Write a question using <b>Āhea</b> about something happening this week.',
        '✦ Bonus: Write a 6-question interview in te reo Māori that you could use to find out about a new student. Cover name, origin, likes, and plans.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā āhua — Degrees of adjectives: nui, nui ake, nui rawa atu',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Physical characteristics · Grammar Level 1–2: Comparative and superlative adjectives — ake, rawa atu, tino',
    aos:[{code:'AO 2.5',label:'Descriptions — degree adjectives'},{code:'AO 2.3',label:'Preferences &amp; comparisons'}],
    iDo:{
      title:'Tāua Kōrero — Good, better, best in te reo',
      instruction:'You know adjectives like nui, pai, iti, roa. Today we learn how to compare things — to say something is BIGGER, or the BIGGEST, or SO big. Te reo Māori has a clean, consistent system for this. Watch how three words do all the work.',
      example:`<b>nui</b> — big<br><b>nui ake</b> — bigger (comparative — more than one other)<br><b>nui rawa atu</b> — biggest / too big (superlative — most of all)<br><b>tino nui</b> — very big (intensifier)<br><br><b>He nui tēnei whare.</b> — This house is big.<br><b>He nui ake tērā whare.</b> — That house is bigger.<br><b>He nui rawa atu tērā whare.</b> — That house is the biggest / too big.<br><b>He tino nui tērā whare.</b> — That house is very big.`,
      demo:`The system works the same way for every adjective:\n\n[adjective] = base\n[adjective] + <b>ake</b> = more / -er (comparative)\n[adjective] + <b>rawa atu</b> = most / -est / too (superlative)\n<b>tino</b> + [adjective] = very (intensifier)\n\nLet's try with pai (good):\n<b>He pai</b> — good\n<b>He pai ake</b> — better\n<b>He pai rawa atu</b> — best / the very best\n<b>He tino pai</b> — very good\n\nAnd with iti (small):\n<b>He iti ake</b> — smaller\n<b>He iti rawa atu</b> — smallest\n<b>He tino iti</b> — very small`,
      tip:'Ake = more. Rawa atu = most/too much. Tino = very. They work with ANY adjective — learn the system, not each word separately.',
    },
    weDo:{
      title:'Kia Tūhono — Compare and contrast',
      instruction:'I will give you two things to compare. You build the comparative sentence.',
      sentences:[
        'This apple is big. That apple is bigger. → <b>He nui tēnei āporo. He nui ake tērā āporo.</b>',
        'Te reo Māori is good. Maths is better (for me). → <b>He pai te reo Māori. He pai ake te pāngarau ki a au.</b>',
        'My bag is small. Your bag is very small. → <b>He iti tāku kete. He tino iti tāu kete.</b>',
        'Now use rawa atu: "This is the best food I have ever eaten." → <b>He kai pai rawa atu tēnei.</b>',
      ],
      prompt:'In English we say "good / better / best" — three different words. Te reo Māori uses "pai / pai ake / pai rawa atu" — the same root every time. Which system do you think is more logical? Which is easier to learn?',
    },
    youDo:{
      title:'Māu Anō — Bigger, better, best',
      instruction:'Use the comparison system with adjectives you already know.',
      tasks:[
        'Write three sentences comparing two objects in the room using <b>[adjective] / [adjective] ake.</b>',
        'Write a superlative sentence about something you love: <b>He [adjective] rawa atu tāku…</b>',
        'Use tino with three different adjectives: <b>He tino [adj]…</b>',
        '✦ Bonus: Write a short "top three" list in te reo — e.g. your three favourite foods ranked from good to best, using pai, pai ake, pai rawa atu.',
      ],
    },
  },
  Wednesday: {
    topic:'Sentence variety — poto me te roa',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.5: Descriptive language · Grammar Level 1–2: Varying sentence length for effect',
    aos:[{code:'AO 2.3',label:'Extended communication'},{code:'AO 2.5',label:'Descriptive variety'}],
    iDo:{
      title:'Tāua Kōrero — Short sentences punch. Long sentences build a picture.',
      instruction:'Good writers — in any language — vary the length of their sentences. A short sentence lands hard. A long sentence with detail and joining words draws the reader in. Today we practise doing both deliberately in te reo Māori.',
      example:`SHORT — punchy, clear, immediate:<br><b>Kei te ua.</b> It is raining.<br><b>Kei te hiakai au.</b> I am hungry.<br><b>Ka tū ia.</b> She stood.<br><br>LONG — descriptive, connected, flowing:<br><b>Kei te ua tino nui ā kei te makariri hoki au nō reira kei te hoki au ki tōku kāinga.</b><br>It is raining very hard and I am cold too so I am going home.<br><br>MIXED — the most effective:<br><b>Kei te ua. He makariri, he kino hoki. Nō reira kei te hoki au ki tōku kāinga ā ka kai au i tāku tina.</b><br>It is raining. It is cold and unpleasant. So I am going home and I will eat my lunch.`,
      demo:`Short sentences work best for:\n— Drama and surprise\n— Starting a new idea\n— Describing sudden action\n\nLong sentences work best for:\n— Building a scene or explaining a reason\n— Connecting several related ideas\n— Showing cause and effect\n\nYou already have all the tools:\nShort: <b>Kei te</b> + verb + person\nLong: add <b>ā / engari / nō reira</b> to join\nLonger still: add <b>tino / ake / rawa atu</b> for degree\nLongest: combine everything with a description and a location\n\nNew word: <b>hoki</b> = also / too (placed after the word it modifies)`,
      tip:'Read your te reo aloud. If every sentence sounds the same length, mix it up — drop in a short one for impact, or join two ideas for flow.',
    },
    weDo:{
      title:'Kia Tūhono — Mix the lengths',
      instruction:'I give you a long sentence — you shorten it. I give you a short one — you extend it.',
      sentences:[
        'Shorten this: "Kei te haere au ki te toa ā kei te hoko au i tāku kai." → <b>Kei te haere au ki te toa.</b> When would each version be better?',
        'Extend this: "Kei te ua." Add a feeling, a reason, and a result. → <b>Kei te ua tino nui. Kei te makariri au nō reira kei te noho au i roto.</b>',
        'Write one short dramatic sentence followed by one long explanatory sentence about something happening right now in the classroom.',
        'Read your two sentences aloud. Does the contrast work? Does the short one feel punchy and the long one feel full?',
      ],
      prompt:'Listen to these two versions read aloud: "Kei te ua. Kei te makariri." vs "Kei te ua tino nui ā kei te makariri hoki au." Which version would you use in a story? Which in a quick text message? Why?',
    },
    youDo:{
      title:'Māu Anō — Control your sentence length',
      instruction:'Write deliberately — choose your lengths with purpose.',
      tasks:[
        'Write three short sentences (under 5 words each) about what is happening right now.',
        'Now write one long sentence that combines all three ideas using ā and nō reira.',
        'Write a "mixed" paragraph: short sentence, long sentence, short sentence. Read it aloud — notice the rhythm.',
        '✦ Bonus: Describe your morning using exactly five sentences — make the first and last short and punchy, and the middle three progressively longer.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — Whakaaro ōrite, whakaaro rerekē — Agree and disagree',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Likes and dislikes with reasons · AO 1.6: Politeness conventions · AO 2.5: Expressing opinions',
    aos:[{code:'AO 2.3',label:'Opinions &amp; reasons'},{code:'AO 1.6',label:'Polite disagreement'}],
    iDo:{
      title:'Tāua Kōrero — Agreeing and disagreeing politely',
      instruction:'You can now describe, compare, question, and explain. Today we learn one of the most important conversation skills — how to agree, disagree, and give your opinion politely. Listen to how this conversation flows between two students debating which subject is better.',
      example:`<b>A:</b> He pai ake te pāngarau i te tuhituhi ki a au.<br><b>B:</b> Āe, he tika tāu — he pai te pāngarau engari he pai ake ki a au te tuhituhi.<br><b>A:</b> Nā te aha?<br><b>B:</b> Nō te mea ka taea e au te whakaaro nui ake i te wā e tuhituhi ana au.<br><b>A:</b> Ka pai tāu whakaaro. Engari ki a au, he uaua rawa atu te tuhituhi.<br><b>B:</b> Āe pea. He rerekē ā tātou whakaaro!<br><b>A:</b> He rerekē — ā he pai tērā!`,
      demo:`New phrases for agreeing and disagreeing:\n\n<b>He tika tāu.</b> — You are right. / That is correct.\n<b>Āe, engari…</b> — Yes, but…\n<b>Kāo, ki a au…</b> — No, in my opinion…\n<b>Ki a au nei…</b> — In my opinion… / I think…\n<b>Ka pai tāu whakaaro.</b> — That is a good point.\n<b>Nā te aha?</b> — Why? / What for? (asking for a reason)\n<b>Ka taea e au te…</b> — I am able to… / I can…\n<b>Āe pea.</b> — Maybe. / Perhaps.\n<b>He rerekē ā tātou whakaaro.</b> — Our opinions are different.\n\n<b>i te wā e… ana</b> = when I am [doing something] — a new time clause`,
      tip:'He tika tāu = "you are right" — a gracious way to acknowledge someone before offering your own view. Use it even when you are about to disagree.',
    },
    weDo:{
      title:'Kia Tūhono — Agree, disagree, explain',
      instruction:'I will make a claim. You agree or disagree, then give a reason. We keep the conversation going for at least four exchanges.',
      sentences:[
        'I say: <b>He pai ake te tākaro i te ako.</b> (Playing is better than learning.) Do you agree? Respond with Āe/Kāo + a reason.',
        'You make a claim using <b>He [adjective] ake te X i te Y ki a au.</b> I respond with <b>Ka pai tāu whakaaro, engari…</b>',
        'Practice: <b>Nā te aha?</b> — ask me why I said what I said. I must give a reason using <b>nō te mea.</b>',
        'Close the exchange: one person says <b>He rerekē ā tātou whakaaro</b> — the other responds with <b>Āe — ā he pai tērā!</b>',
      ],
      prompt:'Why is "He tika tāu, engari…" a more powerful response than just "Kāo"? What does acknowledging the other person\'s point do for the conversation? Can you think of a time when this approach would be really useful?',
    },
    youDo:{
      title:'Māu Anō — Te taupatupatu — The debate',
      instruction:'With a partner, hold a mini debate in te reo Māori. Use all the new phrases.',
      tasks:[
        'Choose a topic to debate — which is better: te kura (school) or te kāinga (home)? Sport or reading? Summer or winter?',
        'Each person makes their opening claim using <b>He pai ake te X i te Y ki a au nō te mea…</b>',
        'Respond to your partner using <b>He tika tāu, engari…</b> or <b>Āe pea, engari ki a au…</b>',
        '✦ Bonus: Write up your debate as a short dialogue — at least 6 lines, using he tika tāu, nā te aha, nō te mea, and he rerekē ā tātou whakaaro.',
      ],
    },
  },
}

const FRIDAY_QUIZ_W5 = [
  {day:'Monday',  q:'"Tokohia ngā kaiako?" vs "E hia ngā pukapuka?" — Why are different question words used?',options:['Tokohia is formal, e hia is casual','Tokohia asks about people, e hia asks about things — te reo Māori distinguishes between them','They mean the same thing and can be swapped freely','E hia is only used for numbers over ten'],correct:1},
  {day:'Monday',  q:'How do you ask "When are we going?" (future) in te reo Māori?',options:['Nōnāhea tāua haere ai?','Āhea tāua haere ai?','He aha te wā?','Ki hea tāua haere ai?'],correct:1},
  {day:'Tuesday', q:'"He pai rawa atu tēnei kai." What does rawa atu tell us?',options:['The food is quite good','The food is better than other food','The food is the best / extremely good','The food is too good to eat'],correct:2},
  {day:'Tuesday', q:'How do you say "That house is bigger" using the comparative form?',options:['He nui tino tērā whare','He nui rawa atu tērā whare','He nui ake tērā whare','He tino nui ake tērā whare'],correct:2},
  {day:'Wednesday',q:'The word "hoki" in "Kei te makariri hoki au" means:',options:['but','because','also / too','however'],correct:2},
  {day:'Wednesday',q:'A writer uses one short sentence followed by a long one. What is the main effect?',options:['It fills more space on the page','The short sentence loses impact next to the long one','The short sentence creates impact and the long one adds explanation and flow','Long sentences should always come first'],correct:2},
  {day:'Thursday', q:'"He tika tāu, engari…" — What is the speaker doing?',options:['Completely agreeing with the other person','Changing the subject','Acknowledging the other point before offering a different view','Asking a question'],correct:2},
  {day:'Thursday', q:'How do you say "In my opinion, school is better than home" in te reo Māori?',options:['Ki a au nei, he pai ake te kura i te kāinga','He pai ake te kura i te kāinga ki a koe','Nō te mea he pai te kura','He tika tāu he pai te kura'],correct:0},
]

const CURRICULUM_W6 = {
  Monday: {
    topic:'Ngā tūāhua — Adverbs: how, when, where',
    nzLink:'Te Aho Arataki Marau — AO 1.5: Location · AO 2.4: Time and weather · Grammar Level 1–2: Adverbs of manner, time, and place',
    aos:[{code:'AO 2.4',label:'Time expressions'},{code:'AO 1.5',label:'Location &amp; manner'}],
    iDo:{
      title:'Tāua Kōrero — Adding when, where, and how to your sentences',
      instruction:'You can already build solid Kei te sentences. Today we learn how to add extra information — when something happens, where it happens, and how it happens. These are adverbs — and in te reo Māori they are beautifully flexible. Watch where they sit in a sentence.',
      example:`<b>HOW (manner):</b><br><b>āta</b> — slowly / carefully / gently<br><b>tere</b> — quickly / fast<br><b>kaha</b> — strongly / hard<br><b>mārie</b> — calmly / peacefully<br><br><b>WHEN (time):</b><br><b>ināianei</b> — right now<br><b>āpōpō</b> — tomorrow<br><b>inanahi</b> — yesterday<br><b>ā tōnā wā</b> — soon / in due course<br><b>i muri mai</b> — afterwards / later<br><br><b>WHERE (place):</b><br><b>i konei</b> — here<br><b>i reira</b> — there (at that place)<br><b>i runga</b> — above / on top<br><b>i raro</b> — below / underneath<br><b>i waho</b> — outside<br><b>i roto</b> — inside`,
      demo:`In te reo Māori, adverbs usually come RIGHT AFTER the verb they describe:\n\n<b>Kei te haere tere ia.</b>\nShe is going quickly.\n\n<b>Kei te kōrero āta ia.</b>\nHe is speaking carefully/slowly.\n\n<b>Kei te mahi kaha ngā ākonga.</b>\nThe students are working hard.\n\nTime words often come at the START of a sentence (like in English):\n\n<b>Āpōpō ka haere au ki te toa.</b>\nTomorrow I will go to the shop.\n\n<b>Inanahi i haere ia ki te kura.</b>\nYesterday she went to school.\n\nPlace words usually come AFTER the verb phrase:\n<b>Kei te noho ia i konei.</b>\nShe is sitting here.`,
      tip:'Manner adverbs (how) go right after the verb. Time words can go at the start. Place words go at the end. When in doubt — say it aloud and feel what sounds right.',
    },
    weDo:{
      title:'Kia Tūhono — Add the adverb',
      instruction:'I give you a bare sentence — you add the adverb I specify. Then we check where it landed.',
      sentences:[
        'Bare: "Kei te haere ia." Add "quickly" → <b>Kei te haere tere ia.</b> Now add "tomorrow" at the start → <b>Āpōpō ka haere tere ia.</b>',
        'Bare: "Kei te kōrero ngā tamariki." Add "loudly/hard" → <b>Kei te kōrero kaha ngā tamariki.</b>',
        'Bare: "Kei te noho au." Add "here" → <b>Kei te noho au i konei.</b> Now add "calmly" → <b>Kei te noho mārie au i konei.</b>',
        'Build a full sentence with ALL THREE — time + verb + manner + place: "Yesterday she worked hard outside." → <b>Inanahi i mahi kaha ia i waho.</b>',
      ],
      prompt:'In English, adverbs can move around a lot — "She quickly ran" or "She ran quickly" or "Quickly, she ran." Does te reo Māori feel more fixed or more flexible? Try moving the adverb in one of your sentences and see if it still works.',
    },
    youDo:{
      title:'Māu Anō — Adverb challenge',
      instruction:'Add at least one adverb to every sentence you write today.',
      tasks:[
        'Write three sentences — one with a manner adverb, one with a time adverb, one with a place adverb.',
        'Write one sentence using ALL THREE types: time + manner + place.',
        'Take this bare sentence and add two adverbs: <b>Kei te ako au.</b> (I am learning.)',
        '✦ Bonus: Write five sentences describing your ideal day — every sentence must include at least one adverb. Read them aloud and listen to how much richer they sound than bare sentences.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā kupu pakiaka — Word families and word building',
    nzLink:'Te Aho Arataki Marau — AO 1.7: Classroom language · AO 2.5: Vocabulary development · Grammar Level 1–2: kai-, whaka-, -nga, tāngata compound words',
    aos:[{code:'AO 1.7',label:'Vocabulary &amp; word building'},{code:'AO 2.5',label:'Extended vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — How te reo Māori builds new words',
      instruction:'One of the most powerful things about te reo Māori is that it builds new words from existing ones using prefixes and suffixes. Once you know a handful of roots, you can decode and create dozens of new words. Watch how this works.',
      example:`<b>kai-</b> prefix = person who does something (agent noun):<br><b>kaimahi</b> — worker (mahi = work)<br><b>kaiako</b> — teacher (ako = learn/teach)<br><b>kaipānui</b> — reader (pānui = read)<br><b>kaituhituhi</b> — writer (tuhituhi = write)<br><b>kaikōrero</b> — speaker (kōrero = speak)<br><b>kaitākaro</b> — player (tākaro = play)<br><br><b>whaka-</b> prefix = to cause or make something happen:<br><b>whakarongo</b> — to listen (cause yourself to hear)<br><b>whakamāori</b> — to translate into Māori<br><b>whakaaro</b> — thought / to think<br><b>whakapai</b> — to improve / make better<br><br><b>-nga</b> suffix = the act of / the result of:<br><b>kōrero</b> → <b>kōrerorero</b>/<b>kōrerotanga</b> — conversation<br><b>ako</b> → <b>akoranga</b> — lesson / learning<br><b>mahi</b> → <b>mahinga</b> — the work / the doing`,
      demo:`This is called word building — pakiaka (root) + prefix/suffix = new word.\n\nYou can BUILD words you have never seen before:\n<b>kai-</b> + <b>omaoma</b> (run) = <b>kaiomaoma</b> — a runner\n<b>kai-</b> + <b>kaukau</b> (swim) = <b>kaikaukau</b> — a swimmer\n<b>whaka-</b> + <b>nui</b> (big) = <b>whakanui</b> — to celebrate / make bigger\n<b>whaka-</b> + <b>iti</b> (small) = <b>whakaiti</b> — to be humble / make smaller\n\nAnd you can DECODE words you have never learned:\nIf you see <b>kaitiaki</b> — you know kai- means "person who does" and tiaki means "to guard/protect" → kaitiaki = guardian/protector\n\nYou have been a kaitiaki of your own learning all term.`,
      tip:'See kai- at the start of a word → it is a person who does that action. See whaka- → something is being caused or made to happen. These two prefixes unlock hundreds of words.',
    },
    weDo:{
      title:'Kia Tūhono — Build and decode',
      instruction:'I give you a root word — you build a new word using kai- or whaka-. Then I give you an unknown word — you decode it.',
      sentences:[
        'Root: <b>haere</b> (go). Build: kai- + haere = ? <b>Kaihaere</b> could mean "traveller / one who goes." Does that feel right?',
        'Root: <b>pai</b> (good). Build: whaka- + pai = <b>whakapai</b> — to make better / improve. Use it: <b>Kei te whakapai ia i tāna mahi.</b>',
        'Decode: <b>kaitiaki</b> — kai- = person who does + tiaki = guard/protect. What does kaitiaki mean? Why is this an important word in Aotearoa?',
        'Decode: <b>whakaaro</b> — whaka- = cause/make + aro = face toward / attend to. So whakaaro = thought (turning your mind toward something). Use it: <b>He pai tāu whakaaro.</b>',
      ],
      prompt:'English builds words too — "teacher" comes from "teach", "runner" from "run". But te reo Māori is much more systematic — kai- ALWAYS means person who does. Why might a systematic system be easier to learn than the English system of -er, -or, -ist, -ian?',
    },
    youDo:{
      title:'Māu Anō — Word builder',
      instruction:'Practise building and using new words from roots you already know.',
      tasks:[
        'Build three new kai- words from verbs you know. Write each with its meaning.',
        'Build two whaka- words. Use each in a sentence.',
        'Decode this word you have never seen: <b>kaiwhakaako</b>. What does it mean? (whaka- + ako = to cause learning, kai- = person who does it)',
        '✦ Bonus: Write a paragraph about your class using at least four kai- words and one whaka- word. E.g. "In our class there is a kaiako, many kaipānui, and some kaituhituhi..."',
      ],
    },
  },
  Wednesday: {
    topic:'Expanding sentences — who, where, when phrases',
    nzLink:'Te Aho Arataki Marau — AO 1.5: Location · AO 2.4: Time · Grammar Level 1–2: Expanding noun phrases and adding circumstantial information',
    aos:[{code:'AO 1.5',label:'Location &amp; circumstance'},{code:'AO 2.4',label:'Time phrases in sentences'}],
    iDo:{
      title:'Tāua Kōrero — Packing more into every sentence',
      instruction:'This week you learned adverbs (how/when/where) and word building. Today we combine them — learning how to pack time, place, and participant information into a single rich sentence. Think of it like adding layers to a painting.',
      example:`Start bare:<br><b>Kei te ako ngā tamariki.</b><br>The children are learning.<br><br>Add WHERE:<br><b>Kei te ako ngā tamariki i te akomanga.</b><br>The children are learning in the classroom.<br><br>Add WHEN:<br><b>Ināianei kei te ako ngā tamariki i te akomanga.</b><br>Right now the children are learning in the classroom.<br><br>Add HOW:<br><b>Ināianei kei te ako kaha ngā tamariki i te akomanga.</b><br>Right now the children are learning hard in the classroom.<br><br>Add WHO WITH (using me — with):<br><b>Ināianei kei te ako kaha ngā tamariki me tō rātou kaiako i te akomanga.</b><br>Right now the children are learning hard with their teacher in the classroom.`,
      demo:`The layering order in a te reo Māori sentence:\n\n[TIME] + Kei te + [verb] + [manner] + [person/subject] + [with whom: me] + [where: i/ki]\n\nNew word: <b>me</b> (when meaning "with" — different from "me" meaning "and"!) \n→ <b>Kei te haere au me ōku hoa.</b> I am going with my friends.\n\nNew possessive: <b>tō rātou</b> = their (ō-category, three or more)\n<b>tā rātou</b> = their (ā-category, three or more)\n\nYou can always strip back to the bare sentence — the extra layers are optional. But adding even one layer makes your language significantly richer.`,
      tip:'Build sentences in layers — start bare, then add one piece at a time. You can always stop when it feels complete. More layers = more precise, but even two layers is a great sentence.',
    },
    weDo:{
      title:'Kia Tūhono — Layer by layer',
      instruction:'We will build one sentence together, adding a new layer with each step. Everyone contributes one layer.',
      sentences:[
        'Layer 1 — bare: <b>Kei te tākaro ngā tamariki.</b> The children are playing.',
        'Layer 2 — add where: <b>Kei te tākaro ngā tamariki i waho.</b> ...outside.',
        'Layer 3 — add how: <b>Kei te tākaro kaha ngā tamariki i waho.</b> ...hard outside.',
        'Layer 4 — add time at the start: <b>Ināianei kei te tākaro kaha ngā tamariki i waho.</b> Right now...',
      ],
      prompt:'At which layer did the sentence start to feel really alive? Was there a point where adding more felt like too much? What is the "just right" amount of information for a te reo sentence?',
    },
    youDo:{
      title:'Māu Anō — The layering challenge',
      instruction:'Take a bare sentence and build it up — then strip it back to find the best version.',
      tasks:[
        'Start with <b>Kei te kai ia.</b> Add three layers one at a time — write all four versions.',
        'Start with <b>Kei te kōrero ngā ākonga.</b> Add time, manner, and place.',
        'Now take your fullest sentence and remove layers until you have the most PRECISE version — not longest, best.',
        '✦ Bonus: Describe what is happening outside your window right now (real or imagined) in three sentences — bare, medium, and fully layered. Read all three aloud and decide which you prefer.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero hou mō tēnei wiki — This week in conversation',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Time and events · AO 2.3: Extended communication with reasons · AO 1.5: Location',
    aos:[{code:'AO 2.4',label:'Talking about events &amp; time'},{code:'AO 2.3',label:'Extended reasons &amp; opinions'}],
    iDo:{
      title:'Tāua Kōrero — Talking about your week',
      instruction:'Today we use everything from this week — adverbs, word-building words, layered sentences — in a real conversation about what has happened and what is coming up. This is the kind of conversation you might have with a friend on a Friday afternoon.',
      example:`<b>A:</b> Tēnā koe! He pēhea tōu wiki?<br><b>B:</b> He tino pai! I mahi kaha au i tēnei wiki. I ako au i ngā kupu hou e tino pai ana ki a au.<br><b>A:</b> He aha ngā mea hou i ako ai koe?<br><b>B:</b> I ako au i ngā tūāhua — pēnei i te "tere" me te "āta". Ka taea e au te kōrero ināianei me ērā kupu.<br><b>A:</b> Ka rawe! Āpōpō he aha āu mahi?<br><b>B:</b> Āpōpō ka haere tere au ki te hākinakina me ōku hoa. Ka tākaro kaha mātou i waho.<br><b>A:</b> He pai ake te hākinakina i te noho ki te kāinga ki a au!<br><b>B:</b> Āe! He tika tāu — engari he pai hoki te okioki!`,
      demo:`New words and phrases from this conversation:\n\n<b>He pēhea tōu wiki?</b> — How was your week?\n<b>e tino pai ana ki a au</b> — that I really liked / that are very good for me\n<b>ngā mea hou</b> — the new things\n<b>i ako ai koe</b> — that you learned (relative clause — more on this in Term 2!)\n<b>pēnei i te</b> — like / such as\n<b>Ka taea e au te kōrero</b> — I am able to speak\n<b>hākinakina</b> — sport / physical activity\n<b>okioki</b> — rest / to rest\n<b>ērā kupu</b> — those words (ērā = those, plural of tērā)\n\nNotice how the conversation uses adverbs naturally — tere, kaha, tino pai, ināianei, āpōpō, i waho. This is everything from this week embedded in real speech.`,
      tip:'He pēhea tōu wiki? — How was your week? Learn this cold. It is a conversation starter you will use every single Friday for the rest of the year.',
    },
    weDo:{
      title:'Kia Tūhono — Friday kōrero',
      instruction:'Build the "how was your week" conversation step by step. I start — you respond, then lead the next exchange.',
      sentences:[
        'I ask: <b>He pēhea tōu wiki?</b> You answer with at least two sentences — what you did and how (use an adverb).',
        'I ask: <b>He aha ngā mea hou i ako ai koe?</b> — What new things did you learn? Name something from this week using a kai- word if you can.',
        'I say something I liked: <b>I pai ki a au te ako i ngā tūāhua.</b> You agree or add your own view using <b>He tika tāu / Āe, engari…</b>',
        'Close: I ask <b>Āpōpō he aha āu mahi?</b> You tell me your plans — use āpōpō, a verb, and a place.',
      ],
      prompt:'He pēhea tōu wiki? is a question you could ask and answer every Friday in te reo. If you did that for the whole year, what do you think would happen to your fluency? Why does regular, short conversation practice matter more than occasional long study sessions?',
    },
    youDo:{
      title:'Māu Anō — Your own Friday kōrero',
      instruction:'With a partner, have a full "end of week" conversation using everything from Weeks 1–6.',
      tasks:[
        'Ask and answer: <b>He pēhea tōu wiki?</b> Both partners answer in at least three sentences.',
        'Each person shares one new thing they learned using a kai- or whaka- word.',
        'Make a plan for tomorrow using <b>Āpōpō ka…</b> — include a place and a manner adverb.',
        '✦ Bonus: Write up your full conversation as a dialogue — at least 8 lines. Use adverbs, word-building words, layered sentences, and the agree/disagree phrases from Week 5.',
      ],
    },
  },
}

const FRIDAY_QUIZ_W6 = [
  {day:'Monday',  q:'"Kei te haere tere ia." Where does the adverb "tere" sit in this sentence?',options:['Before the verb','After the verb and before the subject','At the start of the sentence','After the subject'],correct:1},
  {day:'Monday',  q:'"Inanahi i haere ia ki te kura." What type of adverb is "inanahi"?',options:['Manner — how she went','Place — where she went','Time — when she went','Degree — how much she went'],correct:2},
  {day:'Tuesday', q:'The prefix "kai-" in te reo Māori makes a word that means:',options:['to cause something to happen','a place where something happens','a person who does that action','the result of an action'],correct:2},
  {day:'Tuesday', q:'What does "whakapai" most likely mean?',options:['a person who is good','to make something better / improve','the goodness of something','a very good thing'],correct:1},
  {day:'Wednesday',q:'"Kei te haere au me ōku hoa." What does "me" mean in this sentence?',options:['and (joining two sentences)','but','with','also'],correct:2},
  {day:'Wednesday',q:'In a layered te reo sentence, where does a TIME word usually go?',options:['After the verb','After the subject','At the start of the sentence','At the very end'],correct:2},
  {day:'Thursday', q:'How do you ask "How was your week?" in te reo Māori?',options:['He aha tōu wiki?','Kei te pēhea tōu wiki?','He pēhea tōu wiki?','Ko wai tōu wiki?'],correct:2},
  {day:'Thursday', q:'"Ka taea e au te kōrero." What does this mean?',options:['I want to speak','I used to be able to speak','I am able to speak','I am speaking quickly'],correct:2},
]

const CURRICULUM_W7 = {
  Monday: {
    topic:'Ngā rārangi — Lists, colons, and ko ēnei/ko ērā',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Number and reference · AO 2.5: Vocabulary and description · Grammar Level 1–2: Ko ēnei/ko ērā, listing structures',
    aos:[{code:'AO 1.3',label:'Reference &amp; listing'},{code:'AO 2.5',label:'Descriptive vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Making lists and introducing them',
      instruction:'You have been building individual sentences well. Today we learn how to introduce a list of items — giving your listener a heads-up that several things are coming. In English you use a colon for this. Te reo Māori has its own elegant way of doing the same thing.',
      example:`<b>Ko ēnei</b> — these are (introducing a list of things near you)<br><b>Ko ērā</b> — those are (introducing a list of things away from you)<br><b>Ko ēnei ōku mea:</b> — These are my things:<br><br><b>Ko ēnei ōku mea: he pene, he pukapuka, he kete.</b><br>These are my things: a pen, a book, a bag.<br><br><b>Ko ērā ngā āhuatanga pai o tōku kura:</b><br>Those are the good things about my school:<br><b>he nui ngā hoa, he pai ngā kaiako, he ātaahua ngā papa tākaro.</b><br>there are many friends, the teachers are good, the playgrounds are beautiful.`,
      demo:`You already know tēnei/tēnā/tērā (this/that — singular).\nNow meet their PLURAL cousins:\n\n<b>ēnei</b> — these (plural of tēnei, near me)\n<b>ēnā</b> — those (plural of tēnā, near you)\n<b>ērā</b> — those (plural of tērā, away from both)\n\nWhen used with Ko to introduce a list:\n<b>Ko ēnei…</b> = These are… (here is the list)\n\nNew descriptive words for the list:\n<b>ātaahua</b> — beautiful / wonderful\n<b>papa tākaro</b> — playground\n<b>ngā kaiako</b> — the teachers (plural — you built kaiako from kai- in Week 6!)\n\nThe list items after the colon each start with <b>he</b> — just like individual He sentences, strung together with commas.`,
      tip:'Ko ēnei/ko ērā = "these are / those are" — use them whenever you want to introduce a list. Think of them as te reo\'s colon.',
    },
    weDo:{
      title:'Kia Tūhono — Build lists together',
      instruction:'I give you a topic — you introduce it with Ko ēnei or Ko ērā and then list three items.',
      sentences:[
        'Topic: things on your desk. → <b>Ko ēnei ōku mea i runga i tōku tēpu: he pene, he pukapuka, he aho.</b> (aho = ruler)',
        'Topic: the good things about te reo Māori. → <b>Ko ēnei ngā āhuatanga pai o te reo Māori: he ātaahua, he ngāwari, he tino pai hoki.</b>',
        'Now try Ko ērā — things on the far side of the room: <b>Ko ērā ngā mea i reira: he…, he…, he…</b>',
        'Challenge: use Ko ēnei to introduce a list of three things you did yesterday — use the past tense I for each item in the list.',
      ],
      prompt:'Ko ēnei works like a colon in English writing — it signals "here comes the list". Can you think of other situations in daily life where introducing a list first would be useful? When would Ko ērā be better than Ko ēnei?',
    },
    youDo:{
      title:'Māu Anō — List maker',
      instruction:'Use Ko ēnei or Ko ērā to introduce lists in te reo.',
      tasks:[
        'Write a Ko ēnei sentence introducing three things you like: <b>Ko ēnei ōku mea pai: he…, he…, he…</b>',
        'Write a Ko ērā sentence about three things you can see across the room.',
        'Write a list about your school using ātaahua, pai, and nui as describing words for each item.',
        '✦ Bonus: Write a "Ko ēnei ngā āhuatanga pai o…" paragraph about your town, your class, or your family. At least five items in your list.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā wā — Mixing past and present tense fluently',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Time · AO 2.3: Extended communication · Grammar Level 1–2: I (past) and Kei te (present) used in the same passage',
    aos:[{code:'AO 2.4',label:'Tense &amp; time'},{code:'AO 2.3',label:'Extended communication'}],
    iDo:{
      title:'Tāua Kōrero — Switching between past and present',
      instruction:'You know Kei te for now and I for the past. Real language constantly moves between tenses — you say what happened, then describe what is happening now, then say what you thought about it. Today we practise switching fluently without losing track of when things are happening.',
      example:`Watch how tenses shift in this short account:<br><br><b>Inanahi i haere au ki te hākinakina me ōku hoa.</b><br>Yesterday I went to sport with my friends.<br><br><b>I tākaro kaha mātou — he tino pai!</b><br>We played hard — it was very good!<br><br><b>Ināianei kei te ngenge au engari kei te hari hoki au.</b><br>Right now I am tired but I am also happy.<br><br><b>He pai ake te hākinakina i te noho ki te kāinga ki a au.</b><br>Sport is better than staying home in my opinion.`,
      demo:`The time word at the START of a sentence tells your listener which tense is coming:\n\n<b>Inanahi</b> (yesterday) → use <b>I</b>\n<b>Ināianei</b> (right now) → use <b>Kei te</b>\n<b>Āpōpō</b> (tomorrow) → use <b>Ka</b>\n\nNew word: <b>ngenge</b> — tired\nNew word: <b>hari</b> — happy / joyful\n\nThink of time words as SIGNALS — they prime your listener for the tense before the verb even arrives. This is why putting time words at the START is so powerful in te reo Māori.\n\nWhen there is NO time word, the tense marker (Kei te / I / Ka) does all the work on its own.`,
      tip:'Time word at the start = instant tense signal. Inanahi → I. Ināianei → Kei te. Āpōpō → Ka. Your listener knows what is coming before the verb.',
    },
    weDo:{
      title:'Kia Tūhono — Tense switching',
      instruction:'I will give you a sequence of events across two time periods. You build each sentence with the right tense marker.',
      sentences:[
        'Yesterday: you went to the shop. Now: you are eating what you bought. → <b>Inanahi i haere au ki te toa. Ināianei kei te kai au i tāku kai hou.</b>',
        'Yesterday: she was tired. Now: she is happy. → <b>Inanahi i ngenge ia. Ināianei kei te hari ia.</b>',
        'Yesterday: the children played outside. Now: they are sitting inside. → <b>Inanahi i tākaro ngā tamariki i waho. Ināianei kei te noho rātou i roto.</b>',
        'Now try WITHOUT time words — just the tense markers. Tell me two things that happened yesterday and one thing happening right now.',
      ],
      prompt:'In English we rely on verb endings to show tense — "played" vs "play". In te reo Māori the verb never changes — only the tense marker changes. Which system do you think is easier for a learner? Why?',
    },
    youDo:{
      title:'Māu Anō — Past and present',
      instruction:'Write a short account that moves between past and present — at least four sentences.',
      tasks:[
        'Write two past-tense sentences about something you did inanahi (yesterday).',
        'Write two present-tense sentences about what you are doing ināianei (right now).',
        'Combine them into a flowing four-sentence account — use time words to signal the switches.',
        '✦ Bonus: Write a six-sentence account of your day so far — start in the past (this morning), arrive in the present (right now), and end with a Ka sentence about what you will do next.',
      ],
    },
  },
  Wednesday: {
    topic:'Complex sentences — i te wā, ahakoa, mehemea',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication with reasons · Grammar Level 1–2: Subordinate clauses — when, although, if',
    aos:[{code:'AO 2.3',label:'Complex reasoning'},{code:'AO 2.4',label:'Time clauses'}],
    iDo:{
      title:'Tāua Kōrero — When, although, if — subordinate clauses',
      instruction:'Last week you learned to join sentences with ā, engari, and nō reira. Today we go one step further — subordinate clauses. These are mini sentences that add a condition, a time, or a concession to your main sentence. Three small words unlock a huge range of complex ideas.',
      example:`<b>i te wā</b> — when (referring to a time in the past or ongoing)<br><b>ahakoa</b> — although / even though<br><b>mehemea</b> — if / supposing that<br><br><b>I te wā i haere au ki te kura, i kite au i tōku hoa.</b><br>When I went to school, I saw my friend.<br><br><b>Ahakoa kei te ua, kei te tākaro ngā tamariki i waho.</b><br>Although it is raining, the children are playing outside.<br><br><b>Mehemea ka haere koe ki te toa, hoko mai he miraka māku.</b><br>If you go to the shop, buy some milk for me.`,
      demo:`The pattern for each:\n\n<b>i te wā</b> + [past clause] + , + [main clause]\n→ When [this happened], [that happened].\n\n<b>ahakoa</b> + [clause] + , + [main clause]\n→ Although [this is true], [this still happens].\n\n<b>mehemea</b> + [Ka clause] + , + [instruction or result]\n→ If [this happens], [then do/say this].\n\nNew words:\n<b>i kite</b> — saw / noticed (past of kite = see/find)\n<b>hoko mai</b> — buy and bring back (hoko = buy, mai = towards speaker)\n<b>māku</b> — for me (mā = for + ku = me)\n\nThese three words turn simple sentences into sophisticated ones — and they all work the same way: subordinate clause first, comma, main clause.`,
      tip:'Subordinate clause FIRST, then comma, then main clause. The smaller idea sets up the bigger one. Same rule for i te wā, ahakoa, and mehemea.',
    },
    weDo:{
      title:'Kia Tūhono — Build complex sentences',
      instruction:'I give you two simple sentences. You join them with i te wā, ahakoa, or mehemea — whichever fits.',
      sentences:[
        '"She was tired." + "She finished her work." — when? → <b>I te wā i ngenge ia, i mutu tonu tāna mahi.</b>',
        '"It is cold." + "We are swimming." — although? → <b>Ahakoa he makariri, kei te kaukau mātou.</b>',
        '"You go to the shop." + "Please buy bread." — if? → <b>Mehemea ka haere koe ki te toa, hoko mai he parāoa māku.</b>',
        'Now write your own: use ahakoa to say something surprising — something that happens DESPITE an obstacle.',
      ],
      prompt:'Ahakoa is particularly powerful — it signals that something unexpected is happening despite an obstacle. Think of a situation in your life right now where ahakoa would be the perfect word. Can you say it in te reo?',
    },
    youDo:{
      title:'Māu Anō — Subordinate clause challenge',
      instruction:'Write three complex sentences — one with each new subordinating word.',
      tasks:[
        'Write a sentence using <b>i te wā</b> about something that happened this week.',
        'Write a sentence using <b>ahakoa</b> about something surprising or unexpected.',
        'Write a sentence using <b>mehemea</b> — give someone a condition and an instruction.',
        '✦ Bonus: Write a four-sentence paragraph that uses all three: i te wā, ahakoa, and mehemea. Tell a mini-story that has a condition, a time clause, and a surprising twist.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō tērā rā — Telling a story about the past',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.4: Time and sequencing · AO 1.5: Location',
    aos:[{code:'AO 2.3',label:'Storytelling &amp; sequencing'},{code:'AO 2.4',label:'Past events &amp; time'}],
    iDo:{
      title:'Tāua Kōrero — Telling what happened',
      instruction:'Today we put this whole week together — lists, tense switching, and complex clauses — into a story about something that happened. Storytelling is one of the most important things you can do in any language. Listen to how these sentences flow.',
      example:`<b>Inanahi he rā tino pai.</b><br>Yesterday was a very good day.<br><br><b>I tīmata i te ata — i omaoma au i waho me ōku hoa.</b><br>It started in the morning — I ran outside with my friends.<br><br><b>I te wā i ngenge mātou, i hoki mātou ki roto ā i kai mātou.</b><br>When we were tired, we went back inside and ate.<br><br><b>Ko ēnei ngā mea i kainga e mātou: he parāoa, he āporo, he miraka.</b><br>These are the things we ate: bread, an apple, milk.<br><br><b>Ahakoa i makariri ā i ua hoki, he tino pai tō mātou rā.</b><br>Although it was cold and raining too, our day was very good.<br><br><b>Mehemea ka pērā anō āpōpō, ka haere anō mātou!</b><br>If it is the same again tomorrow, we will go again!`,
      demo:`Notice what this story does:\n1. Opens with a scene-setting sentence (He rā tino pai)\n2. Uses I te wā for the turning point\n3. Uses Ko ēnei to introduce a food list\n4. Uses ahakoa for the surprising twist\n5. Closes with mehemea — looking forward\n\nNew words:\n<b>i te ata</b> — in the morning\n<b>i tīmata</b> — it started / began\n<b>i kainga</b> — was eaten (passive — the eating happened TO the food)\n<b>e mātou</b> — by us (the agent after a passive verb)\n<b>pērā anō</b> — the same again / like that again\n<b>ka haere anō</b> — will go again`,
      tip:'Every good story has a beginning (scene-set), a middle (what happened, including a surprise or challenge), and an end (result or look forward). Use your subordinate clauses for the middle.',
    },
    weDo:{
      title:'Kia Tūhono — Build the story together',
      instruction:'We will build a shared class story about an imaginary school trip. I provide the skeleton — you fill in the details.',
      sentences:[
        'Open with a scene-setter: <b>Inanahi i haere mātou ki te…</b> (somewhere exciting — you choose the place).',
        'What happened first? Use I + verb + a time word: <b>I te ata, i… mātou.</b>',
        'Add a surprise using ahakoa: <b>Ahakoa…, i… tonu mātou.</b> Something went wrong but you carried on.',
        'Close with a Ko ēnei list of the best things about the trip, then a mehemea sentence about doing it again.',
      ],
      prompt:'Good storytellers control time — they slow down for the important parts and speed up through the routine ones. Which sentence in our story felt most important? How could you make it slower and more detailed using the tools you have?',
    },
    youDo:{
      title:'Māu Anō — Tāu kōrero — Your story',
      instruction:'Tell a story about something that actually happened to you recently — entirely in te reo Māori.',
      tasks:[
        'Write an opening scene-setter: one He or I sentence that sets the time and mood.',
        'Write the middle: at least two sentences using I, plus one i te wā or ahakoa sentence.',
        'Include a Ko ēnei or Ko ērā list somewhere in your story.',
        '✦ Bonus: Write your full story — at least six sentences. Use past tense throughout, include a complex clause, a list, and close with a mehemea or Ka sentence looking forward.',
      ],
    },
  },
}

const FRIDAY_QUIZ_W7 = [
  {day:'Monday',  q:'"Ko ēnei ōku mea: he pene, he pukapuka, he kete." What is the role of "Ko ēnei" here?',options:['It means "these things are bad"','It introduces a list — like a colon in English','It is a question asking what these things are','It means "I have a pen, book and bag"'],correct:1},
  {day:'Monday',  q:'What is the plural of tēnei?',options:['tēnā','tērā','ēnei','ēnā'],correct:2},
  {day:'Tuesday', q:'Which tense marker do you use after the time word "Inanahi"?',options:['Kei te','Ka','I','E…ana'],correct:2},
  {day:'Tuesday', q:'"Ināianei kei te hari ia." What does hari mean?',options:['tired','hungry','happy / joyful','cold'],correct:2},
  {day:'Wednesday',q:'"Ahakoa kei te ua, kei te tākaro ngā tamariki i waho." What does ahakoa signal?',options:['A time — when the rain started','A cause — the rain made them play','A contrast — they play DESPITE the rain','A condition — if it rains they will play'],correct:2},
  {day:'Wednesday',q:'"Mehemea ka haere koe ki te toa, hoko mai he miraka māku." What does māku mean?',options:['for you','for them','for me','for us'],correct:2},
  {day:'Thursday', q:'"I te wā i ngenge mātou, i hoki mātou ki roto." What is the function of "i te wā" here?',options:['It means although we were tired','It means if we are tired','It sets a time — WHEN we were tired, something happened','It means we were very tired'],correct:2},
  {day:'Thursday', q:'In a te reo story, which sentence type works best to open with a scene-setting mood?',options:['A mehemea (if) sentence','A He or I sentence that sets the time and feeling','A Ko ēnei list','A question using Ko wai'],correct:1},
]

const CURRICULUM_W8 = {
  Monday: {
    topic:'Ngā kupu ōrite — Words that sound alike',
    nzLink:'Te Aho Arataki Marau — AO 1.6: Politeness conventions · AO 2.5: Vocabulary development · Grammar Level 1–2: Distinguishing similar-sounding words, macrons',
    aos:[{code:'AO 2.5',label:'Vocabulary precision'},{code:'AO 1.6',label:'Clear communication'}],
    iDo:{
      title:'Tāua Kōrero — Words that trip people up',
      instruction:'As your vocabulary grows, you will notice some words look or sound very similar but mean completely different things. Today we look at the most common confusable pairs — and the key things that make them different. Pay close attention to the macrons (the long vowel marks) — they change everything.',
      example:`<b>wā</b> (long ā) — time / period / space<br><b>wa</b> (short a) — not a standard word on its own — macron matters!<br><br><b>kēmu</b> — game<br><b>kemu</b> — would not mean game without the macron<br><br><b>mō</b> — for / about / concerning<br><b>mo</b> — a type of lizard (unlikely but real!)<br><br><b>nō</b> — belonging to (ō-category possession)<br><b>nō</b> vs <b>nā</b> — ō vs ā category — these two trip everyone up<br><br><b>ō</b> — of (ō-category connector)<br><b>ā</b> — of (ā-category connector)<br><br><b>tōku</b> — my (ō-category)<br><b>tāku</b> — my (ā-category)`,
      demo:`The most important thing about macrons:\n\nA macron (the line over a vowel: ā ē ī ō ū) makes that vowel LONG — held twice as long as a short vowel. It is not just a spelling rule — it changes the MEANING of the word completely.\n\nMost confusable pairs in te reo come from:\n1. <b>Macron vs no macron</b>: keke (cake) vs kēkē (armpit!)\n2. <b>Ō vs ā category</b>: tōku vs tāku, nō vs nā\n3. <b>Similar-looking prepositions</b>: ki (to), i (at/past), o (of-ō), a (of-ā)\n\nA useful pair to know:\n<b>He aha tō ingoa?</b> — What is your name? (tō = your, short form of tōu)\n<b>He aha tā mahi?</b> — What is the work/task? (tā = the, ā-category)\n\nNew word: <b>keke</b> — cake · <b>kēkē</b> — armpit (classic example!)`,
      tip:'When in doubt about ō or ā — ask yourself: is this thing senior to me and connected to identity (ō), or is it something I control and do things with (ā)? That feeling will guide you right more often than not.',
    },
    weDo:{
      title:'Kia Tūhono — Spot the difference',
      instruction:'I will give you two similar-looking words or phrases. You tell me the difference and use each correctly in a sentence.',
      sentences:[
        '<b>tōku</b> vs <b>tāku</b> — which one for "my book"? Which for "my name"? → tāku pukapuka · tōku ingoa',
        '<b>nō</b> vs <b>nā</b> — "Whose is this house?" (house = senior, ō) → <b>Nō wai tēnei whare?</b> "Whose is this food?" (food = ā) → <b>Nā wai tēnei kai?</b>',
        '<b>ki</b> vs <b>i</b> — "I am going TO school" vs "I went FROM/AT school" → <b>Kei te haere au ki te kura</b> · <b>I te kura au inanahi</b>',
        '<b>keke</b> vs <b>kēkē</b> — "I want to eat the cake" → <b>Kei te hiahia au ki te kai i te keke.</b> (NOT kēkē — very different!)',
      ],
      prompt:'Why do you think macrons matter so much in te reo Māori? If you left the macron off "nō", what confusion might happen? Can you think of English words where a single letter changes the meaning completely — similar to how macrons work?',
    },
    youDo:{
      title:'Māu Anō — Precision practice',
      instruction:'Write sentences that deliberately use confusable words correctly.',
      tasks:[
        'Write two sentences — one using <b>tōku</b> correctly and one using <b>tāku</b> correctly.',
        'Write a sentence using <b>mō</b> (for/about): <b>He kōrero mō te kura tēnei.</b> (This is a talk about school.)',
        'Write a sentence using <b>ki</b> (to) and one using <b>i</b> (at/past location) — make them clearly different.',
        '✦ Bonus: Write a short paragraph (4 sentences) that includes tōku, tāku, nō, and mō — all used correctly. Underline each one.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā kupu tūāhua — Prepositions: i, ki, o, a, nō, mō, hei',
    nzLink:'Te Aho Arataki Marau — AO 1.5: Location · AO 2.2: Possessions · Grammar Level 1–2: Prepositions of location, direction, possession, purpose',
    aos:[{code:'AO 1.5',label:'Prepositions of location &amp; direction'},{code:'AO 2.2',label:'Prepositions of possession &amp; purpose'}],
    iDo:{
      title:'Tāua Kōrero — The small words that hold everything together',
      instruction:'Prepositions are the small words that show relationships between things — where something is, where it is going, who it belongs to, what it is for. In te reo Māori, a small set of prepositions does enormous work. Today we look at them all together so you can see the full picture.',
      example:`<b>i</b> — at (location in past) / from / by<br><b>ki</b> — to / towards / into<br><b>kei</b> — at (location right now)<br><b>o / ō</b> — of (ō-category possession/connection)<br><b>a / ā</b> — of (ā-category possession/connection)<br><b>nō</b> — belonging to (ō-category) / from (origin)<br><b>nā</b> — belonging to (ā-category) / by/through (agent)<br><b>mō</b> — for / about / concerning<br><b>mā</b> — for (ā-category recipient)<br><b>hei</b> — at (future location) / as / for (purpose)<br><b>ko</b> — identity marker (not a preposition but works like one)`,
      demo:`See them in action:\n\n<b>Kei te noho ia i Ōtautahi.</b> — She lives in Christchurch. (i = at, general location)\n<b>Kei te haere au ki Ōtautahi.</b> — I am going to Christchurch. (ki = to)\n<b>Kei Ōtautahi ia.</b> — She is in Christchurch right now. (kei = at, present)\n<b>He kōrero mō Aotearoa tēnei.</b> — This is a talk about New Zealand. (mō = about)\n<b>Hoko mai he miraka māku.</b> — Buy some milk for me. (mā = for, ā-recipient)\n<b>He taonga hei homai māu.</b> — A gift to give to you. (hei = for the purpose of)\n\nNew place name: <b>Ōtautahi</b> = Christchurch`,
      tip:'Ki = to (movement toward). Kei = at (present location, no movement). I = at (past) or from. Mō = about/for (ō things). Mā = for (ā recipient). These five do 90% of the work.',
    },
    weDo:{
      title:'Kia Tūhono — Fill the gap',
      instruction:'I give you a sentence with a gap — you choose the right preposition.',
      sentences:[
        '"I am going ___ school." Moving toward → <b>ki</b> → <b>Kei te haere au ki te kura.</b>',
        '"She is ___ the shop right now." Present location → <b>kei</b> → <b>Kei te toa ia.</b>',
        '"This book is ___ you." For a recipient (ā) → <b>māu</b> → <b>He pukapuka māu tēnei.</b>',
        '"He is speaking ___ te reo Māori." About/concerning → <b>mō</b> → <b>Kei te kōrero ia mō te reo Māori.</b>',
      ],
      prompt:'English has dozens of prepositions — at, in, on, to, for, about, by, with, from, through… Te reo Māori does the same work with about seven. How does a smaller set of prepositions make a language easier or harder to learn?',
    },
    youDo:{
      title:'Māu Anō — Preposition challenge',
      instruction:'Use six different prepositions from today in six different sentences.',
      tasks:[
        'Write sentences using <b>ki</b>, <b>kei</b>, and <b>i</b> — make the difference between them clear.',
        'Write a sentence using <b>mō</b> about something you care about.',
        'Write a sentence using <b>māku</b> or <b>māu</b> — something for you or me.',
        '✦ Bonus: Write a short paragraph (5 sentences) about your day that uses at least five different prepositions. Underline each preposition and name it.',
      ],
    },
  },
  Wednesday: {
    topic:'Ngā kupu matua i mua — Fronted time and place phrases',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Time · AO 1.5: Location · Grammar Level 1–2: Fronted adverbials — time and place phrases at the start of sentences',
    aos:[{code:'AO 2.4',label:'Fronted time phrases'},{code:'AO 1.5',label:'Fronted place phrases'}],
    iDo:{
      title:'Tāua Kōrero — Put time and place first for impact',
      instruction:'In Week 6 you learned that time words can go at the start of a sentence. Today we go deeper — putting whole TIME PHRASES and PLACE PHRASES at the front, not just single words. This is called fronting, and it is one of the most powerful tools for creating rhythm and emphasis in your te reo.',
      example:`Single time word at front (Week 6):<br><b>Āpōpō ka haere au ki te toa.</b><br>Tomorrow I will go to the shop.<br><br>Full time PHRASE at front:<br><b>I te ahiahi o tērā rā, i haere au ki te toa.</b><br>In the afternoon of that day, I went to the shop.<br><br>Place PHRASE at front:<br><b>I Ōtautahi, i noho mātou i tētahi whare nui.</b><br>In Christchurch, we stayed in a big house.<br><br>Both together:<br><b>I te ata o te Mane, i roto i te kura, i ako ngā tamariki i te reo Māori.</b><br>On Monday morning, inside the school, the children learned te reo Māori.`,
      demo:`The pattern for a fronted time phrase:\n<b>I te [time word/period] o [day/event],</b> + [main sentence]\n\nUseful time phrase builders:\n<b>i te ata</b> — in the morning\n<b>i te ahiahi</b> — in the afternoon/evening\n<b>i te pō</b> — at night\n<b>i te tīmatanga</b> — at the beginning\n<b>i te mutunga</b> — at the end\n<b>i tērā wiki</b> — last week\n<b>i tēnei rā</b> — today / on this day\n\nThe pattern for a fronted place phrase:\n<b>I [place],</b> + [main sentence]\n\nThe comma after the fronted phrase signals to the listener: "scene set — now here comes the main action."`,
      tip:'Front-loading gives your listener the CONTEXT before the action. It is like setting the stage before the actors enter. Always add a comma after a fronted phrase.',
    },
    weDo:{
      title:'Kia Tūhono — Front it!',
      instruction:'I give you a plain sentence. You move the time or place phrase to the front and add a comma.',
      sentences:[
        'Plain: "I learned te reo in the morning." → Front the time: <b>I te ata, i ako au i te reo Māori.</b>',
        'Plain: "The children played outside yesterday." → Front the time: <b>Inanahi, i tākaro ngā tamariki i waho.</b>',
        'Plain: "We ate in the classroom at lunchtime." → Front the place: <b>I roto i te akomanga, i kai mātou i te tina.</b>',
        'Now try both — front the time AND place: "At the end of school, in the hall, we sang a waiata." → <b>I te mutunga o te kura, i roto i te whare hui, i waiata mātou.</b>',
      ],
      prompt:'Read these two versions aloud: "I went to school in the morning yesterday" vs "Inanahi, i te ata, i haere au ki te kura." Which feels more dramatic? Why does putting time and place first change the feel of a sentence?',
    },
    youDo:{
      title:'Māu Anō — Front-loaded sentences',
      instruction:'Write sentences that open with a time or place phrase.',
      tasks:[
        'Write two sentences with fronted TIME phrases — use i te ata and i te ahiahi.',
        'Write two sentences with fronted PLACE phrases — use i roto i te kura and i waho.',
        'Write one sentence with BOTH a fronted time phrase AND a fronted place phrase.',
        '✦ Bonus: Rewrite this bare sentence with as much fronted detail as you can: "We played." Aim for a sentence that paints a complete picture of when, where, and how — all before the main verb.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō tōku kāinga — Talking about home',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Personal information · AO 2.2: Possessions · AO 2.5: Descriptions · AO 1.5: Location',
    aos:[{code:'AO 1.4',label:'Personal information &amp; home'},{code:'AO 2.5',label:'Describing your home'}],
    iDo:{
      title:'Tāua Kōrero — Describing where you live',
      instruction:'This week you learned confusable words, prepositions, and fronted phrases. Today we use all three in a conversation about home — where you live, what it is like, and what happens there. This is deeply personal language — the kind that helps you really connect with someone.',
      example:`<b>A:</b> Nō hea koe?<br><b>B:</b> Nō Ōtautahi ahau. He tāone nui, he ātaahua hoki.<br><b>A:</b> Kei hea tō kāinga i ināianei?<br><b>B:</b> Kei te taha o te awa tōku kāinga. He whare hou, he whare māmā hoki.<br><b>A:</b> He aha ngā mea pai o tō wāhi noho?<br><b>B:</b> Ko ēnei ngā mea pai: he nui ngā rākau, he mārie te noho, ā he tata ki te kura hoki.<br><b>A:</b> Ka pai! I te ahiahi, he aha āu mahi i tō kāinga?<br><b>B:</b> I te ahiahi, i te māra, ka mahi au. Ka tiaki hoki au i ngā kararehe o mātou.`,
      demo:`New words from this conversation:\n<b>tāone</b> — town / city\n<b>te taha o</b> — the side of / beside\n<b>awa</b> — river\n<b>māmā</b> — light / easy (also: mild earlier) — context tells you which\n<b>wāhi noho</b> — place of living / neighbourhood\n<b>rākau</b> — tree / trees\n<b>tata</b> — close / nearby\n<b>māra</b> — garden\n<b>tiaki</b> — to look after / guard\n<b>kararehe</b> — animal / pet\n\nNotice the fronted phrase at the end: <b>I te ahiahi</b> — in the afternoon. It sets the time before the action. And <b>ko ēnei ngā mea pai</b> from Week 7 — introducing a list of good things.`,
      tip:'Nō hea koe? = Where are you from? Kei hea tō kāinga? = Where is your home right now? Two different questions — know which one you are answering.',
    },
    weDo:{
      title:'Kia Tūhono — Describe your home',
      instruction:'Build the home conversation piece by piece. I ask — you answer using this week\'s structures.',
      sentences:[
        'I ask: <b>Nō hea koe?</b> You answer with your town/city and one He description of it.',
        'I ask: <b>Kei hea tō kāinga?</b> Use a preposition and a location: <b>Kei te taha o te…</b> or <b>Kei roto i te…</b>',
        'I ask: <b>He aha ngā mea pai o tō wāhi noho?</b> Use Ko ēnei to introduce a list of three good things.',
        'I ask: <b>I te ahiahi, he aha āu mahi?</b> Answer with a fronted time phrase and two activities.',
      ],
      prompt:'Your home and where you are from is deeply connected to your identity in te ao Māori. The pepeha from Week 4 connected you to mountains, rivers, and iwi. How does today\'s conversation connect to that same idea — that place and identity are inseparable?',
    },
    youDo:{
      title:'Māu Anō — He kōrero mō tōku kāinga',
      instruction:'Write a full description of your home and neighbourhood in te reo Māori.',
      tasks:[
        'Write where you are from and one thing that makes your town special: <b>Nō… ahau. He…</b>',
        'Write where your home is using a preposition: <b>Kei te taha o / Kei roto i / Kei tata ki…</b>',
        'Use Ko ēnei to list three good things about your neighbourhood.',
        '✦ Bonus: Write a six-sentence paragraph about your home using: a fronted time phrase, a Ko ēnei list, at least three prepositions, and one confusable word pair used correctly (tōku/tāku or nō/nā).',
      ],
    },
  },
}

const FRIDAY_QUIZ_W8 = [
  {day:'Monday',  q:'What is the difference between "keke" and "kēkē" in te reo Māori?',options:['They are spelling variations of the same word','keke = cake, kēkē = armpit — the macron completely changes the meaning','keke is formal, kēkē is informal','kēkē is the plural of keke'],correct:1},
  {day:'Monday',  q:'Which possessive would you use for "my school"? (kura is ō-category)',options:['tāku kura','nāku kura','tōku kura','māku kura'],correct:2},
  {day:'Tuesday', q:'"Kei te haere au ki te kura." Which preposition shows movement TOWARD a place?',options:['kei','i','ki','o'],correct:2},
  {day:'Tuesday', q:'"He pukapuka māu tēnei." What does māu mean?',options:['for me','for him/her','for you','for us'],correct:2},
  {day:'Wednesday',q:'"I te ata, i ako au i te reo Māori." What is the purpose of putting "i te ata" at the front?',options:['It makes the sentence shorter','It sets the time context before the main action — fronting for impact','It is a grammar rule that verbs must come last','It replaces the need for a tense marker'],correct:1},
  {day:'Wednesday',q:'What punctuation always follows a fronted time or place phrase in te reo Māori?',options:['A full stop','A semicolon','A comma','A colon'],correct:2},
  {day:'Thursday', q:'"Nō hea koe?" vs "Kei hea tō kāinga?" — what is the difference?',options:['They mean exactly the same thing','Nō hea asks where you are from (origin), Kei hea asks where your home is right now (location)','Nō hea is formal, Kei hea is casual','Nō hea asks about the future, Kei hea asks about the past'],correct:1},
  {day:'Thursday', q:'What does "kararehe" mean?',options:['garden','tree','animal / pet','neighbour'],correct:2},
]

const CURRICULUM_W9 = {
  Monday: {
    topic:'Ngā kupu oro — Sound words and vivid language',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Descriptive and figurative language · AO 2.3: Expressive communication · Grammar Level 1–2: Onomatopoeia, sound imagery, expressive vocabulary',
    aos:[{code:'AO 2.5',label:'Vivid &amp; expressive vocabulary'},{code:'AO 2.3',label:'Expressive communication'}],
    iDo:{
      title:'Tāua Kōrero — Words that sound like what they mean',
      instruction:'Some of the most powerful words in any language are ones that imitate sounds or carry a strong physical feeling. Te reo Māori is rich with these — words that bring a scene alive the moment you hear them. Today we collect the best ones and learn to use them deliberately.',
      example:`<b>ngunguru</b> — to growl / rumble (deep sound)<br><b>hūhū</b> — to hum / buzz (insect or engine)<br><b>pakū</b> — to bang / explode / crack<br><b>ngāoro</b> — to roar / rushing sound of water or wind<br><b>tangi</b> — to cry / sound of weeping (also: funeral / to ring)<br><b>kō</b> — the sound of a bird call<br><b>oro</b> — sound / noise in general<br><b>papā</b> — to slap / crack loudly<br><b>hūpē</b> — runny, dripping (wet sound)<br><b>hau</b> — wind / breath / spirit`,
      demo:`These words do double work — they describe AND create the sound at the same time.\n\nIn a sentence:\n<b>I ngunguru te whatitoka i te hau kino.</b>\nThe door growled/rumbled in the fierce wind.\n\n<b>Ka pakū te whatitoka i tōna tūkitanga.</b>\nThe door cracked/banged at its closing.\n\n<b>I tangi ngā tamariki ā te pō.</b>\nThe children cried through the night.\n\nNew words:\n<b>whatitoka</b> — door\n<b>hau kino</b> — fierce wind / bad weather\n<b>tūkitanga</b> — a striking / closing / impact\n\nYou can also pair these sound words with tino for intensity:\n<b>He tino ngāoro te awa i te ua nui.</b>\nThe river roared greatly in the heavy rain.`,
      tip:'Sound words wake a listener up. Drop one into a sentence and the whole thing comes alive. Use them sparingly — one per paragraph is enough.',
    },
    weDo:{
      title:'Kia Tūhono — Bring the scene alive',
      instruction:'I describe a scene — you choose a sound word that fits and build a sentence around it.',
      sentences:[
        'Scene: a storm outside at night. Which sound word fits? → ngāoro, hau, pakū → <b>I ngāoro te ua i te pō — he pakū hoki te uira.</b>',
        'Scene: a dog in the yard early morning. → <b>I ngunguru te kurī i te ata.</b> (kurī = dog)',
        'Scene: a child who has hurt themselves. → <b>I tangi kaha te tamaiti — i rongo ia i te mamae.</b> (rongo = feel, mamae = pain)',
        'Now you make one: pick a sound word and describe something you heard today using it in a Kei te or I sentence.',
      ],
      prompt:'English has onomatopoeia like "buzz", "crash", "splash". Which of today\'s te reo sound words do you think sounds most like what it means? Why do you think languages around the world independently develop words that imitate sounds?',
    },
    youDo:{
      title:'Māu Anō — Sound sentences',
      instruction:'Use sound words deliberately to make your writing vivid.',
      tasks:[
        'Write three sentences — each one using a different sound word from today.',
        'Take this bare sentence and add a sound word: "The wind came." → Make it vivid.',
        'Describe your school at lunchtime using at least two sound words.',
        '✦ Bonus: Write a six-sentence scene — morning at your home, or a storm, or a sports match — using at least three sound words. Read it aloud. Does it sound alive?',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā kupu hono katoa — All conjunctions: ā, engari, nō reira, ahakoa, mehemea, i te wā',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · Grammar Level 1–2: Full range of coordinating and subordinating conjunctions',
    aos:[{code:'AO 2.3',label:'Conjunctions &amp; complex sentences'},{code:'AO 2.5',label:'Connecting ideas'}],
    iDo:{
      title:'Tāua Kōrero — Your full conjunction toolkit',
      instruction:'Across this term you have learned conjunctions one by one. Today we gather them all in one place, compare them side by side, and practise choosing the right one deliberately. By the end of this lesson you should be able to join any two ideas in te reo Māori.',
      example:`<b>Coordinating (joining equal ideas):</b><br><b>ā</b> — and then / and (sequence or addition)<br><b>engari</b> — but (contrast)<br><b>nō reira</b> — so / therefore (result)<br><b>me</b> — and / with (linking nouns or people)<br><br><b>Subordinating (one idea depends on the other):</b><br><b>nō te mea / nā te mea</b> — because (reason)<br><b>ahakoa</b> — although / even though (concession)<br><b>mehemea</b> — if / supposing (condition)<br><b>i te wā</b> — when (time clause, past)<br><b>ā tōnā wā</b> — when (future — when the time comes)`,
      demo:`See them all in action in one connected passage:\n\n<b>I haere au ki te kura i te ata, ā i ako mātou i te reo Māori.</b>\nI went to school in the morning, and then we learned te reo Māori.\n\n<b>I te wā i mutu te akoranga, i tākaro mātou i waho.</b>\nWhen the lesson finished, we played outside.\n\n<b>Ahakoa i ua, i tākaro tonu mātou.</b>\nAlthough it rained, we kept playing.\n\n<b>I ngenge au nō reira i hoki au ki te kāinga.</b>\nI was tired so I went home.\n\n<b>Mehemea ka pērā anō āpōpō, ka haere anō au.</b>\nIf it is the same again tomorrow, I will go again.\n\nFive conjunctions, one story. Every sentence connected.`,
      tip:'Ask yourself before you write: am I ADDING (ā/me), CONTRASTING (engari/ahakoa), SHOWING A RESULT (nō reira), giving a REASON (nō te mea), a CONDITION (mehemea), or a TIME (i te wā)? The answer tells you which conjunction to reach for.',
    },
    weDo:{
      title:'Kia Tūhono — Choose the right conjunction',
      instruction:'I give you two ideas. You choose the conjunction that shows the right relationship and join them.',
      sentences:[
        '"She was tired." + "She finished the work." Time relationship → <b>i te wā</b> → <b>I te wā i ngenge ia, i mutu tonu tāna mahi.</b>',
        '"I want to swim." + "It is cold." Contrast → <b>ahakoa</b> → <b>Ahakoa he makariri, kei te hiahia au ki te kaukau.</b>',
        '"He worked hard." + "He won." Result → <b>nō reira</b> → <b>I mahi kaha ia nō reira i toa ia.</b> (toa = win)',
        'Now your turn: give me two ideas. The class decides which conjunction fits — and WHY.',
      ],
      prompt:'Can you use the wrong conjunction and still be understood? Yes — but it changes the meaning. "I mahi kaha ia ā i toa ia" (he worked hard AND won) vs "i toa ia nō reira i mahi kaha ia" (he won, therefore he worked hard) — very different stories. Which conjunction you choose SHAPES the meaning.',
    },
    youDo:{
      title:'Māu Anō — Conjunction challenge',
      instruction:'Write one sentence using each conjunction. Make each one clearly different.',
      tasks:[
        'Write sentences using <b>ā</b>, <b>engari</b>, and <b>nō reira</b> — one each.',
        'Write sentences using <b>ahakoa</b>, <b>mehemea</b>, and <b>i te wā</b> — one each.',
        'Write a four-sentence mini-story that uses at least three different conjunctions naturally.',
        '✦ Bonus: Write a full paragraph (6–8 sentences) about something that happened this term. Use every conjunction from today at least once. Underline each one and label which type it is.',
      ],
    },
  },
  Wednesday: {
    topic:'He kōrero tūhono — Paragraph cohesion in te reo',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended and structured communication · Grammar Level 1–2: Paragraph structure, topic sentences, pronoun links, connective flow',
    aos:[{code:'AO 2.3',label:'Cohesion &amp; paragraph structure'},{code:'AO 1.7',label:'Structured written language'}],
    iDo:{
      title:'Tāua Kōrero — Making paragraphs flow',
      instruction:'You can write great individual sentences. Today we work on how sentences CONNECT — how a paragraph flows so that each sentence leads naturally into the next. In te reo Māori, there are three main tools for cohesion: pronoun links, connective words, and sentence echoing.',
      example:`WEAK — no flow:<br><b>He pai tōku kura. He nui ngā ākonga. He kaiako pai tōku kaiako. I ako ngā ākonga i te reo Māori.</b><br><br>STRONG — connected:<br><b>He pai tōku kura nō te mea he nui ngā ākonga. Ko rātou ngā tamariki māhoe o tō mātou hapori. I ako rātou i te reo Māori i tēnei wiki, ā i tino pai tā rātou mahi. Nō reira, he kura tino motuhake tōku kura.</b>`,
      demo:`Three tools for paragraph cohesion:\n\n<b>1. Pronoun links</b> — replace a noun with a pronoun so you don't repeat the noun:\n"ngā ākonga… Ko rātou… I ako rātou…"\n(the students… They are… They learned…)\n\n<b>2. Connective words</b> — signal the relationship between sentences:\nnō reira (therefore), ā (and then), engari (but), nō te mea (because)\n\n<b>3. Sentence echoing</b> — repeat a key word or idea to tie sentences together:\n"He pai tōku kura… he kura tino motuhake tōku kura."\n(My school is good… my school is truly special.)\n\nNew words:\n<b>māhoe</b> — talented / bright\n<b>hapori</b> — community\n<b>motuhake</b> — special / unique / independent`,
      tip:'After writing each sentence, ask: does this connect to what came before? If you had to jump to a new idea, use a connective. If you mentioned a noun, replace it with a pronoun next time. If you want to land a final point, echo your opening.',
    },
    weDo:{
      title:'Kia Tūhono — Fix the paragraph',
      instruction:'I give you a weak, disconnected paragraph. We improve it together — one sentence at a time.',
      sentences:[
        'Sentence 1 is fine: <b>He pai tōku kura.</b> Sentence 2 repeats the noun: "He nui ngā ākonga o tōku kura." → Replace with a pronoun: <b>He nui ō rātou kaha.</b> (There is much ability among them.)',
        'Sentence 3 has no connective: "I ako ngā ākonga." → Add one: <b>I tēnei wiki, i ako rātou i ngā kupu hou.</b>',
        'Sentence 4 needs to land with an echo: "He kura pai." → Echo the opening: <b>Nō reira, he kura tino motuhake tōku kura.</b>',
        'Now read the full improved paragraph aloud together. Can you feel the difference in how it flows?',
      ],
      prompt:'A paragraph should feel like a conversation where each sentence responds to the last. Which of the three cohesion tools — pronoun links, connectives, or echoing — do you think is the most powerful? Why?',
    },
    youDo:{
      title:'Māu Anō — Write a cohesive paragraph',
      instruction:'Write a full paragraph in te reo Māori that flows from beginning to end.',
      tasks:[
        'Write a topic sentence using <b>He</b> or <b>Ko</b> about your class, school, or something you care about.',
        'Write two or three supporting sentences — use pronoun links to avoid repeating nouns.',
        'Add a connective (nō reira / ā / engari) before one of your sentences.',
        '✦ Bonus: Write a full five-sentence paragraph and deliberately use all three cohesion tools — pronoun link, connective, and sentence echo. Highlight each tool in a different colour.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He arotake — Looking back, moving forward',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 1.1: Greetings · AO 2.5: Expressive vocabulary · AO 1.4: Personal information',
    aos:[{code:'AO 2.3',label:'Reflection &amp; extended kōrero'},{code:'AO 2.5',label:'Expressive vocabulary review'}],
    iDo:{
      title:'Tāua Kōrero — Reflecting on what you have learned',
      instruction:'This is the second-to-last week of Term 1. Today we use everything you have built — vivid words, conjunctions, cohesion — in a reflective conversation about your learning journey this term. This kind of reflective language is important in te ao Māori and in life.',
      example:`<b>A:</b> He pēhea tōu whakaaro mō tēnei wiki?<br><b>B:</b> He tino pai ki a au tēnei wiki. I ako au i ngā kupu oro — pēnei i te "ngunguru" me te "pakū". Ka taea e au te whakamahi i ērā kupu ināianei.<br><b>A:</b> He aha te mea i uaua ki a koe?<br><b>B:</b> I uaua ki a au ngā kupu tūhono — engari ināianei, ka mārama ana au ki a rātou.<br><b>A:</b> He aha tāu whainga mō te kāhui o tērā wiki?<br><b>B:</b> Ko tāku whainga: ka ako au i ngā kupu arataki katoa o Wīki 10 — ā ka kōrero māmā au i te reo Māori!<br><b>A:</b> Ka pai tāu whakaaro! He ātaahua tō ara ako.`,
      demo:`New words and phrases for reflection:\n\n<b>whakaaro</b> — thought / opinion / idea\n<b>He aha tāu whakaaro mō…?</b> — What do you think about…?\n<b>Ka taea e au te…</b> — I am able to… / I can now…\n<b>Ka mārama ana au</b> — I understand / I am understanding\n<b>i uaua ki a au</b> — it was difficult for me\n<b>whainga</b> — goal / aim / target\n<b>arataki</b> — to guide / lead\n<b>ara ako</b> — learning pathway / journey\n<b>He ātaahua tō ara ako.</b> — Your learning journey is beautiful.\n\nNotice: <b>ka… ana</b> is a continuous present form — "I am (currently) understanding." It implies the understanding is ongoing and growing.`,
      tip:'Ka taea e au te kōrero i te reo Māori — I am able to speak te reo Māori. Learn this sentence cold. Say it at the start of every te reo session for the rest of the year.',
    },
    weDo:{
      title:'Kia Tūhono — Reflect together',
      instruction:'We have a structured reflection conversation. I ask — you answer honestly, then ask me back.',
      sentences:[
        'I ask: <b>He aha te mea i pai rawa atu ki a koe i tēnei wāhanga?</b> (What did you like most this term?) Answer with at least two sentences.',
        'I ask: <b>He aha te mea i uaua ki a koe?</b> (What was difficult for you?) Use <b>i uaua ki a au… engari…</b> to show you overcame it.',
        'I ask: <b>Ka taea e koe te kōrero i te reo Māori ināianei?</b> (Can you speak te reo Māori now?) Answer using <b>Ka taea e au te…</b> + three things you can do.',
        'Close: state your goal for Week 10 — <b>Ko tāku whainga mō tērā wiki:</b> + your aim.',
      ],
      prompt:'He ātaahua tō ara ako. What does it mean to say your learning journey is beautiful? In te ao Māori, learning is not just about knowledge — it connects you to people, to land, and to identity. How has learning te reo Māori this term connected you to something bigger than just words?',
    },
    youDo:{
      title:'Māu Anō — Tōu ara ako — Your learning journey',
      instruction:'Write a reflective piece about your learning this term — entirely in te reo Māori.',
      tasks:[
        'Write two sentences about what you can do now that you couldn\'t do in Week 1. Use <b>Ka taea e au te…</b>',
        'Write one sentence about something that was difficult using <b>i uaua ki a au… engari…</b>',
        'Write your goal for Week 10 using <b>Ko tāku whainga:</b>',
        '✦ Bonus: Write a full reflective paragraph (6 sentences) about your Term 1 journey. Use a topic sentence, pronoun links, a conjunction, and close with an echo of your opening. Share it with a partner.',
      ],
    },
  },
}

const FRIDAY_QUIZ_W9 = [
  {day:'Monday',  q:'Which te reo Māori word best describes a deep rumbling or growling sound?',options:['tangi','pakū','ngunguru','hūhū'],correct:2},
  {day:'Monday',  q:'"I tangi ngā tamariki ā te pō." What does tangi mean in this context?',options:['the children laughed through the night','the children cried through the night','the children played through the night','the children slept through the night'],correct:1},
  {day:'Tuesday', q:'Which conjunction would you use to show a RESULT or CONCLUSION?',options:['ā','ahakoa','nō reira','i te wā'],correct:2},
  {day:'Tuesday', q:'"Ahakoa i ua, i tākaro tonu mātou." What relationship does ahakoa show?',options:['a time — when it rained we played','a result — because it rained we played','a concession — DESPITE the rain, we still played','a condition — if it rains we will play'],correct:2},
  {day:'Wednesday',q:'What is "sentence echoing" in a paragraph?',options:['Saying the same sentence twice in a row','Repeating a key word or idea at the end to connect back to the opening','Using the same verb in every sentence','Writing sentences that are all the same length'],correct:1},
  {day:'Wednesday',q:'What does "motuhake" mean?',options:['difficult','tired','special / unique / independent','beautiful'],correct:2},
  {day:'Thursday', q:'"Ka taea e au te kōrero i te reo Māori." What does this sentence mean?',options:['I want to speak te reo Māori','I used to be able to speak te reo Māori','I am able to speak te reo Māori','I am learning to speak te reo Māori'],correct:2},
  {day:'Thursday', q:'What does "whainga" mean?',options:['thought / opinion','learning journey','goal / aim / target','community'],correct:2},
]

const CURRICULUM_W10 = {
  Monday: {
    topic:'Arotake — Term 1 vocabulary and pronunciation review',
    nzLink:'Te Aho Arataki Marau — AO 1.1: Greetings · AO 1.3: Numbers · AO 2.5: Full vocabulary review · All Level 1–2 AOs consolidated',
    aos:[{code:'AO 1.1',label:'Greetings review'},{code:'AO 2.5',label:'Vocabulary consolidation'}],
    iDo:{
      title:'Tāua Kōrero — Everything we know: vocabulary celebration',
      instruction:'This is the final week of Term 1. Today we celebrate how much vocabulary you have built — from simple greetings in Week 1 to vivid sound words and reflective language in Week 9. We are going to do a full vocabulary review, organised by theme, and find the gaps worth filling before the end of term.',
      example:`<b>GREETINGS &amp; FAREWELL</b> (Week 1)<br>Kia ora · Tēnā koe · Tēnā koutou katoa · E noho rā · Hei konā rā<br><br><b>PEOPLE &amp; IDENTITY</b> (Weeks 1–2, 4)<br>au · koe · ia · tāua · mātou · tātou · Ko [name] tōku ingoa · Nō [place] ahau<br><br><b>FOOD &amp; DRINK</b> (Week 2)<br>āporo · panana · parāoa · miraka · wai · tī · keke<br><br><b>ACTIONS</b> (Weeks 1, 3, 6)<br>haere · kai · inu · ako · kōrero · tākaro · mahi · pānui · tuhituhi · omaoma · kaukau<br><br><b>PLACES</b> (Weeks 3–4, 8)<br>kura · kāinga · toa · awa · roto · māra · akomanga<br><br><b>DESCRIPTIONS</b> (Weeks 2, 5, 7)<br>nui · iti · roa · poto · pai · kino · ātaahua · tino · ake · rawa atu<br><br><b>TIME</b> (Weeks 6–8)<br>ināianei · āpōpō · inanahi · i te ata · i te ahiahi · i te pō`,
      demo:`Let's count what you know:\n\n✓ Greetings: 5+ phrases\n✓ Personal pronouns: 8 (au, koe, ia, māua, tāua, mātou, tātou, koutou…)\n✓ Verbs/actions: 12+\n✓ Nouns (places, food, objects): 20+\n✓ Adjectives: 10+\n✓ Numbers: 1–100\n✓ Question words: 11\n✓ Conjunctions: 7\n✓ Prepositions: 8\n✓ Time expressions: 8+\n✓ Possessives: 6 (tōku, tāku, tōu, tāu, tōna, tāna)\n\nThat is well over 100 pieces of te reo Māori in 9 weeks.\n<b>Ka rawe!</b>`,
      tip:'The fastest way to review vocabulary is to use it — not read it. Close the list and try to say everything from memory. What comes easily? What do you need to look at again? That gap is your target.',
    },
    weDo:{
      title:'Kia Tūhono — Vocabulary blitz',
      instruction:'Speed round — I call a category, you give me as many words as you can. Class builds the list together on the board.',
      sentences:[
        'ACTIONS: How many verbs can we list in 60 seconds? Aim for 10+. Teacher writes each one on the board.',
        'DESCRIPTIONS: Call out every adjective you know — including the comparison forms (ake, rawa atu, tino).',
        'QUESTION WORDS: Can someone recite all 11 question words from memory? Ko wai, He aha, Kei hea…',
        'WILD CARD: Say a sentence using a word from EACH category — greetings, action, description, time, place — all in one sentence.',
      ],
      prompt:'Look at everything on the board. Which category surprised you — you know more than you thought? Which category has the most gaps? Set yourself a personal target: I will learn ___ more words from ___ category before the end of this week.',
    },
    youDo:{
      title:'Māu Anō — Personal vocabulary audit',
      instruction:'Do a personal review of your own vocabulary knowledge.',
      tasks:[
        'Without looking at the list: write down every te reo Māori word you can remember in 3 minutes. Count them.',
        'Go back to Week 1 in your mind — what are the five most important things you learned that week? Write them.',
        'Write the one word or phrase from this term that you find most useful. Write three sentences using it.',
        '✦ Bonus: Create your own personal "Term 1 kupu list" — organised by category, from memory. Then check it against the lesson summaries. What did you miss? What did you remember perfectly?',
      ],
    },
  },
  Tuesday: {
    topic:'Arotake — Term 1 grammar review',
    nzLink:'Te Aho Arataki Marau — All Grammar Level 1–2 structures consolidated: Kei te, I, Ka, Ko, He, Kāore, possessives, prepositions, conjunctions',
    aos:[{code:'AO 2.3',label:'Grammar consolidation'},{code:'AO 2.5',label:'Structure review'}],
    iDo:{
      title:'Tāua Kōrero — Every structure you know',
      instruction:'Today we put every grammar structure from this term on the table. You have learned more than you realise. Watch how all the pieces fit together — and how one structure leads naturally into the next.',
      example:`<b>IDENTITY: Ko</b><br>Ko Aroha tōku ingoa. Ko tōku kura tōku wāhi pai.<br><br><b>DESCRIPTION: He</b><br>He ātaahua tōku kura. He nui ake tēnei whare i tērā.<br><br><b>PRESENT: Kei te</b><br>Kei te ako au i te reo Māori. Kei te pēhea koe?<br><br><b>PAST: I</b><br>I haere au ki te kura inanahi. I ngenge ia nō reira i hoki ia ki te kāinga.<br><br><b>NARRATIVE: Ka</b><br>Ka haere ia ki te toa. Ka hoko ia i te āporo.<br><br><b>NEGATIVE: Kāore</b><br>Kāore au e kai ana. Kāore au i haere.<br><br><b>POSSESSION: tōku/tāku</b><br>Ko Mere tōku ingoa. Kei te pānui au i tāku pukapuka.<br><br><b>COMPLEX: ahakoa / mehemea / i te wā</b><br>Ahakoa i ua, i haere tonu mātou. Mehemea ka haere koe, kōrero mai.`,
      demo:`The full picture of what you can do:\n\n→ Identify things and people (Ko)\n→ Describe things (He + adjective)\n→ Talk about now (Kei te)\n→ Talk about the past (I)\n→ Tell a story (Ka)\n→ Say something is NOT happening (Kāore)\n→ Show who things belong to (tōku/tāku and friends)\n→ Ask any question (Ko wai / He aha / Kei hea / E hia / Tokohia / Pēhea…)\n→ Join ideas (ā / engari / nō reira / ahakoa / mehemea / i te wā)\n→ Describe in detail (adjectives, adverbs, fronted phrases)\n\nThat is a complete communication toolkit. You can express almost any idea with these structures.`,
      tip:'You do not need to remember the grammar names — you need to feel when to use each structure. The best way to do that is to speak and write as much as possible. The names help you think about it; the practice makes it automatic.',
    },
    weDo:{
      title:'Kia Tūhono — Structure challenge',
      instruction:'I give you a concept to express — you choose the right structure and build the sentence.',
      sentences:[
        'Express who you are: → Ko + name/identity. Express what something is like: → He + description.',
        'Express something happening right now AND something that happened yesterday: → Kei te… / I…',
        'Say something is NOT happening: → Kāore au e… ana. Say it did NOT happen: → Kāore au i…',
        'Join these with the right conjunction: "I was tired" + "I kept working" → <b>Ahakoa i ngenge au, i mahi tonu au.</b>',
      ],
      prompt:'Which structure do you feel most confident with? Which one still feels uncertain? Be honest — the gaps you name now are the ones you can fix in Week 10 and Term 2.',
    },
    youDo:{
      title:'Māu Anō — Grammar self-assessment',
      instruction:'Test yourself on every structure from this term.',
      tasks:[
        'Write one sentence using each of: Ko, He, Kei te, I, Ka, Kāore. (Six sentences.)',
        'Write one sentence using tōku and one using tāku — make sure the category is right.',
        'Write a complex sentence using one of: ahakoa, mehemea, i te wā.',
        '✦ Bonus: Write a ten-sentence paragraph that uses EVERY structure from this term at least once. Tell a story about a day in your life — past, present, description, and all.',
      ],
    },
  },
  Wednesday: {
    topic:'Arotake — Term 1 sentence types review',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.5: Descriptive language · All sentence types from Term 1 consolidated',
    aos:[{code:'AO 2.3',label:'Sentence variety review'},{code:'AO 2.5',label:'Rich description review'}],
    iDo:{
      title:'Tāua Kōrero — From bare to brilliant: the full sentence toolkit',
      instruction:'Today we review every sentence type you have built this term — simple, compound, complex, descriptive, fronted, layered — and practise moving between them fluently. A skilled speaker can shift from a short punchy sentence to a long flowing one in a heartbeat. Let\'s do that.',
      example:`<b>SIMPLE — bare and clear:</b><br>Kei te ua. Ka tū ia. He pai tēnei.<br><br><b>COMPOUND — joined:</b><br>I haere au ki te toa ā i hoko au i te āporo.<br><br><b>COMPLEX — subordinate clause:</b><br>Ahakoa i ua, i haere tonu mātou ki te kura.<br><br><b>DESCRIPTIVE — layered:</b><br>He āporo whero nui tēnei — he tino pai hoki!<br><br><b>FRONTED — time or place first:</b><br>I te ata o Mane, i roto i te akomanga, i ako ngā tamariki.<br><br><b>LISTED — Ko ēnei:</b><br>Ko ēnei ngā mea i ako ai mātou: he kupu hou, he hanganga hou, he kōrero hou.<br><br><b>COMPARATIVE:</b><br>He pai ake te reo Māori i te pāngarau ki a au — he pai rawa atu!`,
      demo:`The progression from bare to brilliant:\n\nBARE: <b>Kei te ako ngā tamariki.</b>\n+WHERE: <b>Kei te ako ngā tamariki i te akomanga.</b>\n+HOW: <b>Kei te ako kaha ngā tamariki i te akomanga.</b>\n+TIME: <b>Ināianei, kei te ako kaha ngā tamariki i te akomanga.</b>\n+WITH WHOM: <b>Ināianei, kei te ako kaha ngā tamariki me tō rātou kaiako i te akomanga.</b>\n+JOINED: <b>Ināianei, kei te ako kaha ngā tamariki me tō rātou kaiako i te akomanga — ā he tino pai tā rātou mahi!</b>\n\nSix layers. One idea. Completely alive.`,
      tip:'You do not need to use every layer every time. The skill is knowing WHICH layers to add and WHEN. Short when you want impact. Long when you want richness. You now have full control.',
    },
    weDo:{
      title:'Kia Tūhono — Build up and strip back',
      instruction:'We take one bare sentence and build it to maximum richness — then strip back to find the "just right" version.',
      sentences:[
        'Start: <b>I tākaro ia.</b> Add where, how, time, with whom — one layer at a time. Stop when it feels complete.',
        'Start: <b>He pai tōku kura.</b> Add a reason, a comparison, and a Ko ēnei list. How long can it get?',
        'Now strip back your longest sentence to its most precise version — not shortest, most precise.',
        'Read both versions aloud — the fully layered one and the stripped-back one. Which works better? When would you use each?',
      ],
      prompt:'You have been building sentences for ten weeks. Look back at a sentence you wrote in Week 1. How would you write it differently now? What does that difference tell you about how much you have grown?',
    },
    youDo:{
      title:'Māu Anō — Showcase sentences',
      instruction:'Write the best sentences you have ever written in te reo Māori.',
      tasks:[
        'Write your best SIMPLE sentence — punchy and precise.',
        'Write your best COMPLEX sentence — with a subordinate clause.',
        'Write your best LAYERED sentence — time, manner, place, with whom.',
        '✦ Bonus: Write a "best of Term 1" paragraph — eight sentences that show off everything you have learned. Use every sentence type at least once. This is your showcase. Make it sing.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He whakamātautau — End-of-term spoken assessment',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–1.7 and 2.1–2.5 assessed · All six language modes: Whakarongo, Kōrero, Pānui, Tuhituhi, Mātakitaki, Whakaatu',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 1.2',label:'Introductions'},{code:'AO 1.4',label:'Personal information'},{code:'AO 2.3',label:'Extended communication'}],
    iDo:{
      title:'Tāua Kōrero — What a Term 1 conversation looks like',
      instruction:'Today is your end-of-term spoken assessment. Before we begin, let\'s look at what a full Term 1 conversation sounds like when everything comes together. This is the standard — and you are closer to it than you think.',
      example:`<b>A:</b> Tēnā koe. Ko wai tōu ingoa?<br><b>B:</b> Tēnā koe. Ko Hēmi tōku ingoa. Nō Ōtautahi ahau. Ko wai koe?<br><b>A:</b> Ko Aroha tōku ingoa. Nō Tāmaki Makaurau ahau. Kei te pēhea koe i tēnei rā?<br><b>B:</b> Kei te pai au, kia ora. Ahakoa he makariri, kei te hari au — he wiki pai tēnei.<br><b>A:</b> He aha ngā mea hou i ako ai koe i tēnei wāhanga?<br><b>B:</b> I ako au i ngā hanganga katoa — Kei te, I, Ka, Ko, He, me ngā kupu hono. Ka taea e au te kōrero pai ake ināianei.<br><b>A:</b> Ka pai! He aha tāu whainga mō tērā wāhanga?<br><b>B:</b> Ko tāku whainga: ka ako au i ngā tūāhua o Wāhanga Rua — ā ka kōrero māmā ake au.<br><b>A:</b> Ka rawe! Tēnā koe, tēnā koe, tēnā koe.<br><b>B:</b> Tēnā koe, tēnā koe, tēnā koe.`,
      demo:`What this conversation demonstrates:\n✓ AO 1.1: Tēnā koe · greeting and farewell\n✓ AO 1.2: Ko [name] tōku ingoa · introduction\n✓ AO 1.4: Nō [place] ahau · personal information\n✓ AO 1.6: Tēnā koe (×3) · politeness convention\n✓ AO 2.3: Extended kōrero with reasons and reflection\n✓ AO 2.5: Descriptive and expressive vocabulary\n✓ Grammar: Kei te, I, Ka, Ko, He, ahakoa, Ka taea e au te\n\nYou have everything you need. Now go show it.`,
      tip:'If you forget a word mid-conversation, do not stop — keep going. Say what you CAN say. A real conversation in te reo Māori, even with gaps, is far more impressive than silence.',
    },
    weDo:{
      title:'Kia Tūhono — Final practice round',
      instruction:'One full practice conversation with a partner before the assessment. Use the full structure from the model above.',
      sentences:[
        'Greet and introduce: Tēnā koe · Ko [name] tōku ingoa · Nō [place] ahau.',
        'Ask and answer: Kei te pēhea koe? Answer with a feeling AND a reason using ahakoa or nō te mea.',
        'Ask and answer: He aha ngā mea hou i ako ai koe? Name three things using Ka taea e au te…',
        'State your Term 2 goal and close with the three-part farewell: Tēnā koe, tēnā koe, tēnā koe.',
      ],
      prompt:'You started this term not knowing a single word of te reo Māori. You are finishing it able to have a real conversation. What does that feel like? What would you tell your Week 1 self about what is coming?',
    },
    youDo:{
      title:'Māu Anō — He whakamātautau — Your assessment',
      instruction:'Perform your end-of-term conversation assessment with a partner.',
      tasks:[
        '<b>Task 1:</b> Have a full conversation — at least 8 lines each. Cover greeting, introduction, how you are feeling, what you learned, and a goal.',
        '<b>Task 2:</b> Self-assess against the checklist below. Be honest.',
        '<b>Task 3:</b> Write three sentences in te reo about how you feel about your learning this term.',
        '✦ Checklist: ☐ Greeted my partner correctly · ☐ Introduced myself with Ko and Nō · ☐ Used at least one tense (Kei te / I / Ka) · ☐ Used at least one conjunction · ☐ Said something descriptive · ☐ Closed with Tēnā koe (×3)',
      ],
    },
  },
}

const FRIDAY_QUIZ_W10 = [
  {day:'Monday',  q:'Which of these is the correct plural demonstrative for "those things over there" (plural of tērā)?',options:['ēnei','ēnā','ērā','tērā'],correct:2},
  {day:'Monday',  q:'"Ka taea e au te kōrero i te reo Māori" contains which grammar structure?',options:['Kāore negation','Ka taea e… te — I am able to…','Kei te present tense','Ko identity marker'],correct:1},
  {day:'Tuesday', q:'Which sentence correctly uses Kāore in the PAST tense negative?',options:['Kāore au e haere ana','Kāore au i haere','Kāore haere au','Kāore au ki haere'],correct:1},
  {day:'Tuesday', q:'You want to say "Although it was cold, we kept working." Which conjunction do you use?',options:['nō reira','ā','ahakoa','i te wā'],correct:2},
  {day:'Wednesday',q:'What is the main purpose of "sentence echoing" in a paragraph?',options:['To fill space when you run out of ideas','To confuse the reader with repetition','To tie the paragraph together by returning to a key word or idea from the opening','To make every sentence the same length'],correct:2},
  {day:'Wednesday',q:'"I te ata o Māne, i roto i te akomanga, i ako ngā tamariki." What type of sentence is this?',options:['A simple sentence','A negative sentence','A fronted sentence with time and place phrases before the main clause','A comparative sentence'],correct:2},
  {day:'Thursday', q:'In the end-of-term conversation, which greeting is used when addressing MORE than two people formally?',options:['Tēnā koe','Tēnā kōrua','Tēnā koutou katoa','Kia ora'],correct:2},
  {day:'Thursday', q:'He wāhanga tino pai tēnei. What does "wāhanga" mean?',options:['sentence','question','term / section / part','week'],correct:2},
]

// ── Term 1 router ────────────────────────────────────────────
// Called by the app shell when term=1. Returns curriculum and quiz for the given week.
function getTerm1Data(week) {
  const curricula = {
    1: CURRICULUM_W1, 2: CURRICULUM_W2, 3: CURRICULUM_W3,
    4: CURRICULUM_W4, 5: CURRICULUM_W5, 6: CURRICULUM_W6,
    7: CURRICULUM_W7, 8: CURRICULUM_W8, 9: CURRICULUM_W9, 10: CURRICULUM_W10
  }
  const quizzes = {
    1: FRIDAY_QUIZ_W1, 2: FRIDAY_QUIZ_W2, 3: FRIDAY_QUIZ_W3,
    4: FRIDAY_QUIZ_W4, 5: FRIDAY_QUIZ_W5, 6: FRIDAY_QUIZ_W6,
    7: FRIDAY_QUIZ_W7, 8: FRIDAY_QUIZ_W8, 9: FRIDAY_QUIZ_W9, 10: FRIDAY_QUIZ_W10
  }
  return { curriculum: curricula[week] || null, quiz: quizzes[week] || null }
}
