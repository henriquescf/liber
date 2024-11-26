export const contactUsSheet = async (data: any) => {
    const sheet_url = ""
    
    const formData = new FormData();
    formData.append('Nome', data.name);
    formData.append('Email', data.email);
    formData.append('Mensagem', data.message);
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
