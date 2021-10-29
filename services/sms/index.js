const Vonage = require('@vonage/server-sdk')
const vonage = new Vonage({
  apiKey: "19d94037",
  apiSecret: "MxgoD1RhPcPn1tpv"
})
const from = "Tuna Biso"
const sendCustomSms = (to, text) => {
    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
}
sendCustomSms("243825937168", "Tuna Biso, plateforme de lutte contre les fake news")