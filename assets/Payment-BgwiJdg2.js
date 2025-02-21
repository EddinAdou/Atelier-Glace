import{a as h,r as u,j as e}from"./index-BBFf4XFx.js";const v=()=>{const{cart:n}=h(),o=2e3,[t,l]=u.useState({name:"",phone:"",email:"",address:"",city:""}),i=a=>{a.preventDefault();const c=n.map(s=>`• ${s.name} (${s.quantity}x) : ${(s.price*s.quantity).toLocaleString()} FCFA`).join(`
`),m=n.reduce((s,r)=>s+r.price*r.quantity,0)+o,d=`
🛍️ *Nouvelle Commande - Atelier Glacé*

*Client:*
Nom: ${t.name}
Téléphone: ${t.phone}
Email: ${t.email}

*Adresse de livraison:*
${t.address}
${t.city}

*Commande:*
${c}

Livraison: ${o.toLocaleString()} FCFA
*Total:* ${m.toLocaleString()} FCFA
    `.trim(),x=encodeURIComponent(d);window.location.href=`https://wa.me/2250759812366?text=${x}`};return e.jsx("div",{className:"py-12 mt-16 px-6",children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Informations de livraison"}),e.jsxs("form",{onSubmit:i,className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm mb-2 font-thin",children:"Nom complet"}),e.jsx("input",{type:"text",required:!0,value:t.name,onChange:a=>l({...t,name:a.target.value}),className:"w-full border p-3 text-base font-thin"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-thin mb-2",children:"Téléphone"}),e.jsx("input",{type:"tel",required:!0,value:t.phone,onChange:a=>l({...t,phone:a.target.value}),className:"w-full border p-3 text-base font-thin"})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-thin mb-2",children:"Email"}),e.jsx("input",{type:"email",required:!0,value:t.email,onChange:a=>l({...t,email:a.target.value}),className:"w-full border p-3 text-base font-thin"})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-thin mb-2",children:"Adresse de livraison"}),e.jsx("textarea",{required:!0,value:t.address,onChange:a=>l({...t,address:a.target.value}),className:"w-full border p-3 text-base font-thin",rows:3})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-thin mb-2",children:"Ville"}),e.jsx("input",{type:"text",required:!0,value:t.city,onChange:a=>l({...t,city:a.target.value}),className:"w-full border p-3 text-base font-thin"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-black text-white text-base font-thin py-4 hover:bg-gray-800 transition-colors",children:"Commander via WhatsApp"})]})]})})};export{v as default};
