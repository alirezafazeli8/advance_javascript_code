const URL = "https://api.txtlocal.com/send/";

async function smsFunc() {
  try {
    const sms = await fetch(URL);
    const newSms = await sms.json();
    console.log(newSms);
  } catch (e) {
    console.log(e);
  }
}

smsFunc();
