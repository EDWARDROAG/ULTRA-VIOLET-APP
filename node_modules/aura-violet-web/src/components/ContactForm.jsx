import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensaje muy corto')
})

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    toast.success('Mensaje enviado correctamente')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="Nombre" className="w-full p-2 border rounded" />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      <input {...register('email')} placeholder="Email" className="w-full p-2 border rounded" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      <textarea {...register('message')} placeholder="Mensaje" className="w-full p-2 border rounded" rows="4"></textarea>
      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors">
        Enviar
      </button>
    </form>
  )
}
