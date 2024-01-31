import axios from "axios";

export const sendEmail = async (contactFormData: ContactFormData) => {
  const emailData: EmailData = {
    service_id: 'service_2g8leh6',
    template_id: 'template_1q398fo',
    user_id: 'RkWyYHSfvSeDAzuu_',
    template_params: {
      from_name: contactFormData.name,
      from_email: contactFormData.email,
      to_name: 'Adrian Villamil',
      message: contactFormData.message,
    }
  }

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};