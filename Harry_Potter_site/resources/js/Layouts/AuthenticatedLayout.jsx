import { useState } from 'react';
import { Link } from '@inertiajs/react';
import {NavDropdown} from 'react-bootstrap';
import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import LanguageSwitcher from '@/Components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-navbar border-b border-gray-100">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/home" className='text-decoration-none text-dark'>
                                    <ApplicationLogo/>
                                </Link>
                            </div>
                            <div className="flex items-center hidden space-x-8 lg:-my-px lg:ml-10 lg:flex">
                                <NavLink href={route('home')} active={route().current('home')} className="text-decoration-none color_link">
                                    Home
                                </NavLink>
                                <NavDropdown title={t("regions")} style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/abruzzo">Abruzzo</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/basilicata">Basilicata</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/calabria">Calabria</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/campania">Campania</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/emilia_romagna">Emilia Romagna</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/friuli_venezia_giulia">Friuli Venezia Giulia</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/lazio">Lazio</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/liguria">Liguria</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/lombardy">{t("lombardy")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/marche">Marche</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/molise">Molise</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/piedmont">{t("piedmont")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/apulia">{t("apulia")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/sardinia">{t("sardinia")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/sicily">{t("sicily")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/toscany">{t("toscany")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/trentino_south_tyrol">{t("trentino south tyrol")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/umbria">Umbria</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/aosta_valley">{t("aosta valley")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/veneto">Veneto</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("rivers")} style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/rivers/adige_river">{t("adige river")}</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("lakes")} style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/lakes/lake_garda">{t("lake garda")}</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("sea")} style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/sea/adriatic_sea">{t("adriatic sea")}</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("mountain")} style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='text-decoration-none color_link' href="/mountain/monte_bondone">Monte Bondone</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <ResponsiveNavLink href={route('profile.edit')}>{t('profile')}</ResponsiveNavLink>
                                        <ResponsiveNavLink href={route('logout')} method="post" as="button">
                                            {t("log out")}
                                        </ResponsiveNavLink>
                                    </Dropdown.Content>
                                </Dropdown>
                                
                            </div>
                            <LanguageSwitcher/>
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
                        <NavLink href={route('home')} active={route().current('home')} className="text-decoration-none color_link">
                            Home
                        </NavLink>
                        <h6 className='ms-1 fw-bold'>{t("regions")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/abruzzo">Abruzzo</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/basilicata">Basilicata</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/calabria">Calabria</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/campania">Campania</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/emilia_romagna">Emilia Romagna</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/friuli_venezia_giulia">Friuli Venezia Giulia</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/lazio">Lazio</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/liguria">Liguria</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/lombardy">{t("lombardy")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/marche">Marche</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/molise">Molise</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/piedmont">{t("piedmont")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/apulia">{t("apulia")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/sardinia">{t("sardinia")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/sicily">{t("sicily")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/toscany">{t("toscany")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/trentino_south_tyrol">{t("trentino south tyrol")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/umbria">Umbria</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/aosta_valley">{t("aosta valley")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/veneto">Veneto</NavLink>
                            </NavDropdown.Item>
                        </div>
                        <h6 className='ms-1 fw-bold'>{t("rivers")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/rivers/adige_river">{t("adige river")}</NavLink>
                            </NavDropdown.Item>
                        </div>
                        <h6 className='ms-1 fw-bold'>{t("lakes")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/lakes/lake_garda">{t("lake garda")}</NavLink>
                            </NavDropdown.Item>
                        </div>
                        <h6 className='ms-1 fw-bold'>{t("seas")}</h6>
                        <div className="ms-3">
                        <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/seas/adriatic_sea">{t("adriatic sea")}</NavLink>
                            </NavDropdown.Item>
                        </div>
                        
                        <h6 className='ms-1 fw-bold'>{t("mountains")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='text-decoration-none color_link' href="/mountain/monte_bondone">Monte Bondone</NavLink>
                            </NavDropdown.Item>
                        </div>
                        
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium fw-bold">
                                {auth.user.name}
                            </div>
                            <div className="font-medium">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>{t('profile')}</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                {t("log out")}
                            </ResponsiveNavLink>
                        </div>
                    </div>
                    <LanguageSwitcher/>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}