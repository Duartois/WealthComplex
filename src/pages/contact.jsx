import { useState } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Briefcase, DollarSign, User } from "lucide-react";

const saveLead = async (data) => {
  const token = import.meta.env.VITE_HUBSPOT_TOKEN;
  if (!token) return;
  try {
    await fetch("https://api.hubspot.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        properties: {
          email: data.email,
          firstname: data.name,
          phone: data.company,
          service_interest: data.service,
          project_budget: data.budget,
          message: data.description,
        },
      }),
    });
  } catch (err) {
    console.error("HubSpot error:", err);
  }
};

const notifySlack = async (data) => {
  const url = import.meta.env.VITE_SLACK_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `Lead recebido de ${data.name} (${data.email})\nEmpresa/Telefone: ${data.company}\nServiço: ${data.service}\nOrçamento: ${data.budget}\n${data.description}`,
      }),
    });
  } catch (err) {
    console.error("Slack error:", err);
  }
};

const formVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return; // bot caught
    if (
      !form.name ||
      !form.email ||
      !form.company ||
      !form.service ||
      !form.budget ||
      !form.description
    ) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company,
          service: form.service,
          budget: form.budget,
          message: form.description,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      await saveLead(form);
      await notifySlack(form);
      setSubmitted(true);
      setError("");
      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      setError("Falha ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Motion.section
      id="contact"
      className="relative py-20 lg:py-36 text-secondary"
      style={{
        background: "linear-gradient(116deg, #445374 0%, #BF8F85 100%)",
        backgroundSize: "200% 200%",
      }}
      initial={{ opacity: 0, y: 40, backgroundPosition: "0% 50%" }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.8, ease: "easeOut" },
        y: { duration: 0.8, ease: "easeOut" },
        backgroundPosition: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        },
      }}
    >
      <div className="container">
        <Motion.div
          className="rounded-2xl p-8 md:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-16 bg-primary backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Motion.div
            className="flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <h2 className="text-h2 leading-tight">
            Pronto para impulsionar seu próximo projeto?
          </h2>
          <p className="text-services-description max-w-prose">
            Preencha o formulário e nossa equipe retornará em até 24 horas com uma
            proposta personalizada para o seu desafio digital. Prefere falar
            agora?
          </p>
          <ul className="space-y-3 text-services-description">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-white" />
              <a
                href="mailto:matheusduartegon@gmail.com"
                className="hover-white-underline-animation"
              >
                matheusduartegon@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-white" />
              <a href="tel:+5511958060256" className="hover-white-underline-animation">
                +55 (11) 95806-0256
              </a>
            </li>
          </ul>
        </Motion.div>

        <Motion.form
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="name" className="mb-2 flex items-center gap-2">
                <User className="h-4 w-4" />
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/10 border border-white/20 text-secondary placeholder-secondary-50 focus:border-primary-30 focus:ring-2 focus:ring-primary-30 transition-colors"
              />
            </Motion.div>
            <Motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="email" className="mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/10 border border-white/20 text-secondary placeholder-secondary-50 focus:border-primary-30 focus:ring-2 focus:ring-primary-30 transition-colors"
              />
            </Motion.div>
            <Motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="company" className="mb-2 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Empresa ou telefone
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/10 border border-white/20 text-secondary placeholder-secondary-50 focus:border-primary-30 focus:ring-2 focus:ring-primary-30 transition-colors"
              />
            </Motion.div>
            <Motion.div variants={fieldVariants} className="flex flex-col">
              <label htmlFor="service" className="mb-2 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Serviço desejado
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/10 border border-white/20 text-secondary focus:border-primary-30 focus:ring-2 focus:ring-primary-30 transition-colors"
              >
                <option className="text-secondary" value="" disabled hidden>
                  Selecione um serviço
                </option>
                <option className="text-primary" value="Website">
                  Website institucional
                </option>
                <option className="text-primary" value="E-commerce">
                  Loja virtual (E-commerce)
                </option>
                <option className="text-primary" value="Branding">
                  Identidade visual (Branding)
                </option>
                <option className="text-primary" value="Outro">
                  UX/UI
                </option>
                <option className="text-primary" value="Outro">
                  Backend (API)
                </option>
                <option className="text-primary" value="Outro">
                  Outro projeto
                </option>
              </select>
            </Motion.div>
            <Motion.div variants={fieldVariants} className="flex flex-col md:col-span-2">
              <label htmlFor="budget" className="mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Orçamento estimado
              </label>
              <input
                id="budget"
                name="budget"
                type="text"
                value={form.budget}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/10 border border-white/20 text-secondary placeholder-secondary-50 focus:border-primary-30 focus:ring-2 focus:ring-primary-30 transition-colors"
              />
            </Motion.div>
            <Motion.div variants={fieldVariants} className="flex flex-col md:col-span-2">
              <label htmlFor="description" className="mb-2">
                Descrição do projeto
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={form.description}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-white/10 border border-white/20 text-secondary placeholder-secondary-50 focus:border-primary-30 focus:ring-2 focus:ring-primary-30 transition-colors"
              />
            </Motion.div>
          </div>
          <Motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary-white w-fit self-start disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar"}
          </Motion.button>
          {submitted && (
            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500"
            >
              Recebemos sua mensagem! Em breve entraremos em contato.
            </Motion.p>
          )}
          {error && (
            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500"
            >
              {error}
            </Motion.p>
          )}
          </Motion.form>
          </Motion.div>
        </div>
      </Motion.section>
  );
};

export default Contact;