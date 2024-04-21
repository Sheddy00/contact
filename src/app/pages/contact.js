import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  contact: z.string().length(10),
  message: z.string().nonempty(),
});

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Name</label>
          <input {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Contact</label>
          <input {...register("contact")} />
          {errors.contact && <span>{errors.contact.message}</span>}
        </div>

        <div>
          <label>Message</label>
          <textarea {...register("message")} />
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        <button type="submit">Send</button>

      </form>

    </div>
  );
}

export default Contact;