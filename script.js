/* =========================================================
   CONTENIDO — edita aquí textos y fotos (carpeta /img)
   ========================================================= */
const NAVIDAD_TXT = [
  'En Navidad realizamos el apadrinamiento, una forma de acompañar y apoyar de manera cercana a un niño y su familia durante su proceso de hospitalización y las distintas necesidades que puedan surgir. En la Fundación Tías del Desayuno, el apadrinamiento busca entregar un apoyo que vaya más allá de los regalos, generando un acompañamiento constante tanto para el niño como para su familia.',
  'Durante las campañas navideñas se realizan apadrinamientos en los que una persona o familia apadrina a un niño, aportando económicamente para la entrega de un regalo y acompañándolo en esta fecha especial. Sin embargo, el apoyo también puede extenderse a otras necesidades que presente el niño o su familia.',
  'Actualmente, la Fundación busca fortalecer especialmente el apadrinamiento económico, ya que este tipo de aporte permite responder de manera más flexible a necesidades que no siempre pueden ser cubiertas mediante regalos o actividades. Estos recursos serán destinados, según las necesidades de cada caso, a gastos médicos, medicamentos, traslados, alimentación u otros requerimientos que puedan surgir durante el proceso de hospitalización.'
];

const RETIRO_TXT = [
  'El Retiro para Mamás en Duelo nace como un espacio de encuentro, desahogo y contención para aquellas madres que han tenido que enfrentar la dolorosa pérdida de un hijo. A través de meditación, ejercicios para liberar emociones y momentos de reflexión, buscamos entregarles un espacio seguro donde puedan expresar su dolor, sentirse escuchadas y recibir cariño, contención y compañía.',
  'Nos llena de orgullo recordar el año 2018, cuando junto a las madres que participaron realizamos una actividad muy significativa: les entregamos una hoja en blanco y las invitamos a escribir aquello que siempre quisieron decirles a sus hijos. Con todas esas cartas creamos un libro que entregamos a cada una de las madres, como un homenaje lleno de amor y memoria hacia sus hijos.',
  'Queríamos que ese libro fuera más que un recuerdo: que pudieran volver a él cuando lo necesitaran, encontrar en sus propias palabras un pedacito de sus hijos y recordar que, por más que el dolor sea inmenso, no tienen que atravesarlo solas.'
];

const ACTIVITIES = [
  { t:'Pascua de Resurrección', c:'cel', imgs:['pascua'], d:'Sorpresas y compañía en el hospital para celebrar la Pascua.' },
  { t:'Día de las Madres', c:'cel', imgs:['madres'], d:'Un homenaje a las mamás que acompañan a sus hijos día a día.' },
  { t:'Día del Niño', c:'cel', imgs:['nino'], d:'Juegos y regalos para que los niños vivan su día con alegría.' },
  { t:'Navidad', c:'cel', imgs:['navidad1','navidad2'], d:'Llega el espíritu navideño con regalos y cajas navideñas para compartir en familia.', more:NAVIDAD_TXT },
  { t:'Campeonato inter-hospitales', c:'rec', imgs:['campeonato'], d:'Competencia deportiva amistosa entre distintos hospitales.' },
  { t:'Paseo a la Playa', c:'rec', imgs:['playa'], d:'Un día de mar y aire libre para desconectar de la rutina hospitalaria.' },
  { t:'Halloween', c:'rec', imgs:['halloween'], d:'Disfraces y dulces para pasar un Halloween especial.' },
  { t:'Retiro Mamás en Duelo', c:'apo', imgs:['retiro1','retiro2'], d:'Espacio de contención para madres en proceso de duelo.', more:RETIRO_TXT },
];

