import fotoperfil from '../img/fotoperfil.png'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl text-primary mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={fotoperfil}
              alt="Gabrielle Lima"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl text-accent mb-6">Abordagem Terapêutica</h3>
            <p className="text-lg mb-6">
              Como psicóloga clínica, trabalho com a Esquizoanálise, uma abordagem desenvolvida por 
              Gilles Deleuze e Félix Guattari que busca compreender a multiplicidade do desejo e 
              suas conexões com o campo social.
            </p>
            <p className="text-lg mb-6">
              Esta perspectiva nos permite explorar as diferentes dimensões da subjetividade, 
              considerando tanto os aspectos individuais quanto os coletivos que nos constituem.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-display text-primary mb-2">Especialidades</h4>
                <ul className="list-disc list-inside text-accent">
                  <li>Ansiedade</li>
                  <li>Depressão</li>
                  <li>Traumas</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-display text-primary mb-2">Formação</h4>
                <ul className="list-disc list-inside text-accent">
                  <li>Psicologia</li>
                  <li>Esquizoanálise</li>
                  <li>Saúde Mental</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;