export const contactUsSheet = async (data: any) => {
    const sheet_url = "https://script.google.com/macros/s/AKfycbwy5IghYEqk9icUZUqMOpoIKOHe-ZIovRP7FoGjpeIOQPqcpN33LTx_Owzlv_nN7eJXtg/exec"
    
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