const PROJECTS = [
  { t:'Un toque de dulzura a las salas pediátricas', imgs:['dulzura1','dulzura2'],
    d:['Se han transformado las salas de Pediatría mediante murales y elementos llenos de animales y colores. El objetivo es que los niños encuentren un espacio más acogedor y cálido, alejándose de la imagen tradicional de un hospital blanco y frío.','Para nosotras, es de suma importancia contar con un ambiente amigable, ya que este también forma parte de la experiencia de los niños durante la hospitalización.'] },
  { t:'Tecnología para el bienestar hospitalario', imgs:['tecnologia'],
    d:['Se instalaron cinco pantallas en los techos de las habitaciones para prevenir el síndrome de delirio hospitalario, una condición que puede afectar a niños y adultos durante la hospitalización.','Las pantallas simulan gradualmente los ciclos del día y la noche. De esta manera se busca ayudar a los pacientes a mantener la noción del tiempo.'] },
  { t:'Concierto “Música para el Alma”', imgs:['musica1','musica2'],
    d:['Se realizan conciertos para pacientes hospitalizados. La música favorece el bienestar emocional, la relajación y genera momentos de distracción frente a la rutina hospitalaria.','Considerando que muchas veces deben enfrentar tratamientos prolongados, procedimientos médicos y períodos de hospitalización, estas instancias permiten crear un espacio diferente al entorno clínico, donde puedan disfrutar, conectarse con sus emociones y compartir un momento agradable junto a sus familias y otras personas.'] },
];

const DREAMS = [
  { n:'Dylan Hernández', tag:'Conocer a Sonora 5 Estrellas y volar', e:'🚁', d:[
    'Dylan Hernández, uno de sus grandes sueños era conocer a Sonora 5 Estrellas. A pesar de encontrarse en una etapa muy delicada de su vida, quisimos hacer todo lo posible para regalarle una experiencia que pudiera disfrutar y guardar en su corazón.',
    'Preparamos junto a él una jornada muy especial. Los chicos de Sonora 5 Estrellas llegaron para compartir, cantar y acompañarlo. Cantaron junto a él, le llevaron algunos regalitos y por unas horas, todo giró en torno a la música, la emoción y sus ganas de disfrutar. Ese día lo vimos completamente entregado a la felicidad de estar viviendo aquello que tanto había esperado.',
    'Él era un chico soñador y también tenía otro anhelo: volar, conocer el cielo, saber cómo era y sentir que ese era el lugar en el que quería estar. Y lo cumplimos: lo llevamos a volar en helicóptero junto a su papá. Por un momento pudo mirar el mundo desde arriba y acercarse a ese cielo que tantas veces había imaginado. Fue una experiencia muy emotiva para todos quienes tuvimos la oportunidad de acompañarlo.',
    'Él mantuvo su alegría y sus ganas de disfrutar hasta sus últimos días. A pesar de que sabíamos que su salud estaba muy complicada, verlo cumplir sus sueños fue algo que nos marcó profundamente.'] },
  { n:'Lucía Alarcón', tag:'Conocer la radio de la Tencha', e:'📻', d:[
    'Lucía Alarcón era una niña no vidente que tenía un cariño muy especial por la radio. Entre tantas voces, había una que esperaba con especial ilusión: la Tencha de Radio Activa, personaje al cual escuchaba junto a Daniel Fuenzalida.',
    'Lucía había construido en su imaginación la imagen de la Tencha. Por su voz, le encantaba escuchar cada una de sus historias. Se reía con ellas, las disfrutaba y sentía un cariño enorme por ese personaje que, pese a que solo la conocía a través de la radio, era parte importante de sus días.',
    'Así que la llevamos a conocer la radio en donde trabajaba. Allí la recibieron con muchísimo cariño y se preocuparon de que pudiera vivir una experiencia inolvidable. Por fin pudo conocer el lugar desde donde tantas veces había escuchado aquella voz que la acompañaba y que tantas risas le había regalado.'] },
  { n:'Martina Barrios', tag:'Ser princesa por un día', e:'👑', d:[
    'Martina Barrios tenía un sueño tan hermoso: ella quería ser princesa por un día. Quisimos que por unas horas pudiera vivir ese mundo que tanto soñaba. Nos trasladamos hasta el Mall Plaza Tobalaba y convertimos cada rincón en parte de su historia. El carrusel, los pasillos y cada espacio que encontramos se transformaron en el escenario perfecto para que ella pudiera sentirse como la princesa que siempre había imaginado.',
    'Ese día no hubo hospital, tratamientos ni preocupaciones. Solo estaba Martina, disfrutando de su cuento, recorriendo el lugar y viviendo una experiencia hecha especialmente para ella.',
    'Quizás para algunos pueda parecer un sueño pequeño, pero para ella significaba muchísimo, y verla vivirlo con tanta ilusión hizo que ese día también quedara guardado en nuestros corazones.'] },
];

const dreamsHTML = () => DREAMS.map(x => `<h4>${x.n}</h4>${x.d.map(p=>`<p>${p}</p>`).join('')}`).join('');

