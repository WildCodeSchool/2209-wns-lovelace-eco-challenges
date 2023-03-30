import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-box">
        <p className="text-bold text-2xl">
          {t('footer.title')}
        </p>
      </div>
      <div className="footer-box">
        <p className="text-bold text-2xl">{t('footer.contactus')}</p>
        <p className="text-bold text-xl underline">{t('footer.phone')}</p>
        <p>06 66 99 78 95</p>
        <p className="text-bold text-xl underline">{t('footer.mail')}</p>
        <p>contact@ecoplayground.fr</p>
      </div>
      <div className="footer-box">
        <p className="text-bold text-2xl">{t('footer.plan')}</p>
        <p>{t('footer.home')}</p>
        <p>{t('footer.challenges')}</p>
        <p>{t('footer.teams')}</p>
      </div>
      <div className="footer-box">
        <p className="text-bold text-2xl">{t('footer.others')}</p>
        <p>{t('footer.contactus')}</p>
        <p>{t('footer.legal')}</p>
        <p>{t('footer.blog')}</p>
      </div>
    </footer>
  );
};

export default Footer;
