function sendMail(contactForm) {
  emailjs
    .send("magnusson_informatica", "contact_form", {
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      subject: "Callback",
      message: "Please call me back on:",
      contact_number: contactForm.number.value,
    })
    .then(
      function (response) {
        var status = { status };
        console.log("SUCCESS", response);
        alert(`Your Message has been Sent!`);
      },
      function (error) {
        console.log("FAILED", response);
        alert(`Your Message has not been sent`);
      }
    );
  return false;
}
