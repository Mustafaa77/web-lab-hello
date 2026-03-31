import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Iletisime Gec</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Projelerimle ilgileniyorsaniz veya bir sorunuz varsa asagidaki formu doldurarak bana ulasabilirsiniz.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}