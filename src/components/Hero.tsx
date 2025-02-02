
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-16 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-30 left-16 w-80 h-80 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
              Bem-vindo ao seu lugar de acolhimento
            </h1>
            <p className="text-lg text-accent mb-8">
              Psicóloga clínica especializada em Esquizoanálise, oferecendo um ambiente seguro 
              para seu desenvolvimento pessoal e bem-estar emocional.
            </p>
            <a
              href="https://wa.me/5521970452583"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Agende sua Consulta
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
              alt="Ambiente acolhedor"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;