const Vonage = require('@vonage/server-sdk')
const vonage = new Vonage({
  apiKey: "19d94037",
  apiSecret: "MxgoD1RhPcPn1tpv"
})

sendCustomSms("243825937168", "Tuna Biso, plateforme de lutte contre les fake news")