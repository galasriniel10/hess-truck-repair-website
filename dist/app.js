document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.getElementById('service').value=link.dataset.service;}));
document.getElementById('quote-form').addEventListener('submit',event=>{
  event.preventDefault();
  const phone=document.getElementById('phone');
  if(phone.value.replace(/\D/g,'').length<7){phone.setCustomValidity('Please enter a phone number with at least 7 digits.');phone.reportValidity();return;}
  phone.setCustomValidity('');
  const name=document.getElementById('name').value.trim();
  const service=document.getElementById('service').value.trim();
  const body=`Name: ${name}\nPhone: ${phone.value}\n\nService needed:\n${service}`;
  const status=document.getElementById('form-status');
  status.hidden=false;
  status.textContent='Your email draft is ready to open. Send it from your email app to complete the request. If no app opens, email tylerhess@hesstruckrepair.com or call (717) 803-9110.';
  window.location.href=`mailto:tylerhess@hesstruckrepair.com?subject=${encodeURIComponent('Truck repair quote request')}&body=${encodeURIComponent(body)}`;
});
document.getElementById('phone').addEventListener('input',event=>event.target.setCustomValidity(''));
