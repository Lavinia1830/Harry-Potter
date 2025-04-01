import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { NavDropdown, Dropdown } from 'react-bootstrap';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import LanguageSwitcher from '@/Components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Authenticated({ auth, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { i18n, t } = useTranslation();

    const locale = i18n.language;
    const harry_potter_and_the_philosopher_s_stone = locale === 'en' ? '/harry_potter_and_the_philosopher_s_stone' : '/harry_potter_e_la_pietra_filosofale';
    const harry_potter_and_the_chamber_of_secrets = locale === 'en' ? '/harry_potter_and_the_chamber_of_secrets' : '/harry_potter_e_la_camera_dei_segreti';
    const harry_potter_and_the_prisoner_of_azkaban = locale === 'en' ? '/harry_potter_and_the_prisoner_of_azkaban' : '/harry_potter_e_il_prigioniero_di_azkaban';
    const harry_potter_and_the_goblet_of_the_fire = locale === 'en' ? '/harry_potter_and_the_goblet_of_the_fire' : '/harry_potter_e_il_calice_di_fuoco';
    const harry_potter_and_the_half_blood_prince = locale === 'en' ? '/harry_potter_and_the_deathly_hallows' : '/harry_potter_e_l_ordine_della_fenice';
    const harry_potter_and_the_deathly_hallows = locale === 'en' ? '/harry_potter_and_the_half_blood_prince' : '/harry_potter_e_il_principe_mezze_sangue';
    const harry_potter_and_the_cursed_chid = locale === 'en' ? '/harry_potter_and_the_cursed_chid' : 'harry_potter_e_i_doni_della_morte';
    const fantastic_beasts_and_where_to_find_them = locale === 'en' ? '/fantastic_beasts_and_where_to_find_them' : '/animali_fantastici_e_dove_trovarli';
    const fantastic_beasts_and_the_crimes_of_grindelwald = locale === 'en' ? '/fantastic_beasts_and_the_crimes_of_grindelwald' : '/animali_fanastici_i_crimini_di_grindelwald';
    const fantastic_beasts_and_the_secret_of_dumbledore = locale === 'en' ? '/fantastic_beasts_and_the_secret_of_dumbledore' : '/animali_fantastici_i_segreti_di_silente';
    const login = locale === 'en' ? '/login' : '/accedi';
    const register = locale === 'en' ? '/register' : '/registrati';


    console.log(auth)

    return (
        <div className="min-h-screen">
            <nav className="bg-navbar border-b border-gray-100">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                {/* Logo */}
                                <Link href="/" className='text-decoration-none'>
                                    <ApplicationLogo />
                                </Link>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex items-center hidden space-x-8 lg:-my-px lg:ml-10 lg:flex">
                                <NavDropdown title={t("books")} className="text-white">
                                    {/* ... (your book navigation) ... */}
                                    <NavDropdown title={t("harry potter")} className="ms-2 text-dark">
                                        <NavDropdown.Item>
                                            <NavLink href={harry_potter_and_the_philosopher_s_stone} className='text-dark'>{t("harry potter and the philosophers stone")}</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink href={harry_potter_and_the_chamber_of_secrets} className='text-dark'>{t("harry_potter_and_the_chamber_of_secrets")}</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink href={harry_potter_and_the_prisoner_of_azkaban} className='text-dark'>{t("harry_potter_and_the_prisoner_of_azkaban")}</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink href={harry_potter_and_the_goblet_of_the_fire} className='text-dark'>{t("harry_potter_and_the_goblet_of_the_fire")}</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink href={harry_potter_and_the_half_blood_prince} className='text-dark'>{t("harry_potter_and_the_half_blood_prince")}</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink href={harry_potter_and_the_deathly_hallows} className='text-dark'>{t("harry_potter_and_the_deathly_hallows")}</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink href={harry_potter_and_the_cursed_chid} className='text-dark'>{t("harry_potter_and_the_cursed_chid")}</NavLink>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title={t("fantastic beasts")} className="ms-2 text-dark">
                                        <NavDropdown.Item>
                                            <NavLink href={fantastic_beasts_and_where_to_find_them} className='text-dark'>{t("fantastic_beasts_and_where_to_find_them")}</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink href={fantastic_beasts_and_the_crimes_of_grindelwald} className='text-dark'>{t("fantastic_beasts_and_the_crimes_of_grindelwald")}</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink href={fantastic_beasts_and_the_secret_of_dumbledore} className='text-dark'>{t("fantastic_beasts_and_the_secret_of_dumbledore")}</NavLink>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>
                                <NavDropdown title={t("movies")} className="text-white">
                                    <NavDropdown.Item><NavLink href="/movie_1">{t("Movie 1")}</NavLink></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("video games")} className="text-white">
                                    <NavDropdown.Item><NavLink href="/games">{t("Games List")}</NavLink></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("characters")} className="text-white">
                                    <NavDropdown.Item><NavLink href="/characters">{t("All Characters")}</NavLink></NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:ml-6">
                            <div className="flex items-center space-x-4 ml-auto">
                                {/* Authentication Links */}
                                {!auth?.user && (
                                    <>
                                        <ResponsiveNavLink href={login} className="text-decoration-none">
                                            {t('login')}
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href={register} className="text-decoration-none">
                                            {t('register')}
                                        </ResponsiveNavLink>
                                    </>
                                )}

                                {/* User Dropdown */}
                                {auth?.user && (
                                    <Dropdown>
                                        <Dropdown.Toggle className="flex items-center px-3 py-2 bg-black rounded-md shadow">
                                            <span className="text-white truncate w-[70px]">{auth.user.name}</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <ResponsiveNavLink href={route('profile.edit')} className="text-decoration-none">
                                                {t('profile')}
                                            </ResponsiveNavLink>
                                            <ResponsiveNavLink href={route('logout')} method="post" as="button">
                                                {t('log out')}
                                            </ResponsiveNavLink>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                )}
                            </div>
                            <LanguageSwitcher />
                        </div>
                        <div className="-mr-2 flex items-center lg:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' lg:hidden'}>
                    <div className="ps-4 pt-2 pb-3 space-y-1">
                        <h5 className='ms-1 fw-bold text-light'>{t("books")}</h5>
                        <h6 className='ms-1 fw-bold text-light'>{t("harry potter")}</h6>
                        <NavDropdown.Item>
                            <NavLink href={harry_potter_and_the_philosopher_s_stone} className='text-decoration-none color_link'>{t("harry potter and the philosophers stone")}</NavLink>
                        </NavDropdown.Item>
                        {/* ... (your mobile book navigation) ... */}
                        <NavDropdown.Item>
                            <NavLink href={harry_potter_and_the_chamber_of_secrets} className='text-decoration-none color_link'>{t("harry potter and the chamber of secrets")}</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink href={harry_potter_and_the_prisoner_of_azkaban} className='text-decoration-none color_link'>{t("harry potter and the prisoner of azkaban")}</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink href={harry_potter_and_the_goblet_of_the_fire} className='text-decoration-none color_link'>{t("harry potter and the goblet of the fire")}</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink href={harry_potter_and_the_half_blood_prince} className='text-decoration-none color_link'>{t("harry potter and the half blood prince")}</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink href={harry_potter_and_the_deathly_hallows} className='text-decoration-none color_link'>{t("harry potter and the deathly hallows")}</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink href={harry_potter_and_the_cursed_chid} className='text-decoration-none color_link'>{t("harry potter and the cursed chid")}</NavLink>
                        </NavDropdown.Item>
                        <h6 className='ms-1 fw-bold text-light'>{t("fantastic beasts")}</h6>
                        <NavDropdown.Item>
                            <NavLink href={fantastic_beasts_and_where_to_find_them} className='text-decoration-none color_link'>{t("fantastic beasts and where to find them")}</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink href={fantastic_beasts_and_the_crimes_of_grindelwald} className='text-decoration-none color_link'>{t("fantastic beasts and the crimes of grindelwald")}</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink href={fantastic_beasts_and_the_secret_of_dumbledore} className='text-decoration-none color_link'>{t("fantastic beasts and the secret of dumbledore")}</NavLink>
                        </NavDropdown.Item>
                    </div>
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        {auth?.user ? (
                            <div>
                                <div className="px-4">
                                    <div className="font-medium fw-bold text-white">
                                        {auth.user.name}
                                    </div>
                                    <div className="font-medium text-white">{auth.user.email}</div>
                                </div>
                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink href={route('profile.edit')} className='text-decoration-none'>{t('profile')}</ResponsiveNavLink>
                                    <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                        {t("log out")}
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        ) : (
                            <div className="flex space-x-4">
                                <ResponsiveNavLink href={login} className="text-decoration-none">{t('login')}</ResponsiveNavLink>
                                <ResponsiveNavLink href={register} className="text-decoration-none">{t('register')}</ResponsiveNavLink>
                            </div>
                        )}
                    </div>
                    <LanguageSwitcher />
                </div>

            </nav>
            <main>{children}</main>
        </div>

    );


}