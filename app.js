let referenceCase='';
const kind=document.querySelector('#event-kind');
const labels={brand:'Событие для бренда',internal:'Событие для команды',mice:'Деловая поездка / MICE',advice:'Нужна помощь с форматом'};
document.querySelectorAll('[data-intent]').forEach(link=>link.addEventListener('click',()=>{kind.value=link.dataset.intent;referenceCase=link.dataset.case||''}));
kind.addEventListener('change',()=>{referenceCase=''});
document.querySelector('#project-brief').addEventListener('submit',event=>{
 event.preventDefault();
 const company=document.querySelector('#company').value.trim()||'уточним в разговоре';
 const when=document.querySelector('#when-where').value.trim()||'обсудим';
 const task=document.querySelector('#task').value.trim()||'хотим обсудить с командой';
 const text=`Здравствуйте, команда AVANTAGE!\n\nХотим обсудить событие.\nКомпания: ${company}.\nФормат: ${labels[kind.value]}.\nКогда и где: ${when}.\nЗадача: ${task}.\n${referenceCase?'\nЗаинтересовал проект: '+referenceCase+'.\n':''}\nПодскажите, пожалуйста, как можем начать работу над брифом.\n\nМой контакт для ответа: `;
 const draft=document.querySelector('#draft-body');draft.value=text;
 const subject='Наше событие — '+labels[kind.value];
 const update=()=>{document.querySelector('#draft-email').href='mailto:avantage@avantage-event.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(draft.value)};
 draft.oninput=update;update();
 document.querySelector('#draft').hidden=false;
 document.querySelector('#draft-status').textContent='Черновик готов ниже. Проверьте его перед отправкой.';
 draft.focus({preventScroll:true});draft.scrollIntoView({block:'center',behavior:'auto'});
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)document.querySelector('#showreel').pause()});
// Plain contact instructions remain available unless enhancement initializes.
document.querySelector('#brief-fallback').hidden=true;
document.querySelector('#project-brief').hidden=false;
