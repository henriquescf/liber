export const contactUsSheet = async (data: any) => {
    const sheet_url = "https://script.google.com/macros/s/AKfycbzYyMYAr07J6WEeQ7a7bJ9uV3uHDW1mKOcp4PTE-iFOqEX_99ubCgZ6LV-A-yJJR8d7WQ/exec"
    
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