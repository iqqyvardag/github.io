
(function(){
 const form=document.getElementById('decoder-form'); if(!form)return;
 const $=id=>document.getElementById(id);
 function fmt(n){return new Intl.NumberFormat('en-US',{maximumFractionDigits:1}).format(n)}
 function calculate(){
  const servings=Number($('serving').value), oil=Number($('oil').value), epa=Number($('epa').value), dha=Number($('dha').value), other=Number($('other').value||0); const error=$('decoder-error');
  const vals=[servings,oil,epa,dha,other];
  if(vals.some(v=>!Number.isFinite(v)||v<0)||servings<1){error.hidden=false;error.textContent='Enter valid non-negative label values and at least one capsule per serving.';return;}
  const combined=epa+dha, identified=combined+other;
  if(oil>0 && identified>oil){error.hidden=false;error.textContent='The identified omega-3 amount is greater than the stated total oil. Recheck whether every value is listed for the same serving size.';return;}
  error.hidden=true;
  $('combined').textContent=fmt(combined)+' mg'; $('per-cap').textContent=fmt(combined/servings)+' mg'; $('identified').textContent=fmt(identified)+' mg'; $('concentration').textContent=oil>0?fmt(combined/oil*100)+'%':'Not calculable';
  $('interpretation').textContent=oil>0?`The label states ${fmt(combined)} mg EPA+DHA in a ${fmt(oil)} mg oil serving. The remaining stated oil is not automatically “bad”; it may include other fatty acids and constituents. The label alone cannot verify quality.`:`EPA+DHA per serving is ${fmt(combined)} mg. A concentration percentage needs a stated total-oil amount.`;
 }
 form.addEventListener('submit',e=>{e.preventDefault();calculate()}); form.addEventListener('reset',()=>setTimeout(calculate,0)); calculate();
})();
