import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Materie_di_Hogwarts(props) {
    
  const { t } = useTranslation();
  return (
    <>
        <Head title={t('hogwarts subjects')}/>
        <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
        >
            <main>
                <div className='text-center aosta_valley'>
                    <h1>{t('hogwarts subjects')} </h1>
                </div>
                <div className="body">

                </div>
            </main>
        </AuthenticatedLayout>
        
    </>
      
  )
}