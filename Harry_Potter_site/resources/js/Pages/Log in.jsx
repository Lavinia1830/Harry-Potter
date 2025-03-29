import React from 'react';
import LanguageSwitcher from '@/Components/LanguageSwitcher';
import { Link, Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Welcome() {

    const { t } = useTranslation();
    
    return (
        <>
            <Head title={t("welcome")} />
            
            <div className="login-page">
                <div className='position-absolute top-0 end-0 pe-2'>
                    <LanguageSwitcher/>
                </div>
                {/* Add your code for the background or other page elements here */}
                <div className="login-form">
                    <h2>{t('welcome')}</h2>
                    {/* Add more form elements here if needed */}
                    <div className='row'>
                        <div className="col">
                            <Link href='/register' className='text-decoration-none'><button type="button" className="btn-register me-3">{t('register')}</button></Link>
                        </div>
                        <div className="col">
                            <Link href='/login' className='text-decoration-none'><button type="button" className="btn-login">{t('login')}</button></Link>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
}