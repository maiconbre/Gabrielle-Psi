import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl text-primary mb-4">Contato</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
           
           <div className="flex items-start space-x-4">
              <Mail className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-display text-xl text-accent mb-2">E-mail</h3>
                <a
                  href="mailto:seu-email@exemplo.com"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  sr.gabriellelima@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-display text-xl text-accent mb-2">Localização</h3>
                <p className="text-gray-600">Rua Roque Barbosa - Jardim Bangu / Bangu </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-display text-xl text-accent mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/5521970452583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-2"
                >
                 <FaWhatsapp size={46} className="text-green-500" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d771.0952643322242!2d-43.46613943647031!3d-22.847248751755384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1738522413548!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;