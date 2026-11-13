import{a as e,c as t,i as n,o as r,s as i,t as a}from"./mand-CxrLFCAJ.js";/* empty css              */import{a as o,i as s,n as c,o as l,r as u,t as d}from"./url-CrUWaDrc.js";import{t as f}from"./scene-EjGht1c4.js";var p=t[document.body.dataset.product],m=p.pagina,h=p.keuzes,g=s(p),_=Object.keys(h).filter(e=>h[e].soort===`schakelaar`),v=e=>document.getElementById(e),y=e=>new Intl.NumberFormat(`nl-NL`).format(e),b=e=>`€ ${y(Math.round(e))}`;document.body.innerHTML=`
  <header class="kop">
    <a class="merk" href="./"><span class="merk-blok" aria-hidden="true"></span><span data-merk></span></a>
    <nav aria-label="Pagina">
      <a href="#werkwijze">Zo werkt het</a><a href="#constructie">Constructie</a><a href="#vragen">Vragen</a><a href="./info.html">Over ons</a>
      <a class="altijd" href="./afrekenen.html" data-mand>Winkelmand</a>
    </nav>
  </header>
  <main>
    <section class="intro">
      <p class="label">${m.label}</p>
      <h1>${m.kop}</h1>
      <p class="lead">${m.lead}</p>
      <ul class="usp">${m.usp.map(e=>`<li>${e}</li>`).join(``)}</ul>
    </section>

    <section id="configurator" class="config" aria-label="Configurator">
      <div class="beeld">
        <div id="viewer" class="viewer" role="img" aria-label="3D-weergave"></div>
        <p id="uitlink" class="uitlink" hidden></p>
        <div class="beeldopties" role="group" aria-label="Weergave">
          ${p.decor?`<label class="chip"><input type="checkbox" data-optie="decor" checked /><span>${p.decor.label}</span></label>`:``}
          <label class="chip"><input type="checkbox" data-optie="maatlijnen" /><span>Maten</span></label>
          <label class="chip"><input type="checkbox" data-optie="schaalfiguur" /><span>Schaalfiguur</span></label>
          <button type="button" class="chip" id="reset"><span>Beeld herstellen</span></button>
        </div>
        <p class="hint">${m.hint}</p>
      </div>

      <form class="paneel" id="form" novalidate>
        <h2>Stel samen</h2>
        ${p.presets?.length?`<div class="presets" role="group" aria-label="Veelgekozen maten"><span>Veelgekozen:</span>
          ${p.presets.map((e,t)=>`<button type="button" data-preset="${t}">${g.map(t=>e[t]).join(` × `)}</button>`).join(``)}</div>`:``}
        <div class="maten">${g.map(e=>`
          <div class="maat" data-maat="${e}">
            <label for="${e}">${h[e].label}</label>
            <div class="invoer"><input id="${e}" type="number" inputmode="numeric" step="${h[e].stap}" /><span>mm</span></div>
            <input type="range" step="${h[e].stap}" aria-label="${h[e].label} schuif" />
            <small></small>
          </div>`).join(``)}</div>
        ${_.map(e=>`
        <label class="schakel">
          <input type="checkbox" id="${e}" />
          <span class="schuif" aria-hidden="true"></span>
          <span><strong>${h[e].label}</strong><small>${h[e].uitleg??``}</small><small class="verschil" data-toelichting="${e}"></small></span>
        </label>`).join(``)}

        <div id="meldingen" class="meldingen" aria-live="polite"></div>

        <div class="uitkomst" id="uitkomst">
          <dl class="kern" id="kern"></dl>
          <div class="prijsrij">
            <div><p class="prijs"><span id="prijs">–</span></p><p class="prijsnoot" id="prijsnoot">incl. btw</p></div>
            <div class="aantal" role="group" aria-label="Aantal">
              <button type="button" id="min" aria-label="Eén minder">−</button><output id="aantal">1</output><button type="button" id="plus" aria-label="Eén meer">+</button>
            </div>
          </div>
          <button type="button" class="knop groot" id="bestel">Bestellen</button>
          <div class="knoprij"><button type="button" class="knop licht" id="inmand">In winkelmand, nog een ${p.stuk}</button><button type="button" class="knop licht" id="aanvragen">Eerst een vraag</button></div>
          <p class="zeker">Je betaalt pas na onze bevestiging, met iDEAL.</p>
          <div class="delen">
            <button type="button" class="tekstknop" id="kopieer">Kopieer link naar deze ${p.stuk}</button>
            <a class="tekstknop" id="deelwa" target="_blank" rel="noopener">Deel via WhatsApp</a>
          </div>
        </div>

        <details class="spec">
          <summary>Wat krijg je precies?</summary>
          <p id="krijg"></p>
          <table id="stuklijst"><thead><tr><th>Onderdeel</th><th>Aantal</th><th>Dikte</th><th>Maat (uitslag)</th></tr></thead><tbody></tbody></table>
        </details>
      </form>
    </section>

    <section id="werkwijze" class="blok">
      <p class="label">Zo werkt het</p>
      <h2>${m.stappenKop}</h2>
      <ol class="stappen">${m.stappen.map(([e,t],n)=>`<li><span>${n+1}</span><h3>${e}</h3><p>${t}</p></li>`).join(``)}</ol>
    </section>
    <section id="constructie" class="blok donker">
      <p class="label">Constructie</p>
      <h2>${m.constructieKop}</h2>
      <div class="kaarten">${m.constructie.map(([e,t])=>`<article><h3>${e}</h3><p>${t}</p></article>`).join(``)}</div>
    </section>
    <section id="vragen" class="blok">
      <p class="label">Veelgestelde vragen</p>
      <h2>Goed om te weten</h2>
      <div class="faq">${m.faq.map(([e,t],n)=>`<details><summary>${e}</summary><p data-faq="${n}">${typeof t==`string`?t:``}</p></details>`).join(``)}</div>
    </section>
  </main>

  <footer class="voet">
    <div><strong data-merk></strong><p>Plaatwerk op maat, parametrisch ontworpen.</p></div>
    <nav class="voetlinks" aria-label="Informatie"><a href="./">Alle producten</a><a href="./info.html#over-ons">Over ons</a><a href="./info.html#contact">Contact</a><a href="./info.html#bestellen">Bestellen en betalen</a><a href="./info.html#levering">Levering</a><a href="./info.html#garantie">Garantie</a><a href="./info.html#voorwaarden">Algemene voorwaarden</a><a href="./info.html#privacy">Privacy</a></nav>
    <div id="voetcontact"></div>
  </footer>

  <div class="prijsbalk" id="prijsbalk"><span id="balkprijs"></span><a class="knop klein" href="#uitkomst">Bekijk</a></div>

  <dialog id="dialoog">
    <form method="dialog" id="aanvraagform">
      <button class="sluit" value="sluit" aria-label="Sluiten">×</button>
      <h2>Aanvraag</h2>
      <p id="dlg-samenvatting" class="samenvatting"></p>
      <label>Naam<input name="naam" autocomplete="name" /></label>
      <label>Opmerking of vraag<textarea name="opmerking" rows="3"></textarea></label>
      <label class="rij"><input type="checkbox" name="afhalen" checked /> Ik haal het pakket zelf af</label>
      <div class="dlg-knoppen">
        <a class="knop" id="dlg-mail">Verstuur per e-mail</a>
        <a class="knop licht" id="dlg-wa" target="_blank" rel="noopener">Verstuur via WhatsApp</a>
        <button type="button" class="knop licht" id="dlg-kopieer">Kopieer aanvraag</button>
      </div>
      <p class="klein-tekst" id="dlg-noot"></p>
    </form>
  </dialog>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>`;var x=l(p,location.search),S=x.keuzes,C=null,w=null,T=f(v(`viewer`),p);T||(v(`viewer`).innerHTML=`<p class="geenwebgl">De 3D-weergave werkt niet in deze browser. Prijs en maten hieronder kloppen wel.</p>`);var E=Object.fromEntries(g.map(e=>{let t=document.querySelector(`[data-maat="${e}"]`);return[e,{getal:t.querySelector(`input[type=number]`),schuif:t.querySelector(`input[type=range]`),noot:t.querySelector(`small`)}]}));for(let e of g){let{getal:t,schuif:n}=E[e];n.addEventListener(`input`,()=>{S[e]=+n.value,t.value=S[e],O()}),t.addEventListener(`change`,()=>{let n=Number(t.value);S[e]=Number.isFinite(n)&&n>0?u(h[e],n):S[e],O()}),t.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),t.blur())})}for(let e of _)v(e).addEventListener(`change`,t=>{S[e]=t.target.checked,O()});v(`min`).onclick=()=>{S.aantal=c(S.aantal-1),O()},v(`plus`).onclick=()=>{S.aantal=c(S.aantal+1),O()},document.querySelectorAll(`[data-optie]`).forEach(e=>e.addEventListener(`change`,()=>T?.optie(e.dataset.optie,e.checked))),v(`reset`).onclick=()=>T?.reset();var D;function O(){let e=p.ontwerp(S);for(let e of g)E[e].getal.value=S[e],E[e].schuif.value=S[e];for(let e of _)v(e).checked=S[e];v(`aantal`).textContent=S.aantal,v(`min`).disabled=S.aantal<=d.min,v(`plus`).disabled=S.aantal>=d.max,history.replaceState(null,``,`?${o(p,S)}`);let t=v(`meldingen`);if(t.innerHTML=``,v(`uitkomst`).classList.toggle(`ongeldig`,!e.geldig),v(`viewer`).classList.toggle(`dim`,!e.geldig),e.geldig)C=e,w={...S},T?.toon(e),j(e);else{for(let n of e.fouten)t.insertAdjacentHTML(`beforeend`,`<p class="fout">${n}</p>`);let n=Object.assign(document.createElement(`button`),{type:`button`,className:`tekstknop`,textContent:`Pas aan naar de dichtstbijzijnde mogelijke maat`});n.onclick=A,t.append(n)}clearTimeout(D),D=setTimeout(k,120)}function k(){let e=p.grenzen?.(S)??{};for(let t of g){let{getal:n,schuif:r,noot:i}=E[t],a=h[t],o=Math.max(e[t]?.max??a.max,a.min);r.min=n.min=a.min,r.max=Math.max(o,S[t]),n.max=a.max,r.value=S[t],i.textContent=`${y(a.min)} – ${y(o)} mm${o<a.max?` bij deze keuzes`:``}`,r.style.setProperty(`--p`,`${(S[t]-r.min)/(r.max-r.min||1)*100}%`)}}function A(){p.corrigeer?.(S),p.ontwerp(S).geldig||Object.assign(S,w??{}),O()}function j(e){let t=p.prijs(e,S.aantal);v(`kern`).innerHTML=p.kern(e,S).map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(``),v(`prijs`).textContent=b(t.totaal),v(`prijsnoot`).textContent=S.aantal>1?`${S.aantal} × ${b(t.perStuk)} · incl. btw (${b(t.exBtw*S.aantal)} excl.)`:`incl. btw · ${b(t.exBtw)} excl. btw`,v(`balkprijs`).textContent=`${p.maatTekst(S)} · ${b(t.totaal)}`,v(`krijg`).innerHTML=m.krijg(e,S),v(`stuklijst`).tBodies[0].innerHTML=[...e.stuklijst.map(e=>`<tr><td>${e.naam}</td><td>${e.aantal}</td><td>${e.dikte} mm</td><td>${y(e.uitslag[0])} × ${y(e.uitslag[1])} mm</td></tr>`),...(e.bevestiging??[]).filter(e=>e.aantal).map(e=>`<tr><td>${e.naam}</td><td>${e.aantal}</td><td></td><td></td></tr>`)].join(``);let n=p.toelichting?.(e,S)??{};document.querySelectorAll(`[data-toelichting]`).forEach(e=>e.textContent=n[e.dataset.toelichting]??``),m.faq.forEach(([,t],n)=>{typeof t==`function`&&(document.querySelector(`[data-faq="${n}"]`).innerHTML=t(e,S,i))}),document.title=`${p.naam} ${p.maatTekst(S)} – ${b(t.totaal)} | ${r.bedrijfsnaam}`}var M=()=>`${location.origin}${location.pathname}?${o(p,S)}`,N=()=>[`${p.naam} ${p.maatTekst(S)}`,p.regel(C,S),`Aantal: ${S.aantal} – ${b(p.prijs(C,S.aantal).totaal)} incl. btw`,M()],P;function F(e){v(`toast`).textContent=e,v(`toast`).classList.add(`zichtbaar`),clearTimeout(P),P=setTimeout(()=>v(`toast`).classList.remove(`zichtbaar`),2600)}async function I(e,t){try{await navigator.clipboard.writeText(e),F(t)}catch{prompt(`Kopieer:`,e)}}v(`kopieer`).onclick=()=>I(M(),`Link gekopieerd`),v(`deelwa`).addEventListener(`click`,e=>{e.currentTarget.href=`https://wa.me/?text=${encodeURIComponent(N().join(`
`))}`}),v(`aanvragen`).onclick=()=>{C&&p.ontwerp(S).geldig&&(v(`dlg-samenvatting`).innerHTML=N().slice(0,3).join(`<br>`),L(),v(`dialoog`).showModal())};function L(){let e=v(`aanvraagform`).elements,t=[`Hallo,`,``,`Ik wil graag dit aanvragen:`,``,...N(),``,e.afhalen.checked?`Ik haal het pakket zelf af.`:`Graag bezorgen in overleg.`,e.opmerking.value.trim()&&`Opmerking: ${e.opmerking.value.trim()}`,``,e.naam.value.trim()&&`Groet, ${e.naam.value.trim()}`].filter(e=>e!==!1&&e!==void 0).join(`
`),n=i(`email`),r=i(`whatsapp`);v(`dlg-mail`).hidden=!n,v(`dlg-wa`).hidden=!r,n&&(v(`dlg-mail`).href=`mailto:${n}?subject=${encodeURIComponent(`Aanvraag ${p.naam.toLowerCase()} ${p.maatTekst(S)}`)}&body=${encodeURIComponent(t)}`),r&&(v(`dlg-wa`).href=`https://wa.me/${r}?text=${encodeURIComponent(t)}`),v(`dlg-kopieer`).onclick=()=>I(t,`Aanvraag gekopieerd`),v(`dlg-noot`).textContent=n||r?`Je aanvraag is vrijblijvend; je krijgt een bevestiging met levertijd.`:`Kopieer de aanvraag en plak hem in je bericht (bijvoorbeeld op Marktplaats).`}v(`aanvraagform`).addEventListener(`input`,L);var R=()=>p.ontwerp(S).geldig?(e(S),n(`in-winkelmand`,`${p.id} ${p.maatTekst(S)}`),!0):!1;if(v(`bestel`).onclick=()=>{R()&&(location.href=`./afrekenen.html`)},v(`inmand`).onclick=()=>{R()&&(a(),F(`In de winkelmand. Stel gerust de volgende ${p.stuk} samen.`))},document.querySelectorAll(`[data-preset]`).forEach(e=>e.onclick=()=>{Object.assign(S,p.presets[+e.dataset.preset]),O()}),a(),x.uitLink){let e=v(`uitlink`);e.hidden=!1,e.textContent=`Voor jou klaargezet: ${p.maatTekst(S)}${x.meldingen.length?` — ${x.meldingen.join(` `)}`:``}`,document.body.classList.add(`uit-link`)}if(O(),!p.ontwerp(S).geldig){let e=p.ontwerp(S).fouten;A();for(let t of e)v(`meldingen`).insertAdjacentHTML(`beforeend`,`<p class="fout">${t} We hebben de maat aangepast.</p>`)}new IntersectionObserver(([e])=>v(`prijsbalk`).classList.toggle(`weg`,e.isIntersecting),{threshold:.2}).observe(v(`uitkomst`));