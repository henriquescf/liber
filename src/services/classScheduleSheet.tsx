export const classScheduleSheet = async (data: any) => {
  const sheet_url = ""
  
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