/* Proyectos de la sección "Proyectos" (tarjetas con "Ver más") */
const NEXT = [
  { t:'Talleres de manualidades para mamás', imgs:['taller'], e:'🎨',
    s:'Un taller que entrega herramientas y conocimientos a las madres para desarrollar una ocupación, emprender y generar ingresos.',
    d:['Es un taller que busca entregar herramientas y conocimientos a las madres, permitiéndoles desarrollar una ocupación, emprender y generar ingresos a través de la creación y venta de productos de sublimación.'] },
  { t:'Nuevas actividades recreativas', imgs:['recreativas'], e:'🎈',
    s:'Actividades lúdicas que promueven la alegría, el juego y la integración de los niños y sus familias.',
    d:['Actividades lúdicas que promueven la alegría, el juego y la integración de los niños y sus familias.',
       'A través del programa Desafío Social de la Universidad del Desarrollo (UDD), la fundación tiene la oportunidad de proponer actividades y eventos, mientras que los estudiantes se encargan de organizarlos y llevarlos a cabo.',
       'Entre las iniciativas realizadas, destaca una jornada junto a la Asociación de Pintores de Chile, donde los niños pudieron aprender y experimentar con la pintura, mientras artistas profesionales participaban como jueces de un concurso artístico en el que los pequeños podían ganar premios.',
       'Otra actividad que también se realizó fue un show de talentos, en el que niños y padres participaron en presentaciones de canto y baile, incluyendo una entretenida competencia entre ambos grupos. Estas actividades buscan generar espacios de diversión, creatividad y participación familiar.'] },
  { t:'Cumplir sueños de niños en etapa terminal', imgs:['suenos'], e:'✨',
    s:'Hacer realidad sueños y deseos especiales, creando momentos inolvidables llenos de felicidad y esperanza.',
    d:['Hacer realidad sueños y deseos especiales, creando momentos inolvidables llenos de felicidad y esperanza.','A continuación, algunos de los sueños que hemos tenido la alegría de cumplir:'], raw:dreamsHTML },
  { t:'Cenas de Navidad para las familias', imgs:['campana'], e:'🎄',
    s:'En Navidad buscamos acompañar a los niños y sus familias entregando apoyo, cariño y esperanza. A través del apadrinamiento, queremos ir más allá de un regalo.',
    d:NAVIDAD_TXT },
];

/* =========================================================
   Utilidades
   ========================================================= */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const img = (n, alt='') => `<img src="img/${n}.jpg" alt="${alt}" loading="lazy">`;
const paras = a => a.map(p => `<p>${p}</p>`).join('');

/* Actividades */
const acts = $('#acts');
function renderActs(filter='all'){
  acts.innerHTML = ACTIVITIES.map((a,i)=>({a,i})).filter(({a}) => filter==='all' || a.c===filter).map(({a,i}) => `
    <button class="act" data-i="${i}">
      <div class="act__img">${img(a.imgs[0], a.t)}</div>
      <div class="act__body"><h4>${a.t}</h4><p>${a.d}</p></div>
    </button>`).join('');
}
$$('.tab').forEach(b => b.addEventListener('click', () => {
  $$('.tab').forEach(x => x.classList.remove('is-active'));
  b.classList.add('is-active'); renderActs(b.dataset.filter);
}));
acts.addEventListener('click', e => {
  const el = e.target.closest('.act'); if(!el) return;
  const a = ACTIVITIES[el.dataset.i];
  openModal(a.t, `<p>${a.d}</p>${a.more ? paras(a.more) : ''}`, a.imgs, a.t);
});
renderActs();

/* Proyectos colaborativos */
$('#projects').innerHTML = PROJECTS.map((p,i) => `
  <article class="card pcard">
    <div class="pcard__img"><span class="num">0${i+1}</span>${img(p.imgs[0], p.t)}</div>
    <h3>${p.t}</h3><p>${p.d[0]}</p>
    <button class="more" data-k="P" data-i="${i}">Ver más</button>
  </article>`).join('');

/* Proyectos (próximos) */
$('#next').innerHTML = NEXT.map((p,i) => `
  <article class="card nxt">
    <div class="nxt__img">${img(p.imgs[0], p.t)}</div>
    <div class="nxt__body"><h3>${p.t}</h3><p>${p.s}</p><button class="more" data-k="N" data-i="${i}">Ver más</button></div>
  </article>`).join('');

