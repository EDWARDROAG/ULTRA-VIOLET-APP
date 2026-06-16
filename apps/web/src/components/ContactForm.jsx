import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { services } from '../data/siteData'

const inputClass =
  'w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/25'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'detalles',
      message: '',
    },
  })

  const onSubmit = async () => {
    toast.success('Solicitud recibida', {
      description: 'Gracias por escribir a Aura Violet. Te contactaremos pronto.',
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-[2rem] p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-purple-100">Nombre</span>
          <input
            {...register('name', { required: 'El nombre es requerido', minLength: { value: 2, message: 'Nombre muy corto' } })}
            placeholder="Tu nombre"
            className={inputClass}
          />
          {errors.name && <p className="text-sm text-amber-200">{errors.name.message}</p>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-purple-100">Email</span>
          <input
            {...register('email', {
              required: 'El email es requerido',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email invalido' },
            })}
            type="email"
            placeholder="correo@ejemplo.com"
            className={inputClass}
          />
          {errors.email && <p className="text-sm text-amber-200">{errors.email.message}</p>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-purple-100">Telefono</span>
          <input {...register('phone')} placeholder="Opcional" className={inputClass} />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-purple-100">Tipo de servicio</span>
          <select {...register('service')} className={inputClass}>
            {services.map((service) => (
              <option key={service.id} value={service.id} className="bg-neutral-950">
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-semibold text-purple-100">Mensaje</span>
        <textarea
          {...register('message', {
            required: 'Cuentanos que necesitas',
            minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres' },
          })}
          placeholder="Cuéntanos la idea, fecha, colores o referencia que tienes en mente."
          className={inputClass}
          rows="5"
        />
        {errors.message && <p className="text-sm text-amber-200">{errors.message.message}</p>}
      </label>

      <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full sm:w-auto">
        {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
      </button>
    </form>
  )
}
