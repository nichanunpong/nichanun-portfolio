import React, { useRef, useState } from 'react';
import './FormStyle.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.get('name')?.trim()) {
      newErrors.name = 'Name is required';
    }

    const email = formData.get('email')?.trim();
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.get('subject')?.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.get('message')?.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setSuccessMessage('');

    emailjs
      .sendForm('service_a6f44ejs', 'template_k93c96c', form.current, {
        publicKey: 'aSjYVaok8Qj202D_D',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setSuccessMessage(
            "Message sent successfully! I'll get back to you soon."
          );
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrors({ submit: 'Failed to send message. Please try again.' });
          setLoading(false);
        }
      );
  };

  return (
    <div className='contact-container'>
      <div className='contact-form-card'>
        <h3>Send me a message</h3>
        <p>
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
        <br />

        {successMessage && (
          <div
            className='success-message'
            style={{ color: '#4CAF50', marginBottom: '1rem' }}>
            {successMessage}
          </div>
        )}

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type='text'
            name='name'
            className={errors.name ? 'error' : ''}
            disabled={loading}
          />
          {errors.name && <span className='error-text'>{errors.name}</span>}

          <label>Email</label>
          <input
            type='email'
            name='email'
            className={errors.email ? 'error' : ''}
            disabled={loading}
          />
          {errors.email && <span className='error-text'>{errors.email}</span>}

          <label>Subject</label>
          <input
            type='text'
            name='subject'
            className={errors.subject ? 'error' : ''}
            disabled={loading}
          />
          {errors.subject && (
            <span className='error-text'>{errors.subject}</span>
          )}

          <label>Message</label>
          <textarea
            rows='6'
            placeholder='Type your message here'
            name='message'
            className={errors.message ? 'error' : ''}
            disabled={loading}
          />
          {errors.message && (
            <span className='error-text'>{errors.message}</span>
          )}

          {errors.submit && <div className='error-text'>{errors.submit}</div>}

          <button
            className='btn'
            type='submit'
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
      <div className='contact-links-card'>
        <h3>Connect with me</h3>
        <p>
          You can also reach out to me directly through these channels. Fill out
          the form and I'll get back to you as soon as possible.
        </p>
        <Link
          to='https://github.com/nichanunpong'
          className='card'
          aria-label='GitHub'
          target='_blank'
          rel='noopener noreferrer'>
          <FiGithub className='icon' />
          https://github.com/nichanunpong
        </Link>
        <Link
          to='https://www.linkedin.com/in/nichanun-pong'
          aria-label='LinkedIn'
          target='_blank'
          rel='noopener noreferrer'
          className='card'>
          <FiLinkedin className='icon' />
          https://www.linkedin.com/in/nichanun-pong
        </Link>
        <Link
          to='mailto:nichanun.luck@gmail.com'
          aria-label='Email'
          target='_blank'
          className='card'>
          <FiMail className='icon' />
          nichanun.luck@gmail.com
        </Link>
        <Link className='card' to='tel:+16726991228' aria-label='Phone'>
          <FiPhone className='icon' />
          +16726991228
        </Link>
        <h4>Current Location</h4>
        <p>Vancouver, Canada</p>
      </div>
    </div>
  );
};

export default Form;
