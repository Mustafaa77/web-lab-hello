// @ts-nocheck
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Card from './components/ui/Card';
import Alert from './components/ui/Alert';

export default function UIKit() {
  // Karanlik tema acma/kapatma fonksiyonu
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 transition-colors duration-300">
      
      {/* ===== DARK MODE TOGGLE BUTONU ===== */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        {/* Acik temada Ay, Karanlik temada Gunes ikonu gorunur */}
        <span className="dark:hidden text-xl">🌙</span>
        <span className="hidden dark:inline text-xl">☀️</span>
      </button>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        UI Kit (Bilesen Vitrini)
      </h1>

      {/* ===== BUTTONS (4 Renk, 3 Boyut, 1 Disabled) ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      {/* ===== INPUTS (Normal, Hatali, Yardimci Metinli, Disabled) ===== */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-2">Inputs</h2>
        <Input id="ui-name" label="Normal Input" placeholder="Bir seyler yazin..." />
        <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur!" />
        <Input id="ui-help" label="Yardimci Metinli" type="email" helpText="E-posta adresinizi girin." />
        <Input id="ui-dis" label="Devre Disi (Disabled)" disabled value="Degistirilemez" />
      </section>

      {/* ===== CARDS (Elevated, Outlined, Filled) ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-2">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated" title="Elevated Card">Golge ile yukseltilmis kart.</Card>
          <Card variant="outlined" title="Outlined Card">Cerceveli sade kart.</Card>
          <Card variant="filled" title="Filled Card">Dolgulu arka plana sahip kart.</Card>
        </div>
      </section>

      {/* ===== ALERTS (Info, Success, Warning, Error) ===== */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-2">Alerts</h2>
        <Alert variant="info" title="Bilgi">Sistem guncellemesi basariyla tamamlandi.</Alert>
        <Alert variant="success" title="Basarili">Islem basariyla kaydedildi.</Alert>
        <Alert variant="warning" title="Uyari">Lutfen baglantinizi kontrol edin.</Alert>
        <Alert variant="error" title="Hata" dismissible>Sunucuya baglanilamadi. Tekrar deneyin.</Alert>
      </section>
      
    </div>
  );
}