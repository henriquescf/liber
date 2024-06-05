export const classScheduleSheet = async (data: any) => {
  const sheet_url = "https://script.google.com/macros/s/AKfycbwfev7gLU3HwPjwNjAA9pXTziVNqjzl36CMOVUF2OpGvHgQDbpe5N6JpbTSPlJEaiE/exec"
  
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