/* Sueños */
$('#dreams').innerHTML = DREAMS.map((d,i) => `
  <article class="card dream">
    <div class="ph">${d.e}</div>
    <h3>${d.n}</h3><span class="tagline">${d.tag}</span><p>${d.d[0]}</p>
    <button class="more" data-k="D" data-i="${i}">Leer historia</button>
  </article>`).join('');

document.addEventListener('click', e => {
  const b = e.target.closest('.more'); if(!b) return;
  const i = +b.dataset.i;
  if (b.dataset.k==='P'){ const p=PROJECTS[i]; openModal(p.t, paras(p.d), p.imgs, p.t); }
  if (b.dataset.k==='N'){ const p=NEXT[i]; openModal(p.t, paras(p.d)+(p.raw?p.raw():''), p.imgs, p.t); }
  if (b.dataset.k==='D'){ const d=DREAMS[i]; openModal(d.n, `<p><strong>${d.tag}</strong></p>`+paras(d.d), [], d.n); }
});

/* Modal con galería */
const modal = $('#modal'), media = $('#modal-media');
let gi = 0;
function openModal(title, html, imgs=[], alt=''){
  $('#modal-title').textContent = title;
  $('#modal-body').innerHTML = html;
  media.innerHTML = imgs.map((n,k)=>`<img src="img/${n}.jpg" alt="${alt}" class="${k?'':'on'}">`).join('')
    + (imgs.length>1 ? '<button class="g-prev" aria-label="Anterior">‹</button><button class="g-next" aria-label="Siguiente">›</button>' : '');
  media.hidden = !imgs.length; gi = 0;
  modal.hidden = false; document.body.style.overflow = 'hidden'; modal.querySelector('.modal__box').scrollTop = 0;
}
function closeModal(){ modal.hidden = true; document.body.style.overflow = ''; }
function gallery(d){ const im=$$('img',media); if(im.length<2) return; im[gi].classList.remove('on'); gi=(gi+d+im.length)%im.length; im[gi].classList.add('on'); }
modal.addEventListener('click', e => {
  if(e.target===modal || e.target.closest('.modal__close')) closeModal();
  if(e.target.closest('.g-prev')) gallery(-1);
  if(e.target.closest('.g-next')) gallery(1);
});
document.addEventListener('keydown', e => {
  if(e.key==='Escape') closeModal();
  if(!modal.hidden && e.key==='ArrowLeft') gallery(-1);
  if(!modal.hidden && e.key==='ArrowRight') gallery(1);
});

/* Carrusel hero */
const slides = $$('.hero__slide'), dots = $('.hero__dots');
let cur = 0, timer;
slides.forEach((_,i) => { const b=document.createElement('button'); b.setAttribute('aria-label','Ir a la diapositiva '+(i+1)); b.onclick=()=>{go(i);reset()}; dots.append(b); });
function go(n){
  cur = (n+slides.length)%slides.length;
  slides.forEach((s,i)=>s.classList.toggle('is-active',i===cur));
  $$('button',dots).forEach((d,i)=>d.classList.toggle('on',i===cur));
}
function reset(){ clearInterval(timer); timer=setInterval(()=>go(cur+1),6000); }
$$('.hero__arrow').forEach(a => a.onclick = () => { go(cur + +a.dataset.dir); reset(); });
go(0); reset();

/* Menú móvil + enlace activo al hacer scroll */
const toggle = $('.nav__toggle'), menu = $('#menu');
toggle.onclick = () => { const o = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', o); };
$$('#menu a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
const links = $$('#menu > a[href^="#"]:not(.btn)');
const io = new IntersectionObserver(es => es.forEach(en => {
  if(en.isIntersecting){ links.forEach(l => l.classList.toggle('active', l.getAttribute('href')==='#'+en.target.id)); }
}), { rootMargin:'-40% 0px -55% 0px' });
links.forEach(l => { const s = $(l.getAttribute('href')); if(s) io.observe(s); });

/* Copiar datos bancarios */
const toast = $('#toast');
$$('[data-copy]').forEach(el => el.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(el.textContent.trim()); toast.textContent='Copiado ✓'; }
  catch { toast.textContent='No se pudo copiar'; }
  toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1600);
}));
