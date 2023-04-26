import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t, i18n } = useTranslation("page");

  return (
    <footer className="bg-primary
    text-white
    flex
          items-center
          justify-center
          flex-col
    text-center
    lg:p-7
    lg:flex-row
    lg:justify-around
    lg:text-start">
      <div className="p-5
            lg:w-1/2
            lg:mr-3
            lg:last:mr-0">
        <p className="text-bold text-2xl">
          {t('footer.title')}
        </p>
      </div>
      <div className="p-5
            lg:w-1/2
            lg:mr-3
            lg:last:mr-0">
        <p className="text-bold text-2xl">{t('footer.contactus')}</p>
        <p className="text-bold text-xl underline">{t('footer.phone')}</p>
        <p>06 66 99 78 95</p>
        <p className="text-bold text-xl underline">{t('footer.mail')}</p>
        <p>contact@ecoplayground.fr</p>
      </div>
      <div className="p-5
            lg:w-1/2
            lg:mr-3
            lg:last:mr-0">
        <p className="text-bold text-2xl">{t('footer.plan')}</p>
        <p>{t('footer.home')}</p>
        <p>{t('footer.challenges')}</p>
        <p>{t('footer.teams')}</p>
      </div>
      <div className="p-5
            lg:w-1/2
            lg:mr-3
            lg:last:mr-0">
        <p className="text-bold text-2xl">{t('footer.others')}</p>
        <p>{t('footer.contactus')}</p>
        <p>{t('footer.legal')}</p>
        <p>{t('footer.blog')}</p>
      </div>
    </footer>
  );
};

export default Footer;
