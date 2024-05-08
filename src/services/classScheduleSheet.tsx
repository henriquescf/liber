export const classScheduleSheet = async (data: any) => {
  const sheet_url = "https://script.google.com/macros/s/AKfycbyTuO5O81GT2PGj8eCTJegVnytuA75Oq_g7HtWm5r96UNrqR4xP8dIxfWLVR798asqe0Q/exec"
  
  const formData = new FormData();
  formData.append('Nome', data.name);
  formData.append('Email', data.email);
  formData.append('Idioma', data.language);
  formData.append('Modalidade', data.modality);
  formData.append('Telefone', data.phone);
  formData.append('Origem', data.source);
  formData.append('Contato', data.contact);
  try {
    await fetch(sheet_url, {
      method: 'POST',
      body: formData,
      mode: "no-cors",
    })
  } catch (error) {
    console.log(error);
  }
}