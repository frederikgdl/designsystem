/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import classNames from 'classnames';

() => {
    const [isUserNavOpen, setIsUserNavOpen] = useState(false);

    const expandMoreIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+';

    const personIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik00ODAtNDkyLjkyNHEtNTcuNzQ5IDAtOTUuMjItMzcuNDcxdC0zNy40NzEtOTUuNDEycTAtNTcuOTQyIDM3LjQ3MS05NS4yMjEgMzcuNDcxLTM3LjI3OCA5NS4yMi0zNy4yNzh0OTUuMjIgMzcuMjc4cTM3LjQ3MSAzNy4yNzkgMzcuNDcxIDk1LjIyMSAwIDU3Ljk0MS0zNy40NzEgOTUuNDEyLTM3LjQ3MSAzNy40NzEtOTUuMjIgMzcuNDcxWk0xODAuMDAxLTIzMy44NDd2LTI5Ljc2OXEwLTMyLjIzIDE3LjA3Ny01Ni4xNTMgMTcuMDc3LTIzLjkyMyA0NC4zODUtMzYuNzY5IDYzLjE1My0yOC4wNzcgMTIxLjc1Ni00Mi4zMDggNTguNjA0LTE0LjIzIDExNi43NjktMTQuMjMgNTguMTY2IDAgMTE2LjQ3MyAxNC41MzhRNjU0Ljc2OS0zODQgNzE3LjY3Mi0zNTYuMjY2cTI4LjM3NCAxMi44MTIgNDUuMzUgMzYuNjE2IDE2Ljk3NyAyMy44MDQgMTYuOTc3IDU2LjAzNHYyOS43NjlxMCAxOC45OC0xMy41ODcgMzIuNTY2LTEzLjU4NiAxMy41ODctMzIuNTY2IDEzLjU4N0gyMjYuMTU0cS0xOC45OCAwLTMyLjU2Ni0xMy41ODctMTMuNTg3LTEzLjU4Ni0xMy41ODctMzIuNTY2Wm00NS4zODQuNzY5aDUwOS4yM3YtMzAuNTM4cTAtMTUuNjE1LTkuODg1LTI5LjkyMy05Ljg4NC0xNC4zMDgtMjUuODA4LTIyLjQ2Mi01OC45OTktMjguNjkyLTExMS4zMDItNDAuMTkyLTUyLjMwMi0xMS41LTEwNy42Mi0xMS41LTU1LjMxOCAwLTEwOC40MjggMTEuNXQtMTExLjExIDQwLjE5MnEtMTUuOTIzIDguMTU0LTI1LjUgMjIuNDYydC05LjU3NyAyOS45MjN2MzAuNTM4Wk00ODAtNTM4LjMwN3EzNy40NjEgMCA2Mi4zODQtMjQuOTI0IDI0LjkyMy0yNC45MjMgMjQuOTIzLTYyLjM4NHQtMjQuOTIzLTYyLjM4NFE1MTcuNDYxLTcxMi45MjIgNDgwLTcxMi45MjJ0LTYyLjM4NCAyNC45MjNxLTI0LjkyMyAyNC45MjMtMjQuOTIzIDYyLjM4NHQyNC45MjMgNjIuMzg0cTI0LjkyMyAyNC45MjQgNjIuMzg0IDI0LjkyNFptMC04Ny4zMDhabTAgMzkyLjUzN1oiLz48L3N2Zz4=';

    return (
        <div>
            <header className="ffe-header">
                <div className="ffe-header__wrapper">
                    <nav
                        className="ffe-header__secondary-nav"
                        role="navigation"
                    >
                        <ul className="ffe-header__list ffe-header__secondary-nav-list">
                            <li className="ffe-header__list-item">
                                <a
                                    className="ffe-header__link ffe-header__link--active"
                                    href="#"
                                >
                                    Privat
                                </a>
                            </li>
                            <li className="ffe-header__list-item">
                                <a className="ffe-header__link" href="#">
                                    Bedrift
                                </a>
                            </li>
                            <li className="ffe-header__list-item">
                                <a className="ffe-header__link" href="#">
                                    Om oss
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="ffe-header__logo">
                        <a href="#">
                            <svg
                                viewBox="0 0 182 40"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ffe-header__logo-svg"
                            >
                                <title>SpareBank 1</title>
                                <g fill="none" fillRule="evenodd">
                                    <path
                                        d="M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828"
                                        fill="#F00000"
                                    />
                                    <path
                                        d="M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17"
                                        fill="#B40000"
                                    />
                                    <path
                                        d="M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734"
                                        fill="#FFF"
                                    />
                                    <path
                                        d="M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z"
                                        fill="#002776"
                                        className="ffe-header__logo-text"
                                    />
                                </g>
                            </svg>
                        </a>
                    </div>

                    <div className="ffe-header__user-nav-toggle">
                        <button
                            className="ffe-header__icon-button ffe-header__icon-button--user-nav"
                            onClick={() => setIsUserNavOpen(prev => !prev)}
                        >
                            <span className="ffe-header__user-name">
                                Jomar Beate Skrothaug
                                <span className="ffe-header__user-chevron">
                                    <Icon
                                        fileUrl={expandMoreIcon}
                                        className={classNames(
                                            'ffe-header__user-chevron-icon',
                                            {
                                                'ffe-header__user-chevron--expanded':
                                                    isUserNavOpen,
                                            },
                                        )}
                                    />
                                </span>
                            </span>
                            <div className="ffe-header__svg-icon ffe-header__user-icon">
                                <Icon
                                    fileUrl={personIcon}
                                    aria-label="bruker"
                                    size="xl"
                                />

                                <div className="ffe-header__notification-bubble">
                                    5
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="ffe-header__site-nav-toggle">
                        <button className="ffe-header__icon-button ffe-header__icon-button--site-nav">
                            <span className="ffe-header__site-nav-hamburger">
                                <span className="ffe-header__site-nav-hamburger-bar" />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="ffe-header__border">
                    <div className="ffe-header__wrapper">
                        <nav
                            className={classNames('ffe-header__user-nav', {
                                'ffe-header__user-nav--visible': isUserNavOpen,
                            })}
                        >
                            <ul
                                className={classNames(
                                    'ffe-header__list ffe-header__user-nav-list',
                                )}
                            >
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Huskeliste{' '}
                                        <span className="ffe-header__notification-bubble">
                                            1
                                        </span>
                                    </a>
                                </li>
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Postkasse{' '}
                                        <span className="ffe-header__notification-bubble">
                                            22
                                        </span>
                                    </a>
                                </li>
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Innstillinger
                                    </a>
                                </li>
                                <li className="ffe-header__list-item">
                                    <div className="ffe-header__link ffe-header__link--disabled">
                                        Chat - stengt
                                    </div>
                                </li>
                                <li className="ffe-header__list-item ffe-header__list-item--centered">
                                    <button className="ffe-header__logout-button">
                                        <span className="ffe-header__logout-button-label">
                                            Logg ut
                                        </span>
                                        <div
                                            className="ffe-header__logout-button-spinner"
                                            aria-hidden="true"
                                            aria-label="Logger deg ut"
                                        />
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <nav className="ffe-header__site-nav" role="navigation">
                            <ul className="ffe-header__list ffe-header__site-nav-list">
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Oversikt
                                    </a>
                                </li>
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Betaling
                                    </a>
                                </li>
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Kort
                                    </a>
                                </li>
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Lån
                                    </a>
                                </li>
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Sparing
                                    </a>
                                </li>
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Forsikring
                                    </a>
                                </li>
                                <li className="ffe-header__list-item">
                                    <a className="ffe-header__link" href="#">
                                        Kundeservice
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="lorem-ipsum">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin non lectus in quam iaculis molestie ut nec turpis.
                    Curabitur feugiat turpis dignissim ex scelerisque ultricies
                    in vitae est. Proin bibendum tellus leo, non vulputate elit
                    tempor sed. Cras efficitur justo nisi, non vehicula metus
                    faucibus ac. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus.
                </p>
            </div>
        </div>
    );
};
