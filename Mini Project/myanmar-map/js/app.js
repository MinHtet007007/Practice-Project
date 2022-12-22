let currentPlace = document.querySelector(".caption-place");
let path = document.querySelectorAll(".map path");
let captionDescription = document.querySelector(".caption-description");
let captionTitle = document.querySelector(".caption-title");

path.forEach(x=>{
    x.addEventListener("mouseover",_=>{
        currentPlace.innerText = x.getAttribute('title');
        captionDescription.innerText = x.getAttribute('description');
        captionTitle.innerText = x.getAttribute('title');
    });
});

path.forEach(x=>{
    x.addEventListener("mouseout",_=>{
        currentPlace.innerText = "Myanmar";
        captionDescription.innerText = "မြန်မာနိုင်ငံ (အင်္ဂလိပ်: Myanmar သို့မဟုတ် Burma)၊ တရားဝင်အားဖြင့် ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော် (Republic of the Union of Myanmar) သည် အရှေ့တောင်အာရှရှိ နိုင်ငံတစ်နိုင်ငံဖြစ်သည်။ အနောက်နှင့် အနောက်မြောက်ဘက်တွင် ဘင်္ဂလားဒေ့ရှ်နိုင်ငံ၊ အိန္ဒိယနိုင်ငံ၊ အရှေ့မြောက်ဘက်တွင် တရုတ်ပြည်သူ့သမ္မတနိုင်ငံ၊ ‌အရှေ့နှင့် အရှေ့တောင်ဘက်တွင် လာအိုနိုင်ငံ၊ ထိုင်းနိုင်ငံတို့နှင့် နယ်နမိတ်ချင်းထိစပ်ပြီး တောင်ဘက်နှင့် အနောက်တောင်ဘက်တွင် ကပ္ပလီပင်လယ်နှင့် ဘင်္ဂလားပင်လယ်အော်တို့ တည်ရှိသည်။ နိုင်ငံ၏မြို့တော်မှာ နေပြည်တော်မြို့ဖြစ်ပြီး အကြီးဆုံးမြို့မှာ ရန်ကုန်မြို့ဖြစ်သည်။[၁]";
        captionTitle.innerText = "Myanmar Nation";
    });
});