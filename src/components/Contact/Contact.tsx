import { ChangeEvent, FormEvent, useState } from 'react';
import { sendEmail } from '../../services/sendEmail';
import { IoIosCall, IoIosMail, IoIosPin } from "react-icons/io";
import styles from './contact.module.css';
import { BsFillSendFill } from 'react-icons/bs';

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    isSuccess: false,
    isError: false,
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await sendEmail(formData);
    if (result?.status === 200) {
      setSubmitStatus({
        isSuccess: true,
        isError: false,
        message: 'Your message was successfully sent!',
      });
    } else {
      setSubmitStatus({
        isSuccess: false,
        isError: true,
        message: 'There is an error, try again!',
      });
    }

    setTimeout(() => {
      setSubmitStatus({
        isSuccess: false,
        isError: false,
        message: '',
      })
    }, 5000);
  };

  return (
    <div id='contact' className={styles.container}>
      <h1 className='section-title'>Contact Me</h1>
      <div className={styles['contact-columns']}>
        <div className={styles['row-1']}>
          <h3 className={styles['row-title']}>Send Me A Message</h3>
          <p>I'm always open to new opportunities and collaborations. Feel free to reach out to me if you have any questions, feedback, or just want to say hello!</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              >
              </textarea>
              <label htmlFor="message">Message</label>
            </div>
            <div>
              <button
                type="submit"
                className={styles['submit-button']}
              >
                <BsFillSendFill className={styles['submit-icon']} />
                Send Message
              </button>
            </div>
          </form>
          <div className={styles['alert-container']}>
            {submitStatus.isSuccess && (
              <p className={styles['success-alert']}>{submitStatus.message}</p>
            )}
            {submitStatus.isError && (
              <p className={styles['error-alert']}>{submitStatus.message}</p>
            )}
          </div>
        </div>
        <hr />
        <div className={styles['row-2']}>
          <h3 className={styles['row-title']}>Contact Information</h3>
          <div className={styles['contact-info']}>
            <p>
              <span><IoIosMail /></span>
              adrian.villamil@unillanos.edu.co
            </p>
            <p>
              <span><IoIosCall /></span>
              (+57) 301-260-4294
            </p>
            <p>
              <span><IoIosPin /></span>
              Colombia, Villavicencio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};