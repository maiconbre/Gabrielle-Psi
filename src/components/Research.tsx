import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Research = () => {
  const articles = [
    {
      title: "A Esquizoanálise na Prática Clínica Contemporânea",
      description: "Uma análise sobre a aplicação dos conceitos de Deleuze e Guattari no contexto terapêutico atual.",
      date: "2023"
    },
    {
      title: "Subjetividade e Processos de Singularização",
      description: "Estudo sobre os processos de produção de subjetividade na sociedade contemporânea.",
      date: "2022"
    },
    {
      title: "Cartografia dos Afetos",
      description: "Pesquisa sobre métodos cartográficos na prática clínica.",
      date: "2021"
    }
  ];

  return (
    <section id="research" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl text-primary mb-4">Pesquisas e Artigos</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <BookOpen className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl text-accent mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <span className="text-secondary font-semibold">{article.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;